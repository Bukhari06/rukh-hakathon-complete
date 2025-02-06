
 'use client'; // Marking this file for client-side execution

// import React, { useState } from 'react';
// import { client } from '../../sanity/lib/client'; // Adjust the relative path

// const ProductListAndOrderForm = () => {
//   const products = [
//     { name: 'Chair', image: '/chair1.png', price: 100, _id: 'chair_001' },  // Added _id for reference
//   ];

//   const [selectedProduct, setSelectedProduct] = useState(products[0]);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     address: '',
//     email: '',
//     contact: '',
//     city: '',
//     street: '',
//     countryCode: '',
//   });
//   const [orderSuccess, setOrderSuccess] = useState(false);
//   const [quantity, setQuantity] = useState(1);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setQuantity(parseInt(e.target.value, 10)); // Ensure that quantity is an integer
//   };

//   // Make the handlePlaceOrder function async to handle async operations
//   const handlePlaceOrder = async () => {
//     if (!selectedProduct._id) {
//       console.error('Product ID is missing');
//       return;
//     }

//     const orderData = {
//       _type: 'order',
//       firstName: formData.firstName,
//       lastName: formData.lastName,
//       address: formData.address,
//       email: formData.email,
//       contact: formData.contact,
//       city: formData.city,
//       street: formData.street,
//       countryCode: formData.countryCode,
//       product: {
//         _type: 'reference',
//         _ref: selectedProduct._id, // Reference to the product's _id in Sanity
//       },
//       total: selectedProduct.price * quantity,
//       orderDate: new Date().toISOString(), // Use toISOString() to format the date
//       orderStatus: 'Pending', // Or any initial status you want
//     };

//     // Log the order data to check its content
//     console.log('Order Data:', orderData);

//     // Submit order data to Sanity
//     try {
//       await client.create(orderData);
//       console.log('Order created successfully');
//       setOrderSuccess(true); // Update the success state
//     } catch (error) {
//       console.error('Error creating order:', error);
//       alert('There was an error placing your order');
//     }
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     handlePlaceOrder(); // Trigger order placement on form submit
//   };

//   return (
//     <div className="max-w-screen-lg mx-auto p-6">
//       <h1 className="text-3xl font-bold text-center mb-6 text-pink-300">Order Your Item</h1>

//       {selectedProduct && (
//         <div className="mt-8 p-6 border rounded-md">
//           <h2 className="text-xl font-semibold mb-4">Product / {selectedProduct.name}</h2>

//           {orderSuccess ? (
//             <div className="bg-green-100 text-green-700 p-4 rounded-md text-center">
//               <h2>Your order for {selectedProduct.name} has been successfully confirmed!</h2>
//             </div>
//           ) : (
//             <form onSubmit={handleSubmit} className="space-y-4">
//               <div className="text-center">
//                 <img
//                   src={selectedProduct.image}
//                   alt={selectedProduct.name}
//                   className="mx-auto h-48 object-cover mb-4"
//                 />
//                 <div>
//                   <p className="text-lg font-semibold">Price: £{selectedProduct.price}</p>
//                   <label className="block text-sm font-medium mt-2">Quantity</label>
//                   <input
//                     type="number"
//                     min="1"
//                     value={quantity}
//                     onChange={handleQuantityChange}
//                     className="mt-1 p-2 border rounded-md w-full max-w-xs mx-auto"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label htmlFor="firstName" className="block text-sm font-medium">First Name</label>
//                   <input
//                     type="text"
//                     name="firstName"
//                     id="firstName"
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                     className="mt-1 p-2 border rounded-md w-full"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="lastName" className="block text-sm font-medium">Last Name</label>
//                   <input
//                     type="text"
//                     name="lastName"
//                     id="lastName"
//                     value={formData.lastName}
//                     onChange={handleInputChange}
//                     className="mt-1 p-2 border rounded-md w-full"
//                     required
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label htmlFor="address" className="block text-sm font-medium">Address</label>
//                 <input
//                   type="text"
//                   name="address"
//                   id="address"
//                   value={formData.address}
//                   onChange={handleInputChange}
//                   className="mt-1 p-2 border rounded-md w-full"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="mt-1 p-2 border rounded-md w-full"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="contact" className="block text-sm font-medium">Contact</label>
//                 <input
//                   type="text"
//                   name="contact"
//                   id="contact"
//                   value={formData.contact}
//                   onChange={handleInputChange}
//                   className="mt-1 p-2 border rounded-md w-full"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="city" className="block text-sm font-medium">City</label>
//                 <input
//                   type="text"
//                   name="city"
//                   id="city"
//                   value={formData.city}
//                   onChange={handleInputChange}
//                   className="mt-1 p-2 border rounded-md w-full"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="street" className="block text-sm font-medium">Street</label>
//                 <input
//                   type="text"
//                   name="street"
//                   id="street"
//                   value={formData.street}
//                   onChange={handleInputChange}
//                   className="mt-1 p-2 border rounded-md w-full"
//                   required
//                 />
//               </div>

//               <div>
//                 <label htmlFor="countryCode" className="block text-sm font-medium">Country Code</label>
//                 <input
//                   type="text"
//                   name="countryCode"
//                   id="countryCode"
//                   value={formData.countryCode}
//                   onChange={handleInputChange}
//                   className="mt-1 p-2 border rounded-md w-full"
//                   required
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 mt-4 w-full"
//               >
//                 Order Now
//               </button>
//             </form>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductListAndOrderForm;
