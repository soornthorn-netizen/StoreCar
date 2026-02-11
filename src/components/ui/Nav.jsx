import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GoSearch } from "react-icons/go";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full text-black bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-4xl font-bold tracking-wide px-3 py-2 rounded-md">
          R&N'S SHOP 
        </div>

        {/* Search bar (centered on desktop) */}
        <div className="hidden md:flex flex-1 justify-center px-4">
          <div className="flex items-center w-full max-w-md border rounded-lg overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="Search cars..."
              className="w-full px-3 py-2 outline-none"
            />
            <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-100 transition">
              <GoSearch />
            </button>

          </div>
        </div>

        {/* Links (desktop) */}
        <div className="hidden md:flex gap-6">
          <NavLink
            to={"/"}
            className="px-4 py-2 rounded-lg hover:bg-black hover:text-white font-semibold transition"
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className="px-4 py-2 rounded-lg hover:bg-black hover:text-white font-semibold transition"
          >
            About
          </NavLink>
          <NavLink
            to={"/contect"} 
            className="px-4 py-2 rounded-lg hover:bg-black hover:text-white font-semibold transition"
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl font-bold"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4">
          {/* Search (mobile) */}
          <div className="flex items-center w-full border rounded-lg overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="Search cars..."
              className="w-full px-3 py-2 outline-none"
            />
            <button className="bg-black text-white px-4 py-2 hover:bg-gray-800 transition">
              🔍
            </button>
          </div>

          {/* Links (mobile) */}
          <NavLink
            to={"/about"}
            className="px-4 py-2 rounded-lg hover:bg-black hover:text-white font-semibold transition"
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to={"/contect"}
            className="px-4 py-2 rounded-lg hover:bg-black hover:text-white font-semibold transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Nav;