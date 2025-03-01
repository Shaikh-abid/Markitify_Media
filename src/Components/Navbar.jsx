"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "@/app/logo.jpg";

import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header
        className={`${
          isMenuOpen ? "fixed" : "fixed"
        } z-50 top-8 left-1/2 transform -translate-x-1/2 bg-white p-4 sm:p-6 md:p-8 rounded-2xl w-[90%] sm:w-[580px] h-auto shadow-2xl flex justify-between items-center mx-auto lg:px-3 lg:py-3 lg:w-[680px] md:w-[640px]`}
      >
        {/* Logo Section */}
        <div className="w-[80px] sm:w-[104px] h-[30px] sm:h-[42px] flex-shrink-0">
          <Link href={"/"}>
            <Image src={logo} alt="logo" className="cursor-pointer" />
          </Link>
        </div>

        {/* Centered Navigation Links */}
        <div className="hidden sm:flex flex-1 justify-center gap-6 items-center">
          <Link href={"about"} className="text-sm sm:text-base font-semibold">
            About
          </Link>
          <Link href={"/"} className="text-sm sm:text-base font-semibold">
            Service
          </Link>
          <Link href={"call"} className="text-sm sm:text-base font-semibold">
            Contact
          </Link>
        </div>

        {/* Button Section */}
        <div className="flex-shrink-0">
          <Link href={"call"}>
            <button className="w-[120px] sm:w-[140px] lg:py-2 lg:px-4 bg-black text-white lg:rounded-full lg:font-bold lg:text-sm hidden lg:block md:block md:py-2 md:px-4 md:rounded-full md:font-bold md:text-sm">
              Schedule call
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FiX className="text-2xl text-black" />
            ) : (
              <FiMenu className="text-2xl text-black" />
            )}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white p-4 shadow-lg rounded-lg flex flex-col gap-2 items-end mx-2 sm:mx-auto sm:w-3/4 md:w-1/2 lg:w-1/3">
            <Link
              href="/about"
              className="text-xs sm:text-sm md:text-base font-semibold"
            >
              About
            </Link>
            <Link
              href={"/"}
              className="text-xs sm:text-sm md:text-base font-semibold"
            >
              Service
            </Link>
            <Link
              href={"call"}
              className="text-xs sm:text-sm md:text-base font-semibold"
            >
              Contact
            </Link>
            <Link href={"call"}>
              <button className="py-2 px-3 bg-black text-white rounded-full font-bold text-xs sm:text-sm md:text-base">
                Schedule Call
              </button>
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
