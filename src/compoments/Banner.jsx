import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import bgImg from "../../public/images/Rectangle 1.png";
import HeroSlider from "./HeroSlider";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div
      className="hero  min-h-screen p-0 overflow-hidden w-full "
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-black/70 "></div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center lg:items-center  gap-5 m-0 lg:pl-20 md:pl-10 md:gap-3 pl-0 md:py-30 py-6">
        {/* left side  */}
        <div className="left-side w-full md:w-[40%] lg:w-[50%] md:max-w-md text-left md:text-left md:p-0 px-5 pr-60">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white">Cox's bazar</h1>
          <p className="text-white py-5 text-sm sm:text-base w-full">
            Cox's Bazar is a city, fishing port, tourism centre and district
            headquarters in southeastern Bangladesh. It is famous mostly for its
            long natural sandy beach, and it ...
          </p>
          <Link to={`/booking`} className="btn bg-secondary border-0 px-6">
            Booking <FaArrowRightLong />
          </Link>
        </div>

        <div className="right-side w-full md:w-[60%] lg:w-[45%] md:pr-0  md:px-0 px-5 pr-30">
          <HeroSlider  className="z-5"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
