import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Mission() {
  return (
    <>
      {/* Heading Above Image */}
      <motion.h1
        className="text-4xl font-bold text-yellow-400 text-center bg-neutral-900 py-20"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
      </motion.h1>

      {/* Truck Image */}
      <motion.div
        className="w-full flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="https://images.unsplash.com/photo-1637139927081-14f741237e72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Truck in motion"
          className="w-full h-96 object-cover"
        />
      </motion.div>

      {/* Mission Section */}
      <div className="relative bg-neutral-900 text-white py-16 px-6 md:px-12 lg:px-24">
        <div className="p-8 rounded-lg shadow-lg">
          {/* Mission Heading */}
          <motion.h1
            className="text-4xl font-extrabold text-[#F39C12] mb-6 border-b-4 border-[#F39C12] pb-2 inline-block"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Our Mission: Keeping Fleets Moving
          </motion.h1>

          {/* Introduction Paragraph */}
          <motion.p
            className="text-lg leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            At <span className="font-semibold text-[#F39C12]">TruckRepair Logistics</span>, we understand that time is money in the transportation industry. 
            Our mission is to provide <span className="font-semibold text-blue-400">fast, efficient, and reliable truck repair and roadside assistance</span>, 
            ensuring commercial fleets stay on the road and businesses continue running smoothly.
          </motion.p>

          {/* Key Sections */}
          {[
            { title: "🚀 Commitment to Excellence", text: "We offer state-of-the-art repair solutions with expert technicians and advanced diagnostic tools." },
            { title: "💼 Customer-Centric Approach", text: "Transparent pricing, honest assessments, and personalized service build trust with our clients." },
            { title: "🕒 24/7 Roadside Assistance", text: "Our rapid response team ensures minimal downtime for breakdowns, available anytime, anywhere." },
            { title: "🔧 Innovation & Continuous Improvement", text: "We invest in the latest repair technologies and training to enhance our services." },
            { title: "⚠️ Safety & Compliance", text: "Strict safety guidelines and rigorous checks ensure roadworthiness and industry compliance." },
            { title: "🌱 Commitment to Sustainability", text: "We use eco-friendly parts and waste reduction programs to minimize our environmental impact." },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="mb-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-semibold text-[#F39C12] mt-6">{item.title}</h2>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}

          {/* Final CTA */}
          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-semibold text-[#F39C12]">🚛 A Mission That Drives Us Forward</h2>
            <p className="text-gray-300 mb-6">
              At <span className="font-semibold text-[#F39C12]">TruckRepair Logistics</span>, we don’t just repair trucks –{" "}
              <span className="font-semibold text-blue-400">we keep businesses moving</span>, drivers safe, and logistics operations seamless.
            </p>

            {/* CTA Button */}
            <Link 
              to={"/contact"}
              className="bg-[#F39C12] text-black font-semibold px-6 py-3 rounded-md hover:bg-yellow-500 transition inline-block"
              
            >
              Get in Touch


            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
