import Card from "@/components/Card";
import { Icon } from "@iconify/react/dist/iconify.js";

export function Search() {
  return (
    <Card className="search flex flex-col p-5" key="search">
      <form className="flex items-center">
        <a href="">
          <Icon icon="tabler:search" className="text-2xl" />
        </a>
        <input
          type="text"
          placeholder="搜..."
          className="w-[100%] bg-transparent border-none outline-none px-1"
        />
      </form>
    </Card>
  );
}
