import { codeToHtml } from "shiki";
import {
  transformerMetaHighlight,
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { ShikiWrapper } from "./ShikiWrapper";
import { useEffect, useState } from "react";

export interface Props {
  lang: string | undefined;
  content: string;
}


export default function ShikiHighLighter(props: Props) {
  const { content, lang } = props;
  const [renderedHTML, setRenderedHTML] = useState<string>("");

  useEffect(() => {
    async function highlightCode() {
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
      setRenderedHTML(out);
    }

    highlightCode();
  }, [content, lang]);

  return <ShikiWrapper {...props} renderedHTML={renderedHTML} />;
}
