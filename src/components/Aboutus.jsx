import React from "react";
import bg from "../assets/home.webp";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-barlow">
            About
          </h2>
          <div className="h-1 w-20 bg-yellow-400 mx-auto"></div>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto font-roboto">
            Learn about our journey, our leadership, and what makes Walia Group
            your ideal logistics partner.
          </p>
        </div>

        {/* About Us Text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src={bg}
              alt="Professional business environment representing our company culture"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://placehold.co/600x400/000000/FFD700?text=About+Walia+Group";
              }}
              width="5066"
              height="3377"
              className="w-full h-full object-cover rounded-lg shadow-md"
              loading="lazy"
            />
            <p className="text-xs text-gray-500 mt-1">Photo by Hunters Race</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-black font-barlow">
              Our Journey
            </h3>
            <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
            <p className="text-gray-700 mb-4 font-roboto">
              Founded with a vision to transform the logistics industry, Walia
              Group of Companies has grown from a small operation to a
              comprehensive logistics provider servicing clients across North
              America.
            </p>
            <p className="text-gray-700 mb-6 font-roboto">
              With 7+ years of industry knowledge, we bring tailored logistics
              solutions from port to door. Our integrated approach combines
              dispatch services, safety management, freight brokerage, and more
              to offer complete supply chain solutions.
            </p>
            <p className="text-gray-700 font-roboto">
              Our mission is simple: to provide reliable, efficient, and
              cost-effective logistics services that help our clients succeed in
              their business operations while maintaining the highest standards
              of safety and compliance.
            </p>
          </div>
        </div>

        {/* Founders Section */}
        <div className="bg-gray-200 py-16 px-2 md:px-10 rounded-xl mb-20 ">
          <h3 className="text-2xl font-bold mb-10 text-center text-black font-barlow">
            Leadership Team
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 ">
            {/* first member 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-yellow-400 text-4xl font-bold font-barlow">
                  RW
                </span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-black mb-2 font-barlow">
                  Rahul Walia
                </h4>
                <p className="text-blackfont-medium mb-3 font-barlow">
                  Founder &amp; Safety Expert
                </p>
                <p className="text-gray-700 mb-4 font-roboto">
                  Expert in fleet operations, safety, and DOT compliance with a
                  passion for building safer transportation systems.
                </p>
                {/* <div className="flex space-x-3"> 
            <a href="https://linkedin.com/in/rahul-walia-a48a51176" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black text-xl" aria-label='LinkedIn Profile'>
          <FaLinkedin />
         </a>
        <a href="https://wa.me/+917018953717?text=Hello%20I%20am%20interested%20in%20your%20logistics%20services." target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black text-xl" aria-label='Twitter Profile'>
       <FaWhatsapp />
       </a>
      </div> */}
              </div>
            </div>

            {/* second member */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-yellow-400 text-4xl font-bold font-barlow">
                  KD
                </span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-black mb-2 font-barlow">
                  Karan Dhatwalia
                </h4>
                <p className="text-black font-medium mb-3 font-barlow">
                  Logistics Strategist
                </p>
                <p className="text-gray-700 mb-4 font-roboto">
                  Expert in dispatching, intermodal logistics, and warehousing
                  with a focus on optimizing end-to-end supply chains.
                </p>
                {/* <div className="flex space-x-3">
            <a href="https://www.linkedin.com/in/rahulwalia" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black text-xl" aria-label='LinkedIn Profile'>
          <FaLinkedin />
         </a>
        <a href="https://wa.me/+918580466164?text=Hello%20I%20am%20interested%20in%20your%20logistics%20services." target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black text-xl" aria-label='Twitter Profile'>
       <FaWhatsapp />
       </a>
      </div> */}
              </div>
            </div>
            {/* third member */}
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-yellow-400 text-4xl font-bold font-barlow">
                  TM
                </span>
              </div>
              <div>
                <h4 className="text-xl font-bold text-black mb-2 font-barlow">
                  Tanya Mandhotra
                </h4>
                <p className="text-black font-medium mb-3 font-barlow">
                  Logistics Expert
                </p>
                <p className="text-gray-700 mb-4 font-roboto">
                  Expert in dispatching, intermodal logistics, and warehousing
                  with a focus on optimizing end-to-end supply chains.
                </p>
                {/* <div className="flex space-x-3">
            <a href="https://www.linkedin.com/in/rahulwalia" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black text-xl" aria-label='LinkedIn Profile'>
          <FaLinkedin />
         </a>
        <a href="https://wa.me/+918091351213?text=Hello%20I%20am%20interested%20in%20your%20logistics%20services." target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-black text-xl" aria-label='Twitter Profile'>
       <FaWhatsapp />
       </a>
      </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
