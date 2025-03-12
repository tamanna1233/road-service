import { motion } from "framer-motion";
import { HiMiniCubeTransparent } from "react-icons/hi2";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoMdTime } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FaBolt, FaUser } from "react-icons/fa6";
const AboutUs = () => {
  const services = [
    { id: 1, title: "Certified Excellence", icon: <LiaCertificateSolid /> , description: "All our technicians are ASE-certified with regular training on the latest vehicle technologies" },
    { id: 2, title: "24/7 Availability", icon: <IoMdTime />, description: "Our emergency services operate around the clock, ensuring help is always available when you need it" },
    { id: 3, title: "Nationwide Coverage", icon: <CiLocationOn />, description: "Strategic locations across the country to provide quick response times in major transport corridors" },
    { id: 4, title: "Advanced Technology", icon: <FaBolt />, description: "State-of-the-art diagnostic equipment and repair tools for all truck makes and models" },

  ];
  const AboutusCard=({ title, icon, description })=>{
    return(
      <motion.div
      className="bg-gray-100 text-black p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
      whileHover={{ scale: 1.08, rotate: 2 }} // Slight tilt & scale on hover
      transition={{ duration: 0.4, ease: "easeInOut" }} // Faster hover effect
      initial={{ opacity: 0, y: 50, scale: 0.95 }} // Starts slightly lower & smaller
      whileInView={{ opacity: 1, y: 0, scale: 1 }} // Smooth reveal
      viewport={{ once: false, amount: 0.3 }} // Repeats when scrolled into view
    >
      <motion.div
        className="text-4xl text-blue-400 mb-4 grid  place-items-center gap-x-2 "
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }} // Smooth scaling
      >
        <div className="bg-black rounded-full text-2xl w-20 h-20 flex items-center justify-center  p-4">
        {icon}
        </div>
        <motion.h1
        className="text-xl font-bold mb-2 "
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }} // Delayed text appearance
      >
        {title}
      </motion.h1>
      </motion.div>
      
      <motion.h2
        className="text-black"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }} // Delayed paragraph appearance
      >
        {description}
      </motion.h2>
    </motion.div>
    )
  }
  const stats=[
    { id: 1, title: "Years of Experience", icon: "20+" , description: "Two decades of specialized experience in commercial truck repairs and maintenance" },
    { id: 2, title: "2Repairs Completed", icon: "50K+", description: "Over 50,000 successful repairs and roadside assistance services provided" },
    { id: 3, title: "Customer Satisfaction", icon: "99%", description: "Industry-leading satisfaction rate based on post-service customer surveys" },
   
  ]
const teamStats=[
  { id: 1, title: "Chief Executive Officer", icon: <FaUser/> , description: "30+ years in commercial trucking logistics and management" },
  { id: 2, title: "Chief Operations Officer", icon: <FaUser/>, description: "Expert in optimizing fleet management and service logistics" },
  { id: 3, title: "Technical Director", icon: <FaUser/>, description: "Master technician with specializations in diesel systems and fleet maintenance" },
 
]

  return (
    <section name="#About Us" className="grid grid-cols-1 lg:grid-cols-2 place-content-center gap-x-24 px-8 bg-white py-12 ">
      <motion.div 
        className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false ,amount:0.3}}
      >
        <motion.div 
          className="bg-[#262626] p-6 rounded-lg shadow-lg min-w-xs max-w-lg min-h-72 flex justify-start items-start flex-col"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false ,amount:0.3}}
        >
          <motion.div
            initial={{ rotate: 0 }}
            whileInView={{ rotate: 360 }}
            transition={{ duration: 1, repeat: 0 }}
            viewport={{ once:false ,amount:0.3}}
          >
            <HiMiniCubeTransparent size={60} color="gold" />
          </motion.div>
          <h3 className="text-2xl font-bold text-gray-300 ">Our Mission</h3>
          <p className="text-gray-400 font-bold mt-2">
          To provide industry-leading truck repair and roadside assistance services that keep commercial fleets moving efficiently and safely. We prioritize rapid response, technical expertise, and customer satisfaction in everything we do.
          </p>
         <motion.div className="text-yellow-400 pt-3.5 font-bold flex items-center gap-x-3" 
         initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}> 
          <hr className="w-10 h-1 bg-yellow-400 border-0 px-4" />
          Keeping trucks moving
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div
        className="max-w-5xl mx-auto text-center grid grid-cols-1"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false ,amount:0.3}}
      >
        <motion.h2 
          className="text-4xl font-bold text-gray-900 "
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false ,amount:0.3}}
        >
          About Us
        </motion.h2>

        <motion.p 
          className="text-gray-700 text-lg  text-start"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false ,amount:0.3}}
        >
          With over 20 years of experience in commercial truck repair and roadside assistance, we've built a reputation for reliability, technical excellence, and customer-focused service. Our nationwide network ensures we're always available when and where you need us.
</motion.p>
<motion.p className="text-gray-700 text-lg   text-start">
Our team of ASE-certified technicians specializes in all aspects of commercial vehicle repair and maintenance, from engines and transmissions to electrical systems and DOT compliance inspections.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
          {services.map((service) => (
            <AboutusCard key={service.id} {...service} />
          ))}
        </div>
      </motion.div>

      <motion.div className=" w-full mt-8 col-span-full">
  <motion.h1 
    className="text-4xl font-bold text-gray-900 text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: false, amount: 0.3 }}
  >
    Why Customers Choose Us
  </motion.h1>
  
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-22 py-4">
          {stats.map((stats) => (
            <AboutusCard key={stats.id} {...stats} />
          ))}
        </div>
  
</motion.div>

<motion.div className=" w-full mt-8 col-span-full ">
  <motion.h1 
    className="text-4xl font-bold text-gray-900 text-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: false, amount: 0.3 }}
  >
    Our Leadership Team
  </motion.h1>
  
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-22 py-4 px-8 md:px-32">
          {teamStats.map((stats) => (
            <AboutusCard key={stats.id} {...stats} />
          ))}
        </div>

  
</motion.div>

     <motion.div className=" col-span-full flex justify-center items-center mt-8">
        <button className="bg-black  rounded-md text-white p-4"> Contact our Team </button>
      </motion.div>  

      
      
    </section>
  );
};

export default AboutUs;
