import Card from "@/components/Card";
import { getAllSameFieldPosts } from "@/core/posts";
import { Icon } from "@iconify/react";
import Link from "next/link";

export default function Info() {
  return (
    <Card className="tags flex flex-col p-5 gap-2" key="tags" tip="Info">
      <div className="flex flex-row gap-1 items-center">
        <Icon icon="tabler:calendar" />
        <p>
          日期: <span>2023-09-01</span>
        </p>
      </div>
      <div className="flex flex-row gap-1 items-center">
        <Icon icon="tabler:pencil" />
        <p>
          字体: <a className="link" href="https://hyperos.mi.com/font/rare-word">MiSans</a>
        </p>
      </div>
      <div className="flex flex-row gap-1 items-center">
        <Icon icon="tabler:badge-cc" />
        <p>
          协议: <a className="link" href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans">
            CC 4.0
          </a>
        </p>
      </div>
    </Card>
  );
}
