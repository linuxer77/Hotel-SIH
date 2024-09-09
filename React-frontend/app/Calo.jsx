"use client";
import React, { useState } from "react";
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

  const nextSlide = () => {
    setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
  };

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer left-8"
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer right-8"
      />
      {slide.map((item, index) => (
        <div
          key={index}
          className={
            index === currentSlide
              ? "opacity-100 ease-in duration-300"
              : "opacity-0"
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
    </div>
  );
};

export default Calo;
