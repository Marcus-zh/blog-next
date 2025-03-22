---
title: "Nextjs App router 博客试错记"
---
## 1.MDX文件渲染
### 8.12
首先在vercel官网看到了[Markdown and MDX](https://nextjs.org/docs/app/building-your-application/configuring/mdx)
就先试了试[@next/mdx](https://www.npmjs.com/package/@next/mdx)
然后发现不支持动态导入
继续翻文档,发现了[next-mdx-remote](https://github.com/hashicorp/next-mdx-remote#react-server-components-rsc--nextjs-app-directory-support),简直和[App router](https://nextjs.org/docs/app)完美搭配
但是,但我后面想用remark和rehype插件时,发现没地方导出插件的生成结果
好嘛,读文档,他说我[可能不需要`next-mdx-remote`](https://github.com/hashicorp/next-mdx-remote?tab=readme-ov-file#you-might-not-need-next-mdx-remote)
来嘛,试试就试试,结果发现`import * as runtime from 'react/jsx-runtime'`的runtime和

```ts
const { default: MDXContent } = await run(code, {
    ...runtime,
    baseUrl: import.meta.url,
  })
```
的runtime不一样,所以,我...(不知道怎么办了)
我就开始翻[Discussions](https://github.com/hashicorp/next-mdx-remote/discussions/438),翻到这篇
哦!原来还有[next-mdx-remote-client](https://github.com/ipikuka/next-mdx-remote-client)可以用啊!
于是好写了(错误页面和toc还没写)

```tsx [filename=page.tsx] {1,2}
import { Suspense } from "react";
import { evaluate, type EvaluateOptions } from "next-mdx-remote-client/rsc";
import remarkFlexibleToc, { type TocItem } from "remark-flexible-toc";
import { useMDXComponents as Components } from "@/../mdx-components";
import { getPostBySlug } from "@/core/posts";
import Card from "@/components/Card";
import "@/styles/post.css";
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
export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = getPostBySlug(decodeURIComponent(slug), [
    "content",
    "cover",
  ]);
  const source = post.content;
  type Scope = {
    toc: TocItem[];
  };
  const options: EvaluateOptions<Scope> = {
    mdxOptions: {
      remarkPlugins: [remarkFlexibleToc],
    },
    vfileDataIntoScope: "toc",
  };
  const { content, scope, error } = await evaluate<Scope>({
    source,
    options,
  });
  console.log(scope.toc)
  return (
    <Card className="flex-wrap w-[40%]">
      <div className="cover w-full ">
        {/*<img src={post.cover} className="rounded-t-2xl" />*/}
      </div>
      <article className="p-5 flex flex-col gap-4 max-w-full">
      <Suspense>
      {content}
    </Suspense>
      </article>
    </Card>
  );
}
```
``` bash
$ hexo new "My New Post"
```

嗯,这下可以了
### 8.26
嗯嗯嗯...
这玩意好像不支持rehype插件😓
一装上就渲染不出来
好嘛,想用[mdx-bundler](https://www.npmjs.com/package/mdx-bundler),却懒得改`async`了
又用回了`next-mdx-remote`

> [!tip]
> Highlights information that users should take into account, even when skimming.

111

> [!note]
> Highlights information that users should take into account, even when skimming.

111

> [!warning]
> Highlights information that users should take into account, even when skimming.

111

> [!error]
> Highlights information that users should take into account, even when skimming.