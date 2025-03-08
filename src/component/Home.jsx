import React from 'react'
import truckimage from '../assets/fast-delivery.png'
const Home = () => {
  return (
    <section className='relative h-full flex items-center justify-start'>

    {/* Background with overlay */}
    <div className="absolute inset-0 bg-fixed bg-gradient-to-r from-neutral-900 to-neutral-800">
        <div className="absolute inset-0 bg-neutral-900 opacity-60"></div>
        {/* Custom background shape */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik00LjUuNWg1MVY1NmwtNTEtLjVWLjV6IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjIiIC8+CiAgICA8cGF0aCBkPSJNMzAgMzBjOS45NCAwIDE4LTguMDYgMTgtMThTMzkuOTQgLTYgMzAgLTZTMTIgMi4wNiAxMiAxMnM4LjA2IDE4IDE4IDE4eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4xNSIvPgogICAgPHBhdGggZD0iTTQwIDQwYzkuOTQgMCAxOC04LjA2IDE4LTE4UzQ5Ljk0IDQgNDAgNFMyMiAxMi4wNiAyMiAyMnM4LjA2IDE4IDE4IDE4eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4xNSIvPgo8L3N2Zz4=')] bg-repeat"></div>
        </div>
      </div>

        {/* Content */}
        <section className=''>
            {/* Content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center h-full py-32 ">
        <div className="max-w-3xl ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4  text-[#F39C12]">
            Professional Truck Repair &amp; Road Services
          </h1>
          <h2 className="text-xl md:text-2xl font-light mb-8  text-amber-50 ">
            24/7 Emergency Support For All Commercial Vehicles
          </h2>
          <p className="text-lg mb-8 text-gray-300 max-w-2xl ">
            Specialized logistics solutions for commercial fleet maintenance, emergency breakdowns, and comprehensive truck repair services nationwide.
          </p>
          <div className="flex flex-wrap gap-4 ">
            <a href="#emergency" className="px-8 py-3 bg-[#E74C3C] hover:bg-[#c0392b] rounded-md text-white font-medium transition duration-300   ">
              Emergency Service
            </a>
            <a href="#services" className="px-8 py-3 bg-[#1A3E6C] hover:bg-[#152d4e] rounded-md text-white font-medium transition duration-300">
              Our Services
            </a>
          </div>
        </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 text-center text-white">
          <div className="inline-flex items-center gap-2 p-2 px-4 bg-black bg-opacity-50 rounded-full text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span >Available 24/7 For Emergency Roadside Assistance</span>
          </div>
        </div>
        <div className='absolute bottom-0 left-0 right-0 w-full h-20 opacity-40 overflow-hidden '>
            <img src={truckimage} className=' h-22 animate-truck  '/>
        </div>
        </section>

    </section>

  )
}

export default Home
