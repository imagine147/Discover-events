"use client";
import { useState } from "react";
import Free from "../../components/payment/category/free/free"
import Paid from "../../components/payment/category/paid/paid";
import EventCove from "../reusable/cards/eventCoveCard";
import PayoutInfo from "./category/payout";

export default function Category() {
  const [active, setActive] = useState('free')
  return (
    <div className="px-0 lg:px-28 w-full h-full flex flex-col items-center justify-center gap-6">
      <div className="bg-white w-full rounded-md flex gap-4">
        <div
          className={`w-full text-center p-3 font-medium text-xs md:text-sm lg:text-base pb-1 ${ active === 'free' ? 'text-[#A30162] border-b-2 border-[#a30162] bg-white' : 'bg-[#FAFAFA] text-[#4B5563]'}`} onClick={() => setActive('free')}>Free Events
        </div>
        <div
          className={`w-full text-center p-3 font-medium text-xs md:text-sm lg:text-base pb-1 ${ active === 'paid' ? 'text-[#A30162] border-b-2 border-[#a30162] bg-white' : 'bg-[#FAFAFA] text-[#4B5563]'}`} onClick={() => setActive('paid')}>Paid Events
        </div>
      </div>

      {active === 'free' && <Free />}
      {active === 'paid' && <Paid />}

      <span className="text-[#0D080B] font-bold text-base md:text-2xl">
        Why EventCove?
      </span>
      <EventCove />
      {active === 'paid' && <PayoutInfo />}
    </div>
  );
}