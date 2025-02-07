'use client';

import { Product } from "@/types/product";
import React, { useEffect, useState } from 'react';
import { getCartItems } from "../actions/actions";
import Link from "next/link";
import { urlFor } from '@/sanity/lib/image';
import { client } from "@/sanity/lib/client";


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
        const appliedDiscount = localStorage.getItem("appliedDiscount");
        if (appliedDiscount) {
            setDiscount(Number(appliedDiscount))
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

    const handlePlaceOrder = async () => {
        if (validateForm()) {
            localStorage.removeItem("appliedDiscount");
        }
    
        const orderData = {
            _type: 'order',
            firstName: formValues.firstName,
            lastName: formValues.lastName,
            address: formValues.address,
            city: formValues.city,
            zipCode: formValues.zipCode,
            phone: formValues.phone,
            email: formValues.email,
            cartItems: cartItems.map((item) => ({
                _type: 'reference',
                _ref: item._id
            })),
            total: subTotal - discount, 
            discount: discount,
            orderDate: new Date().toISOString(),
        };
    
        console.log("Order Data:", orderData); // Log the data being sent to sanity
    
        try {
            await client.create(orderData);
            localStorage.removeItem("appliedDiscount");
        } catch (error) {
            console.error("Error creating order", error);
        }
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
                        {cartItems.length > 0 ? (
                            cartItems.map((item) => (
                                <div key={item._id} className="flex items-center border-b pb-4 mb-4">
                                    <div className="flex-shrink-0 w-24 h-24 mr-4">
                                        {item.image && (
                                            <img
                                                src={urlFor(item.image).url()}
                                                alt={item.product}
                                                className="object-cover"
                                            />
                                        )}
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
                                    <p>
                                    First Name is Required
                                    </p>
                                )}
                                <input
                                    type="text"
                                    id="lastName"
                                    value={formValues.lastName}
                                    onChange={handleInputChange}
                                    placeholder="Enter Your Last Name"
                                    className="border p-3 rounded-md w-full"
                                />

{formErrors.firstName && (
                                    <p>
                                    First Name is Required
                                    </p>
                                )}
                            </div>

                            <input
                                type="text"
                                id="address"
                                value={formValues.address}
                                onChange={handleInputChange}
                                placeholder="Address"
                                className="border p-3 rounded-md w-full mb-4"
                            />

{formErrors.firstName && (
                                    <p>
                                    Address is Required
                                    </p>
                                )}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <input
                                    type="text"
                                    id="email"
                                    value={formValues.email}
                                    onChange={handleInputChange}
                                    placeholder="Email"
                                    className="border p-3 rounded-md w-full"
                                />

{formErrors.firstName && (
                                    <p>
                                    Email is Required
                                    </p>
                                )}
                                <input
                                    type="text"
                                    id="phone"
                                    value={formValues.phone}
                                    onChange={handleInputChange}
                                    placeholder="phone"
                                    className="border p-3 rounded-md w-full"
                                />

{formErrors.firstName && (
                                    <p>
                                    Contact is Required
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                <input
                                    type="text"
                                    id="city"
                                    value={formValues.city}
                                    onChange={handleInputChange}
                                    placeholder="City"
                                    className="border p-3 rounded-md w-full"
                                />

{formErrors.firstName && (
                                    <p>
                                    City is Required
                                    </p>
                                )}
                                
                            </div>

                            <input
                                type="text"
                                id="zipCode"
                                value={formValues.zipCode}
                                onChange={handleInputChange}
                                placeholder="zipCode"
                                className="border p-3 rounded-md w-full mb-6"
                            />
                            {formErrors.zipCode && <p>contry is required</p>}
                            <button
                                type="submit"
                                className="bg-pink-400 text-white p-3 w-full rounded-md hover:bg-pink-700"
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
function validateForm() {
    throw new Error("Function not implemented.");
}

