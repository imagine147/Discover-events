import { PiCalendarDotsLight } from "react-icons/pi";
import Link from "next/link";
export default function Paid() {
  return (
    <div className="bg-white container mx-auto px-3 md:px-10 py-3 md:py-5 flex flex-col justify-center items-center gap-4 w-full md:w-auto rounded-xl">
            <div className="rounded-full p-3 bg-[#FFF0FB]">
            <PiCalendarDotsLight className="w-[20px] h-[20px] text-[#a30162]" height="1em" width="1em"/>
            </div>
            <h1 className="text-[#0D080B] font-bold text-base md:text-lg lg:text-2xl">Selling Tickets?</h1>
            <p className="text-[#767779] text-sm md:text-base font-normal">We only charge 4% + ₦100 per paid ticket.</p>
            <div className="bg-[#FFF0FB] rounded-md text-[#E20083] text-sm p-3 text-center font-normal">
              <span className="text-2xl font-bold md:text-4xl">4%</span>+ ₦100/ticket
            </div>
            <div className="flex items-center gap-3">
              <label className="text-sm text-black leading-5 flex gap-1 items-center mb-1">Absorb fee yourself</label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-10 h-4 bg-gray-200 rounded-full peer peer-focus:ring-pink-200 dark:bg-[#CCCCCC] peer-checked:bg-[#E20083]"></div>
                <div className="absolute shadow-md left-0 bg-white w-5 h-5 rounded-full transition-transform peer-checked:translate-x-full"></div>
              </label>
            </div>
            
            <div className="w-full bg-[#FAFAFA] p-4">
              <h3 className="text-black font-medium text-sm mb-3">Example:</h3>
              <ul className="w-full">
                <li className="text-[#767779] font-normal text-sm">Ticket price: ₦5,000</li>
                <li className="text-[#767779] font-normal text-sm">Fee: ₦300 (4% + ₦100)</li>
                <li className="text-[#767779] font-normal text-sm">Customer pay: ₦5,000</li>
                <li className="text-[#767779] font-normal text-sm">You receive: ₦4,700</li>
              </ul>
            </div>
            <Link href="/auth/login" className="w-full" target="_blank" rel="noopener noreferrer"><button type="button" className="flex flex-row gap-2 rounded-md items-center justify-center p-4 h-[39px] md:h-[40px]  bg-[#A30162] hover:opacity-90 font-medium leading-5 text-xs md:text-base text-center w-full">
              <div className="font-medium leading-5 text-base text-white">Get Started</div>
            </button></Link>
          </div>
  )
}