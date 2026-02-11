import React, { useState, useEffect } from "react";
import image from "../image/image.jpg";
import image4 from "../image/image12.png";
import image6 from "../image/image6.png";
import image3 from "../image/image8.png";

const slides = [
  {
    id: 1,
    image: image,
    title: "Audi",
    subtitle: "Two Wheeled Vehicle Designed For Small People",
    price: 200000,
    buttonText: "View Set Inside",
  },
  {
    id: 2,
    image: image3,
    title: "BMW",
    subtitle: "Two Wheeled Vehicle Designed For Small People",
    price: 350000,
    buttonText: "View Set Inside",
  },
  {
    id: 3,
    image: image4,
    title: "Bocatti",
    subtitle: "Two Wheeled Vehicle Designed For Small People",
    price: 280000,
    buttonText: "View Set Inside",
  },
  {
    id: 4,
    image: image6,
    title: "Bently",
    subtitle: "Two Wheeled Vehicle Designed For Small People",
    price: 400000,
    buttonText: "View Set Inside",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen overflow-hidden shadow-xl">
      {/* Slides container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full flex-shrink-0 relative"
          >
            {/* Image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[450px] object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
              <div className="p-6 md:p-10 text-white">
                <h2 className="text-2xl md:text-4xl font-bold drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-base mt-2 opacity-90">
                  {slide.subtitle}
                </p>
                <p className="text-lg md:text-2xl font-semibold mt-2">
                  ${slide.price.toLocaleString()}
                </p>
                <button className="mt-4 px-5 py-2 bg-red-600 hover:bg-red-700 rounded-lg shadow-md transition text-sm md:text-base">
                  {slide.buttonText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() =>
          setCurrent(current === 0 ? slides.length - 1 : current - 1)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full shadow-md"
      >
        ⟨
      </button>
      <button
        onClick={() =>
          setCurrent(current === slides.length - 1 ? 0 : current + 1)
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full shadow-md"
      >
        ⟩
      </button>

      {/* Dots */}
      <div className="absolute bottom-5 w-full flex justify-center gap-3">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              current === i ? "bg-white scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}