import React from "react";
import { useNavigate } from "react-router-dom";
import img1 from "../image/image1.png"
import img2 from "../image/image2.png"
import img3 from "../image/image3.png"
import img4 from "../image/image4.png"
function Product() {
  const navigate = useNavigate();

  const cars = [
    {
      id: 1,
      image: img1,
      title: "Classic Vihical",
      description: "Comfortable everyday sneakers with modern style.",
      price: 89.99,
    },
    {
      id: 2,
      image: img2 ,
      title: "Classic Vihical",
      description: "Durable backpack made from premium leather.",
      price: 129.99,
    },
    {
      id: 3,
      image: img3,
      title: "Classic Vihical",
      description: "Track fitness, receive notifications, and more.",
      price: 199.99,
    },
    {
      id: 4,
      image: img4,
      title: "Classic Vihical",
      description: "Experience immersive sound without distractions.",
      price: 249.99,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
        🚗 Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            onClick={() => navigate(`/product/${car.id}`)}
          >
            {/* Product Image */}
            <img
              src={car.image}
              alt={car.title}
              className="w-full h-48 object-contain bg-gray-100 p-4"
            />

            {/* Product Info */}
            <div className="p-5">
              <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
                {car.title}
              </h2>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                {car.description}
              </p>

              <div className="flex items-center justify-between mt-4">
                <span className="text-xl font-bold text-amber-600">
                  ${car.price}
                </span>
                <button className="px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;