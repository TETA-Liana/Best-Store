import React from 'react';


const Nav = () => {
  return (
    <div className="bg-blue-800">
      <div className="flex justify-between items-center p-4">
        <ul className="text-white flex space-x-4 items-center">
          <li>
            <span className="font-semibold text-xl">B</span>est
            <span className="font-semibold text-xl">S</span>tore
          </li>
          <li className="pl-6">
            <a href='#home' className="hover:text-blue-600 text-blue-300">Home</a>
          </li>
          <li>
            <a href='#about' className="hover:text-blue-600 text-blue-300" >About us</a>
          </li>
          <li>
            <a href='#products' className="hover:text-blue-600 text-blue-300">Products</a>
          </li>
          <li>
            <a href='#book' className="hover:text-blue-600 text-blue-300">Booking</a>
          </li>
          <li>
            <a href='#contacts' className="hover:text-blue-600 text-blue-300" >Contacts</a>
          </li>
        </ul>

        <div className="flex space-x-4">
          <a href='./loginas' className="bg-white text-blue-800 p-2 pl-4 pr-4 font-semibold rounded-2xl">
            Login
          </a>
          <a  href='./signup'className="bg-white text-blue-800 p-2 pl-4 pr-4 font-semibold rounded-2xl">
            Signup
          </a>
          <i className="fa-solid fa-user p-4 bg-white rounded-full text-gray-500"></i>
        </div>
      </div>
    </div>
  );
};

export default Nav;
