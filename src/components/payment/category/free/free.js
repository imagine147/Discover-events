import { PiCalendarDotsLight } from "react-icons/pi";
export default function Free() {
  return (
    <div className="bg-white px-3 md:px-10 py-3 md:py-5 flex flex-col justify-center items-center gap-4 w-full md:w-auto rounded-xl">
        <div className="rounded-full p-3 bg-[#FFF0FB]">
        <PiCalendarDotsLight className="w-[20px] h-[20px] text-[#a30162]" height="1em" width="1em"/>
        </div>
        <h1 className="text-[#0D080B] font-bold text-base md:text-lg lg:text-2xl">Hosting a Free Event?</h1>
        <p className="text-[#767779] text-sm md:text-base font-normal">Free events are completely free. No hidden charges.</p>
        <div className="bg-[#FFF0FB] rounded-md text-[#E20083] text-sm p-3 text-center font-normal">
          <span className="text-2xl font-bold md:text-4xl">₦0</span>/ticket
        </div>
        <p className="text-black text-sm font-normal">Only pay when you sell tickets.</p>
        <button type="button" className="flex flex-row gap-2 rounded-md items-center justify-center p-4 h-[39px] md:h-[40px] lg:h-[45px] bg-[#A30162] hover:opacity-90 font-medium leading-5 text-xs md:text-base text-center w-full">
          <div className="font-medium leading-5 text-base text-white">Get Started</div>
        </button>
      </div>
  )
}