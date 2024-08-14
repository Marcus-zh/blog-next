import type { MDXComponents } from 'mdx/types'
import SyntaxHighlighter from 'react-syntax-highlighter'
import Image, { ImageProps } from 'next/image'

import * as Components from "@/components/Posts/Tags";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
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
        ? <SyntaxHighlighter language={match[1]} PreTag="div" className="overflow-x-scroll" {...properties} />
        : <code className={className} {...properties} />
    },
    ...Components,
  }
}