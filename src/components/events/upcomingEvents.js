import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import Empty from "../../images/empty_state.svg"
export default function Events() {
  return (
    <div className="w-full h-full">
      <div className="container mx-auto p-3">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-bold text-[#0D080B]">Upcoming Events</h3>
        <button type="button" className="flex items-center gap-1 text-sm font-medium text-[#E26E00]">View More
        <FaArrowRight color="#E26E00" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"></div>

      <div className="w-full flex justify-center items-center">
          <Image width={250} height={300} style={{color: "transparent"}} src={Empty} alt="Empty-state"/>
      </div>
      </div>
    </div>
  )
}