import { motion } from "framer-motion";
import { HiMiniCubeTransparent } from "react-icons/hi2";

const AboutUs = () => {
  return (
    <section className="flex-col md:flex justify-center items-center bg-gray-100 py-12 px-6 md:px-16 lg:px-32">
      <motion.div
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false ,amount:0.3}}
      >
        <motion.h2 
          className="text-4xl font-bold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false ,amount:0.3}}
        >
          About Us
        </motion.h2>

        <motion.p 
          className="text-gray-700 text-lg mb-6 flex flex-col items-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false ,amount:0.3}}
        >
          We are dedicated to providing the best solutions with cutting-edge technologies.
          Our mission is to help businesses grow by leveraging the power of digital transformation.
        </motion.p>
      </motion.div>

      <motion.div 
        className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false ,amount:0.3}}
      >
        <motion.div 
          className="bg-[#262626] p-6 rounded-lg shadow-lg min-w-lg max-w-2xl min-h-72 flex justify-start items-start flex-col"
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
         <motion.p className="text-yellow-400 pt-3.5 font-bold flex items-center gap-x-3" 
         initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}> 
          <hr className="w-10 h-1 bg-yellow-400 border-0 px-4" />
          Keeping trucks moving
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
