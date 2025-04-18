"use client"
import { useState } from "react"
import Image from "next/image"
import Bg from "../../../images/events_bg.webp"
import Events from "@/components/events/upcomingEvents"
import { category } from "@/db"
import { CiCalendarDate } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { CiLocationArrow1 } from "react-icons/ci";
import DatePicker from "react-datepicker"
import { selectState } from "@/db"
import 'react-datepicker/dist/react-datepicker.css';
export default function Event() {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedState, setSelectedState] = useState("");

  return (
    <div className="w-full h-full">
      <div className="bg-[#F1F5F8]">
        <div style={{ position: "relative", opacity: 1, transform: "none" }}>
          <div className="w-full container mx-auto px-4 py-3 sm:px-6 lg:px-4">
            <div className="relative w-full sm:h-[300px] h-[250px] md:h-[350px] mb-20 group">
              <Image
                src={Bg}
                alt="culture-hero"
                className="object-cover cursor-pointer rounded-xl"
                sizes="100vw"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
              <div className="absolute inset-0 bg-[#600034] opacity-60 rounded-xl group-hover:opacity-0 transition-opacity"></div>
              <div className="h-full flex flex-col justify-center items-center gap-3 p-5">
                <h1 className="text-white font-bold text-xl md:text-2xl lg:text-4xl text-center z-50">
                  Our Culture Circuit
                </h1>
                <h3 className="text-white font-bold text-sm md:text-base text-center z-50">
                  All The Feels
                </h3>
              </div>
              <div className="absolute -bottom-8 rounded-xl left-8 right-8 bg-white min-h-[68px] h-auto hidden md:flex items-center justify-between px-4">
                <div className="w-full">
                  <div className="relative w-full">
                    <div className="border-r border-[#767779] w-full flex items-center gap-1 text-[#767779] text-sm cursor-pointer">
                      <CiLocationArrow1 style={{color: '#767779'}} size={20}
                      />
                      <select
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                        className="w-full text-[#767779] focus:outline-none"
                      >
                        <option value="" disabled>
                          Select State
                        </option>
                        {selectState.map((state) => (
                          <option value={state.id} key={state.id}>
                            {state.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="relative w-full">
                    <div className="border-r border-[#767779] w-full flex items-center gap-1 pl-2 text-[#767779] text-sm cursor-pointer">
                    <CiCalendarDate style={{color: '#767779'}} size={20}
                      />
                      Date
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="pl-2 w-full flex items-center gap-1 text-[#767779] text-sm">
                  <IoIosSearch style={{color: '#767779'}} size={20}
                    />
                    <input
                      type="text"
                      placeholder="Search by event name"
                      className="w-full text-[#767779] placeholder-[#767779] focus:outline-none"
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="flex flex-row gap-2 rounded-md items-center justify-center p-4 h-[39px] md:h-[40px] hover:bg-opacity-90 font-medium leading-5 text-xs md:text-base text-[#767779] bg-[#FFF0FB] opacity-100"
                >
                  <div className="font-medium leading-5 text-base text-[#A30162]">
                    Search
                  </div>
                </button>
              </div>
            </div>
            <div className="w-full h-full flex flex-col gap-2 mb-3">
              <h3 className="text-base font-bold text-[#0F019]">
                Explore by category
              </h3>
              <div className="w-full overflow-x-auto sm:overflow-visible">
                <div className="flex gap-2 items-center py-2 flex-nowrap sm:flex-wrap">
                  {category.map((cat) => (
                    <div
                      className="min-w-max px-4 py-4 cursor-pointer border hover:border-[#A30162] active:border-[#A30162] bg-white active:bg-[#FFF0FB] hover:bg-[#FFF0FB] text-xs rounded-md shadow flex gap-1 items-center justify-center text-[#0F0419]"
                      key={cat.id}
                    >
                      {cat.title}
                    </div>
                  ))}
                </div>
              </div>
              <Events />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}