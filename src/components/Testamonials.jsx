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
      <title>TESTIMONIALS</title>
      <meta
        name="description"
        content="We provide the best logistics services with reliability and efficiency."
      />
      <meta
        name="keywords"
        content="customer testimonials, truck repair reviews, fleet maintenance feedback, emergency roadside assistance, heavy-duty truck repair"
      />
      <meta name="author" content="Truck and trailer repair" />

      <section name="testimonial" className="py-20 bg-white">
        <div className="text-center mb-16">
          <h1 className="inline-block px-4 py-1 text-black rounded-full text-3xl font-semibold">
            CUSTOMER TESTIMONIALS
          </h1>
          <div className="h-1 w-20 bg-yellow-400 mx-auto mb-2" />
          <h2 className="text-xl font-bold mb-4">What Our Clients Say</h2>
          <h3 className="text-lg text-black max-w-3xl mx-auto">
            Read about the experiences of fleet managers and truck operators who rely on our services to keep their business moving.
          </h3>
        </div>

        {/* Testimonial Slider */}
        <div className="relative max-w-3xl mx-auto px-4">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="min-w-full px-4 flex-shrink-0"
                >
                  <div className="bg-black rounded-lg p-8 shadow-lg">
                    <p className="text-white text-lg">{testimonial.content}</p>
                    <div className="mt-4">
                      <p className="text-[#F39C12] font-semibold">{testimonial.name}</p>
                      <p className="text-gray-100 text-sm">{testimonial.role}</p>
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
            className="absolute top-1/2 left-2 md:-left-8 transform -translate-y-1/2 bg-black text-gray-300 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-[#F39C12] hover:text-black transition duration-300"
            aria-label="Previous slide"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-2 md:-right-8 transform -translate-y-1/2 bg-black text-gray-300 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center hover:bg-[#F39C12]  hover:text-black transition duration-300"
            aria-label="Next slide"
          >
            <FaChevronRight size={20} />
          </button>

          {/* Slider Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-6 h-6 md:w-8 md:h-8 rounded-full ${
                  index === currentIndex ? "bg-[#F39C12]" : "bg-black"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Review Summary Stats */}
        <div className="mt-20 max-w-5xl mx-auto px-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Star Ratings */}
            <div className="bg-black p-8 rounded-lg">
              <h2 className="text-xl font-bold text-white mb-4">Customer Ratings</h2>
              {starRatings.map((rating, index) => (
                <div key={index} className="flex items-center gap-2 text-white mb-2">
                  <span className="text-lg">{rating.stars} ⭐</span>
                  <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-[#F39C12] h-2"
                      style={{ width: `${rating.percentage}%` }}
                    ></div>
                  </div>
                  <span>{rating.percentage}%</span>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-6 px-2">
              <h3 className="text-xl font-bold text-black">Why Customers Choose Us</h3>
              <ul className="text-black list-disc pl-5 space-y-2">
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
