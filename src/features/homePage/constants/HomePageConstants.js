import { BotMessageSquare } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { GlobeLock } from "lucide-react";
import { MapPinned } from 'lucide-react';
import { Zap } from 'lucide-react';

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "/" },
  { label: "Explore our store", href: "/" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Assistance",
    description:
      "Get your queries resolved in time.",
  },
  {
    icon: <Fingerprint />,
    text: "Security",
    description:
      "Enhanced security using tokens and encryption.",
  },
  {
    icon: <ShieldHalf />,
    text: "Quality delivery",
    description:
      "We use trusted deliver partners.",
  },
  {
    icon: <MapPinned />,
    text: "Real-Time Tracking",
    description:
      "Track your order in real time.",
  },
  {
    icon: <Zap />,
    text: "Ultra fast delivery",
    description:
      "Get your order deivered in time.",
  },
  {
    icon: <GlobeLock />,
    text: "All in one place",
    description:
      "Find all the products you need in one place.",
  },
];

export const checklistItems = [
  {
    title: "Newly added customized Tata Play T-shirts",
    description:
      "Check out our new additions in the store.",
  },
  {
    title: "New vendors added",
    description:
      "Added Vendor X and Vendor Y.",
  },
  {
    title: "New brands added",
    description:
      "Explore Nike and Skechers products in our store.",
  },
  {
    title: "Track your delivery",
    description:
      "Receive order updates via email in real-time.",
  },
  {
    title: "Compatibility",
    description:
      "Works on any browser.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "https://www.tataplayfiber.com/", text: "Official Website" },
  { href: "https://www.tataplayfiber.com/about-us", text: "About Us" },
  { href: "https://www.tataplayfiber.com/contact-us", text: "Contact Us" },
  { href: "https://www.tataplayfiber.com/broadband-plans/mumbai", text: "Get Fiber" },
  { href: "#", text: "Send Your Query at: care@tataplayfiber.com" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];