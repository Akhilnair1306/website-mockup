import React from 'react';
import Dropdown from './Dropdown';
import Header from './Header';

export default function Navbar() {
  return (
    <div>
     
    <div className=' flex mt-8'>
      <div className="text-black text-lg font-bold ml-44 text-center">
        PHD Assistance
      </div>
      <div className="inline-block bg-red-600  ml-10">
        <div className="flex items-center">
          <ul className="flex space-x-4 text-white">
            <li className='mt-1 mb-1 hover:bg-black hover:text-white px-3 py-1'>
              <a href="#">ABOUT</a>
            </li>
            <Dropdown label="SERVICES" />
            <Dropdown label="INDUSTRIES" />
            <li className='mt-1 mb-1 hover:bg-black hover:text-white px-3 py-1 '>
              <a href="#">PRICING</a>
            </li>
            <li className='mt-1 mb-1 hover:bg-black hover:text-white px-3 py-1 '>
              <a href="#">HELP-GUIDE</a>
            </li>
            <li className='mt-1 mb-1 hover:bg-black hover:text-white px-3 py-1 '>
              <a href="#">CONTACT US</a>
            </li>
            <li className='mt-1 mb-1 hover:bg-black hover:text-white px-3 py-1'>
              <a href="#">HIRE A RESEARCH ASSISTANT</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}


