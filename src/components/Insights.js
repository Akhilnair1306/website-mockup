import React from 'react';

export default function Insights() {
  return (
    <div className='bg-black w-full mt-10 py-12'>
      <div className='mt-8'>
        <h3 className='text-white text-3xl text-center'>Find More about Quality Procedure</h3>
      </div>
      <div className='mt-4 flex justify-center'>
        <button className='bg-red-600 text-white py-2 px-4 rounded h-10'>
          About Ph.D Assistance
        </button>
      </div>
      <div className='flex flex-col items-start mt-20 ml-80'>
        <h3 className='text-white text-3xl mb-4 ml-16 text-center'>Sample Work</h3>
        <div className='flex space-x-4 mb-4'>
          <button className='bg-transparent text-white border border-white py-2 px-4 rounded'>
            Dissertation
          </button>
          <button className='bg-transparent text-white border border-white py-2 px-4 rounded'>
            Statistical Assignment
          </button>
        </div>
        <div className='flex space-x-4'>
          <button className='bg-transparent text-white border border-white py-2 px-4 rounded'>
            Coding and Implementation
          </button>
          <button className='bg-transparent text-white border border-white py-2 px-4 rounded'>
            Plagiarism Report
          </button>
        </div>
      </div>
    </div>
  );
}


