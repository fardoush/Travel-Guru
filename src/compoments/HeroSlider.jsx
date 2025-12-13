import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./HeroSlider.css";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      title: "Thailand Special Tour",
      description: "Enjoy the beaches, nightlife and food!",
      image: "../../public/images/Rectangle 1.png",
    },
    {
      id: 2,
      title: "Dubai Desert Safari",
      description: "Experience an Arabian adventure.",
      image: "../../public/images/Sreemongol.png",
    },
    {
      id: 3,
      title: "Maldives Premium Resort",
      description: "Relax in crystal clear waters.",
      image: "../../public/images/sundorbon.png",
    },
    {
      id: 4,
      title: "Thailand Special Tour",
      description: "Enjoy the beaches, nightlife and food!",
      image: "../../public/images/Sajek.png",
    },
    {
      id: 5,
      title: "Dubai Desert Safari",
      description: "Experience an Arabian adventure.",
      image: "../../public/images/Sreemongol.png",
    },
  ];

  return (
    <div className="w-full lg:max-w-[820px]  md:max-w-md max-w-md mx-0 pr-0">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2.3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {slides.map((item) => (
          <SwiperSlide key={item.id}>
            <div className=" bg-white rounded-2xl overflow-hidden shadow-xl h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] w-full border-2 border-secondary">
              <img src={item.image} className="w-full h-full object-cover" />
              {/* OVERLAY CONTENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex flex-col justify-end p-4 rounded-2xl ">
                <h4 className="text-white text-3xl font-bold">{item.title}</h4>
                <p className="text-white text-sm">{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
