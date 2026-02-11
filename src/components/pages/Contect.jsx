import React, { useState } from "react";
import Footer from "./Footer";

function Contect() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome back, ${email}!`);
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-100">
      {/* Centered Form */}
      <div className="flex flex-1 items-center justify-center px-4 py-5">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
            Sign In
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-gray-600 font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-600 font-medium mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-black focus:outline-none"
              />
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center space-x-2">
                <input type="checkbox" className="w-4 h-4 rounded" />
                <span>Remember me</span>
              </label>
              <button type="button" className="hover:underline">
                Forgot password?
              </button>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-black text-white font-medium py-2 rounded-xl hover:bg-gray-800 transition"
            >
              Sign In
            </button>
          </form>

          {/* Footer text inside card */}
          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="text-black font-semibold hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>

      {/* Global Footer below */}
      <Footer />
    </div>
  );
}

export default Contect;