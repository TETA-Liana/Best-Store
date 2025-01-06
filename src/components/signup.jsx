import React, { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    email: "",
    password: "",
  
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

   
   
   
    const dataToSubmit = {
      firstName: formData.firstName,
      secondName: formData.secondName,
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      });

      const result = await response.json();

      if (!response.ok) {
      
        setErrorMessage(result.message || "Something went wrong!");
      } else {
        
        setSuccessMessage("Registration successful!");
        setErrorMessage(""); 
      }
    } catch (error) {
      setErrorMessage("Failed to register. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Section: Image */}
      <div className="w-1/2">
        <img
          src="./shopping.jpeg" 
          alt="Paris view"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Right Section: Form */}
      <div className="w-1/2 bg-yellow-600 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-yellow-500 p-8 rounded-lg w-4/5 max-w-lg text-white"
        >
          <h1 className="text-3xl font-bold mb-8 text-center">sign up</h1>

          {errorMessage && (
            <div className="mb-4 text-red-500 text-center">{errorMessage}</div>
          )}

          {successMessage && (
            <div className="mb-4 text-green-500 text-center">{successMessage}</div>
          )}

          <div className="mb-6">
            <label className="block text-white text-sm mb-2" htmlFor="firstName">
              First name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 bg-transparent border-b-2 border-white outline-none text-white"
            />
          </div>

          <div className="mb-6">
            <label className="block text-white text-sm mb-2" htmlFor="secondName">
              Second name
            </label>
            <input
              type="text"
              id="secondName"
              name="secondName"
              value={formData.secondName}
              onChange={handleChange}
              className="w-full p-2 bg-transparent border-b-2 border-white outline-none text-white"
            />
          </div>

          <div className="mb-6">
            <label className="block text-white text-sm mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 bg-transparent border-b-2 border-white outline-none text-white"
            />
          </div>

          <div className="mb-6">
            <label className="block text-white text-sm mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 bg-transparent border-b-2 border-white outline-none text-white"
            />
          </div>



          <button
            type="submit"
            className="w-full py-2 bg-white text-yellow-600 rounded-full font-semibold hover:bg-gray-200"
          >
            signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
