import Image from "next/image"
import { clients } from "@/db";
import { TiStarFullOutline } from 'react-icons/ti'
import RevCard from "../reusable/cards/reviewCard";
export default function CustomersReview() {
  return (
    <div className="w-full h-full">
      <div className="bg-[#F57B00] w-full py-16 flex justify-center items-center">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h3 className="text-white font-bold text-2xl">Our Clients Love Us!</h3>
          <p className="font-normal text-base text-white">See why our customers rave about us! Explore real from pet lovers just like you. Join the conversation and share your experience with our top-rated products!</p>
          <div className="flex -space-x-1 overflow-hidden">
            {clients.map((client) =>(
              <div className="w-[32px] h-[32px] overflow-hidden rounded-full" key={client.id}>
              <Image width={32} height={32} className="w-full h-full object-cover" style={{color: "transparent"}} src={client.image} alt="client-img"/>
              </div>
            ))}
            
            {/* <div className="w-[32px] h-[32px] overflow-hidden rounded-full">
            <Image width={32} height={32} className="w-full h-full object-cover" style={{color: "transparent"}} src={Client2} alt="client-img"/>
            </div> */}
          </div>
          <span className='flex'>
            {[...Array(clients.rate || 5)].map((_, index) => (
              <TiStarFullOutline className='text-[#ffbc0b]' width={16} height={16} key={index} />
            ))}

          </span>
          </div>

          <RevCard/>
        </div>
      </div>
    </div>
  )
}