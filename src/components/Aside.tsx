import { Info, Logo, Search, Tags } from "@/components/Widgets";
import Post from "@/interface/post";

interface AsideProps {
  types: string[];
  post?: Post;
}

export function AsideLeft({ types, post }: AsideProps) {
  return (
    <>
      <aside className="w-[240px] max-sm:hidden">
        <div className="widgets flex flex-col justify-center gap-5">
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
      <div className="widgets flex flex-col justify-center gap-5">
        {types.map((item) => (
          <AsideWidgets key={item} item={item} post={post} />
        ))}
      </div>
    </aside>
  );
}

function AsideWidgets({ item, post }: { item: string; post?: Post }) {
  switch (item) {
    case "Logo":
      return <Logo />;
    case "Search":
      return <Search />;
    case "Tags":
      return <Tags />;
    case "Info":
      return <Info />;
    // case "Toc":
    //   if (post) {
    //     return <Toc toc={post.toc} />;
    //   }
  }
}
