import Navbar from "@/Components/Navbar";
import Image from "next/image";
import React from "react";

import design from "@/app/webdesign.png";

import call from "@/app/discall.png";
import sign from "@/app/signature.png";
import paper from "@/app/paper.png";
import elements from "@/app/elements.png";
import Frame from "@/app/Frame.png";

import code from "@/app/code.png";
import layer from "@/app/layer.png";
import shuttle from "@/app/shuttle.png";

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
            <h1 className="text-[20px] lg:text-left text-center pl-6  lg:text-[60px]  font-medium lg:w-[640px] lg:h-[219px]  lg:pl-3 md:mt-20 font-helvetica leading-tight">
              Where Every Pixel, Every Line, and Every Idea Matters
            </h1>
            <p className="text-sm text-left sm:text-[16px]  lg:h-[69px] lg:w-[450px] lg:mt-2 ml-6 font-medium mt-4">
              We create stunning designs and develop user-friendly websites that
              capture your brand’s essence and deliver exceptional user
              experiences.
            </p>
          </div>

          {/* Image Section */}
          <div className=" max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:w-[663px] lg:h-[663px] lg:mt-10">
            <Image
              src={design}
              alt="logo"
              width={663}
              height={663}
              className="object-cover object-center rounded lg:pt-24 "
            />
          </div>
        </div>
      </div>



      <div className="container mx-auto  lg:h-[584px] lg:w-[1341px] lg:mt-52 flex lg:flex-row lg:justify-center lg:gap-10 flex-col gap-12 h-auto py-10 sm:mt-10">
        <div className="lg:w-[343px] lg:h-[510px] bg-white shadow-2xl rounded-xl p-6 mx-auto w-[280px] h-auto">
          {/* Icon Section */}
          <div className="flex justify-start">
            <div className="bg-[#F5F5F5] w-[44px] h-[44px] rounded-xl shadow-2xl">
              <Image src={layer} alt="layer" className="" />
            </div>
          </div>

          {/* Title Section */}
          <h2 className="text-[22px] font-semibold text-[#212121]">
            UI and UX Design
          </h2>
          <p className="text-[12px] font-[Inter] text-[#636363] lg:mb-8 mb-4  tracking-wide font-normal">
            Building brands that go beyond the ordinary, powered by innovation
            and bold ideas.
          </p>

          {/* Pricing Section */}
          <div className="text-xs  text-gray-900  flex flex-col">
            <p className="text-[10px] font-medium text-[#9B9B9B]">
              Start from{" "}
            </p>
            <span className="text-[#000000] font-helvetica font-bold text-xl">
              <span className="text-[17px] font-medium text-[#000000]">$</span>
              129{" "}
              <span className="font-medium text-[#747474] text-[12px]">
                / project
              </span>
            </span>
          </div>

          {/* Button */}
          <button className="w-full bg-black text-white py-2 rounded-lg text-sm font-medium mb-4 hover:bg-gray-800">
            Let’s Connect
          </button>

          <p className="text-[#747474]  text-[10px] mb-4 text-center tracking-wider font-medium">
            The cost may adjust depending on the complexity of the project.
          </p>

          {/* Features List */}
          <ul className="text-[14px] text-[#000000]  lg:space-y-6 space-y-3 font-medium mt-8">
            <li>Figma Prototype / 6-8 screen</li>
            <li>Responsive Design</li>
            <li>Wireframes and Prototypes</li>
            <li>Brand Identity integration</li>
          </ul>
        </div>

        <div className="lg:w-[440px] lg:h-[580px] w-[280px] h-auto md:w-[400px] md:h-full scale-100 mx-auto   bg-[#212121] text-white  shadow-2xl rounded-xl p-6 ">
          {/* Icon Section */}
          <div className="flex justify-start mb-4 ">
            <div className="bg-[#5A5A5A]  rounded-xl shadow-2xl h-[44px] w-[44px] flex justify-center items-center">
              <Image src={code} alt="code" width={33} height={33} />
            </div>
          </div>

          {/* Title Section */}
          <h2 className="text-[22px] font-semibold text-white">Development</h2>
          <p className="text-[12px] text-[#636363] lg:mb-16 mb-5  tracking-wider font-medium">
            Building brands that go beyond the ordinary, powered by innovation
            and bold ideas.
          </p>

          <div className="w-full flex justify-center">
            {/* Button */}
            <button className=" bg-[#FFFFFF] text-black py-2 lg:px-24  rounded-lg text-sm font-semibold mb-4 px-16">
              Let’s Connect
            </button>
          </div>

          <div className="text-[10px] text-[#747474] mb-4 text-center mx-auto container tracking-wide lg:w-[277px] lg:h-[28px] ">
            <p className="">
              The cost may adjust depending on the complexity of the project.
            </p>
          </div>

          {/* Features List */}
          <ul className="text-[14px]   space-y-4 font-medium text-[#E0E0E0]">
            <li>Front-End Development</li>
            <li>Back-End Development</li>
            <li>Hosting & Domain Management </li>
            <li>Database Management</li>
            <li>E-Commerce Development</li>
            <li>API Integration</li>
          </ul>
        </div>

        <div className="lg:w-[343px] lg:h-[510px] bg-white shadow-2xl rounded-xl p-6 mx-auto w-[280px] h-auto">
          {/* Icon Section */}
          <div className="flex justify-start">
            <div className="bg-[#F5F5F5] p-2  rounded-xl shadow-2xl h-[42px] w-[42px]">
              <Image src={shuttle} alt="shuttle" />
            </div>
          </div>

          {/* Title Section */}
          <h2 className="text-[22px] font-semibold text-[#212121]">
            Optimisation
          </h2>
          <p className="text-[12px] font-[Inter] text-[#636363] lg:mb-8 mb-4  tracking-wide font-normal">
            Building brands that go beyond the ordinary, powered by innovation
            and bold ideas.
          </p>

          {/* Pricing Section */}
          <div className="text-xs  text-gray-900  flex flex-col">
            <p className="text-[10px] font-medium text-[#9B9B9B]">
              Start from{" "}
            </p>
            <span className="text-[#000000] font-helvetica font-bold text-xl">
              <span className="text-[17px] font-medium text-[#000000]">$</span>
              119{" "}
              <span className="font-medium text-[#747474] text-[12px]">
                / project
              </span>
            </span>
          </div>

          {/* Button */}
          <button className="w-full bg-black text-white py-2 rounded-lg text-sm font-medium mb-4 hover:bg-gray-800">
            Let’s Connect
          </button>

          <p className="text-[#747474]  text-[10px] mb-4 text-center tracking-wider font-medium">
            The cost may adjust depending on the complexity of the project.
          </p>

          {/* Features List */}
          <ul className="text-[14px] text-[#000000]  lg:space-y-6 space-y-3 font-medium mt-8">
            <li>SEO Optimization</li>
            <li>Performance Tuning</li>
            <li>Conversion Rate Optimization (CRO)</li>
            <li>Conetnt Optimization</li>
          </ul>
        </div>
      </div>







      

      <div className="lg:mt-56  container mx-auto text-center flex flex-col items-center h-auto lg:h-[500px] mt-8">
        <h1 className="text-[14px] lg:text-[14px] font-medium text-[#4A4A4A] mb-10 mt-24">
          What you will get
        </h1>

        <div className="lg:w-[615px] lg:h-[145px] flex flex-col w-[300px] h-auto ">
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
            <div className="text-[14px] font-medium bg-[#F2F2F2]  py-1 border-1 border-dashed rounded-lg w-[131px] h-[32px]">
              Improved UI
            </div>
            <div className="text-[14px] font-medium bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg w-[118px] h-[32px]">
              Consulting
            </div>
            <div className="text-[14px] font-medium bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg w-[77px] h-[32px]">
              CMS
            </div>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center mt-4">
            <div className="text-[14px] font-medium bg-[#F2F2F2]  py-1 border-2 border-dashed rounded-lg w-[172px] h-[32px]">
              High Conversion rate
            </div>
            <div className="text-[14px] font-medium bg-[#F2F2F2]  py-1 border-2 border-dashed rounded-lg w-[131px] h-[32px]">
              Improved UX
            </div>
            <div className="text-[14px] font-medium bg-[#F2F2F2] py-1 border-2 border-dashed rounded-lg w-[248px] h-[32px]">
              Conversion Rate Optimization
            </div>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center mt-4">
            <div className="text-[14px] font-medium bg-[#F2F2F2]  py-1 border-2 border-dashed rounded-lg w-[172px] h-[32px]">
              Responsive design
            </div>
            <div className="text-[14px] font-medium bg-[#F2F2F2]  py-1 border-2 border-dashed rounded-lg w-[131px] h-[32px]">
              Figma Design
            </div>
            <div className="text-[14px] font-medium bg-[#F2F2F2]  py-1 border-2 border-dashed rounded-lg w-[106px] h-[32px]">
              Backend
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
