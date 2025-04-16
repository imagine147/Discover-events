import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Empty from "../../images/empty_state.svg"
import Link from "next/link";
import { upcoming } from "@/db";

export default function Events() {
  return (
    <div className="w-full h-full z-40">
      <div className="container mx-auto p-3">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold text-[#0D080B]">Upcoming Events</h3>
        <Link href="/event"><button type="button" className="flex items-center gap-1 text-sm font-medium text-[#E26E00] cursor-pointer">View More
        <FaArrowRight color="#E26E00" />
        </button></Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {upcoming.map((up)=>{
          <div className="bg-white shadow rounded-lg p-3 cursor-pointer" key={up.id}>
          <div className="relative rounded-xl overflow-hidden" style={{aspectRatio: 1.58691 / 1}}><Image src={up.image} alt="" className="object-fit" sizes="(max-width: 768px) 100vw, 323.11px" style={{position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent"}}/></div>
          <div className="mt-2 flex flex-col gap-1">
            <h3 className="text-[] font-medium text-xs md:text-sm">{up.title}</h3>
            <p className="flex items-center gap-1 text-xs font-normal text-[#767779]">
              <span className="w-4 h-4" height="1em" width="1em">{up.svg1}</span>{up.location}
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-xs font-medium text-[]"><span className="w-4 h-4" height="1em" width="1em">{up.svg2}</span>{up.date}</div>
              <div className="flex items-center justify-center gap-1 rounded-md p-2 text-xs font-medium text-[]"><span className="w-4 h-4" height="1em" width="1em">{up.svg3}</span>{up.time}</div>
            </div>
          </div>
        </div>
        })}
        
      </div>

      <div className="w-full flex justify-center items-center">
          <Image width={250} height={300} style={{color: "transparent"}} src={Empty} alt="Empty-state"/>
      </div>
      </div>
    </div>
  )
}