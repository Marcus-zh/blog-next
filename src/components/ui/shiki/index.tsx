import { Suspense } from "react";
// import { ShikiHighLighter } from "./shiki";
import ShikiWrapper from "./test/shiki";

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
        return <ShikiWrapper {...props} />;
    }
  };
  return(
    <Suspense>
      {content()}
    </Suspense>
  )
}
