"use client"
import { useEffect } from 'react'
import { animate } from 'framer-motion'
import Image from 'next/image'
import Auth from "../../images/auth-bg-B63U7tW6.png"
import Brand from "../../icons/brush.svg"
import Smart from "../../icons/briefcase.svg"
import Ticket from "../../icons/ticket.svg"
import Payment from "../../icons/money-2.svg"

export default function AuthImage() {
   // Trigger animations using the `animate` function from 'motion'
    useEffect(() => {
      animate(".animate-zoomInOut", { scale: [1, 1.1, 1] }, { duration: 2, repeat: Infinity });
      animate(".animate-slide-right", { x: [0, 20, 0] }, { duration: 2, repeat: Infinity });
      animate(".animate-float", { y: [0, -10, 0] }, { duration: 2, repeat: Infinity });
    }, []);
  return (
    <div className="hidden lg:block flex-1 relative text-black h-screen">
      <Image src={Auth} alt="auth-img" className='w-full h-full object-cover rounded-xl' loading='lazy'/>
      <div className='w-[220px] min-h-[70px] h-auto rounded-md absolute shadow-lg p-4 bg-white animate-bounce' style={{top: "5rem", left: "-5rem"}}>
        <Image className='mb-2 w-6 h-6' src={Brand} alt="branding-icon"/>
        <h4 className='text-sm font-normal'>Customizable Branding</h4>
      </div>
      <div className='w-[220px] min-h-[70px] h-auto rounded-md absolute shadow-lg p-4 bg-white animate-slide-right' style={{top: "50%", right: "2rem", transform: "translateY(-50%)"}}>
        <Image className='mb-2 w-6 h-6' src={Smart} alt="management-icon"/>
        <h4 className='text-sm font-normal'>Smart Event Management</h4>
      </div>
      <div className='w-[220px] min-h-[70px] h-auto rounded-md absolute shadow-lg p-4 bg-white animate-float' style={{bottom: "6rem", left: "2rem"}}>
        <Image className='mb-2 w-6 h-6' src={Ticket} alt="Ticketting-icon"/>
        <h4 className='text-sm font-normal'>Effortless Ticketing</h4>
      </div>
      <div className='w-[220px] min-h-[70px] h-auto rounded-md absolute shadow-lg p-4 bg-white animate-zoomInOut' style={{bottom: "2rem", right: "2rem"}}>
        <Image className='mb-2 w-6 h-6' src={Payment} alt="payment-icon"/>
        <h4 className='text-sm font-normal'>Secure Payments</h4>
      </div>
    </div>
  )
}