'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { IoCartOutline } from 'react-icons/io5';// For the cart icon
import Image from 'next/image';
const ProductPage = () => {
  // State for managing the quantity of the product
  const [quantity, setQuantity] = useState<number>(1);

  // Handle change in quantity (if you want to update the quantity in text box)
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(1, parseInt(e.target.value)); // Ensure quantity is at least 1
    setQuantity(value);
  };

  // Handle adding to cart (you can implement logic for adding to the cart here)
  const handleAddToCart = () => {
    console.log(`Added ${quantity} Dany Chair to the cart`);
    // Implement cart logic, like updating a cart state or local storage
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Product Image */}
        <div className="w-full md:w-[721px] h-[740px] bg-gray-200 rounded-md flex justify-center items-center">
          <Image
            src="/chair1.png" // Example image, replace with your product image path
            alt="Dany Chair"
            className="w-full h-full object-cover rounded-md"
            width={721}
            height={740}
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 md:ml-8 space-y-4">
          <h1 className="text-3xl font-semibold text-gray-800">Dany Chair</h1>
          <span className="text-xl font-semibold text-gray-800">£250</span>
          <p className="text-lg text-gray-600">Description</p>
        <p>
            A timeless design, with premium materials features as one of our most<br />popular and iconic piece. The dandy chair i perfect for any stylisg<br /> living space with beech legs and lambskin lather upholstery.
          </p>
          <br />
          <ul className="list-disc pl-6 space-y-1">
            <li>Premium materil</li>
            <li>Handmade upholstery</li>
            <li>Quality timeless classic</li>
          </ul>
        <br />

          <h3 className="text-xl font-medium text-gray-800 mt-4">Dimensions</h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>Height: 110cm</li>
            <li>Width: 75cm</li>
            <li>Depth: 50cm</li>
          </ul>

          <div className="flex items-center space-x-4 mt-4">
            <span className="text-xl font-semibold text-gray-800">£250</span>
            <div className="flex items-center border rounded-md p-2">
              <label htmlFor="quantity" className="mr-2 text-lg">Quantity:</label>
              <input
                id="quantity"
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min="1"
                className="w-16 p-2 text-center rounded-md border-2"
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              onClick={handleAddToCart}
              className="w-full md:w-52 py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              <Link href='/AddtoCart'>
              <IoCartOutline className="inline-block mr-2" />
              Add to Cart
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
