import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-24 w-full">
      <div className="w-full max-w-none px-4">
        <div className="flex flex-wrap justify-between">
          {/* About Us Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <div className="bg-gray-700 p-4 rounded-md mx-auto" style={{ maxWidth: '300px' }}>
              <h4 className="text-lg font-bold text-center mb-2">About Us</h4>
              <p className="text-justify">
                Ph.D. Assistance serves as an external mentor to brainstorm your idea and translate that into a research model. Hiring a mentor or tutor is common and therefore let your research committee know about the same. We do not offer any writing services without the involvement of the researcher, and therefore we’re merely a translator for non-native English speakers and our services are merely restricted to research scholars to hasten their research process. We offer the following services to research scholars across the globe: ideas to translating in writing, editing, proofreading, plagiarism correction, statistical analysis, coding and algorithm, illustration, and formatting.
              </p>
            </div>
          </div>

          {/* Main Services Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <div className="bg-gray-700 p-4 rounded-md mx-auto" style={{ maxWidth: '300px' }}>
              <h4 className="text-lg font-bold text-left mb-2">Main Services</h4>
              <ul className="list-none text-left">
                <li className="mb-2"><a href="https://www.phdassistance.com/services/phd-dissertation/" className="hover:underline">PhD Dissertation</a></li>
                <li className="mb-2"><a href="https://www.phdassistance.com/services/phd-coursework/" className="hover:underline">Coursework</a></li>
                <li className="mb-2"><a href="https://www.phdassistance.com/services/phd-literature-review/" className="hover:underline">Literature Review</a></li>
                <li className="mb-2"><a href="https://www.phdassistance.com/services/phd-research-methodology/" className="hover:underline">PhD Research Methodology</a></li>
                <li className="mb-2"><a href="https://www.phdassistance.com/services/phd-data-analysis/" className="hover:underline">Data Analysis</a></li>
                <li className="mb-2"><a href="https://www.phdassistance.com/services/manuscript/" className="hover:underline">Manuscript</a></li>
                <li className="mb-2"><a href="https://www.phdassistance.com/services/editing-services/" className="hover:underline">Editing Services</a></li>
                <li className="mb-2"><a href="https://www.phdassistance.com/services/animation/" className="hover:underline">Animation</a></li>
                <li className="mb-2"><a href="https://www.phdassistance.com/services/courses/" className="hover:underline">Courses</a></li>
              </ul>
            </div>
          </div>

          {/* Links Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <div className="bg-gray-700 p-4 rounded-md mx-auto" style={{ maxWidth: '300px' }}>
              <h4 className="text-lg font-bold text-left mb-2">Links</h4>
              <ul className="list-none text-left">
                <li className="mb-2"><a href="https://www.phdassistance.com/blog/" className="hover:underline">Blog</a></li>
                <li className="mb-2"><a href="https://www.phdassistance.com/industries/" className="hover:underline">Industries</a></li>
                <li className="mb-2"><a href="https://www.phdassistance.com/pricing/" className="hover:underline">Pricing Details</a></li>
                <li className="mb-2"><a href="https://www.phdassistance.com/insights/" className="hover:underline">Insights</a></li>
                <li className="mb-2"><a href="https://www.phdassistance.com/help-guide/" className="hover:underline">Help-Guide</a></li>
                <li className="mb-2"><a href="https://www.phdassistance.com/sample-work/" className="hover:underline">Our Sample Work</a></li>
                <li className="mb-2"><a href="https://www.phdassistance.com/faq/" className="hover:underline">FAQ</a></li>
                <li className="mb-2"><a href="https://www.phdassistance.com/career/" className="hover:underline">Career</a></li>
                <li className="mb-2"><a href="https://www.phdassistance.com/contact-us/" className="hover:underline">Contact us</a></li>
                <li className="mb-2"><a href="https://www.phdassistance.com/terms-and-conditions/" className="hover:underline">Terms and Conditions</a></li>
                <li className="mb-2"><a href="https://www.phdassistance.com/privacy-policy/" className="hover:underline">Privacy policy</a></li>
                <li className="mb-2"><a href="https://www.phdassistance.com/customer-centre/" className="hover:underline">Customer Centre</a></li>
                <li className="mb-2"><a href="https://www.phdassistance.com/sitemap.xml" className="hover:underline">XML Sitemap</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <div className="bg-gray-700 p-4 rounded-md mx-auto" style={{ maxWidth: '300px' }}>
              <h4 className="text-lg font-bold text-left mb-2">Contact us</h4>
              <p className="white8">UK : +44-7537 144372</p>
              <p className="white8">India : +91-9176966446</p>
              <p className="white8">Landline : +91-44-42124284<br />
              (Between 9.00 am – 6.00 pm IST)</p>
              <p className="white8">For existing clients: +91-8754446693</p>
              <p className="white8">Customer Care: +91-9384672299</p>
              <p className="white8">Email: info@phdassistance.com</p>
            </div>
          </div>

          {/* Footer Logos Section */}
          <div className="w-full md:w-1/4 mt-6 md:mt-0">
            <div className="bg-gray-700 p-4 rounded-md mx-auto" style={{ maxWidth: '300px' }}>
              <ul className="footer-logos flex justify-center">
                <li className="mx-2"><img decoding="async" src="https://www.phdassistance.com/wp-content/uploads/2020/09/trusted-site-1-min.png" alt="PA_Image" /></li>
                <li className="mx-2"><img decoding="async" src="https://www.phdassistance.com/wp-content/uploads/2020/09/siteseal_gd_3_h_d_m.png" alt="PA_Image" /></li>
                <li className="mx-2"><img decoding="async" src="https://www.phdassistance.com/wp-content/uploads/2020/09/mcfee-min.jpg" alt="PA_Image" /></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
