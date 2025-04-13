"use client"
import { useEffect } from 'react'
import Image from 'next/image'
import Levels from "../../images/hero_img.webp"
import Chart  from "../../images/hero_chart.svg"
import Chatr1 from "../../images/hero_chart2.svg"
import { animate } from 'framer-motion'
import Link from 'next/link'



export default function Hero() {
  // Trigger animations using the `animate` function from 'motion'
  useEffect(() => {
    animate(".animate-zoomInOut", { scale: [1, 1.1, 1] }, { duration: 2, repeat: Infinity });
  }, []);

  return (
    <div className="w-full h-auto">
      <div className="container mx-auto px-3 py-4 pt-12 w-full flex flex-col lg:flex-row justify-around lg:justify-between items-center gap-4 h-full">
        <div className="w-full flex flex-col gap-4 text-center lg:text-left ">
          <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl text-[#0D080B] animate-pulse">
            Elevate Your <span className="text-[#A30162] animate-pulse">Experience!</span>
          </h1>
          <p className="text-[#767779] text-sm md:text-base font-normal">
            Unlock incredible experiences and create lasting memories — every detail perfected, every moment unforgettable. Your next great event is just a click away!
          </p>

          <div className="w-full flex gap-4 justify-center lg:justify-start">
            <Link href="/event" className="block">
              <button className="w-auto py-3 px-4 text-white bg-[#A30162] border-[#A30162] rounded-md text-sm font-medium outline-none">
                Discover Events
              </button>
            </Link>

            <Link href="/auth/signup">
              <button className="w-auto py-3 px-4 text-[#A30162] bg-[#F1F5F8] border border-[#A30162] rounded-md text-sm font-medium outline-none hover:opacity-90 block">
                Create Events
              </button>
            </Link>
          </div>

          <div className="flex gap-6 justify-center lg:justify-start mt-6">
            <div className="flex flex-col items-center">
              <h3 className="text-[#0A162D] text-base font-bold">+12</h3>
              <p className="text-[#767779] text-sm font-normal">Available tickets</p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-[#0A162D] text-base font-bold">+2k</h3>
              <p className="text-[#767779] text-sm font-normal">Tickets sold</p>
            </div>
          </div>
        </div>

        <div className="w-full relative flex justify-center h-full">
          <Image
            width={538}
            height={515}
            loading="eager"
            className="object-contain drop-shadow-lg"
            src={Levels}
            alt="levelup-illustration"
            style={{ color: "transparent" }}
          />
          <Image
            width={324}
            height={217}
            loading="eager"
            src={Chart}
            alt="Graph-chart"
            className="absolute bottom-0 right-0 animate-zoomInOut hidden lg:block drop-shadow-md"
            style={{ color: "transparent" }}
          />
          <Image
            width={309}
            height={84}
            loading="eager"
            src={Chatr1}
            alt="chart-illustration"
            className="absolute lg:bottom-12 -left-4 lg:-left-48 hidden lg:block drop-shadow-md"
          />
        </div>
      </div>
    </div>
  );
}