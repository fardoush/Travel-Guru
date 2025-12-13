import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import bgImg from "../../public/images/Rectangle 1.png";

const BookingPage = () => {
  return (
    <div
      className="hero h-[calc(100vh-64px)]  p-0 overflow-hidden w-full "
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-black/70"></div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center lg:items-center  gap-5 m-0 lg:pl-20 md:pl-10 md:gap-3 pl-0 py-30">
        {/* left side  */}
        <div className="left-side w-full md:w-[40%] lg:w-[50%] md:max-w-md text-left md:text-left md:p-0 px-5 pr-60">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white">
            Cox's bazar
          </h1>
          <p className="text-white py-5 text-sm sm:text-base w-full">
            Cox's Bazar is a city, fishing port, tourism centre and district
            headquarters in southeastern Bangladesh. It is famous mostly for its
            long natural sandy beach, and it ...
          </p>
          <button className="btn bg-secondary border-0 px-6">
            Booking <FaArrowRightLong />
          </button>
        </div>

        <div className="right-side w-full md:w-[60%] lg:w-[45%] md:pr-0  md:px-0 px-5 pr-30">
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
            <div className="card-body">
              <form className="fieldset">
                <label className="label">Origin</label>
                <input
                  type="text"
                  name="origin"
                  className="input w-full"
                  placeholder="Origin"
                />
                <label className="label">Destination</label>
                <input
                  type="text"
                  name="destination"
                  className="input w-full"
                  placeholder="Destination"
                />
                <div className="flex justify-between items-center gap-6">
                  <div className="">
                    <label className="label">Form</label>
                    <input type="date" name="" className="input" />
                  </div>
                  <div className="">
                    <label className="label">To</label>
                    <input type="date" className="input" />
                  </div>
                </div>
                <button className="btn btn-neutral btn-secondary text-black mt-4">
                  Start Booking
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
