import React from "react";

const Nav = () => (
  <nav className="w-full bg-gradient-to-r from-purple-600 to-purple-400 px-8 py-3 flex items-center">
    {/* Logo */}
    <div className="flex items-center">
      <span className="bg-purple-400/50 rounded-full px-4 py-1 text-lg font-bold text-white uppercase tracking-wide" style={{fontFamily: 'sans-serif', letterSpacing: '1px'}}>
        OTAKUVERSE
      </span>
    </div>
    {/* Navigation Links */}
    <div className="flex-1 flex justify-center">
      <ul className="flex space-x-10">
        <li>
          <a href="#" className="text-gray-100 text-lg font-normal">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-100 text-lg font-normal">
            Blogs
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-100 text-lg font-normal">
            Signup
          </a>
        </li>
      </ul>
    </div>
    {/* Login Button */}
    <div>
      <button className="bg-gray-100 text-gray-800 rounded-xl px-7 py-2 font-medium shadow-sm" style={{fontFamily: 'sans-serif'}}>
        Login
      </button>
    </div>
  </nav>
);

export default Nav;
