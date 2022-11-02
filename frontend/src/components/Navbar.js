import React from "react";
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <header className="text-gray-400 bg-[#E4F4FA] body-font w-full z-10 absolute">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <img src={logo} className="h-20"></img>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-[#1B5A7A]">First Link</a>
          <a className="mr-5 hover:text-[#1B5A7A]">Second Link</a>
          <a className="mr-5 hover:text-[#1B5A7A]">Third Link</a>
          <a className="mr-5 hover:text-[#1B5A7A]">Fourth Link</a>
        </nav>
        <button className="inline-flex items-center text-black bg-green-600 border-0 py-1 px-3 focus:outline-none hover:bg-green-700 rounded text-base mt-4 md:mt-0">
          Login
        </button>
      </div>
    </header>
  );
};

export default Navbar;
