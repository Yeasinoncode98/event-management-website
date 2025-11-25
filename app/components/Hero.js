"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

const backgroundImages = [
  "/hero_images/al-elmes-ULHxWq8reao-unsplash.jpg",
  "/hero_images/ian-schneider-PAykYb-8Er8-unsplash.jpg",
  "/hero_images/med-mhamdi-mH_E0K581Yk-unsplash.jpg",
  "/hero_images/pexels-teddy-2263436.jpg",
  "/hero_images/pexels-asadphoto-169198.jpg",
];

const Hero = () => {
  const overlayContent = (
    <div className=" relative z-10 text-white text-center py-16">
      <h1 className="text-5xl font-extrabold drop-shadow-lg">
        Your Gateway to Unforgettable Events!
      </h1>
      <h2 className="mt-4 text-xl font-medium drop-shadow-lg">
        Discover, organize, and experience events like never before..
      </h2>
      <h3 className="mt-4 text-xl font-medium drop-shadow-lg">
        Unleash unforgettable events with a click—where every moment counts
      </h3>
      <button className="mt-8 bg-white text-blue-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
        Hire Us
      </button>
    </div>
  );

  return (
    <div className="relative h-[600px] overflow-hidden   ">
      <Swiper
        // Install necessary modules
        modules={[Autoplay, EffectFade, Pagination]}
        // Swiper Settings
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 2000, // Time in milliseconds between slides (4 seconds)
          disableOnInteraction: false,
        }}
        // Pagination Settings
        pagination={{
          clickable: true,
          bulletClass:
            "swiper-pagination-bullet bg-white !opacity-50 !h-3 !w-3",
          bulletActiveClass: "swiper-pagination-bullet-active !opacity-100",
        }}
        className="w-full h-full absolute top-0 left-0"
      >
        {backgroundImages.map((imagePath, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
              style={{
                backgroundImage: `url('${imagePath}')`,
                // Subtle dark overlay for better text readability
                "--tw-bg-opacity": 0.4,
                backgroundColor: "rgba(0, 0, 0, var(--tw-bg-opacity))",
                backgroundBlendMode: "multiply",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Place the content overlay outside the Swiper to keep it static above the slides */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        {overlayContent}
      </div>
    </div>
  );
};

export default Hero;
