import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";

export default function Blogs() {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="flex flex-col gap-y-10 my-8 px-4 md:px-12">
      {loading ? (
        <div className="min-h-[80vh] flex justify-center items-center">
          <p className="text-center font-bold text-3xl text-blue-600">Loading...</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="min-h-[80vh] flex justify-center items-center">
          <p className="text-center font-bold text-3xl text-red-500">No Blogs Found!</p>
        </div>
      ) : (
        posts.map((post) => <BlogDetails key={post.id} post={post} />)
      )}
    </div>
  );
}
