import { TocItem } from "remark-flexible-toc";
import Info from "./Widgets/Info";
import Logo from "./Widgets/Logo";
import Search from "./Widgets/Search";
import Tags from "./Widgets/Tags";
import Toc from "./Widgets/Toc";
import Post from "@/interface/post";

interface AsideProps {
  types: string[];
  post?: Post;
}

export function AsideLeft({ types, post }: AsideProps) {
  return (
    <>
      <aside className="w-[240px] max-sm:hidden">
        <div className="widgets flex flex-col justify-center gap-4">
          {types.map((item) => (
            <AsideWidgets key={item} item={item} post={post} />
          ))}
        </div>
      </aside>
      {/* <div className="md:hidden bottom-4 right-4 w-10 h-10 bg-slate-300 z-[100] sticky">
      <button>

      </button></div> */}
    </>
  );
}

export function AsideRight({ types, post }: AsideProps) {
  return (
    <aside className="w-[240px] max-md:hidden">
      <div className="widgets flex flex-col justify-center gap-4">
        {types.map((item) => (
          <AsideWidgets key={item} item={item} post={post} />
        ))}
      </div>
    </aside>
  );
}

function AsideWidgets({
  key,
  item,
  post,
}: {
  key: string;
  item: string;
  post?: Post;
}) {
  switch (item) {
    case "Logo":
      return <Logo key={key} />;
    case "Search":
      return <Search key={key} />;
    case "Tags":
      return <Tags key={key} />;
    case "Toc":
      if (post){
        return <Toc key={key} toc={post.toc} />;
      }
  }
}
