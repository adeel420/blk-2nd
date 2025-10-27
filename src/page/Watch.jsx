import React, { useState } from "react";
import Header from "../components/Header";
import { assets } from "../assets/assets";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Play } from "lucide-react";

// Reusable TourRow component
const TourRow = ({ title, venue, date }) => {
  return (
    <section className={`w-full mt-6  text-center`} aria-label={title}>
      <h2 className="mx-auto max-w-4xl text-xl md:text-5xl lg:text-5xl font-normal uppercase tracking-wide">
        {title}
      </h2>

      <p className="mt-3 md:mt-4 text-sm md:text-base opacity-80 font-serif italic">
        <span className="uppercase not-italic font-sans opacity-70">
          Venue:
        </span>{" "}
        {venue}
        <span className="ml-4 uppercase not-italic font-sans opacity-70">
          Date:
        </span>{" "}
        {date}
      </p>

      <div className="flex items-center justify-center mt-4 w-full gap-0">
        {/* Left line */}
        <div className="flex-1 border-1 border border-dotted"></div>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-1 font-bold">
          {/* <button className="rounded-full border border-gray-500 text-white px-4 md:px-5 py-1.5 text-[11px] md:text-xs uppercase tracking-wider bg-transparent hover:bg-gray-800 transition">
            Remind me
          </button> */}
          <button className="rounded-[5px] cursor-pointer px-4 md:px-5 py-1.5 text-[11px] md:text-xs uppercase tracking-wider bg-white text-black hover:bg-gray-200 transition">
            Get tickets
          </button>
        </div>

        {/* Right line */}
        <div className="flex-1 border-1 border border-dotted"></div>
      </div>
    </section>
  );
};

const Watch = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const tours = [
    {
      title: "KRAKÓW, POLAND",
      venue: "Tauron Arena Kraków",
      date: "November, 17, 2025",
    },
    {
      title: "PRAGUE, CZECHIA",
      venue: "Sportovní hala Fortuna",
      date: "November, 19, 2025",
    },
    {
      title: "ZÜRICH, SWITZERLAND",
      venue: "Hallenstadion",
      date: "November, 26, 2025",
    },
    {
      title: "ANTWERPEN, BELGIUM",
      venue: "Sportpaleis",
      date: "December, 04, 2025",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[100px] md:h-[9vh] overflow-hidden bg-black flex items-center justify-center">
        {/* Background Video */}

        {/* Foreground Content */}
        <div className="absolute inset-0 flex flex-col justify-between z-[3] pointer-events-none">
          <div className="pointer-events-auto">
            <Header />
          </div>
        </div>
      </div>

      {/* 2nd Section */}
      <div className=" bg-black text-white flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-16 pb-4  ">
        <img
          src={assets.textLogo}
          alt="BLKNWS Logo"
          className="h-[70px] ml-[-18px] md:ml-0 sm:h-[100px] md:h-[130px] object-contain "
        />
        <h1
          className="
    text-2xl sm:text-2xl md:text-5xl lg:text-7xl xl:text-[50px]
    flex flex-wrap items-center justify-center gap-4 font-bold sm:gap-6 md:gap-8 lg:gap-[30px]
    text-center
  "
        >
          <span>W A T C H</span>
          <span>A T</span>
          <span>H O M E</span>
        </h1>

        {/* <img
          src={assets.watch2}
          alt="BLKNWS Secondary"
          className="h-[40px] sm:h-[40px] md:h-[100px] w-[220px] sm:w-[220px] md:w-[360px] object-contain"
        /> */}

        {/* Custom Select Box */}
        <div className="relative inline-block w-full max-w-[320px] mt-4 sm:mt-6">
          <select
            className="w-full select border border-white bg-transparent text-white text-center px-6 py-3 sm:py-3.5 md:py-4 rounded-md appearance-none cursor-pointer hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition option-center"
            onClick={() => setIsOpen(!isOpen)}
            onBlur={() => setIsOpen(false)}
          >
            <option value="" className="bg-black text-white option">
              PRE-ORDER COMING SOON
            </option>
            {/* <option value="" className="bg-black text-white option">
              AVAILABLE SOON
            </option>
            <option value="" className="bg-black text-white option">
              JOIN WAITLIST
            </option>
            <option value="" className="bg-black text-white option">
              EXCLUSIVE ACCESS
            </option> */}
          </select>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white">
            {isOpen ? (
              <FaChevronUp className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200" />
            ) : (
              <FaChevronDown className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200" />
            )}
          </div>
        </div>
      </div>

      {/* 3rd Section */}
      <div className=" mt-[100px] bg-black text-white flex flex-col items-center px-4 pt-6 sm:px-8 md:px-12 lg:px-16  ">
        <h1
          className="
    text-2xl sm:text-2xl md:text-5xl lg:text-7xl xl:text-[50px]
    flex flex-wrap items-center justify-center gap-4 font-bold sm:gap-6 md:gap-8 lg:gap-[30px]
    text-center
  "
        >
          <span>W A T C H</span>
          <span>I N</span>
          <span>T H E A T E R</span>
        </h1>
        {/* <img
          src={assets.watch3}
          alt="BLKNWS Secondary"
          className="h-[60px] sm:h-[90px] md:h-[100px] w-[240px] sm:w-[300px] md:w-[560px] object-contain"
        /> */}
      </div>

      {/* <img src={assets.watch4} alt="BLKNWS Secondary" /> */}

      {/* Tour Section */}
      <main className="  w-full mt-[-90px] bg-black text-white">
        <div className="h-24 md:h-28 w-full lg:h-32" />
        <div className="w-full">
          <div className="" aria-hidden="true" />
          {tours.map((t, idx) => (
            <TourRow
              key={t.title}
              title={t.title}
              venue={t.venue}
              date={t.date}
            />
          ))}
        </div>
      </main>

      {/* Final Section */}
      <div className=" mt-[100px]  bg-black text-white flex flex-col items-center px-4 sm:px-8 md:px-12 lg:px-16 p-10 md:py-16">
        <h1
          className="
    text-2xl sm:text-2xl md:text-5xl lg:text-7xl xl:text-[50px]
    flex flex-wrap items-center justify-center gap-4 font-bold sm:gap-6 md:gap-8 lg:gap-[30px]
    text-center
  "
        >
          <span>H O S T</span>
          <span>A</span>
          <span>S C R E E N I N G</span>
        </h1>
        {/* <img
          src={assets.watch5}
          alt="BLKNWS Secondary"
          className="h-[60px] sm:h-[90px] md:h-[100px] w-[220px] sm:w-[320px] md:w-[480px] lg:w-[560px] object-contain mb-6 sm:mb-8"
        /> */}
        <div className="flex flex-col mt-8 sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-[600px]">
          <button className="w-full sm:w-auto flex-1 border border-white bg-transparent text-white text-center px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all duration-200">
            HOST VIA KINEMA
          </button>
          <button className="w-full sm:w-auto flex-1 border border-white bg-transparent text-white text-center px-8 sm:px-10 md:px-12 py-3 sm:py-3.5 md:py-4 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40 transition-all duration-200">
            DIRECT ENQUIRY
          </button>
        </div>
      </div>
    </>
  );
};

export default Watch;
