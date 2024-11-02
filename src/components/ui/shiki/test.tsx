import {
  forwardRef,
  PropsWithChildren,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { parseFilenameFromAttrs, parseShouldCollapsedFromAttrs } from "./utils";

interface Props {
  lang: string | undefined;
  content: string;

  attrs?: string;
  renderedHTML?: string;
}

export const ShikiWrapper = forwardRef<
  HTMLDivElement,
  PropsWithChildren<
    Props & {
      shouldCollapsed?: boolean;
    }
  >
>((props, ref) => {
  const { lang: language, content: value, attrs } = props;

  const [copied, setCopied] = useState(false);
  const copiedTimerRef = useRef<any>();
  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(value);
    setCopied(true);

    clearTimeout(copiedTimerRef.current);
    copiedTimerRef.current = setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [value]);

  const [codeBlockRef, setCodeBlockRef] = useState<HTMLDivElement | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  if (attrs && parseShouldCollapsedFromAttrs(attrs)) {
    setIsCollapsed(true);
  }
  const filename = parseFilenameFromAttrs(attrs || "");
  useImperativeHandle(ref, () => codeBlockRef!);
  useEffect(() => {
    const $el = codeBlockRef;
    if (!$el) return;

    const $elScrollHeight = $el.scrollHeight;
    if ($elScrollHeight > 300) {
      setIsCollapsed(true);

      const $hightlighted = $el.querySelector(".highlighted");
      if ($hightlighted) {
        const lineHeight = Number.parseInt(
          getComputedStyle($hightlighted).height || "0",
          10
        );
        const $code = $el.querySelector("pre > code")!;
        const childIndexInParent = Array.from($code.children).indexOf(
          $hightlighted
        );

        $el.scrollTop = lineHeight * childIndexInParent - $el.clientHeight / 2;
      }
    }
  }, [value, codeBlockRef]);

  return (
    <>
      <div
        onCopy={(e) => e.stopPropagation}
        ref={setCodeBlockRef}
        dangerouslySetInnerHTML={{__html: props.renderedHTML!}}
      >
        {props.children}
      </div>
    </>
  );
});
