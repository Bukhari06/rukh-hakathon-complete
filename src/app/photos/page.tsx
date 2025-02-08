'use client';

import Image from "next/image";
import React, { useState } from "react";

const Photos = () => {
  // State to manage selected checkboxes
  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

  // Handle checkbox change
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedCheckboxes((prev) => [...prev, value]);
    } else {
      setSelectedCheckboxes((prev) =>
        prev.filter((item) => item !== value)
      );
    }
  };

  return (
    
    <div className="w-[100%] h-[485px] text-[#0F1E47] p-8 rounded-md mx-auto">

      <div className="grid grid-cols-3 gap-0">
        {/* Product Cards */}
        <div className="grid grid-cols-3">
          <div>
            <Image
              src="/image.png"
              alt="Chair"
              className="w-[161px] h-[243px]"
            />
            <div className="text-[#0029] mt-2">The Dandy chair</div>
            <div className="text-[#000] font-bold">£250</div>
          </div>
          <div>
            <img
              src="/chair.png"
              alt="Table"
              className="w-[161px] h-[243px] rounded-md"
            />
            <div className="text-[#0029] mt-2">Small tables</div>
            <div className="text-[#000] font-bold">£250</div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col space-y-2 grid grid-cols-1">
          <button className="bg-[#0F1E47] text-[#FFFFFF] py-2 w-[170px] h-[56px] hover:bg-[#9ACBD0]">
            Button
          </button>
          <button className="bg-[#0F1E47] text-[#FFFFFF] py-2 w-[170px] h-[56px] hover:bg-[#9ACBD0]">
            Button
          </button>
          <button className="bg-[#0F1E47] text-[#FFFFFF] py-2 w-[170px] h-[56px] hover:bg-[#9ACBD0]">
            Button
          </button>

          <button className="bg-[#0F1E47] text-[#FFFFFF] py-2 w-[170px] h-[56px] hover:bg-[#9ACBD0]">
            Button
          </button>

          <div className="flex flex-col space-y-2 grid grid-cols-1">

            {/* Checkboxes */}
            
            <label className="space-x-2">
              <input
                type="checkbox"
                value="Furniture Section"
                checked={selectedCheckboxes.includes('Furniture Section')}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              />
              <span>Furniture</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                value="Homeware Section"
                checked={selectedCheckboxes.includes('Homeware Section')}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              />
              <span>Homeware</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                value="Vases"
                checked={selectedCheckboxes.includes('Vases')}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              />
              <span>Vases</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                value="Products"
                checked={selectedCheckboxes.includes('Products')}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              />
              <span>Products</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                value="Components"
                checked={selectedCheckboxes.includes('Components')}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              />
              <span>Components</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                value="Styleguide"
                checked={selectedCheckboxes.includes('Styleguide')}
                onChange={handleCheckboxChange}
                className="form-checkbox"
              />
              <span>Styleguide</span>
            </label>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Photos;
