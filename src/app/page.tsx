import { getPostByField } from "@/core/posts";

export default function Home() {
  const result = getPostByField('tags', 'Hexo');
  console.log("Result:", result);
}
