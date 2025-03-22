import Post from "@/interface/post";
import Card from "../Card";
import { formatTime } from "@/utils/format";
import Link from "next/link";
import { clsxm } from "@/utils/helper";

export default function PostCard({
  title,
  slug,
  date,
  categories,
  // tags,
  cover,
  description,
}: Post) {
  return (
    <Card className="w-[100%] h-40">
      <article className="flex flex-row justify-center items-center w-full h-full">
        <div
          className={clsxm(
            "info",
            cover ? "w-[60%]" : "w-full",
            " h-[100%] flex flex-col justify-between p-4"
          )}
        >
          <div className="info-top flex flex-col gap-1 justify-start">
            <div className="categories flex flex-row p-0 gap-1">
              {categories.map((category) => (
                <Link href={`/categories/${category}`} key={category}>
                  <span
                    key={category}
                    className="category text-blue-700 dark:text-blue-300 text-base"
                    title={category}
                  >{`# ${category}`}</span>
                </Link>
              ))}
            </div>
            <Link href={`/posts/${slug}`}>
              <h2
                className="title text-3xl font-bold m-0 line-clamp-2 overflow-hidden"
                title={title}
              >
                {title}
              </h2>
            </Link>
          </div>
          <div className="flex flex-row">
            <span className="text-sm" title={`创建于 ${date}`}>
              {formatTime(date)}
            </span>
          </div>
        </div>
        {cover && (
          <div className="cover w-[40%] h-[100%] relative top-0 right-0 ">
            <Link href={`/posts/${slug}`}>
              <img
                className="cover-img w-[100%] h-[100%] object-cover rounded-r-2xl"
                src={cover}
                alt={title}
                title={description}
              ></img>
            </Link>
          </div>
        )}
        {/* <div className="tags absolute top-4 left-4 flex flex-row gap-4" style={{display: "none"}}>
        {tags.map((tag) => (
          <Link
            key={tag}
            className="atg px-3 py-2 bg-white bg-opacity-20 rounded-3xl text-base font-semibold text-gray-200 backdrop-blur-lg"
            href={`/tags/${tag}`}
          >
            {tag}
          </Link>
        ))}
      </div> */}
      </article>
    </Card>
  );
}
