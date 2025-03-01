import React from "react";

import Image from "next/image";

import conInsta from "@/app/conInsta.png";
import conLink from "@/app/conLink.png";

const ContactandFAQ = () => {
  const faqs = [
    {
      question: "Does Markitify work with small businesses?",
      answer:
        "Yes, we work with businesses of all sizes, including small ones. We provide services that help small businesses grow and build a strong brand presence. ",
    },
    {
      question: "How does Markitify manage social media campaigns?  ",
      answer:
        "We create engaging content, target the right audience, and track performance to improve campaigns. ",
    },
    {
      question: "How long does it take to complete a project with Markitify?",
      answer:
        "The timeline depends on the project. Simple tasks take a few days, while bigger projects may take a few weeks.  ",
    },
    {
      question: "How do you ensure the quality of your services?  ",
      answer:
        "We focus on quality by working with skilled professionals and reviewing everything before delivery.",
    },
    {
      question: "How do I get started with Markitify? ",
      answer:
        "Use the date picker on our website to choose a time that works for you. We’ll connect with you and start from there. ",
    },
    {
      question: "What’s the onboarding process like?  ",
      answer:
        "We start by learning about your business, goals, and challenges. Then, we create a strategy that suits your needs.  ",
    },
    {
      question:
        "What kind of businesses can benefit from Markitify’s services?",
      answer:
        "We work with startups, small businesses, and established brands to help them grow and improve their presence.  ",
    },
    {
      question: "What makes Markitify different from other agencies?  ",
      answer:
        "We focus on creativity, collaboration, and building strong brands. Our team works closely with clients to bring their vision to life. ",
    },
  ];

  return (
    <div className="container mt-20 mb-20 lg:pb-10 pb-20 w-[390px] h-auto mx-auto px-4 sm:px-6 lg:px-10 lg:pt-16 bg-[#1F1F1F] lg:w-[1117px] lg:h-auto rounded-3xl md:w-[600px] md:h-full md:text-center">
      <div className="flex w-full lg:flex-row lg:justify-between md:justify-between flex-col-reverse">
        {/* Left Side: Contact Us */}
        <div className="lg:w-1/3 lg:mt-0 mt-10">
          <h2 className="text-[#EFE6DA] font-bold text-[15px] lg:text-[30px] text-center">
            Contact
          </h2>

          <div className="lg:mt-20 flex mt-10 gap-10 ml-20 text-left">
            <div className="w-[2px] rounded-full lg:h-80 bg-green-400 h-36"></div>

            <div className="flex flex-col">
              <div className="text-[#818181] font-bold lg:text-2xl text-[10px] lg:mt-6">
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

              <div className="mt-2 flex lg:gap-2 gap-2 lg:h-[33px] lg:w-[33px] h-[17px] w-[17px]">
                <Image
                  src={conInsta}
                  alt="Instagram"
                  width={28}
                  height={28}
                  className="bg-gray-500 rounded-xl w-full h-full"
                />
                <Image
                  src={conLink}
                  alt="LinkedIn"
                  width={28}
                  height={28}
                  className="bg-gray-500 rounded-xl w-full h-full"
                />
                
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: FAQs */}
        <div className="w-full text-left lg:mt-0 mt-10">
          <h2 className="lg:pl-56 font-bold lg:text-[30px] text-[15px] text-[#EFE6DA] lg:text-left text-center">
            FAQ
          </h2>

          <ul className="lg:max-w-2xl mx-auto lg:mt-16 mt-8 rounded-xl lg:pl-28">
            {faqs.map((faq, index) => (
              <li key={index} className="mt-2">
                <details className="group">
                  <summary className="flex flex-row-reverse lg:flex-row items-center lg:justify-between justify-end gap-3 lg:px-4 lg:py-3 font-bold marker:content-none hover:cursor-pointer">
                    <span className="lg:text-[16px] font-semibold text-[10px] text-white">
                      {faq.question}
                    </span>
                  </summary>
                  <article className="px-4 pb-4">
                    <p className="lg:text-[14px] text-[#818181] font-medium text-[7px]">
                      {faq.answer}
                    </p>
                  </article>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Let's Connect Section */}
      <div className="w-full flex justify-center items-center lg:py-6 lg:px-6 md:px-2 lg:mt-20 flex-col gap-5 mt-10 ">
        <h1 className="text-[#EFE6DA] font-bold text-[15px] lg:text-[30px] text-center">
          Let’s connect
        </h1>
        <iframe
          src="https://cal.com/markitify.in/30min?user=markitify.in&duration=30&month=2024-12&layout=month_view&date=2024-12-26"
          title="Cal.com Calendar"
          allowFullScreen
          className="md:w-[500px] md:h-[500px] lg:w-[905px] lg:h-[450px] h-[350px] w-[350px] lg:rounded-3xl lg:shadow-gray-600 lg:shadow-xl shadow-xl rounded-md text-[12px]"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactandFAQ;
