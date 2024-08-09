import { getAllPosts } from "@/core/posts";
import Post from "@/interface/post";
import PostCard from "@/components/Cards/PostCard";

export default function Home() {
  return (
    <div className="posts flex flex-wrap w-[40%] gap-4 max-md:w-[90%]">
      {getAllPosts(["title", "slug", "date","tags","categories","cover","description"]).map((post: Post) => {
        return <PostCard {...post} key={post.slug} />
      })}
    </div>
  );
}
