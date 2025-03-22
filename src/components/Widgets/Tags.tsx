import Card from "@/components/Card";
import { getAllSameFieldPosts } from "@/core/posts";
import { Icon } from "@iconify/react";
import Link from "next/link";

export function Tags() {
  const tags = getAllSameFieldPosts(0, "tags");

  return (
    <Card className="tags flex flex-col p-5 gap-4" key="tags" tip="Tags">
      <div className="flex flex-wrap gap-2">
        {tags &&
          Object.entries(tags).map(([tagName, posts], index) => (
            <div className="tag flex items-center gap-1" key={index}>
              <Icon icon="tabler:hash" />
              <Link href={`/tags/${tagName}`}>{tagName}</Link>
            </div>
          ))}
      </div>
      {/* <div className="more-tag flex justify-center p-4 bg-slate-300 rounded-2xl">
        <Link href="/tags">See all tags</Link>
      </div> */}
    </Card>
  );
}
