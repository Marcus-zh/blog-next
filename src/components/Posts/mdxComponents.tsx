import { MDXComponents } from "next-mdx-remote-client/rsc";
import * as Components from "./Components";
import Link from "next/link";
// import { codeToHtml } from "shiki";
// import { transformerTwoslash } from "@shikijs/twoslash";

export const components: MDXComponents = {
  h2: (props) => (
    <h2
      {...props}
      id={
        (props.children &&
          props.children.toString().replace(/ /g, "-").toLowerCase()) ||
        undefined
      }
    >
      {props.children}
      <Link
        href={`#${
          props.children &&
          props.children.toString().replace(/ /g, "-").toLowerCase()
        }`}
        scroll={false}
      >
        #
      </Link>
    </h2>
  ),
  p: (props) => <p {...props}>{props.children}</p>,
  a: (props) => {
    const href = props.href || "";
    return href && href.startsWith("http") ? (
      <a {...props} className="link" />
    ) : (
      <Link className="link" href={href} />
    );
  },
  pre: (props) => {
    return (
      <figure>
        <div className="codeblock-header">
          <div className="operations">
            <button>复制</button>
          </div>
        </div>

        {/* <figcaption v-if="filename">
            {{ filename }}
        </figcaption> */}

        {/* <span className="language">{ }</span> */}
        <pre
          {...props}
          className={`${props.className} code-block-pre scrollbar-hide`}
        >
          {props.children}
        </pre>
      </figure>
    );
  },
  code: (props) => {
    if (props.className && props.className.includes("language-")) {
      return (
        <code
          {...props}
          className={`${props.className} code-block`}
          data-lang={props.className.replace("language-", "")}
        />
      );
    } else return <code {...props} className="code-inline" />;
  },
  ...Components,
};
