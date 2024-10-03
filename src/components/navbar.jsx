import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="bg-blue-500">
      <div className="flex justify-between items-center p-4">
        <ul className="text-white flex space-x-4 items-center">
          <li>
            <span className="font-semibold text-xl">B</span>est
            <span className="font-semibold text-xl">S</span>tore
          </li>
          <li className="pl-6">
            <a href='/home' className="hover:text-blue-600 text-white">Home</a>
          </li>
          <li>
            <a href='/about' className="hover:text-blue-600 text-white">About us</a>
          </li>
          <li>
            <a href='/products' className="hover:text-blue-600 text-white">Products</a>
          </li>
          
          <li>
            <a href='/contacts' className="hover:text-blue-600 text-white">Contacts</a>
          </li>
        </ul>

        <div className="flex space-x-4">
          <Link to="/loginas" className="bg-white text-blue-500 p-2 pl-4 pr-4 font-semibold rounded-2xl">
            Login
          </Link>
          <Link to="/signup" className="bg-white text-blue-500 p-2 pl-4 pr-4 font-semibold rounded-2xl">
            Signup
          </Link>
          <i className="fa-solid fa-user p-4 bg-white rounded-full text-gray-500"></i>
        </div>
      </div>
    </div>
  );
};

export default Nav;
