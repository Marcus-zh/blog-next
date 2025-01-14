import { getPostBySlug } from "@/core/posts";
import Card from "@/components/Card";
import { AsideLeft, AsideRight } from "@/components/Aside";
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
      {/* <AsideLeft types={Config.aside.posts.left} /> */}
      <div className="post flex flex-col gap-5 w-[calc(40%+240px+1.25rem)] max-md:w-[90%]">
        <Card className="flex-wrap w-full" hidden={true}>
          <Markdown value={post.content} as="article" className="prose prose-zinc dark:prose-invert prose-lg p-5 prose-a:link prose-pre:rounded-t-none prose-pre:m-0 prose-pre:overscroll-none prose-pre:scrollbar-hide max-w-full prose-code:before:content-none prose-code:after:content-none prose-code:font-mono prose-code:bg-[gre]" />
        </Card>
        {Config.waline && <Waline {...Config.waline} path={"/posts/" + slug} />}
      </div>
      <AsideRight types={Config.aside.posts.right} post={post} />
    </>
  );
}
