import React from "react";

import Image from "next/image";
import Frame from "@/app/Frame.png";
import man from "@/app/manriding.png";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";

const AboutPage = () => {
  const bgStyle = {
    backgroundImage: `url(${Frame.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "700px",
    width: "100%",
  };
  return (
    <>
      <Navbar />

      <section
        className="max-w-[1341px] container mx-auto px-4 sm:px-6"
        style={bgStyle}
      >
        <div className="w-full h-auto mx-auto container flex flex-col lg:flex-row lg:justify-between lg:items-center text-center lg:text-left mt-32 ">
          {/* Text Section */}
          <div className="max-w-[675px] font-medium font-helvetica text-[16px] lg:text-[60px] text-[#000000] lg:tracking-tight lg:ml-14">
            <h1 className="text-center lg:text-left sm:text-[50px] ">
              Beyond Ordinary, Built by <br />
              an Extraordinary Team!
            </h1>
          </div>

          {/* Image Section */}
          <div className=" max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:w-[663px] lg:h-[663px] pt-10 ">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src={man}
              width={663}
              height={663}
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto lg:mt-44 mb-36">
        <div className="flex flex-col lg:flex-row lg:gap-4 text-center mb-16 items-center lg:text-left lg:pl-10 max-w-fit">
          {/* Green Line */}
          <div className="h-1 w-56 lg:w-2 lg:h-48 bg-[#00D87D] rounded-full mb-6 lg:mb-0"></div>

          {/* Text */}
          <p className="font-medium text-base lg:text-[21px] lg:w-[849px] lg:h-[183px] pt-0 lg:pt-10 px-4 w-[400px] lg:leading-7 text-[#000000] font-[Inter]">
            Markitify started with a clear purpose: to fix what wasn’t working.
            We noticed a gap in the industry—businesses paying too much for
            services that didn’t deliver. Agencies were overpromising,
            underdelivering, and leaving brands disappointed.
          </p>
        </div>

        <div className="flex flex-col lg:pl-96  lg:flex-row lg:gap-4 text-center mb-16 items-center lg:text-left">
          {/* Green Line */}
          <div className="h-1 w-56 lg:w-2 lg:h-36 bg-green-400 rounded-full mb-6 lg:mb-0"></div>

          {/* Text */}
          <p className="font-medium text-base lg:text-[21px] lg:w-[849px] lg:h-[183px] pt-0 lg:pt-10 px-4 w-[400px] lg:leading-7 text-[#000000] font-[Inter]">
            We knew there had to be a better way. So, we created Markitify to be
            different—an agency that focuses on what really matters: results,
            creativity, and value.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-4 text-center mb-16 items-center lg:text-left lg:pl-10">
          {/* Green Line */}
          <div className="h-1 w-56 lg:w-2 lg:h-48 bg-green-400 rounded-full mb-6 lg:mb-0"></div>

          {/* Text */}
          <p className="font-medium text-base lg:text-[21px] lg:w-[849px] lg:h-[183px] pt-0 lg:pt-10 px-4 w-[400px] lg:leading-7 text-[#000000] font-[Inter]">
            At Markitify, we don’t believe in complicated jargon or inflated
            prices. Instead, we focus on clear communication, honest work, and
            delivering more than what’s expected. We help brands grow by doing
            things right, keeping things simple, and staying true to what we
            promise.
          </p>
        </div>

        <div className="flex flex-col lg:pl-96   lg:flex-row lg:gap-4 text-center mb-16 items-center lg:text-left lg:leading-8 text-[#000000]">
          {/* Green Line */}
          <div className="h-1 w-56 lg:w-2 lg:h-48 bg-green-400 rounded-full mb-6 lg:mb-0"></div>

          {/* Text */}
          <p className="font-medium text-base lg:text-[21px] lg:w-[849px] lg:h-[183px] pt-0 lg:pt-10 px-4 w-[400px] lg:leading-7 text-[#000000] font-[Inter]">
            The gap we saw wasn’t just about cost. It was about trust.
            Businesses needed a partner who would understand their needs, tell
            their stories, and provide solutions that work. That’s why we built
            Markitify—to bring fresh ideas, real impact, and a team that
            genuinely cares about your success.
          </p>
        </div>

        <div className="flex flex-col  lg:flex-row lg:gap-4 text-center mb-16 items-center lg:text-left lg:pl-10">
          {/* Green Line */}
          <div className="h-1 w-56 lg:w-2 lg:h-48 bg-green-400 rounded-full mb-6 lg:mb-0"></div>

          {/* Text */}
          <p className="font-medium text-base lg:text-[21px] lg:w-[849px] lg:h-[183px] pt-0 lg:pt-10 px-4 w-[400px] lg:leading-7 text-[#000000] font-[Inter]">
            We believe in keeping things straightforward. Great branding doesn’t
            have to be complex, and success doesn’t have to be out of reach. At
            Markitify, we focus on making the process easy, the results
            meaningful, and the experience enjoyable.
          </p>
        </div>

        <div className="flex flex-col lg:pl-96  lg:flex-row lg:gap-4 text-center mb-16 items-center lg:text-left">
          {/* Green Line */}
          <div className="h-1 w-56 lg:w-2 lg:h-48 bg-green-400 rounded-full mb-6 lg:mb-0"></div>

          {/* Text */}
          <p className="font-medium text-base lg:text-[21px] lg:w-[849px] lg:h-[183px] pt-0 lg:pt-10 px-4 w-[400px] lg:leading-7 text-[#000000] font-[Inter]">
            This is why we exist. To bridge the gap. To do better. To help you
            stand out in ways that truly matter. Markitify is more than a media
            agency—it’s a promise to always deliver more. Simple, impactful, and
            reliable. That’s how we work.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
