// import { TocItem } from "remark-flexible-toc";

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
  // toc: TocItem[];
  author?: author;
  copyright?: string;
  [prop: string]: string | string[] | number | boolean | author | undefined;
}

export interface author {
  name: string;
  email: string;
  link: string;
}

export interface Toc {
  depth: number;
  value: string;
  children: Toc[];
};