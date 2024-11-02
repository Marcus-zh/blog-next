import { Suspense } from "react";
// import { ShikiHighLighter } from "./shiki";
import ShikiHighLighter from "./shiki/shiki";

export interface Props {
  lang: string | undefined;
  content: string;

  attrs?: string;
}
export default function CodeBlock(props: Props) {
  const content = () => {
    switch (props.lang?.toLowerCase()) {
      case "excalidraw":
        return <div>todo...</div>;
      case "latex":
        return <div>todo...</div>;
      default:
        const { lang } = props;
        const nextProps = { ...props };
        nextProps.content = formatCode(props.content);
        if (lang) {
          return <ShikiHighLighter {...nextProps} />;
        }
    }
  };
  return content();
}

// 格式化代码：去除多余的缩进。
// 多余的缩进：如果所有代码行中，开头都包括 n 个空格，那么开头的空格是多余的

function formatCode(code: string): string {
  const lines = code.split("\n");

  // 计算最小的共同缩进（忽略空行）
  let minIndent = Number.MAX_SAFE_INTEGER;
  lines.forEach((line) => {
    if (line.trim().length > 0) {
      // 忽略纯空格行
      const leadingSpaces = line.match(/^ */)?.[0].length;
      if (leadingSpaces === undefined) return;
      minIndent = Math.min(minIndent, leadingSpaces);
    }
  });

  // 如果所有行都不包含空格或者只有空行，则不做处理
  if (minIndent === Number.MAX_SAFE_INTEGER) return code;

  // 移除每行的共同最小缩进
  const formattedLines = lines.map((line) => {
    if (line.trim().length === 0) {
      // 如果是空行，则直接返回，避免移除空行的非空格字符（例如\t）
      return line;
    } else {
      return line.slice(Math.max(0, minIndent));
    }
  });

  return formattedLines.join("\n");
}
