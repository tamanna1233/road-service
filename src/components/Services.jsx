import { motion } from "framer-motion";
import { FaWrench, FaOilCan, FaTruck } from "react-icons/fa";

const services = [
  { id: 1, title: "Engine Repair", icon: <FaWrench />, description: "Expert engine diagnostics and repair services." },
  { id: 2, title: "Oil Change", icon: <FaOilCan />, description: "Quick and efficient oil change to keep your truck running smoothly." },
  { id: 3, title: "Truck Inspection", icon: <FaTruck />, description: "Comprehensive truck inspections to ensure safety and compliance." },
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
    <section className="py-16 bg-gray-900">
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
  );
};

export default ServicesSection;
