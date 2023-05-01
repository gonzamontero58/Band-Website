import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Carrousel(props) {
  const slides = [
    { url: "./imgs/Gallery-1.jpg" },
    { url: "./imgs/Gallery-2.jpg" },
    { url: "./imgs/Gallery-6.jpg" },
    { url: "./imgs/Gallery-5.jpg" },
    { url: "./imgs/NM_6.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (props.autoSlide) {
      const interval = setInterval(() => {
        nextSlide(slides);
      }, 5000);
      return () => clearInterval(interval);
    }
  });

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0; //calcula cual es la primer slide
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1; //si es la primer slide, tiene que regresar a la ultima (length total -1)
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1; //calcula cual es la ultima slide
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <div className="relative w-full h-auto content-wrapper group ">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="min-h-[40vh] lg:min-h-screen bg-center bg-cover duration-500"
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex justify-center py-2 top-4 ">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`cursor-pointer transition-all text-2xl rounded-full ${
              currentIndex === slideIndex ? "text-red-800" : "bg-opacity-50"
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
      {/* se usan los parentesis en lugar de {} porque se va a renderizar */}
    </div>
  );
}

export default Carrousel;
