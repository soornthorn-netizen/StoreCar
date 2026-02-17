import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand / About */}
        <div>
          <h2 className="text-xl font-bold mb-3">DeaN*!* SHOP</h2>
          <p className="text-sm leading-relaxed">
            Explore the world's most exclusive cars. Designed for speed, power,
            and luxury.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/about" className="hover:text-white transition">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contect" className="hover:text-white transition">
                Contact
              </NavLink>
            </li>
            <li>
              {/* <NavLink to="/gallery" className="hover:text-white transition">
                Gallery
              </NavLink> */}
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl font-bold mb-3">Stay Updated</h2>
          <p className="text-sm mb-3">
            Subscribe to get the latest supercar news.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 text-white rounded-l-md outline-none"
            />
            <button
              type="submit"
              className="bg-red-600 px-4 py-2 rounded-r-md hover:bg-red-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom note */}
      <div className="text-center text-sm text-gray-400 mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} SuperCar. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;