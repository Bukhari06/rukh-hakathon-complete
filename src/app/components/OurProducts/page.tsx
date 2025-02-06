import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div>
      
<div className='flex flex-wrap gap-4 justify-center mt-2 text-[#2A254B] font-bold l-39.36px'>
  Our Popular Products
</div>
<div className="flex flex-wrap gap-4 justify-center">
  <div className="relative sm:mt-2 sm:ml-4 md:mt-4 md:ml-6 lg:mt-6 lg:ml-8">
  <Link href="/tbbb.avif" target="_blank" rel="noopener noreferrer">
    <Image
      src="/tbbb.avif"
      alt="sofa"
      width={630}
      height={375}
      className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-0"
    />
    </Link>
      <div className="mt-2 text-[#2A254B] text-sm text-gray-600">The Popular suede sofa</div>
      <div>£980</div>
  </div>

  <div className="relative sm:mt-2 sm:ml-4 md:mt-4 md:ml-6 lg:mt-6 lg:ml-8">
  <Link href="/chair.png" target="_blank" rel="noopener noreferrer">
    <Image
      src="/chair.png"
      alt="chair"
      width={305}
      height={375}
      className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-0"
    />
    </Link>
      <div className="mt-2 text-[#2A254B] text-sm text-gray-600">The Dany chair</div>
      <div>£155</div>
  </div>

  <div className="relative sm:mt-2 sm:ml-4 md:mt-4 md:ml-6 lg:mt-6 lg:ml-8">
  <Link href="/Listing" target="_blank" rel="noopener noreferrer">
    <div className="relative">
      <Image
        src="/chair1.png"
        alt="chair"
        width={305}
        height={375}
        className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-lg font-semibold">Click to Add to Cart</p>
      </div>
    </div>
  </Link> 
  <div className="mt-2 text-[#2A254B] text-sm text-gray-600">The Dany chair</div>
  <div>£155</div>
</div>  
  </div>
  </div>
  
  

  )
}

export default page;