'use client'; // Marking this file for client-side execution

import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally, you'd send this data to an API for submission.
    setFormSubmitted(true); // Show success message
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="bg-[#2A254B] text-[#FFFFFF] max-w-screen-lg mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>

      {/* Contact Form */}
      <div className="p-6 border rounded-md shadow-md">
        {formSubmitted ? (
          <div className="bg-green-100 text-green-700 p-4 rounded-md text-center">
            <h2>Your message has been successfully sent!</h2>
            <p>We'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="  bg-[#F9F9F9]block text-sm font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="  bg-[#F9F9F9] mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>

            {/* Subject Input */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium ">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="text-black mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                className=" text-black mt-1 p-2 border rounded-md w-full h-32"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="bg-[#2A254B] text-white px-6 py-3 rounded-md hover:bg-red-200 mt-4 w-full sm:w-auto"
              >
                Send Message
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Contact Information */}
      <div className="mt-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Our Contact Information</h2>
        <p className="text-lg">Feel free to reach out to us for any inquiries!</p>
        <div className="mt-6 space-y-2">
          <p><strong>Phone:</strong>2341-65782311</p>
          <p><strong>Email:</strong>yours@gmail.com</p>
          <p><strong>Address:</strong>E-Complex Collage., City, Karachi Country, Pakistan </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
