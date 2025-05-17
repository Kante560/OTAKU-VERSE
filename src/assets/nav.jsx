import React from "react";

const Nav = () => (
  <nav className="w-full bg-gradient-to-r from-purple-500 to-pink-400 px-8 py-3 flex items-center justify-between">
    {/* Logo */}
    <div className="flex items-center">
      <span className="bg-purple-600/50 rounded-full px-4 py-1 text-lg font-bold text-white tracking-wide shadow-sm">
        OTAKUVERSE
      </span>
    </div>
    {/* Navigation Links */}
    <div className="flex-1 flex justify-center">
      <ul className="flex space-x-8">
        <li>
          <a href="#" className="text-white text-lg font-normal hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-white text-lg font-normal hover:underline">
            Blogs
          </a>
        </li>
        <li>
          <a href="#" className="text-white text-lg font-normal hover:underline">
            Signup
          </a>
        </li>
      </ul>
    </div>
    {/* Login Button */}
    <div>
      <button className="bg-white text-gray-800 rounded-xl px-6 py-2 font-medium shadow hover:bg-gray-100 transition">
        Login
      </button>
    </div>
  </nav>
);

export default Nav;
