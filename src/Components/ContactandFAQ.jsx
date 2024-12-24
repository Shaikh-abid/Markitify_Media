import React from "react";

import insta from "@/app/insta.png";
import linkdin from "@/app/link.png";
import Image from "next/image";

import right from "@/app/right.png";

const ContactandFAQ = () => {
  return (
    // <div className="container mt-20 mb-20 w-[390px] h-auto  mx-auto px-4 sm:px-6 lg:px-10 lg:pt-28  bg-[#1F1F1F] lg:w-[1261px] lg:h-[1689px] rounded-3xl ">
    //   <div className="flex w-full lg:flex-row lg:justify-between flex-col-reverse">
    //     {/* left side contact us */}
    //     <div className="w-1/3 ">
    //       <h2 className="text-[#818181] font-bold text-[30px]">Contact</h2>

    //       <div className="mt-20 flex gap-10">
    //         <div className="w-1 rounded-full h-80 bg-green-400"></div>

    //         <div className="flex flex-col">
    //           <div className="text-[#818181] font-bold text-2xl mt-6">
    //             Email
    //           </div>
    //           <p className="mt-6 text-white font-light">vinay@markitify.in</p>
    //           <p className="text-white font-light">markitify.in@gmail.com</p>

    //           <div className="text-[#818181] font-bold text-2xl mt-20">
    //             Social
    //           </div>

    //           <div className="mt-2 flex gap-6">
    //             <Image
    //               src={insta}
    //               alt="insta"
    //               width={33}
    //               height={33}
    //               className="bg-transparent rounded-xl"
    //             />
    //             <Image
    //               src={link}
    //               alt="link"
    //               width={33}
    //               height={33}
    //               className="bg-transparent rounded-xl"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* right side FAQs */}
    //     <div className="w-full text-left">
    //       <h2 className=" pl-56 font-bold text-[30px] text-[#818181] ">FAQ</h2>

    //       <ul className="max-w-2xl mx-auto mt-20  rounded-xl pl-28">
    //         <li className="">
    //           <details className="group">
    //             <summary className="flex items-center gap-3 px-4 py-3 font-bold marker:content-none hover:cursor-pointer">
    //               <span className="text-[30px] text-white">
    //                 Do you work with small business?
    //               </span>
    //               <Image
    //                 src={right}
    //                 alt="right"
    //                 className="transition-transform duration-300 group-open:-rotate-90"
    //               />
    //             </summary>
    //             <article className="px-4 pb-4">
    //               <p className="text-[20px] text-[#818181] font-semibold">
    //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
    //                 et ipsum sapien. Vestibulum molestie porttitor augue vitae
    //                 vulputate. Aliquam nec ex maximus, suscipit diam vel,
    //                 tristique tellus.
    //               </p>
    //             </article>
    //           </details>
    //         </li>
    //         <li>
    //           <details className="group">
    //             <summary className="flex items-center gap-3 px-4 py-3 font-bold marker:content-none hover:cursor-pointer">
    //               <span className="text-[30px] text-white">
    //                 Do you offer ongoing support?
    //               </span>
    //               <Image
    //                 src={right}
    //                 alt="right"
    //                 className="transition-transform duration-300 group-open:-rotate-90 ml-10"
    //               />
    //             </summary>
    //             <article className="px-4 pb-4">
    //               <p className="text-[20px] text-[#818181] font-semibold">
    //                 By managing all aspects of our services in-house, we
    //                 maintain a high By managing all aspects of our services
    //                 in-house, we maintain a high standard of quality and
    //                 consistency,
    //               </p>
    //             </article>
    //           </details>
    //         </li>
    //         <li>
    //           <details className="group">
    //             <summary className="flex items-center gap-3 px-4 py-3 font-bold marker:content-none hover:cursor-pointer">
    //               <div className="flex justify-between items-center gap-10">
    //                 <span className="text-[30px] text-white">
    //                   What’s the onboarding process?
    //                 </span>
    //                 <Image
    //                   src={right}
    //                   alt="right"
    //                   className="transition-transform duration-300 group-open:-rotate-90"
    //                 />
    //               </div>
    //             </summary>
    //             <article className="px-4 pb-4">
    //               <p className="text-[20px] text-[#818181] font-semibold">
    //                 By managing all aspects of our services in-house, we
    //                 maintain a high By managing all aspects of our services
    //                 in-house, we maintain a high standard of quality and
    //                 consistency,
    //               </p>
    //             </article>
    //           </details>
    //         </li>
    //         <li>
    //           <details className="group">
    //             <summary className="flex items-center gap-3 px-4 py-3 font-bold marker:content-none hover:cursor-pointer">
    //             <div className="flex justify-between items-center gap-[70px]">
    //                 <span className="text-[30px] text-white">
    //                 Is there a possibility of offline <br />meeting?
    //                 </span>
    //                 <Image
    //                   src={right}
    //                   alt="right"
    //                   className="transition-transform duration-300 group-open:-rotate-90"
    //                 />
    //               </div>
    //             </summary>
    //             <article className="px-4 pb-4">
    //               <p className="text-[20px] text-[#818181] font-semibold">
    //                 By managing all aspects of our services in-house, we
    //                 maintain a high By managing all aspects of our services
    //                 in-house, we maintain a high standard of quality and
    //                 consistency,
    //               </p>
    //             </article>
    //           </details>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>

    <div className="container mt-20 mb-20 w-[390px] h-auto  mx-auto px-4 sm:px-6 lg:px-10 lg:pt-28  bg-[#1F1F1F] lg:w-[1117px] lg:h-[1404px] rounded-3xl ">
      <div className="flex w-full lg:flex-row lg:justify-between flex-col-reverse">
        {/* left side contact us */}
        <div className="lg:w-1/3 mt-10">
          <h2 className="text-[#EFE6DA] font-bold text-[10px] lg:text-[30px] text-center">
            Contact
          </h2>

          <div className="lg:mt-20 flex mt-10 gap-10 ml-20">
            <div className="w-[2px] rounded-full lg:h-80 bg-green-400 h-36"></div>

            <div className="flex flex-col">
              <div className="text-[#818181] font-bold lg:text-2xl text-[10px]  lg:mt-6">
                Email
              </div>
              <p className="mt-2 text-white font-light text-[8px] lg:text-[14px]">
                vinay@markitify.in
              </p>
              <p className="text-white font-light text-[8px] lg:text-[14px]">
                markitify.in@gmail.com
              </p>

              <div className="text-[#818181] font-bold lg:text-2xl lg:mt-20 mt-8 text-[10px]">
                Social
              </div>

              <div className="mt-2 flex lg:gap-6 h-[17px] w-[17px] gap-2 lg:h-[33px] lg:w-[33px]">
                <Image
                  src={insta}
                  alt="insta"
                  width={33}
                  height={33}
                  className="bg-transparent rounded-xl text-white"
                />
                <Image
                  src={linkdin}
                  alt="link"
                  width={33}
                  height={33}
                  className="bg-transparent rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* right side FAQs */}
        <div className="w-full text-left">
          <h2 className=" lg:pl-56 font-bold lg:text-[30px] text-[10px] text-[#EFE6DA] lg:text-left  text-center mt-4">
            FAQ
          </h2>

          <ul className="lg:max-w-2xl mx-auto lg:mt-20 mt-8  rounded-xl lg:pl-28 ">
            <li className="">
              <details className="group">
                <summary className="flex flex-row-reverse lg:flex-row  items-center lg:justify-between justify-end gap-3 lg:px-4 lg:py-1 font-bold marker:content-none hover:cursor-pointer">
                  <span className="lg:text-[16px] font-semibold text-[10px]  text-[#FFFFFF] ">
                    Do you work with small business?
                  </span>
                  {/* <Image
                    width={11}
                    height={6}
                    src={right}
                    alt="right"
                    className="transition-transform duration-300 group-open:-rotate-90 lg:h-[10px] lg:w-[10px]"
                  /> */}
                </summary>
                <article className="px-4 pb-4">
                  <p className="lg:text-[14px] text-[#818181] font-medium text-[7px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    et ipsum sapien. Vestibulum molestie porttitor augue vitae
                    vulputate. Aliquam nec ex maximus, suscipit diam vel,
                    tristique tellus.
                  </p>
                </article>
              </details>
            </li>
            <li className="mt-4 ">
              <details className="group">
                <summary className="flex flex-row-reverse  lg:flex-row  items-center justify-end lg:justify-between gap-3 lg:px-4 lg:py-3 font-bold marker:content-none hover:cursor-pointer">
                  <span className="lg:text-[16px] font-semibold text-[10px]  text-white">
                    Do you work with small business?
                  </span>
                  {/* <Image
                    width={11}
                    height={6}
                    src={right}
                    alt="right"
                    className="transition-transform duration-300 group-open:-rotate-90 lg:h-[20px] lg:w-[20px]"
                  /> */}
                </summary>
                <article className="px-4 pb-4">
                  <p className="lg:text-[14px] text-[#818181] font-semibold text-[7px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    et ipsum sapien. Vestibulum molestie porttitor augue vitae
                    vulputate. Aliquam nec ex maximus, suscipit diam vel,
                    tristique tellus.
                  </p>
                </article>
              </details>
            </li>

            <li className="mt-4 ">
              <details className="group">
                <summary className="flex flex-row-reverse  lg:flex-row  items-center justify-end lg:justify-between  gap-3  lg:px-4 lg:py-3 font-bold marker:content-none hover:cursor-pointer">
                  <span className="lg:text-[16px] font-semibold text-[10px]  text-white">
                    What’s the onboarding process?
                  </span>
                  {/* <Image
                    width={11}
                    height={6}
                    src={right}
                    alt="right"
                    className="transition-transform duration-300 group-open:-rotate-90 lg:h-[20px] lg:w-[20px]"
                  /> */}
                </summary>
                <article className="px-4 pb-4">
                  <p className="lg:text-[14px] text-[#818181] font-semibold text-[7px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    et ipsum sapien. Vestibulum molestie porttitor augue vitae
                    vulputate. Aliquam nec ex maximus, suscipit diam vel,
                    tristique tellus.
                  </p>
                </article>
              </details>
            </li>

            <li className="mt-4 ">
              <details className="group">
                <summary className="flex flex-row-reverse  lg:flex-row  items-center justify-end lg:justify-between  gap-3 lg:px-4 lg:py-3 font-bold marker:content-none hover:cursor-pointer">
                  <span className="lg:text-[16px] font-semibold text-[10px]  text-white">
                    Is there a possibility of offline meeting?
                  </span>
                  {/* <Image
                    width={11}
                    height={6}
                    src={right}
                    alt="right"
                    className="transition-transform duration-300 group-open:-rotate-90 lg:h-[20px] lg:w-[20px]"
                  /> */}
                </summary>
                <article className="px-4 pb-4">
                  <p className="lg:text-[14px] text-[#818181] font-semibold text-[7px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    et ipsum sapien. Vestibulum molestie porttitor augue vitae
                    vulputate. Aliquam nec ex maximus, suscipit diam vel,
                    tristique tellus.
                  </p>
                </article>
              </details>
            </li>

            <li className="mt-4">
              <details className="group">
                <summary className="flex flex-row-reverse  lg:flex-row  items-center justify-end lg:justify-between  gap-3 lg:px-4 lg:py-3 font-bold marker:content-none hover:cursor-pointer">
                  <span className="lg:text-[16px] font-semibold text-[10px]  text-white">
                    Is there a possibility of offline meeting?
                  </span>
                  {/* <Image
                    width={11}
                    height={6}
                    src={right}
                    alt="right"
                    className="transition-transform duration-300 group-open:-rotate-90 lg:h-[20px] lg:w-[20px]"
                  /> */}
                </summary>
                <article className="px-4 pb-4">
                  <p className="lg:text-[14px] text-[#818181] font-medium text-[7px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    et ipsum sapien. Vestibulum molestie porttitor augue vitae
                    vulputate. Aliquam nec ex maximus, suscipit diam vel,
                    tristique tellus.
                  </p>
                </article>
              </details>
            </li>

            <li className="mt-4">
              <details className="group">
                <summary className="flex flex-row-reverse  lg:flex-row  items-center justify-end  lg:justify-between gap-3 lg:px-4 lg:py-3 font-bold marker:content-none hover:cursor-pointer">
                  <span className="lg:text-[16px] font-semibold text-[10px]  text-white">
                    Is there a possibility of offline meeting?
                  </span>
                  {/* <Image
                    width={11}
                    height={6}
                    src={right}
                    alt="right"
                    className="transition-transform duration-300 group-open:-rotate-90 lg:h-[20px] lg:w-[20px]"
                  /> */}
                </summary>
                <article className="px-4 pb-4">
                  <p className="lg:text-[14px] text-[#818181] font-medium text-[7px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    et ipsum sapien. Vestibulum molestie porttitor augue vitae
                    vulputate. Aliquam nec ex maximus, suscipit diam vel,
                    tristique tellus.
                  </p>
                </article>
              </details>
            </li>

            <li className="mt-4">
              <details className="group">
                <summary className="flex flex-row-reverse  lg:flex-row  items-center justify-end lg:justify-between gap-3 lg:px-4 lg:py-3 font-bold marker:content-none hover:cursor-pointer">
                  <span className="lg:text-[16px] font-semibold text-[10px]  text-white">
                    Is there a possibility of offline meeting?
                  </span>
                  {/* <Image
                    width={11}
                    height={6}
                    src={right}
                    alt="right"
                    className="transition-transform duration-300 group-open:-rotate-90 lg:h-[20px] lg:w-[20px]"
                  /> */}
                </summary>
                <article className="px-4 pb-4">
                  <p className="lg:text-[14px] text-[#818181] font-medium text-[7px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    et ipsum sapien. Vestibulum molestie porttitor augue vitae
                    vulputate. Aliquam nec ex maximus, suscipit diam vel,
                    tristique tellus.
                  </p>
                </article>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactandFAQ;
