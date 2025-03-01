import Navbar from "@/Components/Navbar";
import Image from "next/image";
import React from "react";

import postlogo from "@/app/postlogo.png";
import call from "@/app/discall.png";
import sign from "@/app/signature.png";
import paper from "@/app/paper.png";
import elements from "@/app/elements.png";

import vector from "@/app/vector.png";
import videoediting from "@/app/videoediting.png";

import Footer from "@/Components/Footer";

const Production = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto backdrop-opacity-10 h-[584px] w-full lg:w-[1341px] mt-24 bg-[linear-gradient(to_right,#80808012_3px,transparent_6px),linear-gradient(to_bottom,#80808012_3px,transparent_6px)] bg-[size:66px_66px]">
        <div className="flex lg:flex-row lg:w-full pt-16 lg:justify-between lg:items-center flex-col w-full items-center lg:text-left text-center">
          {/* Heading Section */}
          <div className="mb-8 lg:mb-0">
            <h1 className="text-4xl  lg:text-5xl font-medium lg:w-[640px] lg:h-[219px] leading-tight tracking-wide  lg:pl-3">
              We Shape Visions, <br /> Craft Stories—Through <br /> Design and Motion.
            </h1>
            <p className="text-sm lg:text-[16px]  lg:h-[99px] lg:w-[462px] lg:mt-8  font-medium mt-4 lg:pl-3">
              We refine your content with expert editing, sound design, and
              visuals, delivering a polished and professional final product.
            </p>
          </div>

          {/* Image Section */}
          <div className="h-[300px] sm:h-[343px] w-[300px] sm:w-[343px] lg:w-[612px] lg:h-[583px] container mx-auto">
            <Image
              src={postlogo}
              alt="logo"
              width={663}
              height={663}
              className="lg:pt-24"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto  h-[584px] lg:w-[1341px] mt-56 flex lg:flex-row lg:justify-center  flex-col gap-12">
        <div className="lg:w-[421px] lg:h-[547px] w-[343px] h-[480px]  bg-gradient-to-b from-[#000000] to-[#393939] text-white  shadow-2xl rounded-xl p-6">
          {/* Icon Section */}
          <div className="flex justify-start mb-4 ">
            <div className="bg-gray-100 p-3 rounded-full">
              <Image src={vector} alt="vector" />
            </div>
          </div>

          {/* Title Section */}
          <h2 className="lg:text-[22px] font-semibold text-white mb-2">
            Graphic Designing
          </h2>
          <p className="text-sm text-[#A1A1A1] mb-16 lg:text-[14px]  tracking-normal  font-medium h-[40px] w-[301px]">
            Building brands that go beyond the ordinary, powered by innovation
            and bold ideas."
          </p>

          {/* Button */}
          <div className="flex justify-center ">
            <button className="w-[296px] h-[39px]  bg-[#FFFFFF] text-[#000000] py-2 rounded-lg text-sm font-medium mb-4 ">
              Let’s Connect
            </button>
          </div>

          {/* Features List */}
          <ul className="text-sm  space-y-6 font-medium  text-[#E0E0E0] mt-4 lg:text-[15px]">
            <li>Social media posts</li>
            <li>background Design</li>
            <li>Thumbnail Design</li>
            <li>Flyers Design</li>
            <li>Logo / Identity Design</li>
          </ul>
        </div>

        <div className="lg:w-[421px] lg:h-[547px] w-[343px] h-[480px] bg-gradient-to-b from-[#000000] to-[#393939] text-white  shadow-2xl rounded-xl p-6 font-sans">
          {/* Icon Section */}
          <div className="flex justify-start mb-4 ">
            <div className="bg-[#5A5A5A] p-3 rounded-full">
              <Image src={videoediting} />
            </div>
          </div>

          {/* Title Section */}
          <h2 className="text-xl font-bold text-white mb-2">Development</h2>
          <p className="text-sm text-[#A1A1A1] mb-16  tracking-wide font-normal">
            Building brands that go beyond the ordinary, powered by innovation
            and bold ideas."
          </p>

          {/* Button */}
          <div className="flex justify-center ">
            <button className="w-[296px] h-[39px]  bg-[#FFFFFF] text-[#000000] py-2 rounded-lg text-sm font-medium mb-4 ">
              Let’s Connect
            </button>
          </div>

          {/* Features List */}
          <ul className="text-sm  space-y-6 font-semibold text-[#E0E0E0] mt-4">
            <li>Social media posts</li>
            <li>background Design</li>
            <li>Thumbnail Design</li>
            <li>Flyers Design</li>
            <li>Logo / Identity Design</li>
          </ul>
        </div>
      </div>

      <div className="lg:w-[937px] lg:h-[46px] w-fit h-fit container mx-auto lg:mt-40 mt-96 text-center tracking-wide">
        <p className="text-[12px] font-medium">
          Discover Markitify’s expert post-production services, specializing in
          stunning graphic design and professional video editing. Elevate your
          brand with captivating visuals and impactful videos. Contact us today!
        </p>
      </div>

      <div className="lg:mt-56 mt-[1050px] container mx-auto text-center flex flex-col items-center h-auto lg:h-[360px] ">
        <h1 className="text-[14px] font-bold text-[#4A4A4A] mb-10">
          What you will get
        </h1>
        <div className="w-full lg:w-[615px] flex flex-col">
          <div className="flex flex-wrap gap-6 sm:gap-6 justify-center">
            <div className="text-[14px] font-semibold bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              Creativity
            </div>
            <div className="text-[14px] font-semibold bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              Strategy
            </div>
            <div className="text-[14px] font-semibold bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              Growth
            </div>
          </div>
          <div className="flex flex-wrap gap-8 sm:gap-6 justify-center mt-4">
            <div className="text-[14px] font-semibold bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              Optimization
            </div>
            <div className="text-[14px] font-semibold bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              Analytics
            </div>
            <div className="text-[14px] font-semibold bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              Audience Engagement
            </div>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center mt-4">
            <div className="text-[14px] font-semibold bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
            storytelling
            </div>
            <div className="text-[14px] font-semibold bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
            Influence
            </div>
            <div className="text-[14px] font-semibold bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
            brandingF
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mt-2 mt-60 mb-44 container mx-auto text-center flex flex-col items-center">
        <h1 className="text-2xl lg:text-3xl font-bold text-[#4A4A4A] mb-10">
          Take off in just 4 steps
        </h1>
        <div className="lg:flex lg:flex-row lg:gap-8 flex flex-col gap-6 lg:w-[1183px] w-full lg:h-auto lg:rounded-2xl border-y-4 border-x-4 border-dashed p-6 sm:p-12 justify-center items-center">
          {/* Step 1 */}
          <div className="w-[300px] sm:w-[260px] h-auto max-h-[200px] bg-white text-black rounded-2xl drop-shadow-2xl p-4">
            <div className="flex justify-start gap-x-4 items-center">
              <Image src={call} alt="discover call" width={32} height={32} />
              <h1 className="font-semibold text-lg lg:text-xl">
                Discover Call
              </h1>
            </div>
            <p className="font-medium text-[12px] sm:text-[10px] w-full h-auto mt-2 text-left tracking-wider">
              We start with a conversation to understand your business, goals,
              and audience. This helps us identify your needs and outline a
              personalized approach for your project.
            </p>
          </div>

          {/* Step 2 */}
          <div className="w-[300px] sm:w-[260px] h-auto max-h-[200px] bg-[#212121] text-[#D5D5D5] rounded-2xl p-4">
            <div className="flex justify-start gap-x-4 items-center">
              <Image src={sign} alt="discover call" width={32} height={32} />
              <h1 className="font-semibold text-[14px] sm:text-[16px]">
                Proposal & Agreement
              </h1>
            </div>
            <p className="font-medium text-[12px] sm:text-[10px] w-full h-auto mt-2 text-left tracking-wide">
              Based on our discussion, we create a detailed proposal with a
              clear project scope, timelines, and deliverables. Once you
              approve, we finalize the agreement to move forward confidently.
            </p>
          </div>

          {/* Step 3 */}
          <div className="w-[300px] sm:w-[260px] h-auto max-h-[200px] bg-white text-black rounded-2xl drop-shadow-2xl p-4">
            <div className="flex justify-start gap-x-4 items-center">
              <Image
                src={elements}
                alt="discover call"
                width={32}
                height={32}
              />
              <h1 className="font-semibold text-[14px] sm:text-[16px]">
                Collaboration/Approval
              </h1>
            </div>
            <p className="font-medium text-[12px] sm:text-[10px] w-full h-auto mt-2 text-left tracking-wider">
              We start with a conversation to understand your business, goals,
              and audience. This helps us identify your needs and outline a
              personalized approach for your project.
            </p>
          </div>

          {/* Step 4 */}
          <div className="w-[300px] sm:w-[260px] h-auto max-h-[200px] bg-[#212121] text-[#D5D5D5] rounded-2xl drop-shadow-2xl p-4">
            <div className="flex justify-start gap-x-4 items-center">
              <Image src={paper} alt="discover call" width={32} height={32} />
              <h1 className="font-semibold text-[14px] sm:text-[16px]">
                Take Off
              </h1>
            </div>
            <p className="font-medium text-[12px] sm:text-[10px] w-full h-auto mt-3 text-left tracking-wider">
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

export default Production;
