import { MDXComponents } from "next-mdx-remote-client/rsc";
import * as Components from "./Components";
export const components: MDXComponents= {
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
    // code: ({className, ...properties}: {className: string})=> {
    //   const match = /language-(\w+)/.exec(className || '')
    //   return match
    //     ? <SyntaxHighlighter language={match[1]} PreTag="div" className="overflow-x-scroll" {...properties} />
    //     : <code className={className} {...properties} />
    // },
    ...Components,
  };