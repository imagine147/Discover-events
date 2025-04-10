"use client"
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from "next/image"
import Logo from "../icons/Event-logo.svg"
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoCloseOutline } from 'react-icons/io5';




export default function NavBar() {
  const [activeLink, setActiveLink] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenubar = () => setMenuOpen(false);
  const openMenubar = () => window.innerWidth <= 1024 && setMenuOpen(!menuOpen);

  const navRef = useRef();
  const handleSetActive = (link) => {
    setActiveLink(link);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      closeMenubar();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  return (
    <nav className="sticky top-0 w-full z-50 bg-white shadow-sm">
      <div className="container w-full mx-auto flex justify-between items-center py-4 px-3 gap-5 lg:gap-10 cursor-pointer">
        <Link href="/">
          <Image src={Logo} alt="Event-Cove-logo" />
        </Link>
        <div className="flex items-center gap-5 lg:gap-10 cursor-pointer">
          <button className="md:hidden cursor-pointer" onClick={openMenubar}>
            {menuOpen ? (
              <IoCloseOutline className="w-[32px] h-[32px]" width={"1rem"} height={"1rem"} />
            ) : (
              <RxHamburgerMenu className="w-[32px] h-[32px]" width={"1rem"} height={"1rem"} />
            )}
          </button>

          <nav className="hidden md:flex pl-2 lg:pl-0">
            <ul className="flex gap-5 lg:gap-10" ref={navRef}>
              <li>
                <Link href="/#about" scroll={false} onClick={() => { handleSetActive('about'); closeMenubar(); }}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" onClick={() => { handleSetActive('events'); closeMenubar(); }}>
                  Events
                </Link>
              </li>
              <li>
                <Link href="/pricing" onClick={() => { handleSetActive('pricing'); closeMenubar(); }}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#faq" scroll={false} onClick={() => { handleSetActive('faq'); closeMenubar(); }}>
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => { handleSetActive('contact'); closeMenubar(); }}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <nav
            className={`absolute top-full left-0 w-full bg-white shadow-lg p-5 md:hidden flex flex-col gap-4 z-50 ${
              menuOpen ? 'block opacity-100 w-[280px] right-0' : 'hidden opacity-0 top-[100%]'
            }`}
          >
            <div className="flex flex-col gap-5" ref={navRef}>
              <Link href="/#about" scroll={false} onClick={() => { handleSetActive('about'); closeMenubar(); }}>
                <button className="w-full text-base text-start font-medium text-[#767779] hover:text-[#a30162] transition-colors border-b border-[#767779] pb-4">
                  About Us
                </button>
              </Link>
              <Link href="/events">
                <button className="w-full text-base text-start font-medium text-[#767779] hover:text-[#a30162] transition-colors border-b border-[#767779] pb-4">
                  Events
                </button>
              </Link>
              <Link href="/pricing">
                <button className="w-full text-base text-start font-medium text-[#767779] hover:text-[#a30162] transition-colors border-b border-[#767779] pb-4">
                  Pricing
                </button>
              </Link>
              <Link href="/#faq" scroll={false} onClick={() => { handleSetActive('faq'); closeMenubar(); }}>
                <button className="w-full text-base text-start font-medium text-[#767779] hover:text-[#a30162] transition-colors border-b border-[#767779] pb-4">
                  FAQs
                </button>
              </Link>
              <Link href="/contact">
                <button className="w-full text-base text-start font-medium text-[#767779] hover:text-[#a30162] transition-colors border-b border-[#767779] pb-4">
                  Contact Us
                </button>
              </Link>

              <div className="w-full flex gap-3 cursor-pointer text-sm font-medium">
                <Link href="/auth/login" className='w-1/2'>
                  <button className="w-full px-4 py-3 border border-[#A30162] text-[#A30162] bg-white rounded-xl">
                    Login
                  </button>
                </Link>
                <Link href="/auth/signup" className='w-1/2'>
                  <button className="w-full px-4 py-3 rounded-xl bg-[#A30162] text-white">
                    Create Event
                  </button>
                </Link>
              </div>
            </div>
          </nav>
        </div>

        <div className="hidden md:flex gap-3 md:gap-5 cursor-pointer text-sm font-medium">
          <Link href="/auth/login">
            <button className="px-4 py-3 border border-[#A30162] text-[#A30162] bg-white rounded-xl">
              Login
            </button>
          </Link>
          <Link href="/auth/signup">
            <button className="px-4 py-3 rounded-xl bg-[#A30162] text-white">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}