import { clsxm } from "@/utils/helper";

export default function Card({
  children,
  className = "",
  tip,
}: {
  children: React.ReactNode;
  className?: string;
  tip?: string;
}) {
  return (
    <div
      className={clsxm(
        className,
        tip ? "mt-5" : "",
        "flex rounded-2xl shadow-stone-300 dark:shadow-2xl backdrop-blur-lg opacity-90 bg-zinc-100 dark:bg-zinc-800"
      )}
    >
      {tip && (
        <span className="absolute top-[-23px] left-5 text-zinc-800 dark:text-zinc-600 text-sm">
          {tip}
        </span>
      )}
      {children}
    </div>
  );
}
