'use client'

import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import { allProducts } from '@/sanity/lib/queries';
import { Product } from '../../../types/product'; // Ensure `Product` is imported correctly
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { addToCart } from '../actions/actions';
import swal from "sweetalert2";
import { title } from 'process';


const PRODUCT = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const fetchedProduct: Product[] = await client.fetch(allProducts);
        setProduct(fetchedProduct);
      } catch (error) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, []);

// Cart button

  const handleAddToCart = (e: React.MouseEvent, product: Product) =>{
    e.preventDefault()
    swal.fire({
      position : "top.right",
      icon: "success",
      title: `${product.name} added to cart`,
      showConfirmButton : false,
      timer : 1000
    })
    addToCart(product)
    
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className='text-2xl font-bold mb-6 text-center'>Our Latest Products</h1>
      {product.length === 0 ? (
        <div>No products available</div> // Show if no products are fetched
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-between items-center">
          {product.map((product) => (
            <div key={product._id} className="border rounded-lg p-4 shadow-lg flex flex-col items-center">
              <h2 className="text-lg font-bold text-center">{product.name}</h2> {/* Display the product name */}
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt={product.name}
                  width={200}  // Set width (you can adjust this as needed)
                  height={200} // Set height (you can adjust this as needed)
                  className="w-full h-48 object-cover rounded-md" // Adds margin at the bottom
                />
              )}
              <h2 className='text-lg font-semibold mt-4'>{product.name}</h2>
              <p className='text-gray-400 mt-2'>{product.price ? '$${product.price}' : "price not available"}</p>
              {/* <p className="mt-2 text-lg font-semibold text-center">Price: ${product.price}</p> Display the price */}
            <button className='bg-gradient-to-r from-yellow-500 to-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md 
            hover:scale-110 transition-transform duration-200 ease-in-out '
              onClick={(e) => handleAddToCart(e, product)}
              >
              Add to Cart
            </button>
            
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PRODUCT;
