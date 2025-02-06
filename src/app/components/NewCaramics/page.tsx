import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Page = () => {
  return (
    <div>

      <div className="text-center my-8">
        <h1 className="text-3xl font-semibold">New Ceramics</h1>
      </div>


      <div className="flex flex-wrap gap-4 justify-center">
        
        <div className="relative sm:mt-2 sm:ml-4 md:mt-4 md:ml-6 lg:mt-6 lg:ml-8">
          <Link href="/Cart" target="_blank" rel="noopener noreferrer">
            <Image
              src="/chair.png"
              alt="chair"
              width={305}
              height={462}
              className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-0"
            />
          </Link>
          <div className="mt-2 text-[#2A254B] text-sm text-gray-600">The Dandy chair</div>
          <div className="text-lg font-semibold">£250</div>
        </div>

        <div className="relative sm:mt-2 sm:ml-4 md:mt-4 md:ml-6 lg:mt-6 lg:ml-8">
          <Link href="/Cart" target="_blank" rel="noopener noreferrer">
            <Image
              src="/parent.png"
              alt="Rustic Vase Set"
              width={305}
              height={462}
              className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-0"
            />
          </Link>
          <div className="mt-2 text-[#2A254B] text-sm text-gray-600">Rustic Vase Set</div>
          <div className="text-lg font-semibold">£155</div>
        </div>

        <div className="relative sm:mt-2 sm:ml-4 md:mt-4 md:ml-6 lg:mt-6 lg:ml-8">
          <Link href="/Cart" target="_blank" rel="noopener noreferrer">
            <Image
              src="/photo(1).png"
              alt="The Silky Vase"
              width={305}
              height={462}
              className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-0"
            />
          </Link>
          <div className="mt-2 text-[#2A254B] text-sm text-gray-600">The Silky Vase</div>
          <div className="text-lg font-semibold">£125</div>
        </div>

        <div className="relative sm:mt-2 sm:ml-4 md:mt-4 md:ml-6 lg:mt-6 lg:ml-8">
          <Link href="/Cart" target="_blank" rel="noopener noreferrer">
            <Image
              src="/photo.png"
              alt="The Lucy Lamp"
              width={305}
              height={462}
              className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:rotate-0"
            />
          </Link>
          <div className="mt-2 text-[#2A254B] text-sm text-gray-600">The Lucy Lamp</div>
          <div className="text-lg font-semibold">£399</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
