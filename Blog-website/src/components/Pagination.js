import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  if (!totalPages) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-white py-3 border-t border-gray-300 shadow-md">
      <div className="flex items-center justify-between w-11/12 max-w-2xl mx-auto">
        {/* Previous Button */}
        {page > 1 && (
          <button
            onClick={() => handlePageChange(page - 1)}
            className="border border-gray-400 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
          >
            Previous
          </button>
        )}

        {/* Page Info */}
        <p className="text-sm font-semibold text-gray-700">
          Page {page} of {totalPages}
        </p>

        {/* Next Button */}
        {page < totalPages && (
          <button
            onClick={() => handlePageChange(page + 1)}
            className="border border-gray-400 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
