import { motion } from "framer-motion";
import { FaTools, FaClock, FaHandshake, FaShieldAlt, FaUsers, FaLightbulb } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function WhyChooseUs() {
  return (
    <div
      className="relative bg-neutral-900 text-white py-16 px-6 md:px-12 lg:px-24"
      style={{
        backgroundImage: "url('https://source.unsplash.com/1600x900/?truck,service,repair')", // Truck service image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "darken",
      }}
    >
      {/* Dark Overlay for Readability */}
      <div className="bg-black/70 p-8 rounded-lg shadow-lg">
        {/* Heading */}
        <motion.h1
          className="text-4xl font-extrabold text-[#F39C12] mb-8 text-center border-b-4 border-[#F39C12] pb-2 inline-block"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Why Choose TruckRepair Logistics?
        </motion.h1>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {[
            {
              title: "🚛 Expertise & Reliability",
              text: "With years of industry experience, we provide top-notch truck repair solutions.",
              icon: <FaTools className="text-5xl text-[#F39C12]" />,
            },
            {
              title: "⏳ 24/7 Availability",
              text: "Breakdowns can happen anytime – we are here for you day and night.",
              icon: <FaClock className="text-5xl text-[#F39C12]" />,
            },
            {
              title: "🤝 Transparent Pricing",
              text: "No hidden fees, just honest assessments and fair pricing.",
              icon: <FaHandshake className="text-5xl text-[#F39C12]" />,
            },
            {
              title: "🛡️ Safety First",
              text: "We follow strict safety guidelines to ensure your truck is roadworthy.",
              icon: <FaShieldAlt className="text-5xl text-[#F39C12]" />,
            },
            {
              title: "👨‍🔧 Customer-Centric Approach",
              text: "We prioritize customer satisfaction with personalized service.",
              icon: <FaUsers className="text-5xl text-[#F39C12]" />,
            },
            {
              title: "💡 Innovation & Technology",
              text: "We use cutting-edge diagnostics and repair technologies.",
              icon: <FaLightbulb className="text-5xl text-[#F39C12]" />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-neutral-800 p-6 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h2 className="text-2xl font-semibold text-[#F39C12]">{item.title}</h2>
              <p className="text-gray-300 mt-2">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link
            to="/contact"
            className="bg-[#F39C12] text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-500 transition inline-block"
          
          >
            Contact Us Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
