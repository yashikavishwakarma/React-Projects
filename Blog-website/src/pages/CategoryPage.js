import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const CategoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);

  return (
    <div className="min-h-screen px-4">
      <Header />

      {/* Back Button & Title */}
      <div className="my-4 flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="border px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
        >
          Back
        </button>
        <h2 className="text-2xl font-bold">
          Blogs on <span className="text-blue-600">{category}</span>
        </h2>
      </div>

      {/* Blog List & Pagination */}
      <Blogs />
      <Pagination />
    </div>
  );
};

export default CategoryPage;
