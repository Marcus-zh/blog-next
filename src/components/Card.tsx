import { clsxm } from "@/utils/helper";
import { Card as MCard } from "@nextui-org/card";
import { CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export default function Card({
  children,
  className = "",
  tip,
  hidden=false,
}: {
  children: React.ReactNode;
  className?: string;
  tip?: string;
  hidden?: boolean;
}) {
  return (
    // <div
    //   className={clsxm(
    //     className,
    //     tip ? "mt-5" : "",
    //     "flex rounded-2xl shadow-stone-300 dark:shadow-2xl backdrop-blur-lg opacity-90 bg-zinc-100 dark:bg-zinc-800"
    //   )}
    // >
    //   {tip && (
    //     <span className="absolute top-[-23px] left-5 text-zinc-800 dark:text-zinc-600 text-sm">
    //       {tip}
    //     </span>
    //   )}
    //   {children}
    // </div>
    <MCard className={clsxm("dark:bg-[#303030]",className,hidden?'!bg-transparent shadow-none border-none ':'')}>
      {tip && (
        <span className="absolute top-[-23px] left-5 text-zinc-800 dark:text-zinc-600 text-sm">
          {tip}
        </span>
      )}
      {children}
    </MCard>
  );
}
