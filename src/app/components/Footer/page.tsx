import React from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";
import { RiInstagramLine } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { FaSkype } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2A254B] border-t border-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h1 className="text-[#FFFFFF]">Menu</h1>
            <ul className="mt-4 space-y-1">
              <li>
                <Link href="#" className="text-[#FFFFFF] hover:text-[#A59D84]">
                  New arrivals
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#FFFFFF] hover:text-[#A59D84]">
                  Best sellers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#FFFFFF] hover:text-[#A59D84]">
                  Recently viewed
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#FFFFFF] hover:text-[#A59D84]">
                  Popular this week
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#FFFFFF] hover:text-[#A59D84]">
                  All products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-[#FFFFFF]">Categories</h1>
            <ul className="mt-4 space-y-1">
              <li>
                <Link href="#" className="text-[#FFFFFF] hover:text-[#A59D84]">
                  Crockery
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#FFFFFF] hover:text-[#A59D84]">
                  Furniture
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#FFFFFF] hover:text-[#A59D84]">
                  Homeware
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#FFFFFF] hover:text-[#A59D84]">
                  Plant pots
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#FFFFFF] hover:text-[#A59D84]">
                  Chairs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#FFFFFF] hover:text-[#A59D84]">
                  Crockery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="text-[#FFFFFF]">Our company</h1>
            <ul className="mt-4 space-y-1">
              <li>
                <Link href="#" className="text-[#FFFFFF] hover:text-[#A59D84]">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#FFFFFF] hover:text-[#A59D84]">
                  Vacancies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#FFFFFF] hover:text-[#A59D84]">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#FFFFFF] hover:text-[#A59D84]">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#FFFFFF] hover:text-[#A59D84]">
                  Return policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="p-4 flex justify-end mb-12">
  {/* input */}
  <div className="flex flex-col items-end">
    <h1 className="text-[#FFFFFF] text-lg font-semibold mb-4">
      Join our mailing list
    </h1>
    
    {/* button */}
    <div className="flex">
      <input
        type="email"
        placeholder="your@email.com"
        className="px-4 py-2 border border-[#4E4D93] rounded-l-md w-full max-w-sm"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-gray-50 text-black rounded-r-md hover:bg-gray-200"
      >
        Subscribe
      </button>
    </div>
  </div>
</div>
        <div className="mt-6 border-t border-[#4E4D93] pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">Copyright 2022 Avion LTD</p>

          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href={''}>
              <FaLinkedin className="w-[24px] h-[24px] text-white" />
            </Link>
            <Link href={''}>
              <FaFacebook className="w-[24px] h-[24px] text-white" />
            </Link>
            <Link href={''}>
              <RiInstagramLine className="w-[24px] h-[24px] text-white" />
            </Link>
            <Link href={''}>
              <FaTwitter className="w-[24px] h-[24px] text-white" />
            </Link>
            <Link href={''}>
              <FaSkype className="w-[24px] h-[24px] text-white" />
            </Link>
            <Link href={''}>
              <FaPinterest className="w-[24px] h-[24px] text-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
