import Image from "next/image"
import { events } from "@/db"
export default function EventCove() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 text-[#0D080B]">
      {events.map((event)=>(
        <div className="bg-white p-4 h-full" key={event.id}>
        <Image src={event.image} alt="secure-transaction"/>
        <h4 className="font-medium text-sm my-4">{event.title}</h4>
        <p className="text-[#767779] font-normal text-sm">{event.description}</p>
      </div>
      ))}
    </div>
  )
}