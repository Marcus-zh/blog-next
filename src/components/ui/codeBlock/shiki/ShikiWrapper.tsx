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
import { Icon } from "@iconify/react/dist/iconify.js";
import { isServerSide } from "@/utils/env";

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
  const { lang: language, content: value, attrs, shouldCollapsed } = props;

  // innei佬写的对
  const [copied, setCopied] = useState(false);
  const copiedTimerRef = useRef<any>(undefined);
  const handleCopy = useCallback(() => {
    if (isServerSide) return;
    navigator.clipboard.writeText(value);
    setCopied(true);

    clearTimeout(copiedTimerRef.current);
    copiedTimerRef.current = setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, [value]);

  const codeBlockRef = useRef<HTMLDivElement | null>(null);

  useImperativeHandle(ref, () => codeBlockRef.current!);

  const [isCollapsed, setIsCollapsed] = useState(shouldCollapsed);
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    if (!shouldCollapsed) {
      return;
    }
    const $el = codeBlockRef.current;

    if (!$el) return;
    const $elScrollHeight = $el.scrollHeight;

    if ($elScrollHeight >= 300) {
      setIsOverflow(true);

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
    } else {
      setIsOverflow(false);
    }
  }, [value, codeBlockRef]);

  const filename = parseFilenameFromAttrs(attrs || "");

  return (
    <div className="codeBlock flex gap-0 flex-col max-w-full overflow-hidden my-8">
      <div className="codeHeader w-full bg-[#282c34] flex items-center justify-between px-6 pt-2 rounded-t-lg">
        <div className="window-controls m-[2px] flex float-left gap-[10px]">
          <button className="w-[15px] h-[15px] rounded-full bg-[#ff5f5a] group flex items-center justify-center">
            <Icon
              icon="tabler:x"
              className="hidden text-white font-bold group-hover:block"
            />
          </button>
          <button className="w-[15px] h-[15px] rounded-full bg-[#ffbe2e] group flex items-center justify-center">
            <Icon
              icon="tabler:minus"
              className="hidden text-white font-bold group-hover:block"
            />
          </button>
          <button className="w-[15px] h-[15px] rounded-full bg-[#2aca44] group flex items-center justify-center"><Icon
              icon="tabler:arrows-diagonal"
              className="hidden text-white font-bold group-hover:block"
            /></button>
        </div>
        {filename && <span className="filename pr-8">{filename}</span>}
        <button onClick={handleCopy} className="copyButton w-[15px] h-[15px] text-[]">
          {copied ? (
            <Icon icon="tabler:copy-check" />
          ) : (
            <Icon icon="tabler:copy" />
          )}
        </button>
      </div>
      <div
        onCopy={(e) => e.stopPropagation}
        ref={codeBlockRef}
        className="scrollbar-hide overflow-x-auto overscroll-y-none relative before:content-[attr(data-lang)] before:absolute before:right-6 before:font-bold before:text-2xl before:opacity-60 hover:before:opacity-0 before:transition-transform-opacity"
        data-lang={language?.toLocaleUpperCase()}
        dangerouslySetInnerHTML={{ __html: props.renderedHTML! }}
      ></div>
    </div>
  );
});
