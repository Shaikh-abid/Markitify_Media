import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useSwiper } from 'swiper/react';
// import required modules
import { Pagination } from "swiper/modules";

import play from "@/app/play.jpg";
import board from "@/app/clapperboard.jpg";
import code from "@/app/code.jpg";
import ad from "@/app/ad.jpg";
import branding from "@/app/branding.jpg";
import Image from "next/image";

import Link from "next/link";

const Timepass = () => {
  const swiper = useSwiper();
  return (
    <section className="py-10 sm:py-16 md:py-20 lg:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Heading */}
        <h2 className="text-[36px] sm:text-4xl md:text-5xl font-semibold mb-12 text-gray-800">
          Our Services
        </h2>

        {/* Cards Slider */}
        <Swiper
          slidesPerView={3}
          spaceBetween={490}
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
              slidesPerView: 4,
            },
          }}
          className="mySwiper no-pagination-dots"
        >
          {/* Card 1 */}
          <SwiperSlide className="lg:ml-16">
            <div className="w-[320px] h-[422px] rounded-lg shadow-xl p-4 text-left bg-white ">
              <div className="mb-4">
                {/* Icon */}
                <div className="bg-white shadow-xl w-12 h-12 flex justify-center items-center rounded-lg">
                  <Image src={play} width={29} height={29} alt="play" />
                </div>
              </div>
              <h3 className="text-[22px] font-semibold text-gray-800 mb-4">
                Post Production
              </h3>
              <p className="lg:text-[12px] font-medium text-sm mb-2">
                Building brands that go beyond the ordinary, <br /> powered by
                innovation and bold ideas.
              </p>
              <Link
                className="flex justify-center py-6"
                href={"postproduction"}
              >
                <button className="bg-black text-white px-8 py-2 rounded-lg lg:text-[14px] text-sm font-medium mb-4 hover:bg-gray-800">
                  Explore more
                </button>
              </Link>
              <ul className="text-black font-medium text-[14px] text-base">
                <li>Video Editing</li>
                <li className="mt-3">Graphic Designing</li>
                <li className="mt-3">Color Correction and Grading</li>
                <li className="mt-3">Sound Editing and Design</li>
              </ul>
            </div>
          </SwiperSlide>

          {/* Card 2 */}
          <SwiperSlide className="lg:ml-12" >
            <div className="w-[320px] h-[422px] bg-white rounded-lg shadow-xl p-4 text-left">
              <div className="mb-4">
                <div className="bg-white shadow-xl w-12 h-12 flex justify-center items-center rounded-lg">
                  <Image src={code} width={29} height={29} alt="code" />
                </div>
              </div>
              <h3 className="text-[22px] font-semibold text-gray-800 mb-4">
                Design and Development
              </h3>
              <p className="lg:text-[12px] text-sm mb-2">
                Building brands that go beyond the ordinary, powered by
                innovation and bold ideas.
              </p>
              <Link className="flex justify-center py-6" href={"design"}>
                <button className="bg-black text-white px-8 py-2 rounded-lg lg:text-[14px] text-sm font-medium mb-4 hover:bg-gray-800">
                  Explore more
                </button>
              </Link>
              <ul className="text-black font-medium lg:text-[14px] text-base">
                <li>UI/UX Design</li>
                <li className="mt-3">Development</li>
                <li className="mt-3">SEO Optimisation</li>
                <li className="mt-3">Maintenance and Support</li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide className="lg:ml-12">
            <div className="lg:w-[320px] lg:h-[422px]  mx-auto bg-white rounded-lg shadow-lg p-4 text-left">
              <div className="mb-4">
                <div className="bg-white shadow-xl w-12 h-12 flex justify-center items-center rounded-lg">
                  <Image src={board} width={29} height={29} alt="code" />
                </div>
              </div>
              <h3 className="lg:text-[22px] font-semibold text-gray-800 mb-4">
                Social Media
              </h3>
              <p className="text-gray-800 lg:text-[12px] text-sm mb-2 font-medium">
                Building connections through engaging campaigns and audience
                interaction.
              </p>
              <Link className="flex justify-center py-6" href={"social"}>
                <button className="bg-black text-white px-8 py-2 rounded-lg lg:text-[14px] text-sm font-medium mb-4 hover:bg-gray-800">
                  Explore more
                </button>
              </Link>
              <ul className="text-black font-medium lg:text-[14px]text-base">
                <li className="mt-4">Youtube</li>
                <li className="mt-4">Instagram 360</li>
                <li className="mt-4">Linkedin</li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="lg:w-[320px] lg:h-[422px]  mx-auto bg-white rounded-lg shadow-lg p-4 text-left">
              <div className="mb-4">
                <div className="bg-white shadow-xl w-12 h-12 flex justify-center items-center rounded-lg">
                  <Image src={ad} width={29} height={29} alt="code" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Brand Identity
              </h3>
              <p className="text-gray-800 text-sm mb-2">
                Crafting logos, guidelines, and strategies for a consistent,
                impactful brand.
              </p>

              <p className="font-bold text-xl pl-4">
                $249 <span className="text-base font-normal"> / one time</span>
              </p>
              <Link className="flex justify-center py-6" href={"#"}>
                <button className="bg-black text-white px-24 py-2 rounded-lg text-sm font-bold mb-4 hover:bg-gray-800">
                  Let's Connect
                </button>
              </Link>
              <ul className="text-black font-semibold text-base">
                <li>Logo Design</li>
                <li className="mt-1">Visual Identity Development</li>
                <li className="mt-1">Brand Guidelined</li>
                <li className="mt-1">Brand Strategy</li>
              </ul>
            </div>
          </SwiperSlide>

          <SwiperSlide className="lg:ml-12">
            {/* Card last */}
            <div className="lg:w-[320px] lg:h-[422px]  mx-auto bg-white rounded-lg shadow-lg p-4 text-left">
              <div className="mb-4">
                <div className="bg-white shadow-xl w-12 h-12 flex justify-center items-center rounded-lg">
                  <Image src={branding} width={29} height={29} alt="code" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Advertisement
              </h3>
              <p className="text-gray-800 text-sm mb-2">
                In addition to our core services, we offer targeted advertising
                solutions to amplify your brand's reach.
              </p>
              <div className="flex justify-center py-6">
                <button className="bg-black text-white px-24 py-2 rounded-lg text-sm font-bold mb-4 hover:bg-gray-800">
                  Let's Connect
                </button>
              </div>
              <ul className="text-black font-semibold text-base">
                <li>Meta Ads</li>
                <li className="mt-1">Google Ads</li>
                <li className="mt-1">Instagram Ads</li>
                <li className="mt-1">Linkedin Ads</li>
              </ul>
            </div>
          </SwiperSlide>

          {/* Add other cards similarly */}
        </Swiper>

        {/* Dots for navigation */}
        <div className="flex items-center justify-center mt-20">
          {/* Green Dot */}
          <div
            className="w-6 h-6 bg-green-500 rounded-full cursor-pointer border-4 border-black hover:bg-black hover:border-green-500 hover:border-4 transition-all duration-300"
            
          ></div>

          {/* Line */}
          <div className="w-12 h-1 bg-black"></div>

          {/* Black Dot */}
          <div className="w-6 h-6 rounded-full cursor-pointer border-4 border-black bg-green-500 hover:bg-black hover:border-green-500 hover:border-4 transition-all duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Timepass;
