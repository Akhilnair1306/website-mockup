import React from 'react';

export default function Section() {
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-white opacity-100" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h3 className='text-red-600 text-center mb-16 mt-[-36px] text-4xl'>Our Testimonials</h3>
          <figure className="mt-8">
          <img
                className="mx-auto h-24 w-24 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Judith Black"
              />
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9 mt-10">
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                molestiae. Numquam corrupti in laborum sed rerum et corporis.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
           
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                  <circle cx={1} cy={1} r={1} />
                </svg>
            </figcaption>
          </figure>
        </div>
        <div className="container text-center bg-black text-white py-6 px-4">
            <h2 className='text-2xl mb-2'>Order Process</h2>
            <p>Ordering your complete or part Ph.D. Dissertation process from Ph.D. Assistance is quick and easy. You need to follow the easy steps given below</p>
            </div>
      </section>
    </div>
  );
}

