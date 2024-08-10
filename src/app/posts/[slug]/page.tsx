import { getPostBySlug } from "@/core/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import * as Components from "@/components/Posts/Tags";
import Card from "@/components/Card";
import "@/styles/post.css"

const components = {
  h2: (props: any) => (
    <h2
      {...props}
      id={props.children.replace(/ /g, "-").toLowerCase()}
    >
      {props.children}
      <a
        href={`#${props.children.replace(/ /g, "-").toLowerCase()}`}
      >
        #
      </a>
    </h2>
  ),
  p: (props: any) => (
    <p {...props}>
      {props.children}
    </p>
  ),
  a: (props: any) => (
    <a {...props} className="link" />
  ),
  code: (props: any) => (
    <code {...props} />
  ),
  pre: (props: any) => (
    <pre {...props} />
  ),
  ...Components,
};
export function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { title, description } = getPostBySlug(decodeURIComponent(slug), [
    "title",
    "description",
  ]);
  return {
    title: `${title} - Marcus`,
    description: description,
  };
}

export default function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { content, cover } = getPostBySlug(decodeURIComponent(slug), [
    "content",
    "cover",
  ]);

  return (
    <Card className="flex-wrap w-[40%]">
      <div className="cover w-full ">
        <img src={cover} className="rounded-t-2xl" />
      </div>
      <article className="p-5 flex flex-col gap-4">
        <MDXRemote source={content} components={components} />
      </article>
    </Card>
  );
}
