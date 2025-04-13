import Image from "next/image"
import Offer from "../../images/offer_bg.webp"
import Calendar from "../../images/calendar.svg"
import Checked from "../../icons/checked.svg"
import Checked1 from "../../icons/checked.svg"
import Checked2 from "../../icons/checked.svg"
export default function About() {
  return (
    <div className="w-full h-full">
      <div className="container mx-auto w-full px-3 py-4 flex flex-col lg:flex-row justify-around lg:justify-between items-center gap-4 h-full pt-8 md:pt-16 lg:pt-36">
        <div className="w-full flex flex-col gap-4 text-center lg:text-left">
          <h1 className="font-bold text-base md:text-xl lg:text-2xl text-[#0D080B]">
            Plan. Promote. Sell. <span className="text-[#A30162]">Engage.</span>
          </h1>
          <p className="text-[#767779] text-sm md:text-base font-normal">
            Take control of your events with our all-in-one platform. Whether it's a concert, conference, workshop, or festival, we've got everything you need to succeed.
          </p>

          <div className="flex flex-col gap-3 text-xs md:text-sm text-left">
            <div className="flex gap-3 items-center">
              <Image src={Checked}
                className="object-contain"
                width={20}
                height={20}
                alt="Checked-icon" />
              <h3 className="text-[#0D080B]">Effortless Ticketing: Create and sell tickets in minutes.</h3>
            </div>
            <div className="flex gap-3 items-center">
              <Image src={Checked1}
              className="object-contain"
              width={20}
              height={20}
              alt="Checked-icon" />
              <h3 className="text-[#0D080B]">Smart Event Management: Streamline planning and attendee tracking.</h3>
            </div>
            <div className="flex gap-3 items-center">
              <Image src={Checked2}
              className="object-contain"
              width={20}
              height={20}
              alt="Checked-icon" />
              <h3 className="text-[#0D080B]">Powerful Promotion Tools: Reach the right audience with built-in marketing.</h3>
            </div>
          </div>
        </div>

        <div className="w-full relative justify-center md:mt-0 my-8">
          <Image
            className="object-contain w-full h-auto"
            width={593}
            height={402}
            sizes="(max-width: 1024px) 100vw, 50vw"
            src={Offer}
            alt="Offer-img"
          />
          <Image
            className="absolute object-contain left-0 top-0 hidden lg:block animate-zoomInOut"
            width={150}
            height={200}
            src={Calendar}
            alt="Calendar-img"
            style={{ color: "transparent" }}
          />
        </div>
      </div>
    </div>
  );
}