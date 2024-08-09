import { getPostBySlug } from "@/core/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import * as Components from "@/components/Posts/Tags";
import Card from "@/components/Card";
export default function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { content } = getPostBySlug(decodeURIComponent(slug), ["content"]);

  return (
  <Card className="flex-wrap w-[40%]"><MDXRemote source={content} components={Components} /></Card>)
}
