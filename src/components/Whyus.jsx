import React from 'react';
import { AiFillTruck } from 'react-icons/ai';
import { FaGlobeAmericas } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { BsShieldCheck } from "react-icons/bs";

const Whyus = () => {
  const features = [
    {
      title: "Nationwide Coverage",
      description: "Complete dispatch and brokerage coverage across North America, connecting you with the best carriers.",
      icons: AiFillTruck
    },
    {
      title: "24/7 Fleet Support",
      description: "Around-the-clock assistance for your fleet operations, ensuring minimal downtime and maximum efficiency.",
      icons: IoMdTime
    },
    {
      title: "Intermodal Expertise",
      description: "Specialized knowledge in drayage, warehousing, and intermodal logistics for seamless supply chain management.",
      icons: FaGlobeAmericas
    },
    {
      title: "100% Transparency",
      description: "Complete visibility into your logistics operations with real-time tracking, reporting, and communication.",
      icons: BsShieldCheck
    },
  ];

  const timelineEvents = [
    {
      year: "2016",
      title: "Company Founded",
      description: "Walia Group was established with a focus on dispatch services and fleet safety management."
    },
    {
      year: "2018",
      title: "Expanded to Freight Brokerage",
      description: "Added freight brokerage services to offer more comprehensive logistics solutions."
    },
    {
      year: "2020",
      title: "Warehousing & Intermodal Division",
      description: "Launched warehousing solutions and intermodal logistics services to complement existing offerings."
    },
    {
      year: "2023",
      title: "North America Expansion",
      description: "Extended operations across all of North America with enhanced technological capabilities."
    }
  ];

  return (
    <section className='flex flex-col items-center justify-center py-6'>
      <div className='container mx-auto px-4'>
        {/* heading */}
        <div className='text-center'>
          <h1 className='text-xl sm:text-2xl font-bold py-3'>Why Choose Us</h1>
          <div className="h-1 w-20 bg-yellow-400 mx-auto"></div>
        </div>

        {/* Features grid - improved for mobile */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-8'>  
          {features.map((item, index) => (
            <div 
              key={index} 
              className='bg-black text-white p-4 rounded-lg flex flex-col items-center justify-center text-center'
            >
              {React.createElement(item.icons, {
                className: 'text-2xl text-black bg-yellow-400 rounded-full h-12 w-12 sm:h-16 sm:w-16 p-3 sm:p-4 mb-3',
              })}
              <div className='text-yellow-400 text-lg sm:text-xl font-semibold mb-2'>{item.title}</div>
              <div className='text-sm sm:text-base'>{item.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Journey - improved timeline with centered timestamps */}
      <div className="bg-neutral-100 rounded-xl p-4 sm:p-8 w-full max-w-6xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-10 text-center text-black font-barlow">
          Our Journey
        </h3>

        <div className="relative py-8">
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-1 bg-yellow-400 transform sm:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-16 sm:space-y-24 relative">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative ${index % 2 === 0 ? '' : ''}`}>
                {/* Year Marker - Centered on the line */}
                <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 -translate-y-12 z-10">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 bg-black rounded-full flex items-center justify-center border-4 border-yellow-400">
                    <span className="text-yellow-400 font-bold text-xs sm:text-base">{event.year}</span>
                  </div>
                </div>
                
                {/* Content Cards - Different positioning for mobile vs desktop */}
                <div className="sm:grid sm:grid-cols-2 sm:gap-8">
                  {/* For mobile: always on right side of line */}
                  <div className={`ml-12 sm:ml-0 sm:col-start-${index % 2 === 0 ? '2' : '1'} sm:col-span-1`}>
                    <div className={`
                      bg-white p-4 sm:p-6 rounded-lg shadow-md 
                      ${index % 2 === 1 ? 'sm:text-right sm:mr-8' : 'sm:ml-8'}
                    `}>
                      <h4 className="text-base sm:text-lg font-bold text-black mb-1 sm:mb-2 font-barlow">
                        {event.title}
                      </h4>
                      <p className="text-gray-700 text-sm sm:text-base font-roboto">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Connect line from center to card (visible only on desktop) */}
                <div className={`
                  hidden sm:block absolute top-0  
                  ${index % 2 === 0 ? 'left-1/2' : 'right-1/2 transform translate-x-1/2'}
                `}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whyus;