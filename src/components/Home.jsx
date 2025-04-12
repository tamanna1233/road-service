import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import bg from "../assets/home.webp"
const Home = () => {
  return (
    <>
      {/* Primary Meta Tags */}
      

      {/* Hero Section */}
      <section
        name="home"
        className="relative h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-16 border-b-8 border-yellow-500"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 z-10"></div>

        {/* Content */}
        <div className="relative z-20 text-white text-center max-w-7xl px-2 md:px-6 lg:px-16">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-semibold">
            Your Trusted Partner in Complete Logistics, Transportation & Fleet Management Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl mt-6 max-w-3xl mx-auto font-light">
            Delivering excellence across North America with customized logistics solutions for businesses of all sizes
          </p>

          
        </div>
        <div className="z-10 mt-4">
          <Link to="/contact" >
            <button className="px-6 py-3 bg-yellow-400 text-black text-lg sm:text-xl md:text-2xl flex justify-center items-center rounded-lg hover:scale-105 transition duration-300 ease-in-out">
              Contact Us
            </button>
          </Link>
          </div>
        {/* Arrow at bottom center */}
        <div className="absolute bottom-10 w-full flex justify-center z-20">
          <FaArrowDown className="animate-bounce text-yellow-500 text-3xl" />
        </div>
      </section>
    </>
  );
};

export default Home;
