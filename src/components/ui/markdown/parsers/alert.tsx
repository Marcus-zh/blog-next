import clsx from "clsx";
import type { MarkdownToJSX } from "@innei/markdown-to-jsx";
import { blockRegex, Priority } from "@innei/markdown-to-jsx";
import type { FC } from "react";

import { Markdown } from "../markdown";
import { Icon } from "@iconify/react";
import { cn } from "@/utils/helper";

const typeMap: {
  [key: string]: { text: string; border: string; icon: string };
} = {
  tip: {
    text: "text-green-500 dark:text-green-400",
    border: "before:border-green-500 dark:before:border-green-400",
    icon: "tabler:info-circle-filled",
  },
  note: {
    text: "text-blue-500 dark:text-blue-400",
    border: "before:border-blue-500 dark:before:border-blue-400",
    icon: "tabler:bookmark-filled",
  },
  warning: {
    text: "text-amber-500 dark:text-amber-400",
    border: "before:border-amber-500 dark:before:border-amber-400",
    icon: "tabler:alert-triangle-filled",
  },
  error: {
    text: "text-red-500 dark:text-red-400",
    border: "before:border-red-500 dark:before:border-red-400",
    icon: "tabler:alert-circle-filled",
  },
};

export const AlertIcon: FC<{
  type: string;
}> = ({ type }) => {
  const finalType = type || "NOTE";
  const icon = typeMap[finalType].icon || typeMap.tip.icon;
  const typePrefix = finalType.toUpperCase();

  return (
    <span
      className={cn(
        "text-semibold mb-1 inline-flex items-center",
        typeMap[finalType].text
      )}
    >
      <Icon
        className={cn(`shrink-0 text-3xl md:mr-2 md:self-start md:text-left`)}
        icon={icon}
      />

      {typePrefix}
    </span>
  );
};

/**
 *
 * > [!NOTE]
 * > Highlights information that users should take into account, even when skimming.
 */
const ALERT_BLOCKQUOTE_R =
  // @ts-ignore
  /^(> \[!(?<type>tip|note|warning|error)\].*)(?<body>(?:\n *>.*)*)(?=\n{2,}|$)/;

export const AlertsRule: MarkdownToJSX.Rule = {
  match: blockRegex(ALERT_BLOCKQUOTE_R),
  order: Priority.HIGH,
  parse(capture) {
    return {
      raw: capture[0],
      parsed: {
        ...capture.groups,
      },
    };
  },
  react(node, output, state) {
    const { type, body }: { type: string; body: string } = node.parsed;
    const bodyClean = body.replaceAll(/^> */gm, "");

    return (
      <blockquote
        className={clsx(typeMap[type].border, "not-italic")}
        key={state.key}
      >
        <AlertIcon type={type} />
        <br />

        <Markdown
          allowsScript
          className="not-prose w-full [&>p:first-child]:mt-0"
        >
          {bodyClean}
        </Markdown>
      </blockquote>
    );
  },
};
