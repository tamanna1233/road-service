import React from 'react';
import { motion } from 'framer-motion';
import truckimage from '../assets/truck.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section name="home" className="relative h-full flex items-center justify-between px-6 lg:px-16">
    
      {/* Primary Meta Tags */}
      <title>24/7 Emergency Truck Repair & Roadside Assistance | Fast & Reliable</title>
      <meta name="description" content="Get 24/7 emergency truck repair and roadside assistance for semi-trucks, diesel trucks, and commercial fleets. Fast, reliable, and professional service nationwide." />
      <meta name="keywords" content="truck repair, emergency truck repair, mobile truck repair, semi-truck repair, diesel truck repair, roadside assistance, fleet maintenance, logistics support" />
      <meta name="author" content="Your Company Name" />
      <meta name="robots" content="index, follow" />

      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-neutral-800">
        <div className="absolute inset-0 bg-neutral-900 opacity-60"></div>
        {/* Custom background texture */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik00LjUuNWg1MVY1NmwtNTEtLjVWLjV6IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1vcGFjaXR5PSIwLjIiIC8+CiAgICA8cGF0aCBkPSJNMzAgMzBjOS45NCAwIDE4LTguMDYgMTgtMThTMzkuOTQgLTYgMzAgLTZTMTIgMi4wNiAxMiAxMnM4LjA2IDE4IDE4IDE4eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4xNSIvPgogICAgPHBhdGggZD0iTTQwIDQwYzkuOTQgMCAxOC04LjA2IDE4LTE4UzQ5Ljk0IDQgNDAgNFMyMiAxMi4wNiAyMiAyMnM4LjA2IDE4IDE4IDE4eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iMC4xNSIvPgo8L3N2Zz4=')] bg-repeat"></div>
        </div>
      </div>

      {/* Left Content */}
      <section className="relative z-10 flex flex-col justify-center h-full w-full lg:w-1/2 py-32">
        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          className="max-w-md md:max-w-3xl"
        >
          <motion.h1 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4 text-[#F39C12]"
          >
            Professional Truck Repair & Road Services
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl font-light mb-8 text-amber-50"
          >
            24/7 Emergency Support For All Commercial Vehicles
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-md mb-8 text-gray-300 max-w-xl"
          >
            Specialized logistics solutions for commercial fleet maintenance, emergency breakdowns, and comprehensive truck repair services nationwide.
          </motion.p>
          <motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.8, duration: 0.8 }}
  className="flex flex-wrap gap-4 w-full sm:w-auto"
>
  <Link 
    to="/contact" 
    className="w-full sm:w-auto px-4 sm:px-6 py-3 bg-yellow-400 hover:bg-[#c0392b] rounded-md text-sm sm:text-lg text-black hover:text-white font-medium transition duration-300 text-center"
  >
    Emergency Service
  </Link>
  <Link 
    to="/services" 
    className="w-full sm:w-auto px-4 sm:px-6 py-3 bg-black hover:bg-[#c0392b] rounded-md text-sm sm:text-lg text-white font-medium transition duration-300 text-center"
  >
    Our Services
  </Link>
</motion.div>

        </motion.div>
      </section>

      {/* Right Side Truck Image */}
      <motion.div 
        
        className="hidden md:flex justify-end items-start  w-4/5 lg:w-1/2 z-20 "
      >
        <img 
          src={truckimage}
          alt="Moving Truck"
          className="w-[80%] h-auto "
          loading="lazy"
        />
      </motion.div>

      {/* Availability Notification */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-0 right-0 text-center text-white"
      >
        <div className="inline-flex items-center gap-2 p-2 px-4 bg-black bg-opacity-50 rounded-full text-sm">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Available 24/7 For Emergency Roadside Assistance</span>
        </div>
      </motion.div>
      
    </section>
  );
};

export default Home;
