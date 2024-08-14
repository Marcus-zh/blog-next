---
title: Hello World
keywords: 'Hexo,first'
description: 'Welcome to Hexo! This is your very first post.'
abbrlink: HelloWord
date: 2022-08-09 18:00:00
updated: 2022-08-09 18:00:00
categories:
  - 网站公告
tags:
  - Hexo
cover: https://img.marcus233.top/i/24/03/65ed666e496dc.webp
tcolor: ffffff
---
Welcome to [Hexo](https://hexo.io/)! This is your very first post. Check [documentation](https://hexo.io/docs/) for more info. If you get any problems when using Hexo, you can find the answer in [troubleshooting](https://hexo.io/docs/troubleshooting.html) or you can ask me on [GitHub](https://github.com/hexojs/hexo/issues).

<!-- more -->

## Quick Start

### Create a new post

``` bash
$ hexo new "My New Post"
```

More info: [Writing](https://hexo.io/docs/writing.html)

### Run server

``` bash
$ hexo server
```

More info: [Server](https://hexo.io/docs/server.html)

### Generate static files

``` bash
$ hexo generate
```

More info: [Generating](https://hexo.io/docs/generating.html)

### Deploy to remote sites

``` bash
$ hexo deploy
```

More info: [Deployment](https://hexo.io/docs/one-command-deployment.html)

`1111222`

```ts
import { MDXRemote } from "next-mdx-remote/rsc";
import SyntaxHighlighter from 'react-syntax-highlighter'

import { getPostBySlug } from "@/core/posts";
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
  code: ({className, ...properties}: {className: string})=> {
    const match = /language-(\w+)/.exec(className || '')
    return match
      ? <SyntaxHighlighter language={match[1]} PreTag="div" {...properties} />
      : <code className={className} {...properties} />
  },
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
```

## The Main Heading

### Section

#### Subheading 1

#### Subheading 2