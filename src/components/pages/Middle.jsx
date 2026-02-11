import React, { useState } from "react";
import img1 from "../image/image1.png";
import img2 from "../image/image2.png";
import img3 from "../image/image3.png";
import img4 from "../image/image4.png";
import img5 from "../image/image5.png";
import img6 from "../image/image13.png";
import img7 from "../image/image7.png";
import img8 from "../image/image8.png";
import img9 from "../image/image9.png";
import img10 from "../image/image10.png";
import img11 from "../image/image11.png";
import img12 from "../image/image12.png";

function Middle() {
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const products = [
    {
      id: 1,
      image: img1,
      title: "Velocity Garage",
      description: "Comfortable everyday sneakers with modern style.",
      price: 200000,
    },
    {
      id: 2,
      image: img2,
      title: "Ignite the Road",
      description: "Durable backpack made from premium leather.",
      price: 500000,
    },
    {
      id: 3,
      image: img3,
      title: "Fast Lane Dreams",
      description: "Track fitness, receive notifications, and more.",
      price: 600000,
    },
    {
      id: 4,
      image: img4,
      title: "Luxury on Wheels",
      description: "Experience immersive sound without distractions.",
      price: 400000,
    },
    {
      id: 5,
      image: img5,
      title: "Driven by Power",
      description: "Compact design with crystal clear audio.",
      price: 25000,
    },
    {
      id: 6,
      image: img6,
      title: "Ultimate Supercars",
      description: "High precision sensor for ultimate control.",
      price: 3000000,
    },
    {
      id: 7,
      image: img7,
      title: "Legends of Speed",
      description: "Stylish eyewear with AR technology.",
      price: 500000,
    },
    {
      id: 8,
      image: img8,
      title: "Supercar Showcase",
      description: "Powerful sound you can carry anywhere.",
      price: 200000,
    },
    {
      id: 9,
      image: img9,
      title: "Top Speed",
      description: "Monitor health and workouts daily.",
      price: 3000000,
    },
    {
      id: 10,
      image: img10,
      title: "PowerDrive",
      description: "Step into immersive virtual worlds.",
      price: 400000,
    },
    {
      id: 11,
      image: img11,
      title: "Torque",
      description: "Capture adventures in stunning clarity.",
      price: 30000,
    },
    {
      id: 12,
      image: img12,
      title: "Top Speed",
      description: "Premium switches with RGB lighting.",
      price: 2500000,
    },
  ];

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setIsOpen(true); // Open cart when item is added
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0).toLocaleString();

  return (
    <div className="min-h-screen bg-gray-50 p-6 relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
      {/* Left: Brands */}
        <div className="flex space-x-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-black cursor-pointer transition">
            Lamborghini
          </h1>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-black cursor-pointer transition">
            BMW
          </h1>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-black cursor-pointer transition">
            Ferrari
          </h1>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-black cursor-pointer transition">
            Bently
          </h1>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-black cursor-pointer transition">
            Porsche
          </h1>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-black cursor-pointer transition">
            Audi 
          </h1>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-black cursor-pointer transition">
            ... 
          </h1>
        </div>

        {/* Right: Cart button */}
        <button
          onClick={() => setIsOpen(true)}
          className="relative px-5 py-2 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition"
        >
          Cart <span className="ml-1">({cart.length})</span>
        </button>
      </div>
      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-5"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-48 w-full object-cover rounded-xl"
            />
            <div className="mt-4 space-y-3">
              <h3 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 line-clamp-2">
                {item.description}
              </p>
              <div className="flex items-center justify-between pt-2">
                <span className="font-bold text-gray-900 text-lg">
                  ${item.price.toLocaleString()}
                </span>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-black to-gray-800 text-white text-sm font-medium shadow hover:opacity-90 hover:scale-105 transition"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>

        <div className="p-5 space-y-4 overflow-y-auto h-[70%]">
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-100 p-3 rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-12 w-12 rounded-md object-cover"
                />
                <div className="flex-1 px-3">
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <span className="text-xs text-gray-500">
                    ${item.price.toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(index)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-5 border-t bg-white">
          <div className="flex justify-between font-semibold text-lg mb-4">
            <span>Total:</span>
            <span>${total}</span>
          </div>
          <button className="w-full py-3 rounded-xl bg-black text-white font-medium hover:opacity-90">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Middle;