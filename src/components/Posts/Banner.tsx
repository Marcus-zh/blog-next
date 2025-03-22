"use client";
import Post from "@/interface/post";
import { cn } from "@/utils/helper";
import Card from "@/components/Card";
import { motion } from "framer-motion";

export default function Banner(post: Post) {
  return (
    <Card
      className={cn(
        "banner markdown group",
        post.cover ? "h-[280px]" : "h-[200px]"
      )}
    >
      {post.cover && (
        <motion.img
          className={cn(
            "bg w-full h-full object-cover absolute m-0 z-0",
            "blur-[2px] opacity-80"
          )}
          src={post.cover}
          whileHover={{ filter: "none", opacity: 1 }}
        />
      )}
      <div className="info z-10 w-full h-full flex flex-col justify-between">
        <div
          className={cn(
            "top",
            post.cover &&
              "bg-gradient-to-b from-black/20 dark:from-black/50 to-transparent"
          )}
        >
          <div className="tags flex flex-row gap-2 px-1 m-4 group-hover:m-2 ease-in-out duration-100">
            {post.tags.map((tag) => (
              <div
                className={cn(
                  "tag backdrop-blur-sm p-1 rounded-lg",
                  post.cover ? "bg-white/20" : "bg-black/10 dark:bg-white/20"
                )}
                key={tag}
              >
                <span className="dark:text-white font-semibold">{tag}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          className={cn(
            "bottom",
            post.cover &&
              "bg-gradient-to-t from-black/20 dark:from-black/50 to-transparent"
          )}
        >
          <div className="title m-4 group-hover:m-2 ease-in-out duration-100">
            <motion.h1 className="m-0 dark:text-white group-hover:text-4xl ease-in-out duration-100">
              {post.title}
            </motion.h1>
          </div>
        </div>
      </div>
    </Card>
  );
}
