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
  toc: Toc[];
  [prop: string]: string | string[] | number | boolean | Toc[] | undefined;
}

export interface Toc {
  depth: number;
  value: string;
  children: Toc[];
};