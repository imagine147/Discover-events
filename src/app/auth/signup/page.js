"use client"
import {useState} from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Link from "next/link";
import Event from "../../../icons/Event-logo.svg"
import AuthImage from "../../../components/reusable/authImg";
import { GrHide } from "react-icons/gr";
import { MdOutlineCancel } from "react-icons/md";
import Logo from "../../../icons/google-Xto8FEj0.svg"
export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, watch, formState: { errors,}} = useForm()
    const onSubmit = (data) => {
      // TODO: Send the form data to the server
      console.log(data)
  
      
    }
  return (
    <div className="w-full h-full">
    <div className="bg-white h-[68px] w-full px-6 flex items-center rounded-md shadow-sm">
      <Link href="/"><Image src={Event} className="h-8 cursor-pointer" alt="eventcove-logo" loading="lazy" aria-hidden="true"/></Link>
    </div>
    <div className="flex-1 overflow-hidden px-6 py-4">
      <div className="flex h-screen bg-white p-4 rounded-xl shadow-lg">
        <div className="flex-1 puy-3 px-0 md:px-6 overflow-auto">
          <div className="w-full h-full" style={{opacity: "1", transform: "none"}}>
            <div className="w-full flex flex-col-reverse md:flex-row items-end md:items-center justify-between gap-1">
              <div className="flex flex-col gap-1 self-start">
                <h3 className="self-start text-[#0D080B] text-xl lg:text-2xl font-bold">Create an account</h3>
                <p className="text-[#0D080B] text-sm lg:text-base self-start">Creating an account with eventcove is free, get started today!</p>
              </div>
            </div>

            <form action='' id="signup" className="w-full mt-1 lg:pr-16 text-[#0D080B]" onSubmit={handleSubmit (onSubmit)}>
              <div className="mb-3">
                <div className="flex flex-col">
                  <label htmlFor="firstname" className="text-xs text-[#0D080B] leading-5 flex items-center">First Name</label>
                  <input 
                  {...register('firstName', {
                    required: 'Firstname is required',
                    pattern: {
                      value: /^[a-zA-Z]+(?:(?:|['_\. ])([a-zA-Z]*(\.\s)?[a-zA-Z])+)*$/,
                      message: 'Please enter a valid first name',
                    },
                  })}
                  type="text" id="firstname" name="firstName" placeholder="" className="h-[44px] w-full bg-white border border-[#0000001f] accent-auto text-sm rounded-md outline-none px-2 placeholder:text-[#0D080B] placeholder:text-sm" />
                  {errors.firstName && (
                  <span className="text-red-500 text-[12px]">{errors.firstName.message}</span>
                )}
                </div>
              </div>
              <div className="mb-3">
                <div className="flex flex-col">
                  <label htmlFor="lastname" className="text-xs text-[#0D080B] leading-5 flex items-center">Last Name</label>
                  <input 
                  {...register('lastName', {
                    required: 'Lastname is required',
                    pattern: {
                      value: /^[a-zA-Z]+(?:(?:|['_\. ])([a-zA-Z]*(\.\s)?[a-zA-Z])+)*$/,
                      message: 'Please enter a valid last name',
                    },
                  })}
                  type="text" id="lastname" name="lastName" placeholder="" className="h-[44px] w-full bg-white border border-[#0000001f] accent-auto text-sm rounded-md outline-none px-2 placeholder:text-[#0D080B] placeholder:text-sm" />
                  {errors.lastName && (
                  <span className="text-red-500 text-[12px]">{errors.lastName.message}</span>
                )}
                </div>
              </div>
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
                  type="email" id="email" name="email" placeholder="" className="h-[44px] w-full bg-white border border-[#0000001f] accent-auto text-sm rounded-md outline-none px-2 placeholder:text-[#0D080B] placeholder:text-sm" />
                  {errors.email && (
                  <span className="text-red-500 text-[12px]">{errors.email.message}</span>
                )}
                </div>
              </div>
              <div className="mb-1">
                <div className="">
                  <label htmlFor="password" className="text-xs leading-4 text-[#0D080B] font-normal">Password
                  <div className="relative w-full">
                    <input 
                    {...register('password', {
                      required: 'Password is required',
                      minLength: {
                        value: 8,
                        message: 'Password must be at least 8 characters long',
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message: 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
                      },
                    })}
                    type={showPassword ? "text" : "password"} name="password" id="password" className="block w-full h-[44px] text-[#0D080B] text-sm px-2 border border-[#0000001f] rounded-lg outline-none" placeholder="" aria-label="password"/>
                    {errors.password && (
                  <span className="text-red-500 text-[12px]">{errors.password.message}</span>
                )}
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center" aria-hidden="true">
                      <GrHide className="cursor-pointer" size={24} style={{color: '#767779'}} fill="none" onClick={() => setShowPassword(!showPassword)}/>
                    </div>
                  </div>
                  </label>
                </div>
              </div>
              <ul className="flex flex-col gap-1">
                <li className="flex items-center text-[#0A162D] text-xs gap-1"><MdOutlineCancel className="text-red-500" width={12} height={12}/>Minimum of 8 characters</li>
                <li className="flex items-center text-[#0A162D] text-xs gap-1"><MdOutlineCancel className="text-red-500" width={12} height={12}/>One UPPERCASE character</li>
                <li className="flex items-center text-[#0A162D] text-xs gap-1"><MdOutlineCancel className="text-red-500" width={12} height={12}/>One lowercase character</li>
                <li className="flex items-center text-[#0A162D] text-xs gap-1"><MdOutlineCancel className="text-red-500" width={12} height={12}/>One number</li>
                <li className="flex items-center text-[#0A162D] text-xs gap-1"><MdOutlineCancel className="text-red-500" width={12} height={12}/>One unique character (e.g !@#$%&*)?</li>
              </ul>
              <div className="mb-1">
                <div>
                <label htmlFor="confirmPassword" className="text-xs leading-4 text-[] font-normal">Confirm Password
                <div className="relative w-full">
                  <input 
                  {...register('confirmPassword', {
                      required: 'Confirm password is required',
                      validate: (value) => value === watch('password') || 'Passwords do not match',
                    })}
                  type={showPassword ? "text" : "password"} name="confirmPassword" id="confirmPassword" className="block w-full h-[44px] text-[#0D080B] text-sm px-2 border border-[#0000001f] rounded-lg outline-none" placeholder="" aria-label="Confirm Password"/>
                  {errors.confirmPassword && (
                  <span className="text-red-500 text-[12px]">{errors.confirmPassword.message}</span>
                )}
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center" aria-hidden="true">
                    <GrHide className=" cursor-pointer" style={{color: '#767779'}} size={24} fill="none" onClick={() => setShowPassword(!showPassword)}/>
                  </div>
                </div>
                </label>
                </div>
              </div>
              <button className="flex flex-row gap-2 rounded-md items-center justify-center p-4 h-[39px] md:h-[40px] hover:bg-opacity-90 font-medium leading-5 text-xs md:text-base w-full text-center my-6 border border-[#0d080b] bg-[#A30162] opacity-100 text-white" type="submit">
                              <p className="text-base text-white leading-5 font-medium">Sign Up</p>
                            </button>
              
                            <div className="cursor-pointer w-full border border-[#0000001f] h-[45px] rounded-r-lg flex items-center justify-center gap-3 mb-3">
                              <Image src={Logo} alt="google-logo" className="w-5 h-5" />
                              <h4 className="text-s text-[#0D080B] font-normal">Sign In with Google</h4>
                            </div>
                            <h4 className="text-sm font-semibold text-[#767779]">Already have an account?<Link href="/auth/login"><span className="text-[#FF9500] font-bold hover:underline cursor-pointer"> Sign in</span></Link></h4>
                            <h4 className="text-sm font-medium text-[#767779] mt-3">By continuing, you agree to EventCove's Terms and <Link href="https://eventcove-africa.gitbook.io/legal/eventcove-privacy-policy" target="_blank" rel="noopener noreferrer"><span className="text-[#FF9500] font-bold hover:underline cursor-pointer"> Privacy Policy.</span></Link></h4>
            </form>
          </div>
        </div>
        <AuthImage/>
      </div>
    </div>

    </div>
  )
}