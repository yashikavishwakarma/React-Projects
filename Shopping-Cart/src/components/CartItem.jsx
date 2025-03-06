import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex flex-col md:flex-row items-center border p-4 rounded-lg shadow-md bg-white">
      {/* Image */}
      <div className="w-32 h-32 flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col flex-grow ml-4">
        <h1 className="text-lg font-semibold">{item.title}</h1>
        <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>

        <div className="flex justify-between items-center mt-3">
          <p className="text-green-600 font-bold text-lg">${item.price}</p>

          <button
            className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
            onClick={removeFromCart}
          >
            <FcDeleteDatabase className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
