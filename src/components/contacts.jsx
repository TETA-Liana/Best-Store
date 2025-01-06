import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <div className="bg-yellow-600 flex items-center justify-center min-h-screen">
      <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Heading and Form */}
        <div className="space-y-6">
          <p className="text-black lowercase text-sm">Say hi to the team</p>
          <h1 className="text-black text-5xl font-bold">Contact Us</h1>
          <p className="text-black">
            Feel free to contact us and we will get back to you as soon as we
            can.
          </p>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg space-y-6"
          >
            <div className="mb-6">
              <label className="block text-black text-sm mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 bg-transparent border-b-2 border-gray-600 focus:border-white text-white outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="block text-black text-sm mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 bg-transparent border-b-2 border-gray-600 focus:border-white text-white outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="block text-black text-sm mb-2" htmlFor="message">
                Tell us all about it
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 bg-transparent border-b-2 border-gray-600 focus:border-white text-black outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-yellow-600 text-black hover:bg-gray-600 rounded-md"
            >
              Send
            </button>
          </form>
        </div>

        {/* Right Section: Info */}
        <div className="text-black space-y-8">
          <div>
            <h2 className="text-xl uppercase text-black">Opening Hours</h2>
            <p>Monday – Friday</p>
            <p>9am – 5pm</p>
            <p>Weekend: Closed</p>
          </div>

          <div>
            <h2 className="text-xl uppercase text-black">Address</h2>
            <p>Gasabo,Gisozi,</p>
            <p>Kigali,</p>
            <p>Rwanda</p>
          </div>

          <div>
            <h2 className="text-xl uppercase text-black">Support</h2>
            <p>Email: tetaliana287@gmail.com</p>
            <p>Phone: +62 21 6539-0605</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-black">dribbble</a>
            <a href="#" className="hover:text-black">instagram</a>
            <a href="#" className="hover:text-black">linkedin</a>
            <a href="#" className="hover:text-black">twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
