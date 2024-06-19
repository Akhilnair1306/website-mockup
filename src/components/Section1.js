import React from 'react';
import { Cog6ToothIcon } from '@heroicons/react/24/solid';
import PhotoBox from './PhotoBox';
import Random from './Random';
import PhotoBox1 from './PhotoBox1';
import MidSec from './MidSec';
import IconSec from './IconSec';
import Insights from './Insights';
import Testimonials from './Testimonials';
import Footer from './Footer';
import Insights2 from './Insights2';

export default function Section1() {
  return (
    <div className="flex flex-col items-center w-full px-4 mt-8"> {/* Center the entire section */}
      <div className="flex flex-col items-center w-full">
        <Cog6ToothIcon className="h-12 w-12 text-red-600 mb-4" />
        <p className="text-center text-3xl">Why PhD Assistance</p>
        <p className="text-center text-3xl whitespace-nowrap">A Trusted & Academically Sound Mentors representing various Countries</p>
      </div>
      <div className="flex flex-wrap justify-center gap-9 mt-10"> {/* Use flex-wrap to handle responsiveness */}
        <PhotoBox link="https://www.phdassistance.com/wp-content/uploads/2021/03/home4.jpg" label="Research Guidance / Mentoring" desc="Research Mentoring at all stages of your Research & Publications – Rewriting, Translating your ideas, copyediting, formatting or plagiarism check."/>
        <PhotoBox link="https://www.phdassistance.com/wp-content/uploads/2022/09/home5.jpg" label="Across the Industries / Subjects" desc="Our team of PhD Experts has capabilities and skills to handle wide range of subjects from Arts & Literature, Engineering to Life Science. Explore More."/>
        <PhotoBox link="https://www.phdassistance.com/wp-content/uploads/2022/09/home6.jpg" label="Statistics is Our Core" desc="Statistics is the core for any research & our statisticians are available at every stage of your research design (planning, collection, analysis & Interpretation)."/>
      </div>
      <div className="mt-10 w-full">
        <Random heading="Our Mentors" desc="Intellectual, Passionate, and Highly Collaborative." butone="Learn More"/>
      </div>
      <PhotoBox1 />
      <Random heading="Our Mentors" desc="Intellectual, Passionate, and Highly Collaborative." butone="Learn More"/>
      <div className="text-center">
      <h3 className='text-3xl mt-10 text-red-600'>Our Process</h3>
      </div>
      <div className=''>
      <IconSec />
      <div className='mt-12'>
      <IconSec/>
      </div>
      </div>
      <Insights />
      <Testimonials />
      <Insights2 />
      <Footer/>
    </div>
  );
}



