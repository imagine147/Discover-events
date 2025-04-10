import Image from "next/image"
import Choose from "../../images/whyChooseUs.svg"
import Ticket from "../../icons/ticket_price.svg"
import Host from "../../icons/event_host.svg"
import WhyCard from "../reusable/cards/whyCard"
export default function WhyUs() {
  return (
    <div className="w-full h-full">
      <div className="container mx-auto px-4 py-16 flex flex-col gap-8">
        <h2 className="text-black text-3xl font-extrabold text-center">Why Choose Us?</h2>
        <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-16">
          <div className="relative w-full lg:w-1/2 flex justify-center">
            <Image width={593} height={402} className="object-contain w-full max-w-[593px] h-auto" src={Choose} alt="Choose-us"style={{color: "transparent"}}/>

            <div className="absolute left-0 -top-10 bg-white shadow-lg rounded-lg flex gap-3 items-center p-3 animate-zoomInOut">
              <div className="w-16 h-10 flex items-center justify-center text-sm font-medium rounded-lg bg-[#FAF5F8] text-[#A30162]">60%</div>

              <div>
                <h4 className="text-xs text-[#767779] font-normal">Ticket Sold</h4>
                <h4 className="text-sm text-[#0D080B] font-semi-bold">100/170</h4>
              </div>
            </div>

            <div className="absolute left-0 -bottom-10 bg-white shadow-lg rounded-lg flex gap-3 items-center p-3 animate-zoomInOut">
              <Image loading="lazy" width={50} height={50} className="rounded-full" style={{color: "transparent"}} src={Ticket} alt="Ticket-price"/>
              <div>
                <h4 className="text-xs text-[#767779] font-normal">Ticket Price</h4>
                <h4 className="text-sm text-[#0D080B] font-semi-bold">₦ 100,000</h4>
              </div>
            </div>

            <div className="absolute right-0 lg:-right-8 bottom-10 bg-white shadow-lg rounded-lg flex gap-3 items-center p-3 animate-zoomInOut">
              <Image loading="lazy" width={50} height={50} className="rounded-full" style={{color: "transparent"}} src={Host} alt="Event-host"/>
              <div>
                <h4 className="text-xs text-[#767779] font-normal">Event Host</h4>
                <h4 className="text-sm text-[#0D080B] font-semi-bold">Eventcove</h4>
              </div>
            </div>
          </div>
          <WhyCard/>
        </div>
      </div>
    </div>
  )
}