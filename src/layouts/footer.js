import Image from "next/image"
import Logo from "../icons/Event-logo.svg"
import Twitter from "../icons/twitter (1).svg"
import Facebook from "../icons/facebook (2).svg"
import Instagram from "../icons/instagram (3).svg"
import Linkedin from "../icons/linkedin.svg"
import Link from 'next/link';
export default function Footer() {
  return (
    <div className="container mx-auto bg-white py-16 px-3 ">
      <div className="flex flex-col lg:flex-row gap-20">
      <div className="w-full lg:w-2/5 flex flex-col gap-4">
        <Link href="/"><div><Image src={Logo} alt="Event-Cove-logo"/></div></Link>
        <div className="w-full md:w-[60%] text-sm text-[#0D080B]">
          <p>Stay updated on exclusive events and unforgettable moments. 🎉 Sign up for our newsletter now!".</p>
        </div>
        <div className="w-full md:w-[50%] lg:w-[70%] bg-white flex p-1 md:p-2 border border-gray-300 rounded-md overflow-hidden">
          <input type="email" placeholder="Enter your email" className="w-full px-3 py-2 text-sm outline-none" />
          <button className="p-2 disabled:opacity-50 text-xs md:text-sm font-medium bg-[#A30162] text-white rounded-md" aria-label="Subscribe to newsletter" disabled>Subscribe</button>
        </div>
      </div>

      <div className="w-full lg:w-3/5 flex flex-col md:flex-row gap-6 justify-between">
        <div className="flex flex-col gap-5">
          <h3 className="text-base text-[#0D080B] font-bold">Company</h3>
          <ul className="flex flex-col gap-4">
            <li>About Us</li>
            <li>Events</li>
            <li>Pricing</li>
            <li>Contact Us</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-base text-[#0D080B] font-bold">Other Links</h3>
          <ul className="flex flex-col gap-4">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h3 className="text-base text-[#0D080B] font-bold">Connect with us</h3>
          <ul className="flex flex-col gap-4">
            <li className="text-sm text-[#0D080B] cursor-pointer flex items-center gap-2"><Image src={Twitter} alt="Twitter-icon"/>X</li>
            <li className="text-sm text-[#0D080B] cursor-pointer flex items-center gap-2"><Image src={Facebook} alt="Facebook-icon"/>Facebook</li>
            <li className="text-sm text-[#0D080B] cursor-pointer flex items-center gap-2"><Image src={Instagram} alt="Instagram-icon"/>Instagram</li>
            <li className="text-sm text-[#0D080B] cursor-pointer flex items-center gap-2"><Image src={Linkedin} alt="LinkedIn-icon"/>LinkedIn</li>
          </ul>
        </div>
      </div>
      </div>

      <p className="text-sm text-[#0D080B] mt-10">© 2025 EventCove Technology Inc. All rights reserved.</p>
    </div>
  )
}