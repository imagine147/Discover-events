"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { reviews } from "@/db";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function RevCard() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slide to the previous review
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  // Slide to the next review (to the left)
  const handleNext = () => {
    setCurrentSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide to the next review (left only)
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext(); // Always slide left
    }, 4000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

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
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            outline: "none",
            width: `${reviews.length * 100}%`,
            transform: `translateX(-${currentSlide * (100 / reviews.length)}%)`,
          }}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex-shrink-0 bg-white rounded-md p-6 flex flex-col justify-center shadow-md gap-8 min-h-[220px] h-[300px] relative"
              style={{ width: `${100 / reviews.length}%`, display: "inline-block" }}
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
