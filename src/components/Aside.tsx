import Info from "./Widgets/Info";
import Logo from "./Widgets/Logo";
import Search from "./Widgets/Search";
import Tags from "./Widgets/Tags";

export function AsideLeft() {
  return (
    <>
      <aside className="w-[240px] max-sm:hidden">
        <div className="widgets flex flex-col justify-center gap-4">
          <Logo />
          <Search />
          <Tags />
        </div>
      </aside>
      {/* <div className="md:hidden bottom-4 right-4 w-10 h-10 bg-slate-300 z-[100] sticky">
      <button>

      </button></div> */}
    </>
  );
}

export function AsideRight() {
  return (
    <aside className="w-[240px] max-md:hidden">
      <div className="widgets flex flex-col justify-center gap-4">
        <Info />
      </div>
    </aside>
  );
}
