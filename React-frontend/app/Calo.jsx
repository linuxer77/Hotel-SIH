"use client";
import React, { useState, useEffect } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const slide = [
  {
    url: "https://wallpaperaccess.com/full/5486091.jpg",
  },
  {
    url: "https://wallpaperaccess.com/full/7158839.jpg",
  },
  {
    url: "https://wallpaperaccess.com/full/8075226.jpg",
  },
  {
    url: "https://wallpaperaccess.com/full/7685657.jpg",
  },
];

const Calo = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = slide.length;

  // Auto-slide feature
  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(autoSlide); // Cleanup on unmount
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
      {/* Left Arrow */}
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer left-4 sm:left-8 z-10"
      />
      {/* Right Arrow */}
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer right-4 sm:right-8 z-10"
      />

      {/* Slide Images */}
      {slide.map((item, index) => (
        <div
          key={index}
          className={
            index === currentSlide
              ? "opacity-100 ease-in duration-700"
              : "opacity-0 transition-opacity duration-700"
          }
        >
          {index === currentSlide && (
            <img
              className="w-full rounded-md"
              src={item.url}
              alt={`slide-${index}`}
            />
          )}
        </div>
      ))}

      {/* Indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slide.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-white" : "bg-gray-500"
            }`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Calo;
