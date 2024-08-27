import { Feed } from "feed";
import { type Category } from "feed/lib/typings";
import { cache } from "react";

import { Config } from "@/Config";
import { getAllPosts } from "@/core/posts";
import Post from "@/interface/post";

function getUrl(path?: string) {
  return new URL(path ?? "", Config.info.siteUrl).toString();
}
export const GET = cache(() => {
  const feed = new Feed({
    id: Config.info.siteUrl,
    title: Config.info.siteName,
    description: Config.info.description,
    updated: new Date(),
    link: Config.info.siteUrl,
    feedLinks: {
      atom: getUrl("atom.xml"),
    },
    language: "zh-CN",
    image: Config.info.avatar,
    favicon: Config.info.avatar,
    author: {
      name: Config.info.author,
      email: Config.social.email,
      link: Config.info.siteUrl,
    },
    copyright: Config.info.copyright,
    generator: Config.info.generator,
  });
  const data = getAllPosts([
    "title",
    "slug",
    "description",
    "date",
    "cover",
    "categories",
  ]);
  data.forEach((post: Post) => {
    let categories: Category[] = [];
    post.categories.forEach((category, index) => {
      categories[index] = {
        term: category,
        scheme: getUrl(`/categories/${category}`),
        domain: Config.info.siteUrl,
      };
    });
    feed.addItem({
      title: post.title,
      id: getUrl(`/posts/${post.slug}`),
      link: getUrl(`/posts/${post.slug}`),
      date: new Date(post.date),
      description: post.description ?? "",
      category: categories,
      image: post.cover,
      author: post.author
        ? [
            {
              name: post.author.name,
              email: post.author.email,
              link: post.author.link,
            },
          ]
        : [
            {
              name: Config.info.author,
              email: Config.social.email,
              link: Config.social.github,
            },
          ],
      published: new Date(post.date),
      copyright: post.copyright || Config.info.copyright,
      content: post.content,
    });
  });
  return new Response(feed.atom1(), {
    headers: {
      "content-type": "application/xml",
    },
  });
});
