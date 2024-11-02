import { codeToHtml } from "shiki";
import {
  transformerMetaHighlight,
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from '@shikijs/transformers'

export interface Props {
  lang: string | undefined;
  content: string;

  attrs?: string;
}

export default async function ShikiWrapper(props: Props) {
  const { attrs, content, lang } = props;
  const out = await codeToHtml(content, {
    lang: lang || "plaintext",
    theme: "one-dark-pro",
    transformers: [
      transformerNotationDiff(),
      transformerNotationHighlight(),
      transformerNotationWordHighlight(),
      transformerMetaHighlight(),
    ],
  });

  return <div dangerouslySetInnerHTML={{__html: out}}/>;
}
