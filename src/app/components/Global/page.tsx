import React from 'react'

const Hero = () => {
  return (
    <div>
      <div className="flex md:flex-row p-10">   
        <div className="space-y-8 w-[720px] h-[603px]">
          <h1 className="text-4xl md:text-3xl text-[#2A254B]">
            From a studio in London to a global brand with over 400 outlets
          </h1>

          <div className="text-[#2A254B]">
            <div>
              When we started Avion, the idea was simple: Make high-quality furniture affordable and available for the mass market.
            </div>

            <div>
              Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design. Our Chelsea boutique became the hotbed for the London interior design community.
            </div>
          </div>

          <button className="flex col px-8 py-3 bg-[#F9F9F9] text-[#2A254B] rounded-lg hover:bg-gray-200">
            Get in touch
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src="/image.png"
            alt="Chair"
            className="w-[720px] h-[603px]"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero;
