import { getPostByField } from "@/core/posts";

export default function Home() {
  const result = getPostByField('tags', '总结');
  console.log("Result:", result);
}
