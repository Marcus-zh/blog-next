import { codeToHtml } from "shiki";
import {
  transformerMetaHighlight,
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { ShikiWrapper } from "./ShikiWrapper";

export interface Props {
  lang: string | undefined;
  content: string;
}


export default async function ShikiHighLighter(props: Props) {
  const { content, lang } = props;
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

  return <ShikiWrapper {...props} renderedHTML={out} />;
}
