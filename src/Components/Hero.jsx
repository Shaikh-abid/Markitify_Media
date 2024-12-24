import React from "react";

import hero from "@/app/hero.jpg";
import herobg from "@/app/herobg.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <section
        className="mt-16 py-10 sm:py-16 md:py-20 lg:py-24 bg-cover bg-center"
        style={{
          backgroundImage: `url(${herobg.src})`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-[60px] md:text-5xl font-medium leading-tight  mb-10 sm:mb-16">
            Let's build <br />
            <span className="inline-block mt-2">your brand together</span>
          </h1>

          <div className="grid lg:grid-cols-3 lg:gap-4 grid-cols-1 gap-6 ">
            {/* Text Section */}
            <div className="flex justify-center items-center h-auto lg:h-full">
              <p className="lg:w-[361px] lg:text-left lg:h-[81px] lg:text-[16px] lg:font-medium text-[12px] sm:text-lg text-center font-sans">
                Building brands that go beyond the ordinary, <br /> 3 years of serving.
              </p>
            </div>

            {/* Image Section */}
            <div className="lg:w-[526px] lg:h-[526px] mx-auto">
              <Image
                src={hero}
                alt="Rocket launching from a phone"
                className="rounded-lg"
              />
            </div>

            {/* Button Section */}
            <div className="flex lg:justify-center lg:items-center items-start justify-center lg:h-full">
              <button className="bg-black text-white px-4 py-2 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-800 animate-bounce">
                Get the brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
