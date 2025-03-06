import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import BlogDetails from "../components/BlogDetails";

const BlogPage = () => {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { setLoading, loading } = useContext(AppContext);

  const blogId = location.pathname.split("/").at(-1);

  async function fetchRelatedBlogs() {
    setLoading(true);
    const url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    
    try {
      const res = await fetch(url);
      const data = await res.json();

      if (!data.blog) throw new Error("Blog not found");
      
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs || []);
    } catch (error) {
      console.error("Error fetching blog:", error);
      setBlog(null);
      setRelatedBlogs([]);
    }
    
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs();
    }
  }, [blogId]); // Optimized dependency

  return (
    <div className="min-h-screen px-4">
      <Header />
      
      {/* Back Button */}
      <div className="my-4">
        <button
          onClick={() => navigate(-1)}
          className="border px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
        >
          Back
        </button>
      </div>

      {/* Blog Content */}
      {loading ? (
        <div className="text-center text-xl font-bold">Loading...</div>
      ) : blog ? (
        <div className="space-y-6">
          <BlogDetails post={blog} />
          
          {/* Related Blogs Section */}
          {relatedBlogs.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-3">Related Blogs</h2>
              <div className="space-y-4">
                {relatedBlogs.map((post) => (
                  <BlogDetails key={post.id} post={post} />
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="text-center text-xl font-bold">No Blog Found</div>
      )}
    </div>
  );
};

export default BlogPage;
