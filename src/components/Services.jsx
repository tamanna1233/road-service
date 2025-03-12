import { motion } from "framer-motion";
import { FaWrench, FaOilCan, FaTruck ,FaNetworkWired} from "react-icons/fa";
import { GiCarWheel,GiTyre , GiTowTruck ,GiGearStick  } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { PiCarBatteryFill ,PiTruckTrailer,PiEngineBold} from "react-icons/pi";
import { RiOilFill } from "react-icons/ri";
import { BsTruckFlatbed } from "react-icons/bs";
import { Helmet } from "react-helmet";
const services = [
  { id: 1, title: "Wheel laser alignment", icon: <GiCarWheel/>, description: "Expert engine diagnostics and repair services." },
  { id: 2, title: "New tires installation", icon: <GiTyre />, description: "Quick and efficient oil change to keep your truck running smoothly." },
  { id: 3, title: "Mobile Truck Repair", icon: <FaTruck />, description: "Comprehensive truck inspections to ensure safety and compliance." },
  { id: 4, title: "Mobile Trailer Repair", icon: <FaTruck />, description: "Comprehensive truck inspections to ensure safety and compliance." },
  { id: 5, title: "Rear brakes services", icon: <FaTruck />, description: "Comprehensive truck inspections to ensure safety and compliance." },
  { id: 6, title: "Batteries and electrical system", icon: <PiCarBatteryFill/>, description: "Comprehensive truck inspections to ensure safety and compliance." },
  { id: 7, title: "Oil and filter change", icon: <FaOilCan />, description: "Comprehensive truck inspections to ensure safety and compliance." },
  { id: 8, title: "Air conditioning & heater services", icon: <TbAirConditioning />, description: "Comprehensive truck inspections to ensure safety and compliance." },
  { id: 9, title: "Hydraulic Service", icon: <FaTruck />, description: "Comprehensive truck inspections to ensure safety and compliance." },
  { id: 10, title: "Water pumps Repair", icon: <RiOilFill />, description: "Comprehensive truck inspections to ensure safety and compliance." },
  { id: 11, title: " Lights and light wiring", icon: <FaNetworkWired />, description: "Comprehensive truck inspections to ensure safety and compliance." },
  { id: 12, title: "Tailgate repair", icon: <PiTruckTrailer />, description: "Comprehensive truck inspections to ensure safety and compliance." },
  { id: 14, title: "Radiator repair", icon: <PiEngineBold />, description: "Comprehensive truck inspections to ensure safety and compliance." },
  { id: 15, title: "Roadside assistance", icon: <BsTruckFlatbed/>, description: "Comprehensive truck inspections to ensure safety and compliance." },
  { id: 16, title: "Towing services", icon: <GiTowTruck/>, description: "Comprehensive truck inspections to ensure safety and compliance." },
  { id: 17, title: "Landing gear repair", icon: <GiGearStick />, description: "Comprehensive truck inspections to ensure safety and compliance." },
  { id: 18, title: "Reefer repair", icon: <FaTruck />, description: "Comprehensive truck inspections to ensure safety and compliance." },

  
];

const ServiceCard = ({ title, icon, description }) => {
  return (
    <motion.div
    className="bg-gray-800 text-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
    whileHover={{ scale: 1.08, rotate: 2 }} // Slight tilt & scale on hover
    transition={{ duration: 0.4, ease: "easeInOut" }} // Faster hover effect
    initial={{ opacity: 0, y: 50, scale: 0.95 }} // Starts slightly lower & smaller
    whileInView={{ opacity: 1, y: 0, scale: 1 }} // Smooth reveal
    viewport={{ once: false, amount: 0.3 }} // Repeats when scrolled into view
  >
    <motion.div
      className="text-4xl text-blue-400 mb-4"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }} // Smooth scaling
    >
      {icon}
    </motion.div>
    <motion.h3
      className="text-xl font-bold mb-2"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }} // Delayed text appearance
    >
      {title}
    </motion.h3>
    <motion.p
      className="text-gray-300"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }} // Delayed paragraph appearance
    >
      {description}
    </motion.p>
  </motion.div>
  
  );
};

const ServicesSection = () => {
  return (
<>
     {/* Helmet is used to define the document head metadata */}
     <Helmet>
     <title>Logistics Company - Reliable & Fast Services</title>
     <meta name="description" content="We provide the best logistics services with reliability and efficiency." />
     <meta name="keywords" content="truck repair, mobile truck repair, trailer repair, roadside assistance, wheel alignment, new tires, oil change, hydraulic repair, battery replacement, radiator repair, air conditioning, towing services, brake repair, landing gear repair, reefer repair, electrical system repair, tailgate repair, truck maintenance, heavy-duty truck repair" />
     <meta name="author" content="Truck and trailer repair " />
   </Helmet>
    <section name="Services" className="py-16 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default ServicesSection;
