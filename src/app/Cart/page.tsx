'use client'

import { Product } from '../../../types/product';
import React, { useEffect, useState } from 'react';
import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions';
import Swal from 'sweetalert2';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { useRouter } from 'next/navigation';

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this item!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3205d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, remove it!',
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire('Removed!', 'Item has been removed', 'success');
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) handleQuantityChange(id, product.quantity + 1);
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.quantity > 1) handleQuantityChange(id, product.quantity - 1);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const router =useRouter();

  const handleProceed = () => {
    Swal.fire({
      title: 'Proceed to checkout?',
      text: 'Please review your cart before checkout',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3205d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, proceed!',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Success', 'Your order has been successfully processed', 'success');
        router.push("/checkout")
        setCartItems([]);
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-lg font-semibold">Your cart is empty.</div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-white shadow-lg rounded-lg p-4"
            >
              <div className="flex items-center space-x-4">
                {item.image && (
                  <Image
                  src={urlFor(item.image).url()}
                  className="w-16 h-16 object-cover rounded-lg"
                  alt='image'
                  width={500}
                  height={500}
                />
                )}
                <div className="flex flex-col">
                  <span className="font-semibold text-lg">{item.name}</span>
                  <span className="text-gray-500 text-sm">Price: ${item.price}</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  className="text-xl font-semibold text-gray-700"
                  onClick={() => handleDecrement(item._id)}
                >
                  -
                </button>
                <span className="text-xl">{item.quantity}</span>
                <button
                  className="text-xl font-semibold text-gray-700"
                  onClick={() => handleIncrement(item._id)}
                >
                  +
                </button>
              </div>

              <button
                className="text-red-600 font-semibold"
                onClick={() => handleRemove(item._id)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
            <span className="text-xl font-semibold">Total: ${calculateTotal()}</span>
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
              onClick={handleProceed}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
