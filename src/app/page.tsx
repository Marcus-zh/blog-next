import { getAllPosts } from "@/core/posts";
import Post from "@/interface/post";
import PostCard from "@/components/Cards/PostCard";
import { AsideLeft, AsideRight } from "@/components/Aside";
import { Config } from "@/Config";

export default function Home() {
  return (
    <>
      <AsideLeft types={Config.aside.home.left} />
      <div className="posts flex flex-wrap w-[40%] gap-5 max-md:w-[90%]">
        {getAllPosts([
          "title",
          "slug",
          "date",
          "tags",
          "categories",
          "cover",
          "description",
        ]).map((post: Post) => {
          return <PostCard {...post} key={post.slug} />;
        })}
      </div>
      <AsideRight types={Config.aside.home.right} />
    </>
  );
}
