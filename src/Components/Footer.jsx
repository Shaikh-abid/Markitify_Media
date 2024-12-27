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
      <div className="lg:w-[1332px] w-[300px]  h-[2px]  bg-[#A2A2A2] container mx-auto"></div>
      <div className="w-full h-2/5 grid lg:grid-cols-3 lg:grid-rows-1">
        <div className=" hidden lg:block lg:w-[475px] lg:h-[443px] relative">
          <Image src={footer} alt="footer_logo" className="absolute bottom-0"/>
        </div>

        <div className=" flex flex-col">
          <div className="flex  py-auto justify-evenly  mt-16 lg:mb-16">
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
              <Link href={"#"}>
                <p className="hover:text-[#302e2e] transition-all duration-300">
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

          <div className=" flex flex-col items-center justify-end">
            <div className="flex gap-6 lg:mt-20 mt-10">
              <Image src={insta} width={25} height={25} alt="insta" />
              <Image src={linkdin} width={25} height={25} alt="linkedin" />
              <Image src={facebook} width={25} height={25} alt="facebook" />
              <Image src={dis} width={25} height={25} alt="insta" />
            </div>

            <p className=" lg:text-[16px] pb-10 font-normal pt-6 text-[12px]">
              Markitify.in© Copyright 2023 All Rights Reserved
            </p>
          </div>
        </div>

        <div className=" flex flex-col items-center justify-end ">
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

          <p className="lg:w-[294px] lg:h-[30px] text-[#000000] lg:text-[20px] text-[19px]  font-normal">
            Designed with ❤️ by markitify
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
