import React from 'react';
import Imageone from '../assets/image1.jpg';
import Section1 from './Section1';
import IconSec from './IconSec';

export default function Main() {
  return (
    <div className='flex flex-col items-center mt-10 ml-32 relative w-[85vw] h-[70vh]'> {/* Adjusted height to 70vh */}
      <div className='absolute inset-0 bg-gradient-to-r from-red-600 to-transparent'></div>
      <img src={Imageone} alt="desc" className='w-full h-full object-cover' />
      <div className='absolute top-1/2 left-5 transform -translate-y-1/2 text-white z-10'>
        <p className='text-2xl font-bold m-0 ml-16'>Successfully Mentored</p>
        <p className='text-2xl mt-4 ml-16'>Research Scholars & Authors <br /> across the Globe</p>
        <button className="bg-red-800 hover:bg-red-900 text-white font-bold py-2 px-4 rounded-md border border-white-600 transition duration-300 mt-8 ml-16">
          About Us
        </button>
      </div>
      <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mt-10'>
        <Section1 />
      </div>
    </div>
  );
}
