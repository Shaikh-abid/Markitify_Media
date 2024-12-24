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

const ScheduleCall = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto backdrop-opacity-10 mt-24 bg-[linear-gradient(to_right,#80808012_3px,transparent_6px),linear-gradient(to_bottom,#80808012_3px,transparent_6px)] bg-[size:66px_66px] bg-cover bg-center">
        <div className="flex lg:flex-row lg:w-full pt-16 lg:justify-between lg:items-center flex-col w-full items-center lg:text-left text-center">
          {/* Heading Section */}
          <div className="mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-4xl lg:text-[60px] font-medium lg:w-[640px] lg:h-[146px] leading-tight lg:pl-10">
              Get your personalised{" "}
              <span className="text-green-400">quotation</span>
            </h1>
            <p className="text-[16px] sm:text-[16px] lg:h-[69px] lg:w-[414px] lg:mt-8 font-medium mt-4 mx-4 ml-12 text-[#000000]">
              At Markitify, we offer flexible services and are ready to provide
              additional solutions as per your requirements. Let’s create
              something extraordinary together!
            </p>
          </div>

          {/* Image Section */}
          <div className="h-[300px] sm:h-[343px] w-[300px] sm:w-[343px] lg:w-[535px] lg:h-[535px] container mx-auto">
            <Image
              src={callLogo}
              alt="logo"
              width={535}
              height={535}
              className="lg:pt-24"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto bg-[#F2F2F2] shadow-2xl mt-44 lg:w-[1218px] h-auto rounded-2xl flex items-center justify-evenly flex-col lg:flex-row">

        <div className="w-full lg:w-[590px] h-auto bg-[#1F1F1F] rounded-3xl p-6 sm:p-8 mx-4 sm:mx-6 lg:mx-0">
          <div className="flex items-center mt-8 ml-4 gap-4">
            <Image src={callSign} width={50} height={50} />
            <h1 className="text-[#D5D5D5] text-[18px] font-semibold">
              Request Your Custom Quotation
            </h1>
          </div>
          <p className="text-[#FFFFFF] font-medium text-[14px] mt-6 tracking-wider leading-6">
            Our quotation section is designed to make the process seamless and
            straightforward for you. By answering a few key questions about your
            company and project needs, you help us understand your vision,
            goals, and specific requirements.
          </p>
          <p className="text-[#FFFFFF] font-medium text-[14px] mt-4 tracking-wider leading-6">
            Once you submit the form, our team will carefully review your
            responses and craft a detailed, transparent quotation tailored to
            your needs. Within 24-48 hours, you’ll receive a clear plan
            outlining the scope, deliverables, and costs.
          </p>
          <p className="text-[#FFFFFF] font-medium text-[14px] mt-4 tracking-wider leading-6">
            Need to discuss your project further? You can arrange a meeting with
            us at your convenience by simply picking a date using our date
            picker tool.
          </p>
          <div className="mt-4">
            <button className="w-[157px] h-[34px] bg-[#D5D5D5] text-[#000000] py-2 px-2 flex justify-center items-center rounded-lg">
              Schedule Meet
            </button>
          </div>
        </div>



        <div className="w-full lg:w-[590px] h-auto p-4 mt-8 lg:mt-0">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label className="font-semibold text-[16px]">Your Name</label>
              <input
                type="text"
                placeholder="Steven paul jobs"
                className="w-full h-[33px] bg-[#FFFFFF] text-[#848584] text-[12px] font-normal rounded-md p-2 focus:outline-black"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold text-[16px]">Email</label>
              <input
                type="email"
                placeholder="jobs@apple.com"
                className="w-full h-[33px] bg-[#FFFFFF] text-[#848584] text-[12px] font-normal rounded-md p-2 focus:outline-black"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold text-[16px]">Company /Brand Name?</label>
              <input
                type="text"
                placeholder="Apple computers"
                className="w-full h-[33px] bg-[#FFFFFF] text-[#848584] text-[12px] font-normal rounded-md p-2 focus:outline-black"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold text-[16px]">Where we can find more about you?</label>
              <input
                type="text"
                placeholder="Apple.com / linkedin-apple"
                className="w-full h-[33px] bg-[#FFFFFF] text-[#848584] text-[12px] font-normal rounded-md p-2 focus:outline-black"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold text-[16px]">What services are you looking for?</label>
              <input
                type="text"
                placeholder="Design and development / Brand Identity"
                className="w-full h-[33px] bg-[#FFFFFF] text-[#848584] text-[12px] font-normal rounded-md p-2 focus:outline-black"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold text-[16px]">What specific features or elements are you expecting?</label>
              <input
                type="text"
                placeholder="want to improve identity and modern webpage"
                className="w-full h-[33px] bg-[#FFFFFF] text-[#848584] text-[12px] font-normal rounded-md p-2 focus:outline-black"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold text-[16px]">What is your budget range?</label>
              <input
                type="text"
                placeholder="20k - 80k"
                className="w-full h-[33px] bg-[#FFFFFF] text-[#848584] text-[12px] font-normal rounded-md p-2 focus:outline-black"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-semibold text-[16px]">Explain more about the project / goal?</label>
              <input
                type="text"
                placeholder="We don’t have identity in market and want build strong identity and presence."
                className="w-full h-[33px] bg-[#FFFFFF] text-[#848584] text-[12px] font-normal rounded-md p-2 focus:outline-black"
              />
            </div>

            <div className="mt-5">
              <button className="w-full h-[34px] bg-[#1F1F1F] font-semibold text-[16px] text-[#FFFFFF] rounded-lg py-1">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Marketing Text */}
      <div className="lg:w-[1040px] lg:h-[112px] container mx-auto mt-40 text-center tracking-wider leading-6">
        <p className="text-[12px] font-medium text-[#4A4A4A]">
          Marketing is the backbone of any successful business, bridging the gap
          between a brand and its audience. It creates awareness, builds trust,
          and drives engagement, ensuring your products or services reach the
          right people. In a competitive landscape, effective marketing helps
          differentiate your brand, making it memorable and relatable.
        </p>
      </div>


      <div className="lg:mt-36  mt-60 mb-44 container mx-auto text-center flex flex-col items-center">
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
    </>
  );
};

export default ScheduleCall;
