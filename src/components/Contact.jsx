import { motion } from 'framer-motion';
import { PiPhone, PiPhoneCall } from 'react-icons/pi';

const Contact = () => {
  return (
    <section name="Contact" className="text-black py-16 px-6 md:px-12 lg:px-24">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className='p-2 bg-black text-white rounded-xl w-52 text-center mx-auto'>Get In Touch</h1>
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <h3 className="text-gray-300 mb-8">
          Need assistance with your fleet or have questions about our services? Reach out to our team for prompt and professional support.
        </h3>
      </motion.div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-800 p-8 rounded-lg text-white shadow-lg"
        >
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input 
                type="text" 
                className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input 
                type="email" 
                className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea 
                className="w-full p-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none h-32"
                placeholder="Your Message"
              ></textarea>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-lg"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-6"
        >
          {/* Emergency Support */}
          <motion.div className="bg-red-600 rounded-2xl p-6 border-l-6 border-orange-700">
            <div className="flex items-center gap-3">
              <PiPhone size={35} color="red" className="bg-white w-18 h-18 p-2 rounded-full" />
              <div>
                <h1 className="text-white font-bold text-lg">24/7 Emergency Support</h1>
                <h2 className="text-white text-sm">Immediate assistance for roadside emergencies</h2>
              </div>
            </div>
            <div className="bg-white mx-auto rounded-lg mt-3 p-2">
              <h1 className="text-center text-2xl flex justify-center gap-2 items-center text-red-600 font-bold">
                <PiPhone /> 1-800-1000
              </h1>
            </div>
          </motion.div>

          {/* Additional Contact Details */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-xl font-bold mb-6 text-[#1A3E6C]" style={{ fontFamily: "'Roboto', sans-serif" }}>
              Contact Information
            </h1>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="bg-[#1A3E6C] rounded-full p-2 text-white flex-shrink-0">
                  📍
                </div>
                <div>
                  <h2 className="font-semibold text-neutral-800 mb-1">Main Headquarters</h2>
                  <p className="text-neutral-600">1250 Logistics Drive, Suite 300<br />Chicago, IL 60607</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-[#1A3E6C] rounded-full p-2 text-white flex-shrink-0">
                  📞
                </div>
                <div>
                  <h2 className="font-semibold text-neutral-800 mb-1">General Phone</h2>
                  <p className="text-neutral-600">
                    <a href="tel:+1-312-555-7890" className="hover:text-[#1A3E6C]">(312) 555-7890</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-[#1A3E6C] rounded-full p-2 text-white flex-shrink-0">
                  ✉️
                </div>
                <div>
                  <h2 className="font-semibold text-neutral-800 mb-1">Email</h2>
                  <p className="text-neutral-600">
                    <a href="mailto:info@truckrepairlogistics.com" className="hover:text-[#1A3E6C]">
                      info@truckrepairlogistics.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="bg-[#1A3E6C] rounded-full p-2 text-white flex-shrink-0">
                  🕒
                </div>
                <div>
                  <h2 className="font-semibold text-neutral-800 mb-1">Business Hours</h2>
                  <p className="text-neutral-600">
                    <strong>Customer Service:</strong> Monday-Friday: 8am-6pm<br />
                    <strong>Emergency Services:</strong> 24/7/365
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* map */}
        <motion.div
      className="mt-16 bg-gray-200 rounded-lg shadow-lg p-6 col-span-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: '#1A3E6C', fontFamily: 'Roboto, sans-serif' }}>
        Visit Our Headquarters
      </h3>

      <div className="relative h-96 bg-neutral-200 rounded-lg overflow-hidden">
        {/* Embedded Google Map */}
        <iframe
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="HeadQuaters Map" 
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.639817462499!2d76.72315147538758!3d30.704648588445684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed864c4dffff%3A0xe1b605ac27e4dc2d!2sMohali%2C%20Punjab%2C%20India!5e0!3m2!1sen!2sin!4v1695123456789"
        ></iframe>
      </div>

      <div className="mt-6 text-center">
        <motion.a
          href="https://www.google.com/maps/search/?api=1&query=Mohali,Punjab,India"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[#1A3E6C] hover:text-[#E74C3C] transition duration-300"
          whileHover={{ scale: 1.1 }} // Animate on hover
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z"
              clipRule="evenodd"
            />
          </svg>
          Get Directions
        </motion.a>
      </div>
    </motion.div>
        
      </div>
    </section>
  );
};

export default Contact;
