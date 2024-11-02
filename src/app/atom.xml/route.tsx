import { Feed } from "feed";
import { type Category } from "feed/lib/typings";
import { cache } from "react";

import { Config } from "@/Config";
import { getAllPosts } from "@/core/posts";
import Post from "@/interface/post";
import { compiler, MarkdownToJSX } from "@innei/markdown-to-jsx";
import xss from "xss";

import { AlertsRule as __AlertsRule } from "@/components/ui/markdown/parsers/alert";
// import { ContainerRule as __ContainerRule } from '@/components/ui/markdown/parsers/container'
// import { InsertRule } from '@/components/ui/markdown/parsers/ins'
// import {
//   KateXBlockRule as __KateXBlockRule,
//   KateXRule as __KateXRule,
// } from '@/components/ui/markdown/parsers/katex'
// import { MarkRule } from '@/components/ui/markdown/parsers/mark'
// import { MentionRule } from '@/components/ui/markdown/parsers/mention'
// import { SpoilerRule } from '@/components/ui/markdown/parsers/spoiler'

const Author = {
  name: Config.info.author,
  email: Config.social.email,
  link: Config.info.siteUrl,
};

function getUrl(path?: string) {
  return new URL(path ?? "", Config.info.siteUrl).toString();
}
export async function GET() {
  const ReactDOM = (await import("react-dom/server")).default;
  const feed = new Feed({
    id: Config.info.siteUrl,
    title: Config.info.siteName,
    description: Config.info.description,
    updated: new Date(),
    link: Config.info.siteUrl,
    feedLinks: {
      atom: getUrl("atom.xml"),
    },
    language: "zh-CN",
    image: Config.info.avatar,
    favicon: Config.info.avatar,
    author: Author,
    copyright: Config.info.copyright,
    generator: Config.info.generator,
  });
  const data = getAllPosts([
    "title",
    "slug",
    "description",
    "date",
    "cover",
    "categories",
    "content"
  ]);
  data.forEach((post: Post) => {
    const render = () => {
      try {
        return ReactDOM.renderToString(
          <div>
            <blockquote>
              该渲染过滤了一些组件，可能存在排版问题，最佳体验请前往：
              <a href={`${xss(getUrl(`/posts/${post.slug}`))}`}>
                {xss(getUrl(`/posts/${post.slug}`))}
              </a>
            </blockquote>
            {compiler(post.content, {
              overrides: {
                LinkCard: NotSupportRender,
                Gallery: NotSupportRender,
                Tabs: NotSupportRender,
                Tab: NotSupportRender,
              },
              extendsRules: {
                codeBlock: {
                  react(node, output, state) {
                    if (
                      node.lang === "mermaid" ||
                      node.lang === "excalidraw" ||
                      node.lang === "component"
                    ) {
                      return <NotSupportRender />;
                    }
                    return (
                      <pre
                        key={state.key}
                        className={
                          node.lang
                            ? `language-${node.lang} lang-${node.lang}`
                            : ""
                        }
                      >
                        <code
                          className={
                            node.lang
                              ? `language-${node.lang} lang-${node.lang}`
                              : ""
                          }
                        >
                          {node.content}
                        </code>
                      </pre>
                    );
                  },
                },
              },
              additionalParserRules: {
                // spoilder: SpoilerRule,
                // mention: MentionRule,

                // mark: MarkRule,
                // ins: InsertRule,

                // kateX: KateXRule,
                // kateXBlock: KateXBlockRule,
                // container: ContainerRule,
                alerts: AlertsRule,
              },
            })}
            <p
              style={{
                textAlign: "right",
              }}
            >
              <a href={`${`${xss(getUrl(`/posts/${post.slug}`))}#comments`}`}>
                看完了？说点什么呢
              </a>
            </p>
          </div>
        );
      } catch {
        return ReactDOM.renderToString(
          <p>
            当前内容无法在 RSS 阅读器中正确渲染，请前往：
            <a href={`${xss(getUrl(`/posts/${post.slug}`))}`}>
              {xss(getUrl(`/posts/${post.slug}`))}
            </a>
          </p>
        );
      }
    };
    let categories: Category[] = [];
    post.categories.forEach((category, index) => {
      categories[index] = {
        term: category,
        scheme: getUrl(`/categories/${category}`),
        domain: Config.info.siteUrl,
      };
    });
    feed.addItem({
      title: post.title,
      id: post.slug,
      link: getUrl(`/posts/${post.slug}`),
      date: new Date(post.date),
      description: post.description||"",
      category: categories,
      image: post.cover,
      author: post.author
        ? [
            {
              name: post.author.name,
              email: post.author.email,
              link: post.author.link,
            },
          ]
        : [Author],
      published: new Date(post.date),
      copyright: post.copyright || Config.info.copyright,
      content: render(),
    });
  });
  return new Response(feed.atom1(), {
    headers: {
      "content-type": "application/xml",
      "Cache-Control": "max-age=60, s-maxage=86400",
      "CDN-Cache-Control": "max-age=86400",
      "Cloudflare-CDN-Cache-Control": "max-age=86400",
      "Vercel-CDN-Cache-Control": "max-age=86400",
    },
  });
}

const NotSupportRender = () => {
  throw new Error("Not support render in RSS");
};
// const KateXRule: MarkdownToJSX.Rule = {
//   ...__KateXRule,
//   react(node, _, state?) {
//     return <NotSupportRender key={state?.key} />
//   },
// }
// const KateXBlockRule: MarkdownToJSX.Rule = {
//   ...__KateXBlockRule,
//   react(node, _, state?) {
//     return <NotSupportRender key={state?.key} />
//   },
// }

const AlertsRule: MarkdownToJSX.Rule = {
  ...__AlertsRule,
  react(node, output, state) {
    return <NotSupportRender key={state?.key} />;
  },
};

// const ContainerRule: MarkdownToJSX.Rule = {
//   ...__ContainerRule,
//   // @ts-ignore
//   react(node, _, state) {
//     return <NotSupportRender key={state?.key} />
//   },
// }
