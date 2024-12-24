import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import avator from "@/app/Avator.jpg";
import double from "@/app/double.jpg";
import Image from "next/image";


const Slider = () => {
  return (
    <>
      {/* Right Section with Horizontal Scrolling */}
      <div className="flex justify-center items-center  overflow-x-hidden  mt-10  space-x-6 lg:p-8 rounded-2xl">
        {/* Testimonial Card */}
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper bg-black"
        >
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <SwiperSlide key={index}>
                <div className="flex-shrink-0 relative w-[335px] h-[305px] bg-white shadow-2xl rounded-xl p-7">
                  {/* Quote Text */}
                  <p className="text-gray-900 text-lg font-semibold leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer.
                  </p>

                  {/* Author Section */}
                  <div className="flex items-center mt-4">
                    {/* Author Image */}
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <Image
                        src={avator} // Replace with actual image URL
                        alt="Author"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Author Details */}
                    <div className="ml-4">
                      <p className="font-bold text-gray-900 text-lg">
                        Ansh Mehra
                      </p>
                      <p className="text-gray-500 text-sm">
                        Founder and CEO Notebook
                      </p>
                    </div>
                  </div>

                  {/* Top Quotation Mark */}
                  <div className="absolute -top-3 left-4 w-8 h-8 bg-white shadow-xl flex items-center justify-center rounded-full">
                    <Image src={double} width={24} height={24} alt="Quote" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
