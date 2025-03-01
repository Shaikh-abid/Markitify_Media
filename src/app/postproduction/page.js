import Navbar from "@/Components/Navbar";
import Image from "next/image";
import React from "react";

import Frame from "@/app/Frame.png";
import postlogo from "@/app/postlogo.png";
import call from "@/app/discall.png";
import sign from "@/app/signature.png";
import paper from "@/app/paper.png";
import elements from "@/app/elements.png";

import vector from "@/app/vector.png";
import videoediting from "@/app/videoediting.png";

import Footer from "@/Components/Footer";

const Demo = () => {
  const bgStyle = {
    backgroundImage: `url(${Frame.src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "700px",
    width: "100%",
  };

  return (
    <div className="">
      <Navbar />

      <div
        className="container mx-auto backdrop-opacity-10 h-[584px] w-full lg:w-[1341px] mt-36"
        style={bgStyle}
      >
        <div className="flex lg:flex-row lg:w-[1341px] lg:h-[584px] pt-16 lg:justify-between lg:items-center flex-col w-full items-center lg:text-left text-center container mx-auto">
          {/* Heading Section */}
          <div className="mb-8 lg:mb-0">
            <h1 className="text-[20px] lg:text-left text-center pl-6  lg:text-[58px]  font-medium lg:w-[640px] lg:h-[219px]  lg:pl-3 md:mt-20 font-helvetica leading-tight">
              We Shape Visions, Craft Stories—Through <br />
              Design and Motion.
            </h1>
            <p className="text-sm text-left sm:text-[16px]  lg:h-[69px] lg:w-[450px] lg:mt-2 ml-6 font-medium mt-4">
              We refine your content with expert editing, sound design, and
              visuals, delivering a polished and professional final product.
            </p>
          </div>

          {/* Image Section */}
          <div className=" max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:w-[663px] lg:h-[663px] lg:mt-10">
            <Image
              src={postlogo}
              alt="logo"
              width={612}
              height={586}
              className="object-cover object-center rounded lg:pt-24 "
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto  md:h-[584px] md:w-[1341px] md:mt-44 flex md:flex-row md:justify-center  flex-col gap-12  h-auto py-10 sm:mt-10">







        <div className="lg:w-[421px] lg:h-[547px] bg-gradient-to-b from-[#000000] to-[#393939] text-white shadow-2xl rounded-xl p-8  w-[280px] h-auto ml-7">
          {/* Icon Section */}
          <div className="flex justify-start">
            <div className="bg-[#2E2E2E] w-[42px] h-[42px] rounded-xl shadow-2xl flex justify-center items-center border-[#A1A1A1] border-[1px]">
              <Image
                src={vector}
                alt="layer"
                className=""
                width={28}
                height={28}
              />
            </div>
          </div>

          {/* Title Section */}
          <h2 className="text-[22px] font-semibold text-[#ffffff] mt-2">
            UI and UX Design
          </h2>
          <p className="text-[12px] font-[Inter] text-[#A1A1A1] lg:mb-20 mb-4  tracking-wide font-normal">
            Building brands that go beyond the ordinary, powered by innovation
            and bold ideas.
          </p>

          {/* Button */}
          <div className="flex items-center justify-center">
            <button className=" bg-[#FFFFFF] text-[#000000] py-2 rounded-lg text-sm font-medium mb-4 w-[269px] h-[39px]">
              Let’s Connect
            </button>
          </div>

          {/* Features List */}
          <ul className="text-[14px] text-[#E0E0E0]  lg:space-y-6 space-y-3 font-medium mt-8">
            <li>Figma Prototype / 6-8 screen</li>
            <li>Responsive Design</li>
            <li>Wireframes and Prototypes</li>
            <li>Brand Identity integration</li>
          </ul>
        </div>

        <div className="lg:w-[421px] lg:h-[547px] bg-gradient-to-b from-[#000000] to-[#393939] text-white shadow-2xl rounded-xl p-8  w-[280px] h-auto ml-7">
          {/* Icon Section */}
          <div className="flex justify-start">
            <div className="bg-[#2E2E2E] w-[42px] h-[42px] rounded-xl shadow-2xl flex items-center justify-center border-[#A1A1A1] border-[1px]">
              <Image
                src={videoediting}
                alt="layer"
                className=""
                width={28}
                height={28}
              />
            </div>
          </div>

          {/* Title Section */}
          <h2 className="text-[22px] font-semibold text-[#ffffff] mt-2">
            Video Editing
          </h2>
          <p className="text-[12px] font-[Inter] text-[#A1A1A1] lg:mb-20 mb-4  tracking-wide font-normal">
            Building brands that go beyond the ordinary, powered by innovation
            and bold ideas."
          </p>

          {/* Button */}
          <div className="flex items-center justify-center">
            <button className=" bg-[#FFFFFF] text-[#000000] py-2 rounded-lg text-sm font-medium mb-4 w-[269px] h-[39px]">
              Let’s Connect
            </button>
          </div>

          {/* Features List */}
          <ul className="text-[14px] text-[#E0E0E0]  lg:space-y-6 space-y-3 font-medium mt-8">
            <li>Reels / Shorts Editing</li>
            <li>Talking Head Voice</li>
            <li>Hook / Intro Editing</li>
            <li>Podcast Videos</li>
            <li>Documentaries Videos</li>
          </ul>
        </div>
      </div>



















      <div className="lg:w-[937px] lg:h-[46px] w-fit h-fit container mx-auto lg:mt-40 mt-52 text-center tracking-wide">
        <p className="text-[12px] font-medium">
          Discover Markitify’s expert post-production services, specializing in
          stunning graphic design and professional video editing. Elevate your
          brand with captivating visuals and impactful videos. Contact us today!
        </p>
      </div>

      <div className="lg:mt-40  container mx-auto text-center flex flex-col items-center h-auto lg:h-[500px] mt-8">
        <h1 className="text-[14px] lg:text-[14px] font-medium text-[#4A4A4A] mb-10 mt-24">
          What you will get
        </h1>

        <div className="lg:w-[615px] lg:h-[145px] flex flex-col w-[300px] h-auto ">
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
            <div className="text-[14px] font-medium bg-[#F2F2F2]  py-1 border-1 border-dashed rounded-lg w-[131px] h-[32px]">
              Creativity
            </div>
            <div className="text-[14px] font-medium bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg w-[118px] h-[32px]">
              Strategy
            </div>
            <div className="text-[14px] font-medium bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg w-[77px] h-[32px] text-center flex justify-center items-center">
              Growth
            </div>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center mt-4">
            <div className="text-[14px] font-medium bg-[#F2F2F2]  py-1 border-2 border-dashed rounded-lg w-[172px] h-[32px]">
              Optimization
            </div>
            <div className="text-[14px] font-medium bg-[#F2F2F2]  py-1 border-2 border-dashed rounded-lg w-[131px] h-[32px]">
              Analytics
            </div>
            <div className="text-[14px] font-medium bg-[#F2F2F2] py-1 border-2 border-dashed rounded-lg w-[248px] h-[32px]">
              Audience Engagement
            </div>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center mt-4">
            <div className="text-[14px] font-medium bg-[#F2F2F2]  py-1 border-2 border-dashed rounded-lg w-[172px] h-[32px]">
              storytelling
            </div>
            <div className="text-[14px] font-medium bg-[#F2F2F2]  py-1 border-2 border-dashed rounded-lg w-[131px] h-[32px]">
              Influence
            </div>
            <div className="text-[14px] font-medium bg-[#F2F2F2]  py-1 border-2 border-dashed rounded-lg w-[106px] h-[32px]">
              branding
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mt-16 mt-40 mb-16 container mx-auto text-center flex flex-col items-center">
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
    </div>
  );
};

export default Demo;
