import React from "react";
import Header from "../components/Header";
import { Instagram, Paperclip } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

// Utility for merging classNames (optional)
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ITEMS = [
  { title: "BECOMING CHASE STOKES", date: "January 2025" },
  { title: "WEST MULHOLLAND: FROM SET TO SEMINAR", date: "January 2025" },
  { title: "ANTONI POROWSKI IS SENTIMENTAL", date: "January 2025" },
  {
    title: "KELVIN HARRISON JR.’S GOT GOOD DAYS ON HIS MIND",
    date: "December 2024",
  },
  {
    title: "CHARLES VANDERVAART ON TRAVEL, GROWTH AND BELONGING",
    date: "January 2025",
  },
  { title: "NOAH BECK’S NEXT ACT", date: "January 2025" },
  { title: "JOE LOCKE IN REAL LIFE", date: "October 2024" },
  { title: "YOU’VE GOT A FRIEND IN CHANDLER KINNEY", date: "October 2024" },
  { title: "SOMETHING TO LIVE FOR: FROY GUTIERREZ", date: "June 2024" },
  { title: "SNACK SHACK’S CONNOR SHERRY ON TENAGEISM", date: "March 2024" },
  { title: "PORTRAIT OF AN ARTIST: DEREK LUH", date: "February 2024" },
  { title: "LESSONS FROM DAVID IACONO", date: "February 2024" },
  { title: "LOLA TUNG, SUMMER KIND OF WONDERFUL", date: "June 2023" },
  { title: "GRACE IS HERE", date: "January 2023" },
  { title: "YOUTHQUAKE ON THE BROADWAY", date: "December 2022" },
  {
    title: "SCROLLING THROUGH TIK TOK WITH ADAM DIMARCO",
    date: "December 2022",
  },
  { title: "IMPERFECTIONS WITH JOE", date: "June 2022" },
];

const Community = () => {
  const [user, setUser] = useState("");

  const handleGet = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/user/login-data`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      console.log(response.data);
      setUser(response.data);
    } catch (Err) {
      console.log(Err);
    }
  };

  useEffect(() => {
    handleGet();
  }, []);
  return (
    <div className="bg-black ">
      <Header />

      <div className="bg-black text-white min-h-screen px-2 sm:px-2 md:px-2 py-6 flex flex-col items-center">
        {/* Header Section */}
        <h1 className="right-[2%] font-normal self-end mb-4 text-2xl top-[15%] mr-2 ">
          Welcome <b>{user.name}</b>
        </h1>

        {/* List Section */}
        <section className="w-full max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            BYLINE Highlights
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mt-2">
            (Note: this is not the entirety of my work)
          </p>

          <ul className={cn("space-y-4 mt-6")}>
            {ITEMS.map((item, i) => (
              <li
                key={i}
                className="text-gray-300 text-sm sm:text-base md:text-lg leading-snug flex flex-wrap gap-1"
              >
                <a
                  href={item.href || "#"}
                  className="inline-block border-b border-white/40 hover:border-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-sm underline-offset-2"
                >
                  {item.title}
                </a>
                <span className="italic opacity-80">, {item.date}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Community;
