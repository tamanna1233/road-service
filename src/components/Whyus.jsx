import React from 'react'
import { AiFillTruck } from 'react-icons/ai'
import { FaGlobeAmericas } from 'react-icons/fa'
import { IoMdTime } from 'react-icons/io'
import { BsShieldCheck } from "react-icons/bs"
const Whyus = () => {
  const  fratures=[
    {title:"Nationwide Coverage",description:"Complete dispatch and brokerage coverage across North America, connecting you with the best carriers." ,icons:AiFillTruck},
    {title:"24/7 Fleet Support",description:"Around-the-clock assistance for your fleet operations, ensuring minimal downtime and maximum efficiency." ,icons:IoMdTime},
    {title:"Intermodal Expertise",description:"Specialized knowledge in drayage, warehousing, and intermodal logistics for seamless supply chain management.",icons:FaGlobeAmericas},
    {title:"100% Transparency",description:"Complete visibility into your logistics operations with real-time tracking, reporting, and communication.",icons:BsShieldCheck},
 
]

  return (
    <section className='flex flex-col items-center justify-center py-6 '>
        <div className='container mx-auto px-4'>
            {/* heading */}
   <div className='text-center'>
      <h1 className='text-2xl font-bold py-3'>Why Choose Us</h1>
      <div className="h-1 w-20 bg-yellow-400 mx-auto"></div>
    <div>

    </div>
    <div className='flex items-center justify-center gap-4 py-8'>  { fratures.map((item,index)=>(

    <div key={index} className='bg-black text-white p-4 rounded-lg flex flex-col items-center justify-center'>
 {React.createElement(item.icons, {
  className: 'text-2xl  text-black bg-yellow-400 rounded-full h-16 w-16 p-4',
})}

          <div className='text-yellow-400 text-xl'>{item.title}</div>
        <div className='text-xl'>{item.description}</div>

    </div>
))}</div>
 
   </div>
        </div>
{/* our jounery */}
        <div className="bg-neutral-100 rounded-xl p-10">
      <h3 className="text-2xl font-bold mb-10 text-center text-black font-barlow">
        Our Journey
      </h3>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-0 md:left-1/2 h-full w-1 bg-yellow-400 transform -translate-x-1/2"></div>

        {/* Timeline Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Item 1 */}
          <div className="md:col-start-2 relative">
            <div className="md:pl-12">
              <div className="absolute left-0 md:-left-6 top-0 w-12 h-12 bg-black rounded-full flex items-center justify-center transform -translate-x-1/2 border-4 border-yellow-400">
                <span className="text-yellow-400 font-bold">2016</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-bold text-black mb-2 font-barlow">Company Founded</h4>
                <p className="text-gray-700 font-roboto">
                  Walia Group was established with a focus on dispatch services and fleet safety management.
                </p>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="md:col-start-1 md:row-start-2 relative text-right">
            <div className="md:pr-12">
              <div className="absolute right-0 md:-right-6 top-0 w-12 h-12 bg-black rounded-full flex items-center justify-center transform md:translate-x-1/2 border-4 border-yellow-400">
                <span className="text-yellow-400 font-bold">2018</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-bold text-black mb-2 font-barlow">Expanded to Freight Brokerage</h4>
                <p className="text-gray-700 font-roboto">
                  Added freight brokerage services to offer more comprehensive logistics solutions.
                </p>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="md:col-start-2 md:row-start-3 relative">
            <div className="md:pl-12">
              <div className="absolute left-0 md:-left-6 top-0 w-12 h-12 bg-black rounded-full flex items-center justify-center transform -translate-x-1/2 border-4 border-yellow-400">
                <span className="text-yellow-400 font-bold">2020</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-bold text-black mb-2 font-barlow">Warehousing &amp; Intermodal Division</h4>
                <p className="text-gray-700 font-roboto">
                  Launched warehousing solutions and intermodal logistics services to complement existing offerings.
                </p>
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="md:col-start-1 md:row-start-4 relative text-right">
            <div className="md:pr-12">
              <div className="absolute right-0 md:-right-6 top-0 w-12 h-12 bg-black rounded-full flex items-center justify-center transform md:translate-x-1/2 border-4 border-yellow-400">
                <span className="text-yellow-400 font-bold">2023</span>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-lg font-bold text-black mb-2 font-barlow">North America Expansion</h4>
                <p className="text-gray-700 font-roboto">
                  Extended operations across all of North America with enhanced technological capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
        </div>
      </section>
  )
}

export default Whyus
