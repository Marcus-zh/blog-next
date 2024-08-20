import { join } from "path";
import fs from "fs";
import { cache } from "react";
import matter from "gray-matter";

import Post, { Toc } from "@/interface/post";
import { formatDate } from "@/utils/format";

interface Item {
  [key: string]: string[];
}

export const postsDirectory = join(process.cwd(), "article", "posts");

export const getPostSlugs = cache(() => {
  return fs.readdirSync(postsDirectory);
});

export const getPostBySlug = cache((slug: string, fields: string[] = []) => {
  const postData: Post = {
    title: "",
    slug: "",
    content: "",
    date: "",
    updated: "",
    tags: [],
    categories: [],
    cover: "",
    toc: [],
  };

  if (!slug) {
    throw new Error("slug is required");
  }

  const realSlug = slug.endsWith("md")? slug : slug+".md";
  const fullPath = join(postsDirectory, realSlug);

  if (!fs.existsSync(fullPath)) {
    console.log(fullPath);
    throw new Error("No such file");
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const fileStats = fs.statSync(fullPath);
  const { data, content } = matter(fileContents);

  // format
  data.description = data.description || content.split(/<!--.*?more.*?-->/)[0] || content.slice(0, 200);
  data.date = formatDate(data.date||fileStats.birthtime.toISOString());
  data.updated = formatDate(data.updated||fileStats.mtime.toISOString());


  fields.forEach((field) => {
    if (field === "slug") {
      postData[field] = slug;
    }
    if (field === "content") {
      postData[field] = content.replace(/<!--.*?more.*?-->/,"");
    }
    if (typeof data[field] !== "undefined") {
      postData[field] = data[field];
    }
  });

  return postData;
});

// 获取所有文章的内容
export const getAllPosts = cache((fields: string[] = []) => {
  const slugs = getPostSlugs();
  const posts: Post[] = slugs.map((slug) => getPostBySlug(slug.replace(".md",""), fields));
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
});

export const getAllSameFieldPosts = cache(
  (limit: number = 0, field: string) => {
    const allPosts: Post[] = getAllPosts([field, "slug"]);
    const fieldSlugMap: Item = {};

    allPosts.forEach((post) => {
      let fieldValues = post[field];

      if (typeof fieldValues === "string" || typeof fieldValues === "number") {
        fieldValues = [fieldValues.toString()];
      } else if (!Array.isArray(fieldValues)) {
        return;
      }

      fieldValues.forEach((value) => {
        if (typeof value === "string") {
          if (!fieldSlugMap[value]) {
            fieldSlugMap[value] = [];
          }
          fieldSlugMap[value].push(post.slug);
        }
      });
    });

    const sortedFields = Object.entries(fieldSlugMap).sort(
      (a, b) => b[1].length - a[1].length
    );

    const limitedFields =
      limit > 0 ? sortedFields.slice(0, limit) : sortedFields;

    const fieldData: Item = limitedFields.reduce<Item>(
      (acc, [fieldValue, slugs]) => {
        acc[fieldValue] = slugs;
        return acc;
      },
      {}
    );

    return fieldData;
  }
);

export const getPostByField = cache((field: string, searchValue: string) => {
  const allPosts: Item = getAllSameFieldPosts(0, field);

  const post = Object.entries(allPosts).find(([key]) => key === searchValue);

  return post ? post[1] : undefined;
});

