import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.success("Item Removed From the Cart");
  };

  return (
    <div className="flex flex-col items-center justify-between border p-4 rounded-lg shadow-md bg-white hover:scale-105 transition duration-300 ease-in-out">
      {/* Title */}
      <p className="text-lg font-semibold text-center">{post.title}</p>

      {/* Description */}
      <p className="text-gray-600 text-sm text-center mt-2">
        {post.description.split(" ").slice(0, 10).join(" ") + "..."}
      </p>

      {/* Image */}
      <div className="w-40 h-40 my-4">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Price */}
      <p className="text-green-600 font-bold text-lg">${post.price}</p>

      {/* Buttons */}
      {cart.some((p) => p.id === post.id) ? (
        <button
          className="bg-red-500 text-white px-4 py-2 mt-3 rounded-lg hover:bg-red-600 transition"
          onClick={removeFromCart}
        >
          Remove Item
        </button>
      ) : (
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-lg hover:bg-blue-600 transition"
          onClick={addToCart}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Product;
