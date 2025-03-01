"use client";
import { useState } from "react";

import signature from "@/app/signature.png";
import Image from "next/image";
import logo from "@/app/logo.jpg";
import Link from "next/link";

import { submitFormAction } from "@/app/actions/formActions";

export default function QuotationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    findMore: "",
    services: "",
    features: "",
    budget: "",
    projectGoal: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("formData", formData);
    const result = await submitFormAction(formData);
    setResponseMessage(result.message);


      setFormData({
        name: "",
        email: "",
        company: "",
        findMore: "",
        services: "",
        features: "",
        budget: "",
        projectGoal: "",
      });
    document.getElementById("my_modal_3").showModal();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-[1218px] max-w-[1218px] lg:h-[692px] bg-[#F2F2F2] rounded-3xl shadow-lg overflow-hidden p-6 h-auto pt-10">
        <div className="md:flex">
          {/* Left Section */}
          <div className="bg-[#1F1F1F] text-white p-8 md:w-[590px] space-y-6 md:h-[611px] rounded-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8">
                <Image src={signature} width={50} height={50} alt="logo" />
              </div>
              <h2 className="text-xl font-semibold">
                Request Your Custom Quotation
              </h2>
            </div>

            <p className="text-gray-300 text-[14px] leading-6 md:w-[479px] md:h-[168px]">
              Our quotation section is designed to make the process seamless and
              straightforward for you. By answering a few key questions about
              your company and project needs, you help us understand your
              vision, goals, and specific requirements. This ensures that the
              solutions we propose are aligned perfectly with your expectations
              and business objectives.
            </p>

            <p className="text-gray-300 text-[14px] leading-6 md:w-[479px] md:h-[140px]">
              Once you submit the form, our team will carefully review your
              responses and craft a detailed, transparent quotation tailored to
              your needs. Within 24-48 hours, you'll receive a clear plan
              outlining the scope, deliverables, and costs, helping you make an
              informed decision with confidence.
            </p>

            <p className="text-gray-300 text-sm leading-6 md:w-[479px] md:h-[84px]">
              Need to discuss your project further? You can arrange a meeting
              with us at your convenience by simply picking a date using our
              date picker tool.
            </p>

            <button className="bg-white text-gray-900 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
              Schedule Meet
            </button>
          </div>

          {/* Right Section */}
          <div className="lg:pl-16 md:w-[55%]">
            <form
              onSubmit={handleSubmit}
              className="space-y-3 text-[15px] font-semibold text-[#000000]"
            >
              <div>
                <label htmlFor="name" className="block">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="md:w-[510px] md:h-[33px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#000000]"
                  placeholder="Steven paul jobs"
                />
              </div>

              <div>
                <label htmlFor="email" className="block">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="md:w-[510px] md:h-[33px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#000000]"
                  placeholder="jobs@apple.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block">
                  Company /Brand Name?
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="md:w-[510px] md:h-[33px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#000000]"
                  placeholder="Apple computers"
                />
              </div>

              <div>
                <label htmlFor="findMore" className="block">
                  Where we can find more about you?
                </label>
                <input
                  type="text"
                  id="findMore"
                  name="findMore"
                  required
                  value={formData.findMore}
                  onChange={handleChange}
                  className="md:w-[510px] md:h-[33px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#000000]"
                  placeholder="Apple.com / linkedin-apple"
                />
              </div>

              <div>
                <label htmlFor="services" className="block ">
                  What services are you looking for?
                </label>
                <input
                  type="text"
                  id="services"
                  name="services"
                  required
                  value={formData.services}
                  onChange={handleChange}
                  className="md:w-[510px] md:h-[33px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#000000]"
                  placeholder="Design and development / Brand Identity"
                />
              </div>

              <div>
                <label htmlFor="features" className="block">
                  What specific features or elements are you expecting?
                </label>
                <input
                  type="text"
                  id="features"
                  required
                  name="features"
                  value={formData.features}
                  onChange={handleChange}
                  className="md:w-[510px] md:h-[33px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#000000]"
                  placeholder="want to improve identity and modern webpage"
                />
              </div>

              <div>
                <label htmlFor="budget" className="block">
                  What is your budget range?
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  className="md:w-[510px] md:h-[33px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#000000]"
                  placeholder="20k - 80k"
                />
              </div>

              <div>
                <label htmlFor="projectGoal" className="block">
                  Explain more about the project /goal ?
                </label>
                <textarea
                  id="projectGoal"
                  name="projectGoal"
                  required
                  value={formData.projectGoal}
                  onChange={handleChange}
                  rows={3}
                  className="md:w-[510px] md:h-[33px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#000000]"
                  placeholder="We don't have identity in market and want build strong identity and presence."
                />
              </div>

              <div className="w-[123px] h-[34px] flex justify-center items-center">
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Modal */}
          <dialog id="my_modal_3" className="modal rounded-lg">
            <div className="w-[80px] sm:w-[104px] h-[30px] sm:h-[42px] mt-5 mx-9">
              <Link href={"/"}>
                <Image src={logo} alt="logo" className="cursor-pointer" />
              </Link>
            </div>
            <div className="modal-box lg:w-[700px] lg:h-auto bg-white shadow-lg rounded-lg  text-center  p-10">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>

              <h3 className="text-2xl font-bold text-gray-800">
                Thank You for Contacting{" "}
                <span className="text-green-400">
                  <strong>Markitify!</strong>{" "}
                </span>
              </h3>
              <p className="py-4 text-gray-600 text-lg">
                We truly appreciate your trust in{" "}
                <span className="font-semibold underline">Markitify</span>. Your
                details have been received by our team, and we are reviewing
                them carefully. One of our representatives will reach out to you
                via email soon. Please be patient while we process your
                request🚀
              </p>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
}
