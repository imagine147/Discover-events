"use client"
import React, { useState } from "react";
import { IoTriangleSharp } from "react-icons/io5";
import { faqs } from "@/db";
export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full h-full">
      <div className="container mx-auto w-full px-3 py-8 md:py-16 flex flex-col lg:flex-row lg:justify-between gap-10">
        <div className="w-full lg:w-[40%]">
          <h1 className="text-[#0D080B] font-medium text-2xl md:text-5xl">Got Questions? We've Got Answers</h1>
        </div>

        <div className="w-full lg:w-[60%] flex flex-col gap-6">
          {faqs.map((faq, index)=> (
            <div key={faq.id} className="w-full border-b border-[#767779] pb-4">
              <button onClick={() => toggleAccordion(index)} className="flex justify-between items-center w-full text-left text-black font-medium text-xl cursor-pointer">
                <span className="text-[#0D080B] font-medium text-xl md:text-2xl">{faq.question}</span><span className={`transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}><IoTriangleSharp /></span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <p className="text-[#767779] text-base mt-3">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}