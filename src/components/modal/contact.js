"use client"
import { useState } from "react";
import Image from "next/image";
import { IoCloseCircle } from "react-icons/io5";
import Info from "../../icons/info.svg"

export default function ContactModal() {
  const [isModalOpen, setIsModalOpen] = useState(true); 


  return (
    <div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-[#0b0c0ec4] flex items-center justify-center z-[999] p-4" style={{backdropFilter: "blur(2px)", opacity: 1, transform: "none"}}>
        <div className="w-full flex justify-center" style={{opacity: 1, transform: "none"}}>
          <div className="bg-white h-auto w-full md:w-[458px] rounded-xl p-3">
            <div className="flex justify-end"><IoCloseCircle onClick={()=> setIsModalOpen(false)}
            className="w-[20px] h-[20px] cursor-pointer" height="1em" width="1em"/></div>
            <div className="flex justify-center">
              <Image  src={Info} alt="info-icon" width={70} height={70} style={{color: "transparent"}}/>
            </div>
            <h4 className="text-[#0D080B] text-base font-semibold text-center my-4">Please contact our support team on support@eventcove.africa</h4>
          </div>
        </div>
      </div>
      )}
      </div>
  )
}