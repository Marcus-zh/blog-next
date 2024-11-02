import { getPostBySlug } from "@/core/posts";
import Card from "@/components/Card";
import { AsideLeft, AsideRight } from "@/components/Aside";
import "@/styles/post.css";
import { Config } from "@/Config";
import Waline from "@/components/Posts/Comments";
import { Markdown } from "@/components/ui/markdown/markdown";

export function generateMetadata({ params }: { params: { slug: string } }) {
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

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  let post = getPostBySlug(decodeURIComponent(slug), [
    "content",
    "cover",
    "toc",
  ]);
  return (
    <>
      <AsideLeft types={Config.aside.posts.left} />
      <div className="post flex flex-col gap-5 w-[40%] max-md:w-[90%]">
        <Card className="flex-wrap w-full">
          <Markdown value={post.content} as="article" className="p-5"/>
        </Card>
        {Config.waline && <Waline {...Config.waline} path={"/posts/" + slug} />}
      </div>
      <AsideRight types={Config.aside.posts.right} post={post} />
    </>
  );
}
