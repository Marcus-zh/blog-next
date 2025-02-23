"use client";
import Post from "@/interface/post";
import { Card } from "@nextui-org/card";
import { motion } from "framer-motion";

export default function Banner(post: Post) {
  return (
    <Card className="banner markdown h-[280px] group">
      <motion.img
        className="bg w-full h-full object-cover absolute m-0 z-0 blur-[2px] opacity-80"
        src={post.cover}
        whileHover={{ filter: "none", opacity: 1 }}
      />
      <div className="info z-10 w-full h-full flex flex-col justify-between">
        <div className="top bg-gradient-to-b from-black/20 dark:from-black/50 to-transparent">
          <div className="tags flex flex-row gap-2 px-1 m-4 group-hover:m-2 ease-in-out duration-100">
            {post.tags.map((tag) => (
              <div className="tag backdrop-blur-sm p-1 bg-white/20 rounded-md">
                <span className="text-white font-semibold">{tag}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bottom bg-gradient-to-t from-black/20 dark:from-black/50 to-transparent">
          <div className="title m-4 group-hover:m-2 ease-in-out duration-100">
            <motion.h1 className="m-0 text-white group-hover:text-4xl ease-in-out duration-100" >{post.title}</motion.h1>
          </div>
        </div>
      </div>
    </Card>
  );
}
