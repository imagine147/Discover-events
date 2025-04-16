import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Empty from "../../images/empty_state.svg"
import Link from "next/link";

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

      <div className="w-full flex justify-center items-center">
          <Image width={250} height={300} style={{color: "transparent"}} src={Empty} alt="Empty-state"/>
      </div>
      </div>
    </div>
  )
}