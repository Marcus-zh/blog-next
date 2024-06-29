import { getPostByField } from "@/core/posts";

export default function Home() {
  const result = getPostByField('tags', '周年总结');
  console.log("Result:", result);
}
