import Image from "next/image";
import Bg from "../../../images/pricing_bg.webp"
import Payment from "@/components/payment/payment";

export default function Pricing() {
  return (
    <div className="w-full h-full">
      <div className="bg-[#F1F5F8]">
      <div style={{position: "relative", opacity: 1, transform: "none" }}>
        <div className="w-full container mx-auto px-4 py-3 sm:px-6 lg:px-4">
          <div className="relative w-full sm:h-[300px] h-[250px] md:h-[350px] mb-4 md:mb-8 group">
            <Image src={Bg} alt="pricing-hero" className="object-cover cursor-pointer rounded-xl" sizes="100vw" style={{position: "absolute", height: "100%", width: "100%", inset: "0px", color: "transparent"}}/>
            <div className="absolute inset-0 bg-[#600034] opacity-60 rounded-xl group-hover:opacity-0 transition-opacity"></div>
            <div className="h-full flex flex-col justify-center items-center gap-3 p-5">
              <h1 className="text-white font-bold text-xl md:text-2xl lg:text-4xl text-center z-50">Simple & Transparent Pricing</h1>
              <h3 className="text-white font-bold text-sm md:text-base text-center z-50">No hidden fees. No surprises. Just straightforward pricing that works for your events.</h3>
            </div>
          </div>
          <Payment/>
        </div>
      </div>
      </div>
    </div>
  )
}