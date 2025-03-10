import React from 'react';
import { motion } from 'framer-motion';
import truckimage from '../assets/fast-delivery.png';

const Home = () => {
  return (
    <section className='relative h-full flex items-center justify-start'>
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-fixed bg-gradient-to-r from-neutral-900 to-neutral-800">
        <div className="absolute inset-0 bg-neutral-900 opacity-60"></div>
      </div>

      {/* Content */}
      <section className='relative w-full'>
        <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center h-full py-32">
          <motion.div 
            initial={{ opacity: 0, y: -50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.3 }}
            className="max-w-3xl"
          >
            <motion.h1 
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#F39C12]"
            >
              Professional Truck Repair &amp; Road Services
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-xl md:text-2xl font-light mb-8 text-amber-50"
            >
              24/7 Emergency Support For All Commercial Vehicles
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-lg mb-8 text-gray-300 max-w-2xl"
            >
              Specialized logistics solutions for commercial fleet maintenance, emergency breakdowns, and comprehensive truck repair services nationwide.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#emergency" className="px-8 py-3 bg-yellow-400 hover:bg-[#c0392b] rounded-md text-black font-medium transition duration-300">
                Emergency Service
              </a>
              <a href="#services" className="px-8 py-3 bg-[#1A3E6C] hover:bg-[#152d4e] rounded-md text-white font-medium transition duration-300">
                Our Services
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Availability Notification */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="absolute bottom-8 left-0 right-0 text-center text-white"
        >
          <div className="inline-flex items-center gap-2 p-2 px-4 bg-black bg-opacity-50 rounded-full text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Available 24/7 For Emergency Roadside Assistance</span>
          </div>
        </motion.div>

        {/* Truck Image Animation */}
        <div
          className='absolute bottom-0 left-0 w-full h-20 overflow-hidden'
        >
         <img 
  src={truckimage}  // The default image source
  alt="Moving Truck"
  width="80"  // Width of the image
  height="80"  // Height of the image
  srcSet={` ${truckimage}40w, ${truckimage} 80w, ${truckimage} 160w` } // Define different sizes for responsive images
  sizes="(max-width: 600px) 40px, 80px"  // Size logic for responsiveness
  className="h-20 w-20 animate-truck text-red-500"
  loading="lazy"  // Lazy loading for performance
/>

          
        </div>

      </section>
    </section>
  );
};

export default Home;
