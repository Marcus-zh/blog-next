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
  [prop: string]: string | string[] | number | boolean | undefined;
}
