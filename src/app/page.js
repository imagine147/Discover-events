import WhyUs from "@/components/why/whyUs";
import Image from "next/image";
import NavBar from "@/layouts/nav";
import Footer from "@/layouts/footer";
import CustomersReview from "@/components/review/customersReview";
import Hero from "@/components/home/hero";
import Faqs from "@/components/faq/questions";
import Events from "@/components/events/upcomingEvents";
import About from "@/components/about/aboutUs";



export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      <NavBar/>
      <div className="bg-[#F1F5F8]">
        <Hero/>
        <About/>
        <Events/>
        <WhyUs/>
        <CustomersReview/>
        <Faqs/>
      </div>
      <Footer/>
    </div>
  );
}
