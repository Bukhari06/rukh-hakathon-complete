import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="flex items-center justify-between my-[66px] p-6 mx-auto max-w-screen-xl">
      <div className="bg-[#2A254B] p-8 space-y-8 w-full md:w-[1280px] h-[584px] flex flex-col justify-between items-start">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">
          The furniture brand for the future, <br /> with timeless designs
        </h1>
        <Link href="/pages">
          <button className="bg-[#F9F9F9] text-[#2A254B] px-6 py-3 rounded-lg hover:bg-[#9B7EBD]">
            View collection
          </button>
        </Link>
        <div className="text-white text-sm sm:text-base md:text-lg">
          A new era in eco-friendly furniture with Avelon, <br />the French luxury retail
          brand with nice fonts, tasteful colors, <br />and a beautiful way to display
          things digitally using modern web technologies.
        </div>
      </div>
      <div className="md:w-[520px] md:h-[584px] flex justify-center">
        <img
          src="/chair.png"
          alt="Chair"
          className="w-[520px] h-[584px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
