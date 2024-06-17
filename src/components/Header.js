import React from 'react';

export default function Header() {
  return (
    <div className="bg-red-600 py-3 px-10">
      <ul className="flex justify-between items-center text-white ">
        <div className="flex space-x-6 ml-40">
          <li>Have Any Questions</li>
          <li>9898989898</li>
          <li>info@phdassistance</li>
        </div>
        <div className="flex space-x-6 mr-44">
          <li>Research</li>
          <li>| Insights |</li>
          <li>FAQ</li>
        </div>
      </ul>
    </div>
  );
}
