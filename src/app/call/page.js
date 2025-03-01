import React from "react";

import callLogo from "@/app/callLogo.png";
import callSign from "@/app/callSign.png";
import Image from "next/image";
import Navbar from "@/Components/Navbar";

import call from "@/app/discall.png";
import sign from "@/app/signature.png";
import paper from "@/app/paper.png";
import elements from "@/app/elements.png";

import Footer from "@/Components/Footer";
import Frame from "@/app/Frame.png";
import QuotationForm from "@/Components/QuotationForm";

const ScheduleCall = () => {
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

      <div
        className="container mx-auto backdrop-opacity-10 h-[584px] w-full lg:w-[1341px] mt-36"
        style={bgStyle}
      >
        <div className="flex lg:flex-row lg:w-[1341px] lg:h-[584px] pt-16 lg:justify-between lg:items-center flex-col w-full items-center lg:text-left text-center container mx-auto">
          {/* Heading Section */}
          <div className="mb-8 lg:mb-0">
            <h1 className="text-[30px] lg:text-left text-center pl-6  lg:text-[60px]  font-medium lg:w-[640px] lg:h-[219px]  lg:pl-3 font-helvetica leading-snug mb-7">
              Get your personalise quotation
            </h1>
            <p className="text-[14px] text-left sm:text-[16px]  lg:h-[69px] lg:w-[450px] ml-6 font-medium tracking-wide">
              At Markitify, we offer flexible services and are ready to provide
              additional solutions as per your requirements. Let’s create
              something extraordinary together!
            </p>
          </div>

          {/* Image Section */}
          <div className=" max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:w-[663px] lg:h-[663px] ">
            <Image
              src={callLogo}
              alt="logo"
              width={663}
              height={663}
              className="object-cover object-center rounded lg:pt-20"
            />
          </div>
        </div>
      </div>

      <QuotationForm />

      {/* Marketing Text */}
      <div className="lg:w-[1040px] lg:h-[112px] container mx-auto mt-40 text-center tracking-wider leading-6">
        <p className="text-[12px] font-medium text-[#4A4A4A]">
          Marketing is the backbone of any successful business, bridging the gap
          between a brand and its audience. It creates awareness, builds trust,
          and drives engagement, ensuring your products or services reach the
          right people. In a competitive landscape, effective marketing helps
          differentiate your brand, making it memorable and relatable. It’s not
          just about selling; it’s about storytelling, creating value, and
          fostering lasting relationships. Strong marketing lays the foundation
          for growth, sustainability, and long-term success.
        </p>
      </div>

      <div className="lg:mt-40 mt-40 mb-16 container mx-auto text-center flex flex-col items-center">
        <h1 className="text-[14px] lg:text-[14px] font-medium text-[#4A4A4A] mb-10">
          Take off in just 4 steps
        </h1>
        <div className="lg:flex lg:flex-row lg:gap-8 flex flex-col gap-6 lg:w-[1183px] w-400px md:w-[500px] lg:h-auto lg:rounded-2xl lg:border-y-2 lg:border-x-2 lg:border-dashed p-6 sm:p-12 justify-center items-center border-[#828282] mb-20">
          {/* Step 1 */}
          <div className="w-[300px] sm:w-[260px] md:w-[400px] md:h-full h-auto max-h-[200px] bg-white text-black rounded-2xl drop-shadow-2xl p-4">
            <div className="flex justify-start gap-x-2 items-center">
              <Image src={call} alt="discover call" width={32} height={32} />
              <h1 className="font-semibold text-[12px] lg:text-[16px] text-[#4A4A4A]">
                Discover Call
              </h1>
            </div>
            <p className="font-medium text-[10px] sm:text-[10px] w-full h-auto mt-2 text-left tracking-wider">
              We start with a conversation to understand your business, goals,
              and audience. This helps us identify your needs and outline a
              personalized approach for your project.
            </p>
          </div>

          {/* Step 2 */}
          <div className="w-[300px] sm:w-[260px] md:w-[400px] md:h-full h-auto max-h-[200px] bg-[#212121] text-[#D5D5D5] rounded-2xl p-4">
            <div className="flex justify-start gap-x-2 items-center ">
              <Image src={sign} alt="discover call" width={32} height={32} />
              <h1 className="font-semibold text-[14px] lg:text-[15px]">
                Proposal & Agreement
              </h1>
            </div>
            <p className="font-medium text-[10px] sm:text-[10px] w-full h-auto mt-2 text-left tracking-wide text-[#D5D5D5]">
              Based on our discussion, we create a detailed proposal with a
              clear project scope, timelines, and deliverables. Once you
              approve, we finalize the agreement to move forward confidently.
            </p>
          </div>

          {/* Step 3 */}
          <div className="w-[300px] sm:w-[260px] md:w-[400px] md:h-full h-auto max-h-[200px] bg-white text-black rounded-2xl drop-shadow-2xl p-4">
            <div className="flex justify-start gap-x-2 items-center">
              <Image
                src={elements}
                alt="discover call"
                width={20}
                height={20}
              />
              <h1 className="font-semibold text-[14px] sm:text-[16px]">
                Collaboration/Approval
              </h1>
            </div>
            <p className="font-medium text-[10px] sm:text-[10px] w-full h-auto mt-2 text-left tracking-wider">
              We start with a conversation to understand your business, goals,
              and audience. This helps us identify your needs and outline a
              personalized approach for your project.
            </p>
          </div>

          {/* Step 4 */}
          <div className="w-[300px] sm:w-[260px] md:w-[400px] md:h-full h-auto max-h-[200px] bg-[#212121] text-[#D5D5D5] rounded-2xl drop-shadow-2xl p-4">
            <div className="flex justify-start gap-x-4 items-center">
              <Image src={paper} alt="discover call" width={32} height={32} />
              <h1 className="font-semibold text-[14px] sm:text-[16px]">
                Take Off
              </h1>
            </div>
            <p className="font-medium text-[10px] sm:text-[10px] w-full h-auto mt-3 text-left tracking-wider">
              We start with a conversation to understand your business, goals,
              and audience. This helps us identify your needs and outline a
              personalized approach for your project.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ScheduleCall;
