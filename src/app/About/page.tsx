
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <div>

      <header className="w-[1440px] h-[277px] flex items-center justify-between px-6">
        <h1 className="text-4xl">A brand built on the love of craftmanship,<br />quality nd outstanding customer services</h1>
        <Link href='/pages'>
        <button className="bg-[#F9F9F9] text-[#2A254B] px-2 py-2 rounded-md">
           View Our Products
      
         </button>
         </Link>
      </header>
<div className="flex flex-cols items-center justify-center p-6">

  <div className="bg-[#2A254B] p-2 space-y-10 w-[634px] h-[478]">

  <h1 className="flex flex-cols mt-6 text-[32px] text-white">It started with a small idea</h1>
    
    <h2 className="flex flex-cols mt-6 text-[18px] text-white">
    A global brand with local beginnings, our story begain in a small studio in South London in early 2014
    </h2>
    <br />
    <Link href={'/pages'}>
    <button className="p-6 bg-[#F9F9F926] text-white hover:bg-[]">
      View collection
    </button>
    </Link>
  </div>

  <div className="md:w-1/2 flex justify-center">
    <img
      src="/Image Block.png"
      alt="Chair"
      className="w-[630px] h-[478px]"
    />
  </div>
</div>
    </div>
    
  );
};

export default AboutUs;
