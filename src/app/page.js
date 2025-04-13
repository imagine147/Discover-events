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
        <div id="home"><Hero/></div>
        <div id="about"><About/></div>
        <div id="event"><Events/></div>
        <div id="why"><WhyUs/></div>
        <div id="review"><CustomersReview/></div>
        <div id="faq"><Faqs/></div>
      </div>
      <Footer/>
    </div>
  );
}
