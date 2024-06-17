import React from 'react';

export default function OurMentors({heading,desc,butone}) {
  return (
    <div className='bg-black py-16 flex flex-col items-center w-screen'> 
      <div className=' max-w-screen-lg px-4 text-center'>
        <h3 className='text-3xl text-white mb-2'>{heading}
        </h3>
        <h4 className='text-xl text-white mb-4'>{desc}</h4>
        <a href="/our-writers" className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition duration-300'>
          {butone}
        </a>
      </div>
    </div>
  );
}
