import React from 'react';
import { motion } from 'framer-motion';
import truckimage from '../assets/truck.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Primary Meta Tags */}
      <title>24/7 Emergency Truck Repair & Roadside Assistance | Fast & Reliable</title>
      <meta
        name="description"
        content="Get 24/7 emergency truck repair and roadside assistance for semi-trucks, diesel trucks, and commercial fleets. Fast, reliable, and professional service nationwide."
      />
      <meta
        name="keywords"
        content="truck repair, emergency truck repair, mobile truck repair, semi-truck repair, diesel truck repair, roadside assistance, fleet maintenance, logistics support"
      />
      <meta name="author" content="Your Company Name" />
      <meta name="robots" content="index, follow" />

      {/* Hero Section */}
      <section
        name="home"
        className="relative h-screen flex flex-col items-center justify-center px-6 lg:px-16"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1507679799987-c73779587ccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8bWFpbiUyMHZpZXclMjBmZWF0dXJlZCUyMGltYWdlJTIwcHJvZmVzc2lvbmFsJTIwaGlnaCUyMHF1YWxpdHklMjBmZWF0dXJlZHxlbnwwfDB8fHwxNzQzMTU5NDUyfDA&ixlib=rb-4.0.3&q=80&w=1080)`,
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 bg-opacity-70 z-10"></div>

        {/* Content */}
        <div className="relative z-20 text-white text-center max-w-7xl px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Your Trusted Partner in Complete Logistics, Transportation & Fleet Management Services
          </h1>
          <p className="text-lg md:text-xl mt-6 max-w-3xl mx-auto">
            Delivering excellence across North America with customized logistics solutions for businesses of all sizes
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
