import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GiCarWheel, GiTyre, GiTowTruck } from "react-icons/gi";

const services = [
  { id: 1, title: "Wheel laser alignment", icon: <GiCarWheel />, description: "Precision wheel alignment to ensure smooth rides." },
  { id: 2, title: "New tires installation", icon: <GiTyre />, description: "Expert tire installation for better grip and safety." },
  { id: 16, title: "Towing services", icon: <GiTowTruck />, description: "24/7 towing services for all types of vehicles." },
];

const ServiceCard = ({ title, icon, description }) => (
  <motion.div
    className="bg-gray-950 text-yellow-300 p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
    whileHover={{ scale: 1.05 }}
  >
    <div className="text-4xl text-yellow-400 mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2 text-yellow-400">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </motion.div>
);

const ServicesSection = () => {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-12"
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
        <div className="text-center mt-8">
          <Link
            to="/services"
            className="text-yellow-400 text-lg font-semibold hover:underline"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
