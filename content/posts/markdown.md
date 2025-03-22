---
title: "Markdown渲染"
---
## Markdown渲染
<!-- # 一级标题(不用) -->
## 标题

### 三级标题

#### 四级标题

##### ~~五级标题~~(一般不用)

###### ~~六级标题~~(一般不用)

## 行内样式

**加粗**

*斜体*

`行内代码`

~~删除线~~

## 链接

[Redish101](https://redish101.top)

https://redish101.top

<https://redish101.top>

GH@Redish101

## 图片

![logo](/avatar.png)

## 列表

### 有序列表

1. 第一行
2. 第二行
3. 第三行
   1. 第四行
   2. 第五行
4. 最后行

### 无序列表

- 第一行
- 第二行
- 第三行
  - 第四行
  - 第五行
- 最后行

## 引用

[Redish101](https://redish101.top)曾经说过

> 笨蛋马库斯

## 代码块

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

## 分割线

---

***

___

## 扩展语法

> [!tip]
> 小贴士

中间要有内容

> [!note]
> 便签

中间要有内容

> [!warning]
> 最好不要这样做

中间要有内容

> [!error]
> 哒咩哒咩!!