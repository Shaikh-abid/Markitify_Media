import Navbar from "@/Components/Navbar";
import Image from "next/image";
import React from "react";

import design from "@/app/webdesign.png";

import call from "@/app/discall.png";
import sign from "@/app/signature.png";
import paper from "@/app/paper.png";
import elements from "@/app/elements.png";

import code from '@/app/code.png'
import layer from '@/app/layer.png'
import shuttle from '@/app/shuttle.png'




import Footer from "@/Components/Footer";

const DesignPage = () => {
  return (
    <div className="overflow-hidden">
      <Navbar />
     

      <div className="container mx-auto backdrop-opacity-10 h-[584px] w-full lg:w-[1341px] mt-24 bg-[linear-gradient(to_right,#80808012_3px,transparent_6px),linear-gradient(to_bottom,#80808012_3px,transparent_6px)] bg-[size:66px_66px]">
        <div className="flex lg:flex-row lg:w-full pt-16 lg:justify-between lg:items-center flex-col w-full items-center lg:text-left text-center">
          {/* Heading Section */}
          <div className="mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold lg:w-[675px] lg:h-[219px] leading-tight lg:pl-10">
              Where Every Pixel, <br /> Every Line, and Every
              <br /> Idea Matters
            </h1>
            <p className="text-sm sm:text-[16px]  lg:h-[69px] lg:w-[450px] lg:mt-8  font-medium mt-4 mx-4">
              We create stunning designs and develop user-friendly websites that
              capture your brand’s essence and deliver exceptional user
              experiences.
            </p>
          </div>

          {/* Image Section */}
          <div className="h-[300px] sm:h-[343px] w-[300px] sm:w-[343px] lg:w-[663px] lg:h-[663px] container mx-auto">
            <Image
              src={design}
              alt="logo"
              width={663}
              height={663}
              className="lg:pt-24"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto  h-[584px] lg:w-[1341px] mt-56 flex lg:flex-row lg:justify-center lg:gap-10 flex-col gap-12">
        <div className="w-[343px] h-[480px]  bg-white shadow-2xl rounded-xl p-6 mx-auto">
          {/* Icon Section */}
          <div className="flex justify-start mb-4 ">
            <div className="bg-gray-100 p-2 rounded-xl shadow-2xl">
              <Image src={layer} alt="layer"/>
            </div>
          </div>

          {/* Title Section */}
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            UI and UX Design
          </h2>
          <p className="text-sm text-gray-600 mb-4  tracking-wide font-normal">
            Building brands that go beyond the ordinary, powered by innovation
            and bold ideas.
          </p>

          {/* Pricing Section */}
          <div className="text-xs  text-gray-900  flex flex-col font-thin mb-4">
            Start from{" "}
            <span className="text-black font-semibold text-xl">
              $129 <span className="font-thin text-sm">/ project</span>
            </span>
          </div>

          {/* Button */}
          <button className="w-full bg-black text-white py-2 rounded-lg text-sm font-medium mb-4 hover:bg-gray-800">
            Let’s Connect
          </button>

          <p className="text-xs text-black mb-4 text-center tracking-wider">
            The cost may adjust depending on the complexity of the project.
          </p>

          {/* Features List */}
          <ul className="text-sm  space-y-4 font-semibold">
            <li>Figma Prototype / 6-8 screen</li>
            <li>Responsive Design</li>
            <li>Wireframes and Prototypes</li>
            <li>Brand Identity integration</li>
          </ul>
        </div>

        <div className="lg:w-[440px] lg:h-[580px] w-[343px] h-[480px]  scale-100 mx-auto   bg-[#212121] text-white  shadow-2xl rounded-xl p-6 font-sans">
          {/* Icon Section */}
          <div className="flex justify-start mb-4 ">
            <div className="bg-[#5A5A5A] p-2 rounded-xl shadow-2xl">
              <Image src={code} alt="code"/>
            </div>
          </div>

          {/* Title Section */}
          <h2 className="text-xl font-bold text-white mb-2">Development</h2>
          <p className="text-sm text-[#636363] mb-4  tracking-wider font-normal">
            Building brands that go beyond the ordinary, powered by innovation
            and bold ideas.
          </p>

          <div className="w-full flex justify-center">
            {/* Button */}
            <button className=" bg-[#FFFFFF] text-black py-2 px-24  rounded-lg text-sm font-semibold mb-4">
              Let’s Connect
            </button>
          </div>

          <p className="text-base text-[#747474] mb-4 text-center">
            The cost may adjust depending on the complexity of the project.
          </p>

          {/* Features List */}
          <ul className="text-sm  space-y-4 font-semibold text-[#E0E0E0]">
            <li>Figma Prototype / 6-8 screen</li>
            <li>Responsive Design</li>
            <li>Wireframes and Prototypes</li>
            <li>Brand Identity integration</li>
          </ul>
        </div>

        <div className="w-[343px] h-[480px] mx-auto   bg-white shadow-2xl rounded-xl p-6 ">
          {/* Icon Section */}
          <div className="flex justify-start mb-4 ">
            <div className="bg-gray-100 p-2 shadow-2xl rounded-xl">
              <Image src={shuttle} alt="shuttle"/>
            </div>
          </div>

          {/* Title Section */}
          <h2 className="text-xl font-bold text-gray-900 mb-2">Optimisation</h2>
          <p className="text-sm text-gray-600 mb-4  tracking-wide font-normal">
            Building brands that go beyond the ordinary, powered by innovation
            and bold ideas.
          </p>

          {/* Pricing Section */}
          <div className="text-xs  text-gray-900  flex flex-col font-thin mb-4">
            Start from{" "}
            <span className="text-black font-semibold text-xl">
              $119 <span className="font-thin text-sm">/ project</span>
            </span>
          </div>

          {/* Button */}
          <button className="w-full bg-black text-white py-2 rounded-lg text-sm font-medium mb-4 hover:bg-gray-800">
            Let’s Connect
          </button>

          <p className="text-xs tracking-wider  mb-4 text-center">
            The cost may adjust depending on the complexity of the project.
          </p>

          {/* Features List */}
          <ul className="text-sm  space-y-4 font-semibold">
            <li>SEO Optimization</li>
            <li>Performance Tuning</li>
            <li>Conversion Rate Optimization (CRO)</li>
            <li>Content Optimization</li>
          </ul>
        </div>
      </div>
      {/* 
      <div className="lg:mt-56 mt-[1050px] container mx-auto  text-center flex flex-col items-center h-[500px]">
        <h1 className="text-3xl font-bold text-[#4A4A4A] mb-10">
          What you will get
        </h1>
        <div className="w-[615px] h-[145px] flex flex-col">
          <div className="flex gap-6 justify-center">
            <div className="lg:text-[14px] font-semibold bg-[#F2F2F2] px-6 py-1 border-2 border-dashed rounded-lg">Improved UI</div>
            <div className="lg:text-[14px] font-semibold bg-[#F2F2F2] px-6 py-1 border-2 border-dashed rounded-lg">Consulting</div>
            <div className="lg:text-[14px] font-semibold bg-[#F2F2F2] px-6 py-1 border-2 border-dashed rounded-lg">CMS</div>
          </div>
          <div className="flex gap-6 justify-center mt-4">
          <div className="lg:text-[14px] font-semibold bg-[#F2F2F2] px-6 py-1 border-2 border-dashed rounded-lg">High Conversion rate</div>
            <div className="lg:text-[14px] font-semibold bg-[#F2F2F2] px-6 py-1 border-2 border-dashed rounded-lg">Improved UX </div>
            <div className="lg:text-[14px] font-semibold bg-[#F2F2F2] px-6 py-1 border-2 border-dashed rounded-lg">Conversion Rate Optimization</div>
          </div>
          <div className="flex gap-6 justify-center mt-4">
          <div className="lg:text-[14px] font-semibold bg-[#F2F2F2] px-6 py-1 border-2 border-dashed rounded-lg">Responsive design</div>
            <div className="lg:text-[14px] font-semibold bg-[#F2F2F2] px-6 py-1 border-2 border-dashed rounded-lg">Figma Design</div>
            <div className="lg:text-[14px] font-semibold bg-[#F2F2F2] px-6 py-1 border-2 border-dashed rounded-lg">Backend</div>
          </div>
        </div>
      </div> */}

      <div className="lg:mt-56 mt-[1050px] container mx-auto text-center flex flex-col items-center h-auto lg:h-[500px]">
        <h1 className="text-3xl font-bold text-[#4A4A4A] mb-10">
          What you will get
        </h1>
        <div className="w-full lg:w-[615px] flex flex-col">
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
            <div className="text-[14px] font-semibold bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              Improved UI
            </div>
            <div className="text-[14px] font-semibold bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              Consulting
            </div>
            <div className="text-[14px] font-semibold bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              CMS
            </div>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center mt-4">
            <div className="text-[14px] font-semibold bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              High Conversion rate
            </div>
            <div className="text-[14px] font-semibold bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              Improved UX
            </div>
            <div className="text-[14px] font-semibold bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              Conversion Rate Optimization
            </div>
          </div>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center mt-4">
            <div className="text-[14px] font-semibold bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              Responsive design
            </div>
            <div className="text-[14px] font-semibold bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              Figma Design
            </div>
            <div className="text-[14px] font-semibold bg-[#F2F2F2] px-4 sm:px-6 py-1 border-2 border-dashed rounded-lg">
              Backend
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mt-16 mt-60 mb-44 container mx-auto text-center flex flex-col items-center">
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

export default DesignPage;
