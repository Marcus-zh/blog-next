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
  author?: author;
  copyright?: string;
  toc: Toc[];
  [prop: string]: string | string[] | number | boolean | Toc[] | author | undefined;
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