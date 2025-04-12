import React from 'react';
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import bg from "../assets/home.webp"
const founders = [
  {
    name: 'Rahul Walia',
    role: 'Founder',
    title: 'Safety Expert',
    image: bg,
    alt: 'Rahul Walia - Founder & Safety Expert',
    expertise: [
      'Fleet Operations & Management',
      'DOT Compliance',
      'Safety Training Programs',
    ],
  },
  {
    name: 'Karan Dhatwalia',
    role: 'Co-Founder',
    title: 'Logistics Strategist',
    image:bg,
    alt: ' Karan Dhatwalia- Co-Founder & Operations Head',
    expertise: [
      'Dispatching Systems',
      'Intermodal Logistics',
      'Warehousing & Distribution',
    ],
  },
];

const Founders = () => {
  return (
    <section id="founders" className="py-20 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 font-barlow">Founders</h2>
          <div className="h-1 w-20 bg-yellow-400 mx-auto"></div>
          <p className="mt-4 text-gray-700 max-w-3xl mx-auto font-roboto">
            Meet the visionary leaders behind Walia Group of Companies who have transformed the logistics landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-2/5">
                  <div className="h-64 md:h-full bg-black relative overflow-hidden flex items-center justify-center">
                    <img
                      src={founder.image}
                      alt={founder.alt}
                      className="w-full h-full object-cover object-center"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://placehold.co/800x800/000000/FFD700?text=No+Image';
                      }}
                      loading='lazy'
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-24"></div>
                    <div className="absolute bottom-4 left-4 text-xs text-white opacity-70">{founder.photoCredit}</div>
                  </div>
                </div>

                <div className="p-8 md:w-3/5">
                  <div className="flex items-center mb-4">
                    <h3 className="text-2xl font-bold text-black font-barlow">{founder.name}</h3>
                    <div className="ml-3 px-3 py-1 bg-yellow-400 rounded-full text-xs font-medium text-black">{founder.role}</div>
                  </div>
                  <p className="text-black font-semibold mb-4 font-barlow">{founder.title}</p>

                  <div className="mb-6">
                    <p className="text-gray-700 mb-4 font-roboto">
                      {founder.name} brings a wealth of experience in {founder.title.toLowerCase()}. Their leadership has been vital in steering the company’s success.
                    </p>
                    <p className="text-gray-700 font-roboto">
                      Their expertise in operational excellence and vision continues to inspire the team and drive innovation.
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-black font-bold mb-2 font-barlow">Areas of Expertise:</h4>
                    <ul className="space-y-2">
                      {founder.expertise.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <svg className="w-5 h-5 text-black mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700 font-roboto">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-4 mt-6">
                  <a href="#" 
                 className="text-gray-600 hover:text-black transition-colors duration-300" 
                 aria-label="LinkedIn Profile">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="#" 
                 className="text-gray-600 hover:text-black transition-colors duration-300" 
                 aria-label="Twitter Profile">
                <FaXTwitter className="w-6 h-6" />
              </a>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
