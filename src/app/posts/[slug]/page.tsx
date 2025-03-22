import { getPostBySlug } from "@/core/posts";
import Card from "@/components/Card";
import { AsideLeft, AsideRight } from "@/components/Aside";
import { Config } from "@/Config";
import Waline from "@/components/Posts/Comments";
import { Markdown } from "@/components/ui/markdown/markdown";
import { motion } from "framer-motion";
import Banner from "@/components/Posts/Banner";

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const { slug } = params;
  const { title, description } = getPostBySlug(decodeURIComponent(slug), [
    "title",
    "description",
  ]);
  return {
    title: `${title} - ${Config.info.siteName}`,
    description: description,
  };
}

export default async function Post(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const { slug } = params;
  let post = getPostBySlug(decodeURIComponent(slug), [
    "title",
    "tags",
    "categories",
    "content",
    "cover",
    "toc",
  ]);
  return (
    <>
      {/* <AsideLeft types={Config.aside.posts.left} /> */}
      <div className="post flex flex-col gap-5 w-[calc(40%+240px+1.25rem)] max-md:w-[90%]">
        {/* TODO */}
        <Banner {...post} />
        <Card className="flex-wrap w-full" hidden={true}>
          <Markdown value={post.content} as="article" className="markdown" />
        </Card>
        {Config.waline && <Waline {...Config.waline} path={"/posts/" + slug} />}
      </div>
      <AsideRight types={Config.aside.posts.right} post={post} />
    </>
  );
}
