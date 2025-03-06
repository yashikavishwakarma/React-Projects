import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
 // Ensure correct import

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div className="bg-gray-900 text-white">
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto px-5">
        {/* Logo */}
        <NavLink to="/">
          <img src="../logo.png" alt="Logo" className="h-14" />
        </NavLink>

        {/* Navigation Links */}
        <div className="flex items-center font-medium space-x-6">
          <NavLink to="/" className="hover:text-gray-300 transition">
            Home
          </NavLink>

          {/* Cart Icon */}
          <NavLink to="/cart" className="relative">
            <FaShoppingCart className="text-2xl" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white">
                {cart.length}
              </span>
            )}
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
