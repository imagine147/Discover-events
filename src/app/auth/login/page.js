"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Event from "../../../icons/Event-logo.svg"
import Logo from "../..//../icons/google-Xto8FEj0.svg";
import { GrHide } from "react-icons/gr";
import AuthImage from "../../../components/reusable/authImg"
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-full h-screen">
      <div className="bg-white h-[68px] w-full px-6 flex items-center rounded-md shadow-sm">
      <Link href="/"><Image src={Event} className="h-8 cursor-pointer" alt="eventcove-logo" loading="lazy" aria-hidden="true"/></Link>
    </div>
    <div className="flex-1 overflow-hidden px-6 py-4">
    <div className="flex h-full bg-white p-4 rounded-xl shadow-lg">
      <div className="flex-1 py-3 px-0 md:px-6 overflow-auto">
        <div className="w-full h-full flex flex-col items-center lg:justify-center" style={{opacity: 1, transform: "none"}}>
          <h3 className="self-start text-[#0D080B] text-xl lg:text-2xl mb-1 font-bold">Welcome back 🙌</h3>
          <p className="text-[#0D080B] text-sm lg:text-base self-start">Please proceed with the email address used to register your account.</p>

          <form action="#" className="w-full mt-1 lg:pr-16">
            <div className="mb-3">
              <div className="flex flex-col">
                <label className="text-xs text-[#0D080B] leading-5 flex items-center">Email</label>
                <input type="text" name="email" placeholder="" className="h-[44px] w-full bg-white border border-[#0000001f] accent-auto text-[#0D080B] text-sm rounded-md outline-none px-2 placeholder:text-sm placeholder:text-[#0D080B]"></input>
              </div>
            </div>

            <div className="mb-1">
              <div className="">
                <label className="text-xs leading-4 text-[#0D080B] font-normal">Password</label>
                <div className="relative w-full">
                <input type={showPassword ? "text" : "password"} name="password" id="password" className="block w-full h-[44px] text-[#0D080B] text-sm px-2 border border-[#0000001f] rounded-lg outline-none" placeholder="" aria-label="password" />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center" aria-hidden="true">
                <GrHide className="w-7 h-7 text-[#767779] cursor-pointer" width={32} height={32} fill="none" onClick={() => setShowPassword(!showPassword)}/>
                </div>
                </div>
              </div>
              </div>
              <h4 className="text-xs font-normal text-[#FF9500] cursor-pointer hover:underline">Forget Password</h4>
              <button className="flex flex-row gap-2 rounded-md items-center justify-center p-4 h-[39px] md:h-[40px] hover:bg-opacity-90 font-medium leading-5 text-xs md:text-base w-full text-center my-6 border border-[#0d080b] bg-[#A30162] opacity-100 text-white" type="submit">
                <p className="text-base text-white leading-5 font-medium">Sign In</p>
              </button>

              <div className="cursor-pointer w-full border border-[#0000001f] h-[45px] rounded-r-lg flex items-center justify-center gap-3 mb-3">
                <Image src={Logo} alt="google-logo" className="w-5 h-5" />
                <h4 className="text-s text-[#0D080B] font-normal">Sign In with Google</h4>
              </div>
              <h4 className="text-sm font-semibold text-[#767779]">Don’t have an account?<span className="text-[#FF9500] font-bold hover:underline cursor-pointer"> Create one</span></h4>
          </form>
        </div>
      </div>
      <AuthImage/>
    </div>
  </div>
    </div>
  )
}