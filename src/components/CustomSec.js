import React from 'react'

export default function CustomSec({link,heading,desc}) {
  return (
    <div>

        <div className="bg-red-600 p-4 flex justify-center items-center ">
          <img
            src={link}
            alt="RESEARCH MENTORING, DATA ANALYTICS & CONSULTING SERVICES"
            className="w-[20vw] h-[30vh] object-cover" 
          />
        </div>
        <div className="bg-gray-200 p-6 flex flex-col justify-center items-start w-[20vw] h-[24vh] ml-4 mt-[-10px]"> 
          <h4 className="text-black text-xl  mb-2">{heading}</h4>
          <p className="text-black">{desc}</p>
        </div>
      </div>
  )
}
