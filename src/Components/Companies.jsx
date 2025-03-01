import Image from "next/image";
import React from "react";

import dine from "@/app/Dine.png";
import mega from "@/app/Mega.png";
import salon from "@/app/salon.png";
import camp from "@/app/camp.png";
import file from "@/app/file.png";
import tech from "@/app/tech.png";

const Companies = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="mt-20">
        <h1 className="font-semibold lg:text-[36px] text-4xl">
          We worked with
        </h1>

        <div className="wrapper">
          <div className="item item1">
            <Image width={250} height={250} src={dine} alt="DIne" />
          </div>
          <div className="item item2">
            <Image width={250} height={250} src={salon} alt="Salonn" />
          </div>
          <div className="item item3">
            <Image width={250} height={250} src={mega} alt="Mega" />
          </div>
          <div className="item item4">
            <Image width={215} height={211} src={file} alt="File" />
          </div>
          <div className="item item5">
            <Image width={109} height={113} src={tech} alt="Tech" />
          </div>
          <div className="item item6">
            <Image width={116} height={78} src={camp} alt="Camp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
