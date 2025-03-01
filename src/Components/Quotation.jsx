import React from "react";

import quotation from "@/app/quotation2.png";
import Image from "next/image";
import Link from "next/link";
 
const Quotation = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="container mx-auto rounded-2xl  flex px-1  py-8 md:flex-row flex-col-reverse items-center bg-gray-100 mt-24 lg:h-[347px] lg:w-[1328px]">


        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center lg:ml-16">
          <h1 className=" lg:text-[30px] font-semibold mb-4 text-[26px]  text-[#000000]">
            Let’s make things happen
          </h1>
          <p className="mb-10 mt-2 lg:text-[16px] text-[10px] font-normal tracking-wider  leading-relaxed text-[#4A4A4A]">
            Contact us toady to learn more about how our digital <br />
            marketing services can help your business grow and <br />
            succced online.
          </p>
          <div className="flex justify-center">
            <Link href={"call"}>
              <button className="inline-flex  text-white bg-black  border-0 lg:py-4  lg:px-7 focus:outline-none rounded-xl font-bold  lg:text-[16px] px-4 py-4 font-[Inter]">
                Get your free Quotation
              </button>
            </Link>
          </div>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mr-6 ">
          <Image
            width={498}
            height={498}
            className="object-cover object-center rounded"
            alt="quotation"
            src={quotation}
          />
        </div>
      </div>
    </div>
  );
};

export default Quotation;
