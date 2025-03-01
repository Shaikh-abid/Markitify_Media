"use client";

import { useState, useEffect } from "react";
import play from "@/app/play.jpg";
import board from "@/app/clapperboard.jpg";
import code from "@/app/images/code.jpg";
import ad from "@/app/ad.jpg";
import branding from "@/app/branding.jpg";
import Image from "next/image";
import Link from "next/link";

const Demo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  const cardsData = [
    {
      icon: board,
      cardName: "Post production",
      desc: "Perfecting content with top-notch editing, sound design, and Graphic Design Services.",
      btnText: "Explore more",
      tags: [
        "Video Editing",
        "Graphic Designing",
        "Color Correction and Grading",
        "Sound Editing and Design",
      ],
      link: "/postproduction",
    },

    {
      icon: code,
      cardName: "Design and Devlopment",
      desc: "Creating stunning designs and user-friendly websites tailored to your brand.",
      btnText: "Explore more",
      tags: [
        "Ui Ux design",
        "Development",
        "SEO Optimisation",
        "Maintenance and Support",
      ],
      link: "/design",
    },

    {
      icon: play,
      cardName: "Social Media",
      desc: "Building connections through engaging campaigns and audience interaction.",
      btnText: "Explore more",
      tags: ["Youtube", "Instagram 360", "Linkedin"],
      link: "/social",
    },

    {
      icon: branding,
      cardName: "Brand Identity",
      desc: "Crafting logos, guidelines, and strategies for a consistent, impactful brand.",
      btnText: "Lets Connect",
      tags: [
        "Logo Design",
        "Visual Identity Development",
        "Brand Guidelines",
        "Brand Strategy",
      ],
      link: "#",
    },

    {
      icon: ad,
      cardName: "Advertisement ",
      desc: "In addition to our core services, we offer targeted advertising solutions to amplify your brand's reach. ",
      btnText: "Lets Connect",
      tags: ["Meta Ads", "Google Ads", "Instagram Ads ", "Linkedin Ads"],
      link: "#",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    handleResize(); // Set initial width
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisibleCards = () => {
    if (screenWidth < 768) return 1; // Mobile
    if (screenWidth < 1024) return 2; // Tablet
    return 3; // Desktop
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    const visible = getVisibleCards();
    setCurrentIndex((prev) => Math.min(prev + 1, cardsData.length - visible));
  };

  return (
    <div className="lg:max-w-[1521px] bg-[#F5F5F5] py-8 lg:max-h-[750px] container mx-auto rounded-2xl">
      <h1 className="text-[#2B2B2B] font-semibold text-2xl md:text-3xl lg:text-[36px] text-center mb-2 px-4">
        Our Services
      </h1>

      <div className="container mx-auto overflow-hidden py-4 px-2">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${
              currentIndex * (100 / getVisibleCards())
            }%)`,
          }}
        >
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-2 flex-shrink-0"
            >
              <div className="max-w-[320px] h-[422px] rounded-xl bg-white mx-auto py-6 md:py-8 pl-4 md:pl-5 shadow-xl my-4 md:my-8">
                {/* Icon Section */}
                <div className="w-6 h-6 md:w-7 md:h-7 rounded-lg bg-[#c8c3c3] shadow-2xl mb-3">
                  <Image
                    src={card.icon}
                    alt="icon"
                    className="rounded-lg"
                    layout="responsive"
                    width={29}
                    height={29}
                  />
                </div>

                {/* Card Content */}
                <h1 className="text-[#212121] font-semibold text-lg md:text-xl lg:text-[22px] mb-2 md:mb-3">
                  {card.cardName}
                </h1>
                <p className="text-[#636363] font-medium text-xs md:text-[12px] mb-4 md:mb-6 tracking-tight max-w-[272px]">
                  {card.desc}
                </p>

                {/* Pricing (only for specific cards) */}
                {index === 3 && (
                  <div className="pl-4 md:pl-6 mb-2">
                    <h1 className="font-bold text-xl md:text-2xl">
                      <span className="font-medium text-base md:text-[17px]">
                        $
                      </span>
                      249
                      <span className="font-medium text-xs md:text-[12px] text-[#747474]">
                        / one time
                      </span>
                    </h1>
                  </div>
                )}

                {/* Button */}
                <div className="flex justify-center items-center mb-4 md:mb-5">
                  <Link
                    href={card.link}
                    className={`bg-black text-white font-medium text-xs md:text-[14px] rounded-lg py-2 ${
                      index === 3 || index === 4
                        ? "w-full max-w-[268px] px-2"
                        : "w-full max-w-[158px]"
                    } flex justify-center items-center`}
                  >
                    {card.btnText}
                  </Link>
                </div>

                {/* Tags */}
                <div className="text-black font-medium text-xs md:text-[14px] space-y-3 md:space-y-6">
                  {card.tags.map((tag, idx) => (
                    <p key={idx} className="leading-tight">
                      {tag}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Navigation Dots */}
      <div className="flex items-center justify-center mt-8 md:mt-8 lg:mt-10">
        {[...Array(cardsData.length - getVisibleCards() + 1)].map((_, idx) => (
          <div key={idx} className="flex items-center">
            {idx > 0 && <div className="w-3 md:w-5 h-1 bg-black" />}
            <div
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer transition-colors
                ${
                  currentIndex === idx
                    ? "bg-black border-black"
                    : "bg-white border-2 md:border-4 border-black"
                }
              `}
              onClick={() => setCurrentIndex(idx)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Demo;
