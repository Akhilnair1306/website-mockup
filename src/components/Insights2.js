import React from 'react';

export default function Insights2() {
  return (
    <div className="bg-red-600 p-4 w-full">
      <h3 className='text-white mt-10 mb-10 text-center text-3xl'>Insights</h3>
      <div className='flex flex-auto justify-center space-x-2'>
        <div className='relative'>
          <img
            className="scale-with-grid"
            src="https://www.phdassistance.com/wp-content/uploads/2017/11/Who-we-are-2.jpg"
            alt="PA_Image"
            width="276"
            height="371"
          />
          <p className="absolute bottom-5 left-0 right-0 bg-transparent bg-opacity-50 text-white text-center p-2 text-lg leading-6">
            Trust, Quality & <br /> Customer Care
          </p>
        </div>
        <div className='relative'>
          <img
            className="scale-with-grid"
            src="https://www.phdassistance.com/wp-content/uploads/2020/09/Brochuer-min-min.jpg"
            alt="PA_Image"
            width="276"
            height="371"
          />
          <p className="absolute bottom-5 left-0 right-0 bg-transparent bg-opacity-50 text-white text-center p-2 text-lg leading-6">
            Trust, Quality & Customer Care
          </p>
        </div>
        <div className='relative'>
          <img
            className="scale-with-grid"
            src="https://www.phdassistance.com/wp-content/uploads/2020/09/blog-min-min.jpg"
            alt="PA_Image"
            width="276"
            height="371"
          />
         <p className="absolute bottom-5 left-0 right-0 bg-transparent bg-opacity-50 text-white text-center p-2 text-lg leading-6">
            Trust, Quality & Customer Care
          </p>
        </div>
        <div className='relative'>
          <img
            className="scale-with-grid"
            src="https://www.phdassistance.com/wp-content/uploads/2017/11/Help-guide-image.jpg"
            alt="PA_Image"
            width="276"
            height="371"
          />
          <p className="absolute bottom-5 left-0 right-0 bg-transparent bg-opacity-50 text-white text-center p-2 text-lg leading-6">
            Trust, Quality & Customer Care
          </p>
        </div>
      </div>
    </div>
  );
}

