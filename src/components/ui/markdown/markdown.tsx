'use client'

import { clsx } from 'clsx'
import type { MarkdownToJSX } from '@innei/markdown-to-jsx'
import { compiler, sanitizeUrl } from '@innei/markdown-to-jsx'
import Script from 'next/script'
import type React from 'react'
import type { FC, PropsWithChildren } from 'react'
import { Fragment, memo, Suspense, useMemo, useRef } from 'react'
import { isDev } from '@/utils/env'
import { Header } from '../heading'
import { ShikiHighLighterWrapper } from '../shiki/ShikiWrapper'
import { AlertsRule } from './parsers/alert'
import CodeBlock from '../shiki'

export interface MdProps {
  value?: string

  style?: React.CSSProperties
  readonly renderers?: Record<string, Partial<MarkdownToJSX.Rule>>
  wrapperProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
  codeBlockFully?: boolean
  className?: string
  as?: React.ElementType

  allowsScript?: boolean

  removeWrapper?: boolean
}

export const Markdown: FC<MdProps & MarkdownToJSX.Options & PropsWithChildren> =
  memo((props) => {
    const {
      value,
      renderers,
      style,
      wrapperProps = {},
      codeBlockFully = false,
      className,
      overrides,
      extendsRules,
      additionalParserRules,
      as: As = 'div',
      allowsScript = false,
      removeWrapper = false,

      ...rest
    } = props

    const ref = useRef<HTMLDivElement>(null)

    const node = useMemo(() => {
      const mdContent = value || props.children

      if (!mdContent) return null
      if (typeof mdContent != 'string') return null

      const mdElement = compiler(mdContent, {
        doNotProcessHtmlElements: ['tab', 'style', 'script'] as any[],
        wrapper: null,
        // @ts-ignore
        overrides: {
          // p: MParagraph,

          // thead: MTableHead,
          // tr: MTableRow,
          // tbody: MTableBody,
          // td: MTableTd,
          // table: MTable,
          // // FIXME: footer tag in raw html will renders not as expected, but footer tag in this markdown lib will wrapper as linkReferer footnotes
          // footer: MFootNote,
          // details: MDetails,
          img: <img />,
          // tag: MTag,

          // Tabs,

          // tab: Tab,

          // for custom react component
          // Tag: MTag,

          // LinkCard,
          // Gallery,
          script: allowsScript ? Script : undefined,

          ...overrides,
        },

        extendsRules: {
          heading: {
            react(node, output, state) {
              return (
                <Header id={node.id} level={node.level} key={state?.key}>
                  {output(node.content, state!)}
                </Header>
              )
            },
          },
          gfmTask: {
            react(node, _, state) {
              return (
                <input
                  type="checkbox"
                  key={state?.key}
                  checked={node.completed}
                  readOnly
                  className="!size-[1em]"
                />
              )
            },
          },

          // link: {
          //   react(node, output, state) {
          //     const { target, title } = node

          //     let realText = ''

          //     for (const child of node.content) {
          //       if (child.type === 'text') {
          //         realText += child.content
          //       }
          //     }

          //     return (
          //       <MLink
          //         href={sanitizeUrl(target)!}
          //         title={title}
          //         key={state?.key}
          //         text={realText}
          //       >
          //         {output(node.content, state!)}
          //       </MLink>
          //     )
          //   },
          // },

          codeFenced: {
            parse(capture /* , parse, state */) {
              return {
                content: capture[4],
                lang: capture[2] || undefined,
                type: 'codeBlock',

                attrs: capture[3],
              }
            },
          },
          codeBlock: {
            react(node, output, state) {
              return (
                <CodeBlock
                  key={state?.key}
                  content={node.content}
                  lang={node.lang}
                  attrs={node?.attrs}
                />
              )
            },
          },
          codeInline: {
            react(node, output, state) {
              return (
                <code
                  key={state?.key}
                  className="rounded-md bg-zinc-200 px-2 font-mono dark:bg-neutral-800"
                >
                  {node.content}
                </code>
              )
            },
          },

          // list: {
          //   react(node, output, state) {
          //     const Tag = node.ordered ? 'ol' : 'ul'

          //     return (
          //       <Tag key={state?.key} start={node.start}>
          //         {node.items.map((item: any, i: number) => {
          //           let className = ''
          //           if (item[0]?.type == 'gfmTask') {
          //             className = 'list-none flex items-center'
          //           }

          //           return (
          //             <li className={className} key={i}>
          //               {output(item, state!)}
          //             </li>
          //           )
          //         })}
          //       </Tag>
          //     )
          //   },
          // },

          ...extendsRules,
          ...renderers,
        },
        additionalParserRules: {
        //   spoilder: SpoilerRule,
        //   mention: MentionRule,

        //   mark: MarkRule,
        //   ins: InsertRule,
        //   kateX: KateXRule,
        //   kateXBlock: KateXBlockRule,
        //   container: ContainerRule,
          alerts: AlertsRule,

          ...additionalParserRules,
        },
        ...rest,
      })

      return mdElement
    }, [
      value,
      props.children,
      allowsScript,
      overrides,
      extendsRules,
      renderers,
      additionalParserRules,
      rest,
    ])

    if (removeWrapper) return <Suspense>{node}</Suspense>

    return (
      <Suspense>
        <As
          style={style}
          {...wrapperProps}
          ref={ref}
          className={clsx(
            // styles['md'],
            // codeBlockFully ? styles['code-fully'] : undefined,
            className,
          )}
        >
          {node}
        </As>
      </Suspense>
    )
  })
Markdown.displayName = 'Markdown'

export const MainMarkdown: FC<
  MdProps & MarkdownToJSX.Options & PropsWithChildren
> = (props) => {
  const { wrapperProps = {} } = props
  return (
    <Markdown
      as="main"
      {...props}
      wrapperProps={useMemo(
        () => ({
          ...wrapperProps,
        }),
        [wrapperProps],
      )}
    />
  )
}