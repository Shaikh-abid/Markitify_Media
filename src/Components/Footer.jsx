import React from "react";

import footerLogo from "@/app/footerLogo.png";
import dis from "@/app/discord.png";
import insta from "@/app/instagram.png";
import footer from "@/app/Footer.png";
import linkdin from "@/app/linkedin.png";
import facebook from "@/app/facebook.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="lg:w-[1330px] w-[300px]  h-[2px]  bg-[#A2A2A2] container mx-auto"></div>
      <div className="w-full h-2/5 grid lg:grid-cols-3 lg:grid-rows-1 ">
        <div className="hidden lg:block relative">
          <Image
            src={footer}
            alt="footerImage"
            className=" absolute bottom-0"
            width={475.82}
            height={443.48}
          />
        </div>

        <div className=" flex flex-col ">
          <div className="flex py-auto justify-evenly mt-16 lg:mb-16 relative lg:-left-44 lg:top-16">
            <div className="font-medium lg:text-[16px] text-[#818181]">
              <Link href={"/about"}>
                <p className="hover:text-[#302e2e] transition-all duration-300">
                  About
                </p>
              </Link>
              <Link href={"/"}>
                <p className="hover:text-[#302e2e] transition-all duration-300">
                  Services
                </p>
              </Link>
              <Link href={"/call"}>
                <p className="hover:text-[#302e2e] transition-all duration-300">
                  Contact
                </p>
              </Link>
            </div>
            <div className="font-medium lg:text-[16px] text-[#818181]">
              <Link href={"/"}>
                <p className="hover:text-[#302e2e] transition-all duration-300">
                  Portfolio
                </p>
              </Link>
              <Link href={"/"}>
                <p className="hover:text-[#302e2e] transition-all duration-300 ">
                  Carrier
                </p>
              </Link>
              <Link href={"/call"}>
                <p className="hover:text-[#302e2e] transition-all duration-300">
                  Schedula Call
                </p>
              </Link>
            </div>
          </div>

          <div className=" flex flex-col items-center justify-end relative lg:-top-10">
            <div className="flex gap-6 lg:mt-20 mt-10">
              <Link
                href={
                  "https://www.instagram.com/markitify.in?igsh=MXZndGhzZ29sbW5qZA=="
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={insta}
                  width={25}
                  height={25}
                  alt="insta"
                  className="hover:scale-125 transition-all duration-300"
                />
              </Link>

              <Link
                href={"https://www.linkedin.com/company/markitifymedia-agency/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={linkdin}
                  width={29}
                  height={29}
                  alt="linkedin"
                  className="hover:scale-125 transition-all duration-300"
                />
              </Link>

              <Link href={"/"}>
                <Image
                  src={facebook}
                  width={27}
                  height={27}
                  alt="facebook"
                  className="hover:scale-125 transition-all duration-300"
                />
              </Link>
              <Link
                href={"https://discord.gg/YcayQadT"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={dis}
                  width={28}
                  height={28}
                  alt="insta"
                  className="hover:scale-125 transition-all duration-300"
                />
              </Link>
            </div>

            <p className=" lg:text-[16px] pb-10 font-normal text-[#000000] pt-6 text-[14px]">
              Markitify.in© Copyright 2025 All Rights Reserved
            </p>
          </div>
        </div>

        <div className=" flex flex-col items-center justify-end relative lg:-top-10">
          <div className="w-[241px] h-[100px] lg:w-[341px] lg:h-[129px]">
            <Link href={"/"}>
              <Image
                src={footerLogo}
                width={341}
                height={129}
                alt="logoFooter"
              />
            </Link>
          </div>

          <p className="w-[320px] lg:text-[20px] text-[19px] pb-10 font-normal text-[#000000]">
            Designed with ❤️ by ma<span className="underline">rkitify </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
