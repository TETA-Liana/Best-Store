import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
 
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
 
  const [errorMessage, setErrorMessage] = useState('');
  const navigate=useNavigate();

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value  
    });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json(); 

      if (response.ok) {

        localStorage.setItem('token', result.token);  
        alert('Login successful!');

        navigate('/homedash');
        
      } else {
        
        setErrorMessage(result.message);
      }
    } catch (error) {
    
      setErrorMessage('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-yellow-600 text-white p-8 rounded-xl shadow-md max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-2">Email</label>
            <div className="flex items-center border-b-2 border-gray-300 pb-1">
              <span className="text-gray-400 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12H8m0 0l4-4m-4 4l4 4"
                  />
                </svg>
              </span>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="bg-transparent focus:outline-none w-full"
                value={formData.email}
                onChange={handleChange}  
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm mb-2">Password</label>
            <div className="flex items-center border-b-2 border-gray-300 pb-1">
              <span className="text-gray-400 mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 16V12m0 0V8m0 4H8m0 0h4m0 0h4m0 0h-4"
                  />
                </svg>
              </span>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="bg-transparent focus:outline-none w-full"
                value={formData.password}
                onChange={handleChange}  // Update state when input changes
                required
              />
            </div>
          </div>

          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}  {/* Display error message */}

          <button
            type="submit"
            className="w-full bg-white text-yellow-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition duration-200"
          >
           Login
          </button>

          <p className="text-center text-sm mt-4">
            <a href="#" className="text-white hover:underline">
              Forgot password?
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
