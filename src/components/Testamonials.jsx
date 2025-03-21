import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Robert Davidson",
    role: "Fleet Manager, National Logistics Inc.",
    date: "August 2023",
    category: "Fleet Management",
    content: `"Their emergency roadside service has been a game-changer for our fleet..."`,
  },
  {
    name: "Maria Sanchez",
    role: "Owner-Operator, Sanchez Logistics",
    date: "October 2023",
    category: "Transmission Repair",
    content: `"As an independent operator, every hour of downtime costs me directly..."`,
  },
  {
    name: "James Wilson",
    role: "Logistics Director, Midwest Distribution Co.",
    date: "September 2023",
    category: "Fleet Maintenance",
    content: `"We've been using their enterprise fleet program for our 35-truck operation..."`,
  },
];

const starRatings = [
  { stars: 5, percentage: 85 },
  { stars: 4, percentage: 12 },
  { stars: 3, percentage: 3 },
  { stars: 2, percentage: 0 },
  { stars: 1, percentage: 0 },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
<>
{/* Helmet is used to define the document head metadata */}

     <title>Logistics Company - Reliable & Fast Services</title>
     <meta name="description" content="We provide the best logistics services with reliability and efficiency." />
     <meta name="keywords" content="customer testimonials, truck repair reviews, fleet maintenance feedback, emergency roadside assistance, heavy-duty truck repair, best logistics services, truck service ratings, fleet manager reviews, truck maintenance experiences, transmission repair testimonials, towing service ratings, truck roadside assistance reviews, 5-star truck repair service" />
     <meta name="author" content="Truck and trailer repair" />

    <section name="testimonial" className="  py-20 bg-black ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-center mb-16"
      >
        <h1 className="inline-block px-4 py-1 bg-[#F39C12] text-gray-900 rounded-full text-sm font-semibold mb-4">
          CUSTOMER TESTIMONIALS
        </h1>
        <h2 className="text-4xl font-bold mb-4" style={{ color: "#F39C12", fontFamily: "Roboto, sans-serif" }}>
          What Our Clients Say
        </h2>
        <h3 className="text-lg text-gray-100 max-w-3xl mx-auto" style={{ fontFamily: "Montserrat, sans-serif" }}>
          Read about the experiences of fleet managers and truck operators who rely on our services to keep their business moving.
        </h3>
      </motion.div>

      {/* Testimonial Slider */}
      <div className="relative max-w-5xl mx-auto px-4">
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ duration: 0.5 }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className=" max-w-full md:min-w-full px-4 flex-shrink-0">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-neutral-700 rounded-lg p-8 shadow-lg">
                  <p className="text-white text-lg">{testimonial.content}</p>
                  <div className="mt-4">
                    <p className="text-[#F39C12] font-semibold">{testimonial.name}</p>
                    <p className="text-gray-100 text-sm">{testimonial.role}</p>
                    <p className="text-gray-100 text-xs">{testimonial.date}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Slider Controls */}
       {/* Slider Controls */}
       <button
  onClick={prevSlide}
  className="absolute top-1/2 left-2 md:-left-8 transform -translate-y-1/2 bg-[#1A3E6C] text-gray-300 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-[#F39C12] transition duration-300"
  aria-label="Previous slide"
>
  <FaChevronLeft size={20} />
</button>
<button
  onClick={nextSlide}
  className="absolute top-1/2 right-2 md:-right-8 transform -translate-y-1/2 bg-[#1A3E6C] text-gray-300 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-[#F39C12] transition duration-300"
  aria-label="Next slide"
>
  <FaChevronRight size={20} />
</button>



        {/* Slider Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
            onClick={() => goToSlide(index)}
            key={index}
            className={`w-8 h-8 md:w-10 md:h-10 rounded-full ${index === currentIndex ? "bg-[#F39C12]" : "bg-neutral-600"} mx-2`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
          
          ))}
        </div>
      </div>

      {/* Review Summary Stats */}
      <motion.div initial={{ opacity: 0 ,x:-40 }} animate={{ opacity: 1 ,x:0}} viewport={{ once: false, amount: 0.5 }} transition={{duration:1.2}} className="mt-20 max-w-5xl mx-auto px-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Star Ratings */}
          <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="bg-neutral-700 p-8 rounded-lg">
            <h2 className="text-xl font-bold text-white mb-4">Customer Ratings</h2>
            {starRatings.map((rating,index) => (
              <div key={index} className="flex items-center gap-2 text-white">
                <span className="text-lg">{rating.stars} ⭐</span>
                <div className="w-full bg-gray-600 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#F39C12] h-2" style={{ width: `${rating.percentage}%` }}></div>
                </div>
                <span>{rating.percentage}%</span>
              </div>
            ))}
          </motion.div>

          {/* Service Highlights */}
          <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }}  transition={{duration:1.2}}className="space-y-6 px-2">
            <h3 className="text-xl font-bold text-white">Why Customers Choose Us</h3>
            <ul className="text-gray-300 list-disc pl-5 space-y-2">
              <li>Fast response time</li>
              <li>Reliable fleet maintenance</li>
              <li>Cost-effective repair solutions</li>
              <li>24/7 emergency assistance</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
    </>
  );
}
