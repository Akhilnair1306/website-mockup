import React, { useState } from 'react';

export default function IconSec() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
      <div className="flex items-center  mt-4">
        {/* Logo */}
        <div className={`absolute top-100 left-44 w-16 h-16 rounded-full flex justify-center items-center cursor-pointer transition-all ${hovered ? 'bg-red-600' : 'bg-white'} mt-12 ml-12`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" strokeWidth={2} stroke={hovered ? 'white' : 'red'} className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="m28 10.67-12-7.33L4 10.67m24 0-12 7.33m12-7.33v11.33l-12 7.33M4 10.67l12 7.33M4 10.67v11.33l12 7.33m0-11.33v11.33" />
          </svg>
        </div>
        
        {/* Title and Description */}
        <div className="ml-[-400px] text-left mt-6">
          <h4 className="title text-2xl text-red-600">On-time delivery</h4>
          <div className="desc text-black">Thereby you can be assured of your submission.</div>
        </div>
        </div>
  );
}






