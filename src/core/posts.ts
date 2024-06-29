import { join } from "path";
import fs from "fs";
import { cache } from "react";
import matter from "gray-matter";

export type Items = {
  [key: string]: string | string[] | Array<string> | Date | number | boolean;
};

const postsDirectory = join(process.cwd(), "article", "posts");

export const getPostSlugs = cache(() => {
  return fs.readdirSync(postsDirectory);
});

export const getPostBySlug = cache((slug: string, fields: string[] = []) => {
  const items: Items = {};
  if (slug == null) {
    return items;
  }
  const realSlug = slug.replace(/\.mdx?$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  if (!fs.existsSync(fullPath)) {
    return items;
  }
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  if (!data["description"]) {
    if (content.split(/<!--.*?more.*?-->/)[0]) {
      data["description"] = content.split(/<!--.*?more.*?-->/)[0];
    } else {
      data["description"] = content.slice(0, 200);
    }
  }
  for (const field of fields) {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  }

  return items;
});

// 获取所有文章的内容
export const getAllPosts = cache((fields: string[] = []) => {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug, fields));
  return posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
});

export const getAllSameFieldPosts = cache((limit: number = 0, field: string) => {
  const allPosts = getAllPosts([field, "slug"]);
  const fieldSlugMap = new Map<string, string[]>();

  allPosts.forEach((post) => {
    const fieldValues = post[field] as string[] | undefined;
    const slug = post.slug as string | undefined;

    if (fieldValues && slug) {
      fieldValues.forEach((value) => {
        if (typeof value === "string") {
          const slugs = fieldSlugMap.get(value) ?? [];
          fieldSlugMap.set(value, [...slugs, slug]);
        }
      });
    }
  });

  const sortedFields = Array.from(fieldSlugMap.entries()).sort(
    (a, b) => b[1].length - a[1].length
  );

  const limitedFields = limit > 0 ? sortedFields.slice(0, limit) : sortedFields;

  const fieldData = limitedFields.reduce<Record<string, string[]>>(
    (acc, [fieldValue, slugs]) => {
      acc[fieldValue] = slugs;
      return acc;
    },
    {}
  );

  return fieldData;
});

export const getPostByField = cache((field: string, searchValue: string) => {
  const allPosts = getAllSameFieldPosts(0, field);

  const post = Object.entries(allPosts).find(([key, fieldValue]) => {
    // 这里确保 key 与 searchValue 匹配
    if (key === searchValue) {
      return true;
    }
    return false;
  });

  return post ? post[1] : undefined;
});