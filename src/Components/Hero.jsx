import React from "react";

import hero from "@/app/hero.jpg";
import herobg from "@/app/herobg.jpg";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <section
        className="md:mt-10 mt-20 py-10 sm:py-16 md:py-20 lg:py-24 bg-cover bg-center"
        style={{
          backgroundImage: `url(${herobg.src})`,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center ">
          <h1 className="font-sans font-medium md:text-[60px] text-[30px] mb-6">
            Let's build <br />
            <span className="inline-block">your brand together</span>
          </h1>

          <div className="grid lg:grid-cols-3 lg:gap-4 grid-cols-1 gap-6 ">
            {/* Text Section */}
            <div className="flex justify-center items-center h-auto lg:h-full">
              <p className="max-w-[349px] max-h-[81px] font-medium md:text-[16px] md:text-left font-[Inter] text-[12px] ">
                Building brands that go beyond the ordinary, <br /> 3 years of
                serving.
              </p>
            </div>

            {/* Image Section */}
            <div className="max-w-[456px] max-h-[456px] mx-auto">
              <Image
                src={hero}
                alt="Rocket launching from a phone"
                className="rounded-lg"
                width={456}
                height={456}
              />
            </div>

            {/* Button Section */}
            <div className="flex lg:justify-center lg:items-center items-start justify-center lg:h-full">
              <Link href={"/call"} className="bg-black text-white px-4 py-2 rounded-lg text-sm sm:text-base font-medium hover:bg-gray-800">
                Get the brochure
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
