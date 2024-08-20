import { Suspense } from "react";
import { evaluate, type EvaluateOptions } from "next-mdx-remote-client/rsc";
// import { remarkToc, type TocEntry } from "remark-better-toc/dist/esm";

import { useMDXComponents as Components } from "@/../mdx-components";
import { getPostBySlug } from "@/core/posts";
import Card from "@/components/Card";
import { AsideLeft, AsideRight } from "@/components/Aside";
import "@/styles/post.css";
import { Config } from "@/Config";
import Waline from "@/components/Posts/Comments";

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
  const source = post.content;
  type Scope = {
    // toc: TocEntry;
  };
  const options: EvaluateOptions<Scope> = {
    mdxOptions: {
      // remarkPlugins: [remarkToc],
    },
    vfileDataIntoScope: "toc",
  };
  const { content, scope, error } = await evaluate<Scope>({
    source,
    options,
  });
  console.log(scope);
  return (
    <>
      <AsideLeft types={Config.aside.posts.left} />
      <div className="post flex flex-col gap-4 w-[40%] max-md:w-[90%]">
        <Card className="flex-wrap w-full">
          <div className="cover w-full ">
            <img src={post.cover} className="rounded-t-2xl" />
          </div>
          <article className="p-5 flex flex-col gap-4 max-w-full">
            <Suspense>{content}</Suspense>
          </article>
        </Card>
        {Config.waline && <Waline {...Config.waline} path={"/posts/" + slug} />}
      </div>
      <AsideRight types={Config.aside.posts.right} post={post} />
    </>
  );
}
