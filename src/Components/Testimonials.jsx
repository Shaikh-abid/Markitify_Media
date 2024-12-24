"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import avator from "@/app/Avator.jpg";
import double from "@/app/double.jpg";
import Image from "next/image";

const Testimonials = () => {
  return (
    // <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-26">
    //   <h1 className="lg:text-5xl lg:font-bold">Client Testimonials</h1>
    //   <div className="flex justify-between items-center">
    //     <div className="lg:w-[428px] lg:h-[622px] mt-10  z-50  shadow-[39px_15px_29px_8px_rgba(0,_0,_0,_0.1)] lg:pl-10 lg:pt-10 font-semibold text-2xl ">
    //       By managing all <br />
    //       ascepts of our <br />
    //       services in - <br />
    //       house, we <br />
    //       maintain a high
    //     </div>

    //     <div className=" overflow-y-hidden items-center justify-center flex ">
    //       <div className="relative  max-w-[335px] max-h-[304px] bg-white shadow-2xl rounded-xl p-6 mr-8">
    //         {/* Quote Text */}
    //         <p className="text-gray-900 text-sm font-semibold leading-relaxed">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry. Lorem Ipsum has been the industry's standard dummy text
    //           ever since the 1500s, when an unknown printer.
    //         </p>

    //         {/* Author Section */}
    //         <div className="flex items-center mt-6">
    //           {/* Author Image */}
    //           <div className="w-10 h-10 rounded-full overflow-hidden">
    //             <Image
    //               src={avator} // Replace with actual image URL
    //               alt="Author"
    //               className="w-full h-full object-cover"
    //             />
    //           </div>
    //           {/* Author Details */}
    //           <div className="ml-2">
    //             <p className="font-bold text-gray-900 text-lg">Ansh Mehra</p>
    //             <p className="text-black text-xs">Founder and CEO Notebook</p>
    //           </div>
    //         </div>

    //         {/* Top Quotation Mark */}
    //         <div className="absolute -top-3 left-4 w-8 h-8 bg-white flex items-center justify-center rounded-full">
    //           <span className="text-green-500 text-2xl font-bold">
    //             <Image src={double} width={34} height={34} />
    //           </span>
    //         </div>
    //       </div>
    //       <div className="relative max-w-[335px] max-h-[304px] bg-white shadow-2xl rounded-xl p-6 mr-8">
    //         {/* Quote Text */}
    //         <p className="text-gray-900 text-lg font-semibold leading-relaxed">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry. Lorem Ipsum has been the industry's standard dummy text
    //           ever since the 1500s, when an unknown printer.
    //         </p>

    //         {/* Author Section */}
    //         <div className="flex items-center mt-6">
    //           {/* Author Image */}
    //           <div className="w-10 h-10 rounded-full overflow-hidden">
    //             <Image
    //               src={avator} // Replace with actual image URL
    //               alt="Author"
    //               className="w-full h-full object-cover"
    //             />
    //           </div>
    //           {/* Author Details */}
    //           <div className="ml-4">
    //             <p className="font-bold text-gray-900 text-xl">Ansh Mehra</p>
    //             <p className="text-black text-base">Founder and CEO Notebook</p>
    //           </div>
    //         </div>

    //         {/* Top Quotation Mark */}
    //         <div className="absolute -top-3 left-4 w-8 h-8 bg-white flex items-center justify-center rounded-full">
    //           <span className="text-green-500 text-2xl font-bold">
    //             <Image src={double} width={34} height={34} />
    //           </span>
    //         </div>
    //       </div>
    //       <div className="relative max-w-[335px] max-h-[304px] bg-white shadow-2xl rounded-xl p-6 mr-8">
    //         {/* Quote Text */}
    //         <p className="text-gray-900 text-lg font-semibold leading-relaxed">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry. Lorem Ipsum has been the industry's standard dummy text
    //           ever since the 1500s, when an unknown printer.
    //         </p>

    //         {/* Author Section */}
    //         <div className="flex items-center mt-6">
    //           {/* Author Image */}
    //           <div className="w-10 h-10 rounded-full overflow-hidden">
    //             <Image
    //               src={avator} // Replace with actual image URL
    //               alt="Author"
    //               className="w-full h-full object-cover"
    //             />
    //           </div>
    //           {/* Author Details */}
    //           <div className="ml-4">
    //             <p className="font-bold text-gray-900 text-xl">Ansh Mehra</p>
    //             <p className="text-black text-base">Founder and CEO Notebook</p>
    //           </div>
    //         </div>

    //         {/* Top Quotation Mark */}
    //         <div className="absolute -top-3 left-4 w-8 h-8 bg-white flex items-center justify-center rounded-full">
    //           <span className="text-green-500 text-2xl font-bold">
    //             <Image src={double} width={34} height={34} />
    //           </span>
    //         </div>
    //       </div>
    //       <div className="relative max-w-[335px] max-h-[304px]  bg-white shadow-2xl rounded-xl p-6 mr-8">
    //         {/* Quote Text */}
    //         <p className="text-gray-900 text-lg font-semibold leading-relaxed">
    //           Lorem Ipsum is simply dummy text of the printing and typesetting
    //           industry. Lorem Ipsum has been the industry's standard dummy text
    //           ever since the 1500s, when an unknown printer.
    //         </p>

    //         {/* Author Section */}
    //         <div className="flex items-center mt-6">
    //           {/* Author Image */}
    //           <div className="w-10 h-10 rounded-full overflow-hidden">
    //             <Image
    //               src={avator} // Replace with actual image URL
    //               alt="Author"
    //               className="w-full h-full object-cover"
    //             />
    //           </div>
    //           {/* Author Details */}
    //           <div className="ml-4">
    //             <p className="font-bold text-gray-900 text-xl">Ansh Mehra</p>
    //             <p className="text-black text-base">Founder and CEO Notebook</p>
    //           </div>
    //         </div>

    //         {/* Top Quotation Mark */}
    //         <div className="absolute -top-3 left-4 w-8 h-8 bg-white flex items-center justify-center rounded-full">
    //           <span className="text-green-500 text-2xl font-bold">
    //             <Image src={double} width={34} height={34} />
    //           </span>
    //         </div>
    //       </div>

    //     </div>
    //   </div>
    // </div>

    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-40 bg-white">
      <h1 className="text-3xl lg:text-[36px] font-semibold  text-center lg:text-left">
        Client Testimonials
      </h1>

      {/* Main Testimonials Wrapper */}
      <div className="lg:flex  lg:flex-row  lg:items-center lg:justify-center ">
        {/* Left Section */}
        <div className="lg:w-[428px] lg:h-[622px]  lg:block  z-99  lg:shadow-[39px_15px_29px_8px_rgba(0,_0,_0,_0.1)] lg:pt-4  lg:pr-12  lg:font-semibold  text-[10px] lg:text-left font-medium  text-center ">
          <p className=" lg:text-[14px] font-medium lg:w-[173px] lg:h-[149px] pt-6">
            See what our clients say about our dedication, trust, and results!
          </p>
        </div>

        {/* Right Section with Horizontal Scrolling */}
        <div className="flex justify-center items-center  overflow-x-hidden  mt-10  space-x-6 lg:p-2 rounded-2xl p-7 bg-transparent">
          {/* Testimonial Card */}
          <Swiper
            slidesPerView={3}
            spaceBetween={40}
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
            {Array(8)
              .fill(null)
              .map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="flex-shrink-0 relative lg:w-[287px] lg:h-[305px] drop-shadow-xl  bg-white shadow-2xl rounded-xl p-8 my-4 mx-4">
                    {/* Quote Text */}
                    <p className="text-[#263238] lg:text-[12px] text-[10px] lg:mt-3  font-medium leading-relaxed tracking-wider lg:h-[140px] lg:w-[228px]">
                      Markitify has been a great help to Mega Kitchen with their
                      post-production services. They understood our ideas and
                      delivered good results on time. The team was supportive
                      and easy to work with. We’re happy with how everything
                      turned out.
                    </p>

                    {/* Author Section */}
                    <div className="flex items-center mt-10">
                      {/* Author Image */}
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <Image
                          src={avator} // Replace with actual image URL
                          alt="Author"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Author Details */}
                      <div className="ml-4 ">
                        <p className="font-bold text-gray-900 text-base  lg:text-[16px]">
                          Ansh Mehra
                        </p>
                        <p className="text-gray-500 lg:text-[12px] font-medium  text-xs">
                          Founder and CEO Notebook
                        </p>
                      </div>
                    </div>

                    {/* Top Quotation Mark */}
                    <div className="absolute -top-1 left-4 w-8 h-8 bg-white shadow-xl flex items-center justify-center rounded-full shadow-xl">
                      <Image src={double} width={34} height={32} alt="Quote" />
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
