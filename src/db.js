import img1 from "./icons/ticket.svg"
import img2 from "./icons/briefcase.svg"
import img3 from "./icons/money-2.svg"
import img4 from "./icons/brush.svg"
export const cards = [
  {
    id: 1,
    image:img1,
    title: "Effortless Ticketing",
    description: "Set up your event in minutes and start selling tickets with an intuitive platform that handles it al."
  },
  
  {
    id: 2,
    image:img2,
    title: "Smart Event Management",
    description: "From registrations to real-time analytics, manage your event like a pro with powerful tools."
  },

  {
    id: 3,
    image:img3,
    title: "Secure Payments",
    description: "Enjoy safe, seamless transactions with multiple payment options for attendees."
  },

  {
    id: 4,
    image:img4,
    title: "Customizable Branding",
    description: "Make your event truly yours with personalized themes, ticket designs, and marketing tools."
  }
]


export const faqs = [
  {
    id: 1,
    question: "How do I create my first event?",
    answer: "To create an event, click the Create Event button and provide the requested details."
  },
  {
    id: 2,
    question: "What payment options are available?",
    answer: "Available payment options include card, transfer, USSD, and other convenient methods."
  },
  {
    id: 3,
    question: "Can I customize my ticket design?",
    answer: "At the moment, you cannot customize the design for email. However, your event details will be displayed in the ticket email sent to attendees."
  }
]

import icon1 from "./images/rose.webp"
import icon2 from "./images/Oluwatunmise.webp"

export const reviews = [
  {
    id: 1,
    image: icon1,
    comment: "EventCove makes event planning easy with a user-friendly interface, effortless ticketing, and smart event management. Customizable branding, an awesome plus. Great for organizers!",
    name: "Rose Adeyinka",
    address: "Lagos, Nigeria"
  },

  {
    id: 2,
    image: icon2,
    comment: "Eventcove has really been an helpful platform for me to purchase my event ticket without any hassle. I will definitely recommend anytime anywhere",
    name: "Oluwatunmise Akinola",
    address: "Lagos, Nigeria"
  }
]

export const clients =[
  {
    id: 1,
    image: icon1,
    rate: 5
  },

  {
    id: 2,
    image: icon2,
    rate: 5
  }
]


import logo1 from "./icons/secure.svg"
import logo2 from "./icons/dashboard.svg"
import logo3 from "./icons/support.svg"
import logo4 from "./icons/built.svg"
export const events = [
  {
    id: 1,
    image: logo1,
    title: "Secure Transactions",
    description: "All payments are securely processed with trusted financial partners"
  },

  {
    id: 2,
    image: logo2,
    title: "Real-time Dashboard",
    description: "Track ticket sles attendee data in real-time"
  },

  {
    id: 3,
    image: logo3,
    title: "Human Support",
    description: "Get help from our team whenever you need it"
  },

  {
    id: 4,
    image: logo4,
    title: "Built for Africa",
    description: "Optimized for the African market with local payment options"
  },
]

export const category= [
  {
    id: 1,
    title: "Conference"
  },

  {
    id: 2,
    title: "Party"
  },

  {
    id: 3,
    title: "Religious"
  },

  {
    id: 4,
    title: "Comedy"
  },

  {
    id: 5,
    title: "Food Fest"
  },

  {
    id: 6,
    title: "Others"
  }
]


import { CiLocationOn } from "react-icons/ci";
import { TfiAlarmClock } from "react-icons/tfi";
import { PiCalendarLight } from "react-icons/pi";
import Img1 from "./images/bpjt7tk0mtfc4hyb8bgk.webp"
import Img2 from "./images/lthxarolxrvhsjbqazko.webp"
export const upcoming =[
  {
    id: 1,
    title: "Sharon's Birthday Picnic",
    image: Img1,
    svg1: <CiLocationOn />,
    location: "Johnson Jakande Tinubu (JJT) Park Lagos",
    date: "Sat, 23 Aug 2025",
    svg2: <PiCalendarLight />,
    time: "2:00pm",
    svg3:<TfiAlarmClock />
  },

  {
    id:2,
    title: "Food",
    image: Img2,
    svg1: <CiLocationOn />,
    location: "Ck zango road tudun wada kaduna Kaduna",
    date: "Fri, 18 Apr 2025",
    svg2: <PiCalendarLight />,
    time: "1:30pm",
    svg3:<TfiAlarmClock />
  },
]

export const selectState = [
  { id: 1, name: "Lagos", country: "Nigeria" },
  { id: 2, name: "Nairobi", country: "Kenya" },
  { id: 3, name: "Cape Town", country: "South Africa" },
  { id: 4, name: "Cairo", country: "Egypt" },
  { id: 5, name: "Accra", country: "Ghana" },
  { id: 6, name: "Addis Ababa", country: "Ethiopia" },
  { id: 7, name: "Kampala", country: "Uganda" },
  { id: 8, name: "Dar es Salaam", country: "Tanzania" },
  { id: 9, name: "Abuja", country: "Nigeria" },
  { id: 10, name: "Casablanca", country: "Morocco" },
  { id: 11, name: "Dakar", country: "Senegal" },
  { id: 12, name: "Algiers", country: "Algeria" },
  { id: 13, name: "Tunis", country: "Tunisia" },
  { id: 14, name: "Luanda", country: "Angola" },
  { id: 15, name: "Harare", country: "Zimbabwe" },
];