'use client';

import { Product } from "@/types/product";
import React, { useEffect, useState } from 'react';
import { getCartItems } from "../actions/actions";
import Link from "next/link";
import { urlFor } from '@/sanity/lib/image';
import { client } from "@/sanity/lib/client";
import Image from "next/image";

const CheckOut = () => {

    const [cartItems, setCartItems] = useState<Product[]>([])
    const [discount, setDiscount] = useState<number>(0)
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zipCode: '',
        phone: '',
        email: '',
    })

    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        address: false,
        city: false,
        zipCode: false,
        phone: false,
        email: false,
    })

    useEffect(() => {
        setCartItems(getCartItems());
        const applliedDiscount = localStorage.getItem("appliedDiscount");
        if (applliedDiscount) {
            setDiscount(Number(applliedDiscount))
        }
    }, []);

    const subTotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity, 0
    )

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
            ...formValues,
            [e.target.id]: e.target.value
        })
    }

    const validateForm = () => {
        const errors = {
            firstName: !formValues.firstName,
            lastName: !formValues.lastName,
            address: !formValues.address,
            city: !formValues.city,
            zipCode: !formValues.zipCode,
            phone: !formValues.phone,
            email: !formValues.email,
            
        };
        setFormErrors(errors);
    
        return Object.values(errors).every((error) => !error);
    };

    
    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-4 flex justify-between items-center">
                    <h1 className="text-3xl font-semibold">Order Your Items</h1>
                    <nav className="text-lg">
                        <Link href="/Cart" className="text-blue-500 hover:underline">Cart</Link> 
                        <span className="mx-2">|</span>
                        <span className="text-gray-500">Checkout</span>
                    </nav>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8">
                    {/* Order Summary */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                        {cartItems.length > 1 ? (
                            cartItems.map((item) => (
                                <div key={item._id} className="flex items-center border-b pb-4 mb-4">
                                    <div className="flex-shrink-0 w-24 h-24 mr-4">
                                    <Image
                                    src={urlFor(item.image).url()}
                                    alt={`Image of ${item.name} - ${item.product}`} // Update alt text to be more descriptive
                                   width={200}
                                       height={200}
                                    className="object-cover"
                                     />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-lg font-semibold">{item.name}</h3>
                                        <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                                        <p className="text-xl font-semibold text-gray-800">${item.price * item.quantity}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500">No items in cart</p>
                        )}

                        <div className="flex justify-between items-center mt-4 border-t pt-4">
                           SubTotal: <span className="font-medium text-sm">${subTotal}</span>
                           <p className="text-sm">
                          Dicount:<span className="text-xl font-bold">${discount}</span>
                          </p>
                          <p className="text-lg font-italic">
                          Total: ${subTotal.toFixed(2)}
                          </p>
                        </div>
                    </div>
                    {/* Shipping Form */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
    <form>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
                type="text"
                id="firstName"
                value={formValues.firstName}
                onChange={handleInputChange}
                placeholder="Enter Your First Name"
                className="border p-3 rounded-md w-full"
            />
            {formErrors.firstName && (
                <p className="text-red-500">First Name is Required</p>
            )}
            <input
                type="text"
                id="lastName"
                value={formValues.lastName}
                onChange={handleInputChange}
                placeholder="Enter Your Last Name"
                className="border p-3 rounded-md w-full"
            />
            {formErrors.lastName && (
                <p className="text-red-500">Last Name is Required</p>
            )}
        </div>
        <input
            type="text"
            id="address"
            value={formValues.address}
            onChange={handleInputChange}
            placeholder="Enter Your Address"
            className="border p-3 rounded-md w-full mb-4"
        />
        {formErrors.address && (
            <p className="text-red-500">Address is Required</p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input
                type="text"
                id="city"
                value={formValues.city}
                onChange={handleInputChange}
                placeholder="Enter Your City"
                className="border p-3 rounded-md w-full"
            />
            {formErrors.city && (
                <p className="text-red-500">City is Required</p>
            )}
            <input
                type="text"
                id="zipCode"
                value={formValues.zipCode}
                onChange={handleInputChange}
                placeholder="Enter Your Zip Code"
                className="border p-3 rounded-md w-full"
            />
            {formErrors.zipCode && (
                <p className="text-red-500">Zip Code is Required</p>
            )}
        </div>
        <input
    type="tel"
    id="phone"
    value={formValues.phone}
    onChange={handleInputChange}
    placeholder="Enter Your Phone"
    inputMode="numeric"
    pattern="[0-9]*"  // Ensures only digits are accepted
    className="border p-3 rounded-md w-full"
/>
{formErrors.phone && (
    <p className="text-red-500">Phone is Required</p>
)}
        <input
            type="email"
            id="email"
            value={formValues.email}
            onChange={handleInputChange}
            placeholder="Enter Your Email"
            className="border p-3 rounded-md w-full mb-6"
        />
        {formErrors.email && (
            <p className="text-red-500">Email is Required</p>
        )}
        <button
            type="submit"
    className='bg-gradient-to-r from-black to-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md 
            hover:scale-110 transition-transform duration-200 ease-in-out '
        >
            Place Order
        </button>
    </form>
</div>

                </div>
            </div>
        </div>
    );
};

export default CheckOut;


