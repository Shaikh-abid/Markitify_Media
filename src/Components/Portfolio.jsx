import Image from "next/image";
import React from "react";

import Rec1 from "@/app/Rec1.png";
import Rec2 from "@/app/Rec2.png";
import Rec3 from "@/app/Rec3.png";
import Rec4 from "@/app/Rec4.png";

const Portfolio = () => {
  return (
    <div className="lg:mt-44 mt-14 lg:mb-60 mb-10">
      <div className="container mx-auto  py-8  px-4 sm:px-6 md:px-8">
        {/* Heading Section */}
        <div className="lg:w-[227px] lg:h-[120px]  text-center lg:text-left md:text-left md:relative  md:mt-0 ">
          <h1 className="font-semibold text-[28px] sm:text-[32px] lg:text-[36px]">
            Our Portfolio
          </h1>
          <p className="font-medium text-[14px] sm:text-[16px] lg:text-[12px] md:text-[10px] md:w-48 mt-2 tracking-wide sm:tracking-widest">
            See how we bring ideas to life and deliver impactful results for our
            clients.
          </p>
          <button className="px-6 py-2 text-white font-light bg-black rounded-lg mt-6 lg:mt-8">
            Explore
          </button>
        </div>

        {/* Portfolio Images */}
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {/* Mobile: Show only one image */}
          <Image
            src={Rec1}
            alt="Portfolio Item 1"
            className="w-full sm:hidden object-contain rounded-xl"
            width={460}
            height={268}
          />

          {/* Tablet: Show two images side by side */}
          <div className="hidden md:flex md:flex-row items-center md:gap-4 md:ml-32 md:w-fit sm:hidden lg:hidden md:mt-0 md:relative md:bottom-[84px]">
            <Image
              src={Rec1}
              alt="Portfolio Item 1"
              className="w-[280px] sm:w-[340px] md:w-[390px] md:h-[290px] lg:w-[460px] h-auto object-contain"
              width={460}
              height={268}
            />
            <Image
              src={Rec4}
              alt="Portfolio Item 4"
              className="w-[280px] sm:w-[340px] md:w-[230px] md:h-[230px] lg:w-[460px] h-auto object-contain"
              width={460}
              height={266}
            />
          </div>

          {/* Desktop: Keep the current layout */}
          <div className="hidden lg:flex lg:flex-row flex-col items-center lg:gap-6 lg:ml-52 lg:w-fit">
            <Image
              src={Rec1}
              alt="Portfolio Item 1"
              className="w-[280px] sm:w-[340px] md:w-[400px] lg:w-[460px] h-auto object-contain"
              width={460}
              height={268}
            />
            <div className="flex flex-col gap-4 w-full sm:w-auto items-center">
              <Image
                src={Rec2}
                alt="Portfolio Item 2"
                className="w-[250px] sm:w-[300px] md:w-[340px] lg:w-[327px] h-auto object-contain"
                width={327}
                height={159}
              />
              <Image
                src={Rec3}
                alt="Portfolio Item 3"
                className="w-[250px] sm:w-[300px] md:w-[340px] lg:w-[327px] h-auto object-contain"
                width={327}
                height={92}
              />
            </div>
            <Image
              src={Rec4}
              alt="Portfolio Item 4"
              className="w-[250px] sm:w-[300px] md:w-[340px] lg:w-[208px] h-auto object-contain"
              width={208}
              height={266}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
