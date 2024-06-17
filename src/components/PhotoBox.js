import React from 'react';

export default function PhotoBox({ link, label, desc }) {
  return (
    <div className="flex flex-col items-center w-[350px]">
      <div className="text-center mb-3 text-xl text-red-600">
        <p>{label}</p>
      </div>
      <div className="relative w-full h-[350px] group"> {/* Add group class for parent hover */}
        <a href="https://www.phdassistance.com/services/">
          <div className="absolute inset-0  group-hover:bg-white group-hover:opacity-80 transition duration-300"></div> {/* Add hover effect */}
          <img
            className="w-full h-full object-cover transform group-hover:translate-y-[-10px] transition duration-300" 
            src={link}
            alt="phdassistance"
          />
        </a>
      </div>
      <div className="text-center text-sm mt-2">
        <p>{desc}</p>
      </div>
    </div>
  );
}

