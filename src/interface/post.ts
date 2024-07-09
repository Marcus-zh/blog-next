export default interface Post {
  title: string;
  slug: string;
  content: string;
  description?: string;
  keywords?: string;
  date: Date;
  updated: Date;
  tags: string[];
  categories: string[];
  cover: string;
  [prop: string]: string | string[]  | Date | number | boolean | undefined;
}
