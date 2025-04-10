import Image from "next/image"
import { cards } from "@/db"
export default function WhyCard() {
  return (
    <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
      {cards.map((card) => (
        <div className="bg-white rounded-lg p-4 flex flex-col items-start gap-3" key={card.id}>
        <Image loading="lazy" width={30} height={30} className="rounded-full" style={{color: "transparent"}} src={card.image} alt="icons" decoding="async" data-nimg=""/>
        <h3 className="text-sm text-black">{card.title}</h3>
        <p className="text-sm text-[#767779]">{card.description}</p>
      </div>
      ))}
      
    </div>
  )
}