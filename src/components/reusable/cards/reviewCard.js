"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { reviews } from "@/db";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function RevCard() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timeoutRef = useRef(null);

  const totalSlides = reviews.length;

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    // Auto-slide left every 4 seconds
    timeoutRef.current = setTimeout(() => {
      handleNext();
    }, 4000);

    return () => clearTimeout(timeoutRef.current);
  }, [currentSlide]);

  return (
    <div className="w-[97%] lg:w-1/2 flex items-center gap-2">
      {/* Prev Arrow */}
      <button
        className="bg-white rounded-full shadow"
        onClick={handlePrev}
        aria-label="Previous Testimonial"
      >
        <MdOutlineKeyboardArrowRight
          className="rotate-180"
          width="1rem"
          height="1rem"
          color="#F57B00"
        />
      </button>

      {/* Slider */}
      <div className="w-full overflow-hidden relative">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            outline: "none",
            width: `${totalSlides * 100}%`,
            transform: `translateX(-${currentSlide * (100 / totalSlides)}%)`,
          }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex-shrink-0 bg-white rounded-md p-6 flex flex-col justify-center shadow-md gap-8 min-h-[220px] h-[300px] relative"
              style={{
                width: `${100 / totalSlides}%`,
                display: "inline-block",
              }}
            >
              <div className="w-[72px] h-[72px] overflow-hidden rounded-full shadow-lg mb-2">
                <Image
                  src={review.image}
                  alt="host-img"
                  width={72}
                  height={72}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  style={{ color: "transparent" }}
                />
              </div>
              <p className="text-[#0D080B] text-sm md:text-base font-normal">
                {review.comment}
              </p>
              <h3 className="text-[#868B90] text-xs md:text-sm font-semibold">
                {review.name}
              </h3>
              <h3 className="text-[#868B90] text-xs font-medium">
                {review.address}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Next Arrow */}
      <button
        className="bg-white rounded-full shadow"
        onClick={handleNext}
        aria-label="Next Testimonial"
      >
        <MdOutlineKeyboardArrowRight width="1rem" height="1rem" color="#F57B00" />
      </button>
    </div>
  );
}
