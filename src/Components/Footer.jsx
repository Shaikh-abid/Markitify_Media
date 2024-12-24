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
      <div className="w-full h-2/5 grid lg:grid-cols-3 lg:grid-rows-1">
        <div className=" hidden lg:block">
          <Image src={footer} />
        </div>

        <div className=" flex flex-col">
          <div className="flex  py-auto justify-evenly  mt-16 lg:mb-16">
            <div className="font-semibold lg:text-[20px] text-[#818181]">
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
            <div className="font-semibold lg:text-[20px] text-[#818181]">
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
              <Image src={insta} width={34} height={34} alt="insta" />
              <Image src={linkdin} width={34} height={34} alt="linkedin" />
              <Image src={facebook} width={34} height={34} alt="facebook" />
              <Image src={dis} width={34} height={34} alt="insta" />
            </div>

            <p className=" lg:text-[20px] pb-10 font-semibold pt-6">
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

          <p className="w-[294px] lg:text-[20px] text-[19px] pb-10 font-semibold">
            Designed with ❤️ by markitify
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
