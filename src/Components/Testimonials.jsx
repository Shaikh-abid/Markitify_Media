"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import last from "../app/last.png";
import first from "../app/first.png";
import second from "../app/second.png";

import third from "../app/third.png";
// import av from "../app/Avator.jpg";

import double from "@/app/double.jpg";
import Image from "next/image";

const testimonialsData = [
  {
    text: "Markitify has been a great help to Mega Kitchen with their post-production services. They understood our ideas and delivered good results on time. The team was supportive and easy to work with. We’re happy with how everything turned out.",
    name: "Yogesh Suroshe",
    position: "Founder of Mega kitchen",
    image: first, // Replace with the correct image path
  },
  {
    text: "The team at Markitify made a real impact on our social media and post-production. They helped us showcase our brand more effectively, bringing fresh ideas and great results. It’s been a pleasure working with them, and we look forward to more projects together!",
    name: "Team VUS",
    position: "Team Vaishnavi Unisex Salon",
    image: second, // Replace with the correct image path
  },
  {
    text: "Markitify has been a great support for Dineflick with their design and development expertise. They helped us create a platform that is both functional and visually appealing. The team is dedicated, creative, and easy to work with. We’re impressed.",
    name: "Omkar Patange",
    position: "Team Arctic Wtr.",
    image: third, // Replace with the correct image path
  },
  {
    text: "Thanks to Markitify, Arctic Wtr now has a brand identity that truly reflects our values. Their branding expertise has helped us stand out and build a stronger presence. The team was professional and insightful, and the results speak for themselves!",
    name: "Team Arctic Wtr.",
    position: "Team Arctic Wtr.",
    image: last, // Replace with the correct image path
  },
  {
    text: "Thanks to Markitify, Arctic Wtr now has a brand identity that truly reflects our values. Their branding expertise has helped us stand out and build a stronger presence. The team was professional and insightful, and the results speak for themselves!",
    name: "Team Arctic Wtr.",
    position: "Team Arctic Wtr.",
    image: third, // Replace with the correct image path
  },
  {
    text: "Thanks to Markitify, Arctic Wtr now has a brand identity that truly reflects our values. Their branding expertise has helped us stand out and build a stronger presence. The team was professional and insightful, and the results speak for themselves!",
    name: "Team Arctic Wtr.",
    position: "Team Arctic Wtr.",
    image: third, // Replace with the correct image path
  },
];

const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-40 bg-white md:mb-0 ">
      <h1 className="text-3xl lg:text-[36px] font-semibold text-center lg:text-left">
        Client Testimonials
      </h1>

      {/* Main Testimonials Wrapper */}
      <div className="lg:flex lg:flex-row lg:items-center lg:justify-center">
        {/* Left Section */}
        <div className="lg:w-[428px] lg:h-[622px] lg:block z-99 lg:shadow-[39px_15px_29px_-10px_rgba(0,_0,_0,_0.05)] lg:pt-4 lg:pr-12 lg:font-semibold text-[10px] lg:text-left font-medium text-center">
          <p className="lg:text-[14px] font-medium lg:w-[173px] lg:h-[149px] pt-6">
            See what our clients say about our dedication, trust, and results!
          </p>
        </div>

        {/* Right Section with Horizontal Scrolling */}
        <div className="flex justify-center items-center overflow-x-hidden mt-10 space-x-6 lg:p-2 rounded-2xl p-7 bg-transparent wapper">
          {/* Testimonial Cards */}
          <Swiper
            slidesPerView={3}
            spaceBetween={62}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            breakpoints={{
              // Mobile: Show only one card
              0: {
                slidesPerView: 1,
              },
              // Tablet: Show two cards
              768: {
                slidesPerView: 2,
              },
              // Desktop: Default (3 cards)
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper no-pagination-dots"
          >
            {testimonialsData.map((testimonial, index) => (
              <SwiperSlide key={index} className="lg:pr-[290px] pr-0">
                <div
                  className="flex-shrink-0 relative 
                   lg:w-[300px] lg:h-[305px] 
                   md:w-[280px] md:h-[285px] 
                   w-[260px] h-[265px] 
                   drop-shadow-lg shadow-lg rounded-xl 
                   p-6 lg:p-8 
                   my-4 mx-2 md:mx-4"
                >
                  {/* Quote Text */}
                  <p
                    className="text-[#263238] 
                     lg:text-[12px] md:text-[11px] text-[10px] 
                     lg:mt-3 mt-2 
                     font-medium -tracking-tight 
                     lg:max-h-[140px] md:max-h-[120px] max-h-[110px] 
                     lg:w-[228px] w-full"
                  >
                    {testimonial.text}
                  </p>

                  {/* Author Section */}
                  <div className="flex items-center mt-6 md:mt-8 lg:mt-10">
                    {/* Author Image */}
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        width={41}
                        height={41}
                      />
                    </div>
                    {/* Author Details */}
                    <div className="ml-3 md:ml-4">
                      <p
                        className="font-bold text-gray-900 
                         md:text-base text-sm 
                         lg:text-[16px]"
                      >
                        {testimonial.name}
                      </p>
                      <p
                        className="text-gray-500 
                         lg:text-[12px] md:text-[11px] text-[10px] 
                         font-medium"
                      >
                        {testimonial.position}
                      </p>
                    </div>
                  </div>

                  {/* Top Quotation Mark */}
                  <div
                    className="absolute top-1 left-4 
                     w-[28px] h-[26px] md:w-[34.95px] md:h-[32.9px]"
                  >
                    <Image
                      src={double}
                      width={34.95}
                      height={32.9}
                      alt="Quote"
                      className="rounded-full bg-transparent w-full h-full"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
