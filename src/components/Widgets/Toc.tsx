import { TocItem } from "remark-flexible-toc";

export default function Toc({ toc }: { toc: TocItem[] | undefined }) {
  if (!toc) return null;
  toc.forEach((item) => {
    item
})
return <div className="toc">
</div>
}