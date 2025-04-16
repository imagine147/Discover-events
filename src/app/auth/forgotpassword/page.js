"use client";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import Event from "../../../icons/Event-logo.svg"
import { BsArrowLeft } from "react-icons/bs";
import AuthImage from "../../../components/reusable/authImg"
export default function ForgotPassword() {
  const { register, handleSubmit, formState: { errors,}} = useForm()
  const onSubmit = (data) => {
    // TODO: Send the form data to the server
    console.log(data)  
  }

  const handleBack = () => {
    window.history.back();
  };
  
  return (
    <div className="w-full h-screen">
      <div className="bg-white h-[68px] w-full px-6 flex items-center rounded-md shadow-sm">
      <Link href="/"><Image src={Event} className="h-8 cursor-pointer" alt="eventcove-logo" loading="lazy" aria-hidden="true"/></Link>
    </div>
    <div className="flex-1 overflow-hidden px-6 py-4">
    <div className="flex h-screen bg-white p-4 rounded-xl shadow-lg">
      <div className="flex-1 py-3 px-0 md:px-6 overflow-auto">
        <div className="w-full h-full flex flex-col items-center lg:justify-center" style={{opacity: 1, transform: "none"}}>
          <h3 className="self-start text-[#0D080B] text-xl lg:text-2xl mb-1 font-bold">FORGET PASSWORD 📨</h3>
          <p className="text-[#0D080B] text-sm lg:text-base self-start">Please provide the email address used to create your account</p>

          <form id="forgotpassword" className="w-full mt-1 lg:pr-16" onSubmit={handleSubmit (onSubmit)}>
            <div className="mb-3">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-xs text-[#0D080B] leading-5 flex items-center">Email</label>
                <input 
                {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: 'Please enter a valid email address',
                    },
                  })}
                type="text" name="email" id="email"  className="h-[44px] w-full bg-white border border-[#0000001f] accent-auto text-[#0D080B] text-sm rounded-md outline-none px-2 placeholder:text-sm placeholder:text-[#0D080B]" />
                {errors.email && (
                  <span className="text-red-500 text-[12px]">{errors.email.message}</span>
                )}
              </div>
            </div>
              <button className="flex flex-row gap-2 rounded-md items-center justify-center p-4 h-[39px] md:h-[40px] hover:bg-opacity-90 font-medium leading-5 text-xs md:text-base w-full text-center my-6 border border-[#0d080b] bg-[#A30162] opacity-100 text-white" type="submit">
                <p className="text-base text-white leading-5 font-medium">Submit</p>
              </button>
              <h4 onClick={handleBack} className="text-sm font-normal flex gap-1 cursor-pointer" style={{color: '#767779'}} ><BsArrowLeft  style={{ width: '20px', height: '20px', color: "#767779" }}/>Back to previous</h4>
          </form>
        </div>
      </div>
      <AuthImage/>
    </div>
  </div>
    </div>
  )
}