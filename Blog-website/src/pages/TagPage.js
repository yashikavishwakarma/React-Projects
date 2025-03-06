import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

const TagPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow px-4 py-6">
        <div className="mb-6 flex items-center gap-x-4">
          <button
            onClick={() => navigate(-1)}
            className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100"
          >
            Back
          </button>
          <h2 className="text-2xl font-semibold">
            Blogs Tagged <span className="text-blue-600">#{tag}</span>
          </h2>
        </div>
        <Blogs />
        <Pagination />
      </main>
    </div>
  );
};

export default TagPage;
