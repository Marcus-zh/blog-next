import { TocItem } from "remark-flexible-toc";

export default interface Post {
  title: string;
  slug: string;
  content: string;
  description?: string;
  keywords?: string;
  date: string;
  updated: string;
  tags: string[];
  categories: string[];
  cover: string;
  toc: TocItem[];
  [prop: string]: string | string[] | number | boolean | TocItem[] | undefined;
}
