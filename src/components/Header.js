import React from 'react';

export default function Header() {
  return (
    <div className="bg-red-600 py-3 px-4 md:px-10">
      <ul className="flex flex-col md:flex-row justify-between items-center text-white space-y-2 md:space-y-0">
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 ml-0 md:ml-40 space-y-2 md:space-y-0 items-center">
          <li className="text-center md:text-left">Have Any Questions</li>
          <li className="text-center md:text-left">9898989898</li>
          <li className="text-center md:text-left">info@phdassistance</li>
        </div>
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 mr-0 md:mr-44 space-y-2 md:space-y-0 items-center">
          <li className="text-center md:text-left">Research</li>
          <li className="text-center md:text-left">| Insights |</li>
          <li className="text-center md:text-left">FAQ</li>
        </div>
      </ul>
    </div>
  );
}
