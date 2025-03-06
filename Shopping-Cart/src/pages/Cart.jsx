import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  // Update total amount when cart changes
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      {cart.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {/* Cart Items Section */}
          <div className="space-y-4">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Cart Summary Section */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-center">Your Cart Summary</h2>
            <p className="mt-3 text-lg font-medium">Total Items: {cart.length}</p>
            <p className="text-xl font-bold text-green-600 mt-2">
              Total Amount: ${totalAmount.toFixed(2)}
            </p>
            <button className="bg-blue-500 text-white px-6 py-2 mt-4 w-full rounded-lg hover:bg-blue-600 transition">
              Check Out Now
            </button>
          </div>
        </div>
      ) : (
        // Empty Cart Message
        <div className="text-center mt-20">
          <h1 className="text-2xl font-semibold text-white">Your Cart is Empty 😞</h1>
          <Link to="/">
            <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
