import React from 'react';
import CustomSec from './CustomSec';

export default function CustomSection() {
  return (
    <div className="w-screen bg-red-600 py-10 flex justify-start">
      <div className="flex flex-col items-start ml-36"> 
        {/* photobox1 */}
        <div className="bg-red-600 p-4 flex justify-center items-center ">
          <img
            src="https://www.phdassistance.com/wp-content/uploads/2014/11/home_languageschool_course1.jpg"
            alt="RESEARCH MENTORING, DATA ANALYTICS & CONSULTING SERVICES"
            className="w-[40vw] h-[50vh] object-cover" 
          />
        </div>
        <div className="bg-gray-200 p-6 flex flex-col justify-center items-start w-[40vw] h-[20vh] ml-4 mt-[-10px]"> 
          <h2 className="text-black text-xl mb-2">RESEARCH MENTORING, DATA ANALYTICS & CONSULTING SERVICES</h2>
          <p className="text-black text-base">For Students, Research Scholars, Authors &amp; Publishers across the domain</p>
        </div>
      </div>

      {/* CustomSec components */}
      <div className="ml-10">
        <CustomSec link="https://www.phdassistance.com/wp-content/uploads/2020/09/home_languageschool_course4.jpg" heading="Our Core lies in Tutoring and Mentoring" desc="We translate our knowledge &amp; Skills to students across the world"/>
      </div>

      <div className="ml-4">
        <CustomSec link="https://www.phdassistance.com/wp-content/uploads/2014/11/home_languageschool_course3.jpg" heading="Highly Commendable PhD Research" desc="We work to help you prepare at every stage of your research, to ensure that you’re capable to deliver high quality Thesis / Dissertation"/>
      </div>
    </div>
  );
}

