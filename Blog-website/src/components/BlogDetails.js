import React from 'react'
import { NavLink } from 'react-router-dom'

function BlogDetails({ post }) {
  return (
    <div className="mt-12 p-6 bg-white shadow-lg rounded-lg">
      <NavLink to={`/blog/${post.id}`} className="text-2xl font-bold text-blue-600 hover:underline">
        {post.title}
      </NavLink>
      
      <p className="text-gray-600 mt-2">
        By <span className="font-semibold text-gray-800">{post.author}</span> on{" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`} className="text-blue-500 hover:underline">
          {post.category}
        </NavLink>
      </p>
      
      <p className="text-gray-500 text-sm mt-1">Posted on {post.date}</p>
      
      <p className="mt-4 text-gray-700">{post.content}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {post.tags.map((tag, index) => (
          <NavLink
            key={index}
            to={`/tags/${tag.replaceAll(" ", "-")}`}
            className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm hover:bg-blue-200"
          >
            #{tag}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default BlogDetails
