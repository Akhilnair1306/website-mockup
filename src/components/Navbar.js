import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Header from './Header';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-between mt-8 px-4 md:px-10">
        <div className="text-black text-lg font-bold text-center md:text-left mb-4 md:mb-0 md:ml-44">
          PHD Assistance
        </div>
        <div className="inline-block bg-red-600 px-4 py-2 rounded md:ml-10 w-full md:w-auto">
          <div className="flex flex-col md:flex-row items-center md:items-stretch">
            <ul className="hidden md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-white w-full md:w-auto">
              <li className="hover:bg-black hover:text-white px-3 py-1 rounded text-center md:text-left">
                <a href="#">ABOUT</a>
              </li>
              <Dropdown label="SERVICES" />
              <Dropdown label="INDUSTRIES" />
              <li className="hover:bg-black hover:text-white px-3 py-1 rounded text-center md:text-left">
                <a href="#">PRICING</a>
              </li>
              <li className="hover:bg-black hover:text-white px-3 py-1 rounded text-center md:text-left">
                <a href="#">HELP-GUIDE</a>
              </li>
              <li className="hover:bg-black hover:text-white px-3 py-1 rounded text-center md:text-left">
                <a href="#">CONTACT US</a>
              </li>
              <li className="hover:bg-black hover:text-white px-3 py-1 rounded text-center md:text-left">
                <a href="#">HIRE A RESEARCH ASSISTANT</a>
              </li>
            </ul>
            <button
              className="md:hidden text-white hover:bg-black px-3 py-1 rounded"
              onClick={toggleMenu}
            >
              Menu
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="bg-red-600 md:hidden w-full mt-2 px-4 py-2">
          <ul className="flex flex-col space-y-2 text-white">
            <li className="hover:bg-black hover:text-white px-3 py-1 rounded text-center">
              <a href="#">ABOUT</a>
            </li>
            <Dropdown label="SERVICES" />
            <Dropdown label="INDUSTRIES" />
            <li className="hover:bg-black hover:text-white px-3 py-1 rounded text-center">
              <a href="#">PRICING</a>
            </li>
            <li className="hover:bg-black hover:text-white px-3 py-1 rounded text-center">
              <a href="#">HELP-GUIDE</a>
            </li>
            <li className="hover:bg-black hover:text-white px-3 py-1 rounded text-center">
              <a href="#">CONTACT US</a>
            </li>
            <li className="hover:bg-black hover:text-white px-3 py-1 rounded text-center">
              <a href="#">HIRE A RESEARCH ASSISTANT</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}



