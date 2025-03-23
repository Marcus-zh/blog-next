import { cn } from "@/utils/helper";
import { Card as MCard } from "@heroui/card";

export default function Card({
  children,
  className = "",
  tip,
  hidden = false,
  markdown = false,
}: {
  children: React.ReactNode;
  className?: string;
  tip?: string;
  hidden?: boolean;
  markdown?: boolean;
}) {
  return (
    <MCard
      className={cn(
        "dark:bg-[#303030]",
        className,
        hidden ? "!bg-transparent shadow-none border-none " : "",
        markdown ? "markdown" : ""
      )}
    >
      {children}
    </MCard>
  );
}
