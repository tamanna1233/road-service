import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GiCarWheel, GiTyre, GiTowTruck } from "react-icons/gi";

const services = [
  { id: 1, title: "Wheel laser alignment", icon: <GiCarWheel />, description: "Precision wheel alignment to ensure smooth rides.", img:"https://images.pexels.com/photos/6169027/pexels-photo-6169027.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 2, title: "New tires installation", icon: <GiTyre />, description: "Expert tire installation for better grip and safety.",img:"https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  },
  { id: 16, title: "Towing services", icon: <GiTowTruck />, description: "24/7 towing services for all types of vehicles." ,img:"https://images.pexels.com/photos/6169027/pexels-photo-6169027.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

const ServiceCard = ({ title, icon, description, img, isReversed }) => (
  <motion.div
    className={`flex flex-col-reverse  md:flex-row ${
      isReversed ? 'md:flex-row-reverse' : ''
    } items-center md:items-stretch gap-4  bg-[#1e1e1e] 
 rounded-xl overflow-hidden max-w-4xl w-full`}
  >
    {/* Text Section */}
    <div className="flex-2 flex flex-col items-center justify-start text-center p-6  text-[#facc15]">
      <div className="text-4xltext-[#facc15] mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-[#facc15]">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>

    {/* Image Section */}
    <div className="flex-2 h-96">
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
  </motion.div>
);


const ServicesSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-[#facc15] mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="flex flex-col gap-8">
  {services.map((service, index) => (
    <div
      key={service.id}
      className={`w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
    >
      <ServiceCard {...service} isReversed={index % 2 !== 0} />
    </div>
  ))}
</div>


        
        {/* <div className="text-center mt-8">
          <Link
            to="/services"
            className="text-[#facc15] text-lg font-semibold hover:underline"
          >
            View All Services →
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default ServicesSection;
