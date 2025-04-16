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

  return (
    <>
      <section name="testimonial" className="py-8 md:py-20 bg-white px-4 md:px-0">
        <div className="text-center mb-8 md:mb-16">
          <h1 className="inline-block px-3 py-1 md:px-4 text-black rounded-full text-xl md:text-3xl font-semibold">
            CUSTOMER TESTIMONIALS
          </h1>
          <div className="h-1 w-16 md:w-20 bg-yellow-400 mx-auto mb-2" />
          <h2 className="text-lg md:text-xl font-bold mb-2 md:mb-4">What Our Clients Say</h2>
          <h3 className="text-base md:text-lg text-black max-w-3xl mx-auto px-2">
            Read about the experiences of fleet managers and truck operators who rely on our services to keep their business moving.
          </h3>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-full flex-shrink-0 px-2 md:px-4"
                >
                  <div className="bg-black rounded-lg p-4 md:p-8 shadow-lg">
                    <p className="text-white text-base md:text-lg">{testimonial.content}</p>
                    <div className="mt-4">
                      <p className="text-[#F39C12] font-semibold">{testimonial.name}</p>
                      <p className="text-gray-100 text-xs md:text-sm">{testimonial.role}</p>
                      <p className="text-gray-100 text-xs">{testimonial.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-gray-300 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-[#F39C12] hover:text-black transition duration-300"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="text-sm md:text-base" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-gray-300 w-8 h-8 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-[#F39C12] hover:text-black transition duration-300"
            aria-label="Next slide"
          >
            <FaChevronRight className="text-sm md:text-base" />
          </button>

          {/* Slider Indicators */}
          <div className="flex justify-center mt-4 md:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 md:w-6 md:h-6 rounded-full ${
                  index === currentIndex ? "bg-[#F39C12]" : "bg-black"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Review Summary Stats */}
        <div className="mt-12 md:mt-20 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
            {/* Star Ratings */}
            <div className="bg-black p-4 md:p-8 rounded-lg">
              <h2 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">Customer Ratings</h2>
              {starRatings.map((rating, index) => (
                <div key={index} className="flex items-center gap-1 md:gap-2 text-white mb-2">
                  <span className="text-base md:text-lg">{rating.stars} ⭐</span>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#F39C12] h-2"
                      style={{ width: `${rating.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-xs md:text-base">{rating.percentage}%</span>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-4 md:space-y-6 px-2">
              <h3 className="text-lg md:text-xl font-bold text-black">Why Customers Choose Us</h3>
              <ul className="text-black list-disc pl-5 space-y-1 md:space-y-2 text-sm md:text-base">
                <li>Fast response time</li>
                <li>Reliable fleet maintenance</li>
                <li>Cost-effective repair solutions</li>
                <li>24/7 emergency assistance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}