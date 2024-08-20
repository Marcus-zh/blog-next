import { type Toc } from "@/interface/post"
export default function Toc({ toc }: { toc: Toc[] | undefined }) {
  if (!toc) return null;
  toc.forEach((item) => {
    item
})
return <div className="toc">
</div>
}