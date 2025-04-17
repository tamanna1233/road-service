import { useState } from "react";
import { 
  FaStar, 
  FaCommentDots, 
  FaUsers, 
  FaTruck, 
  FaCheckCircle, 
  FaTools, 
  FaCalendarCheck, 
  FaQuoteRight, 
  FaShieldAlt, 
  FaHeadset, 
  FaExchangeAlt, 
  FaWarehouse, 
  FaShippingFast, 
} from "react-icons/fa";

import {FaTrainSubway} from "react-icons/fa6";
import { Link } from "react-router-dom";
const testimonials = [
  {
    name: "Robert Davidson",
    role: "Fleet Manager, National Logistics Inc.",
    date: "Aug 2023",
    category: "Safety & Maintenance Services",
    content: "Their emergency roadside service has been a game-changer for our fleet. The response times are incredible, and their mechanics are knowledgeable about all our truck models. We've reduced our downtime by 67% since partnering with them.",
    icon: FaShieldAlt,
    color: "bg-yellow-400"
  },
  {
    name: "Maria Sanchez",
    role: "Owner-Operator, Sanchez Logistics",
    date: "Oct 2023",
    category: "Safety & Maintenance Services",
    content: "As an independent operator, every hour of downtime costs me directly. When my transmission failed in Denver, they had me back on the road in under 6 hours. Their pricing is fair and transparent - no surprises on the invoice.",
    icon: FaTools,
    color: "bg-yellow-400"
  },
  {
    name: "James Wilson",
    role: "Logistics Director, Midwest Distribution Co.",
    date: "Sep 2023",
    category: "Safety & Maintenance Services",
    content: "We've been using their enterprise fleet program for our 35-truck operation for two years now. The preventative maintenance program has been excellent, and their digital reporting system makes documentation effortless.",
    icon: FaCalendarCheck,
    color: "bg-yellow-400"
  },
  {
    name: "Sarah Johnson",
    role: "Operations Manager, Express Delivery Co.",
    date: "Nov 2023",
    category: "Dispatch Services",
    content: "Their dispatch service has revolutionized our operations. The real-time tracking and instant communications have improved our delivery times by 40%. Their dispatchers are professional and incredibly responsive.",
    icon: FaHeadset,
    color: "bg-yellow-400"
  },
  {
    name: "Michael Chen",
    role: "CEO, Pacific Route Logistics",
    date: "Dec 2023",
    category: "Dispatch Services",
    content: "We switched to their dispatch services after struggling with coordination issues. The difference has been night and day. Their team works like an extension of our company, understanding our priorities and keeping our drivers informed.",
    icon: FaHeadset,
    color: "bg-yellow-400"
  },
  {
    name: "Emily Rodriguez",
    role: "Supply Chain Manager, Rodriguez Shipping",
    date: "Jan 2024",
    category: "Freight Brokerage Services",
    content: "Their freight brokerage team has consistently found us the best rates without sacrificing reliability. They've helped us expand our network of carriers and streamlined our shipping processes significantly.",
    icon: FaExchangeAlt,
    color: "bg-yellow-400"
  },
  {
    name: "David Thompson",
    role: "Procurement Director, Global Goods Inc.",
    date: "Feb 2024",
    category: "Freight Brokerage Services",
    content: "We've worked with many brokers over the years, but none match their combination of competitive rates and quality service. Their team takes the time to understand our specific needs and always delivers solutions that work for us.",
    icon: FaExchangeAlt,
    color: "bg-yellow-400"
  },
  {
    name: "Lisa Patel",
    role: "Inventory Manager, Retail Supply Chain",
    date: "Mar 2024",
    category: "Warehousing Solutions",
    content: "Their warehousing solutions have transformed our inventory management. The strategic locations combined with their advanced tracking system have reduced our fulfillment times dramatically. Their staff is thorough and professional.",
    icon: FaWarehouse,
    color: "bg-yellow-400"
  },
  {
    name: "Thomas Clark",
    role: "Distribution Director, Consumer Products Inc.",
    date: "April 2024",
    category: "Warehousing Solutions",
    content: "When we needed to scale quickly during our seasonal rush, they provided flexible warehousing solutions that accommodated our changing needs. Their climate-controlled facilities and security measures gave us complete peace of mind.",
    icon: FaWarehouse,
    color: "bg-yellow-400"
  },
  {
    name: "Jennifer Kim",
    role: "Port Operations Manager, Pacific Import Group",
    date: "May 2024",
    category: "Container & Drayage Services",
    content: "Their drayage services at the port have cut our wait times in half. Their drivers know exactly how to navigate port complexities, and their documentation team ensures we never have delays due to paperwork issues.",
    icon: FaShippingFast,
    color: "bg-yellow-400"
  },
  {
    name: "Mark Williams",
    role: "International Shipping Director, Global Trade Ltd.",
    date: "June 2024",
    category: "Container & Drayage Services",
    content: "Managing container shipments used to be our biggest headache until we partnered with their drayage team. They handle everything from port to warehouse with efficiency that's unmatched in the industry.",
    icon: FaShippingFast,
    color: "bg-yellow-400"
  },
  {
    name: "Rebecca Martinez",
    role: "Logistics Coordinator, Intermodal Solutions",
    date: "July 2024",
    category: "Intermodal Logistics",
    content: "Their intermodal services have reduced our carbon footprint while maintaining reliability. The seamless coordination between rail and road transport has given us cost savings that we've been able to pass on to our customers.",
    icon: FaTrainSubway,
    color: "bg-yellow-400"
  },
 
];

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const categories = ["All", ...new Set(testimonials.map(t => t.category))];
  
  const filteredTestimonials = activeCategory === "All" 
    ? testimonials 
    : testimonials.filter(t => t.category === activeCategory);

  return (
    <section id="testimonial" className="py-20 bg-white text-black">
      <div className="max-w-6xl mx-auto px-4">
      
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4 bg-yellow-100 px-6 py-2 rounded-full">
            <FaCommentDots className="w-5 h-5 text-yellow-500 mr-2" />
            <span className="text-base font-bold text-black">CLIENT SUCCESS STORIES</span>
          </div>
          
          <h2 className="text-4xl font-extrabold mb-3">What Our Clients Say</h2>
          <div className="h-1 w-24 bg-yellow-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover how our comprehensive logistics services have helped businesses across the country optimize their operations and reduce costs.
          </p>
        </div>
        
        {/* Services Overview */}
        <div className="bg-gray-50 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Our Full Suite of Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
              <FaShieldAlt className="text-yellow-500 mr-3" />
              <span className="font-medium">Safety & Maintenance Services</span>
            </div>
            <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
              <FaHeadset className="text-yellow-500 mr-3" />
              <span className="font-medium">Dispatch Services</span>
            </div>
            <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
              <FaExchangeAlt className="text-yellow-500 mr-3" />
              <span className="font-medium">Freight Brokerage Services</span>
            </div>
            <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
              <FaWarehouse className="text-yellow-500 mr-3" />
              <span className="font-medium">Warehousing Solutions</span>
            </div>
            <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
              <FaShippingFast className="text-yellow-500 mr-3" />
              <span className="font-medium">Container & Drayage Services</span>
            </div>
            <div className="flex items-center p-3 bg-white rounded-lg shadow-sm">
              <FaTrainSubway className="text-yellow-500 mr-3" />
              <span className="font-medium">Intermodal Logistics</span>
            </div>
          </div>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button 
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 
                ${activeCategory === category 
                  ? 'bg-black text-yellow-400 shadow-lg' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredTestimonials.map((testimonial, index) => {
            const Icon = testimonial.icon;
            
            return (
              <div 
                key={index} 
                className="group bg-white border-2 border-gray-100 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Quote icon */}
                <div className="absolute top-6 right-6 text-yellow-200">
                  <FaQuoteRight className="w-12 h-12" />
                </div>
                
                {/* Icon */}
                <div className={`w-14 h-14 rounded-full ${testimonial.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="text-black text-xl" />
                </div>
                
                {/* Content */}
                <div className="relative">
                  <p className="text-lg leading-relaxed mb-8 text-gray-700">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-black font-bold text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600">
                      {testimonial.role}
                    </p>
                    <div className="flex items-center mt-2">
                      <span className="text-xs text-gray-500">{testimonial.date}</span>
                      <span className="mx-2 text-gray-400">•</span>
                      <span className="text-xs bg-yellow-100 text-yellow-700 font-medium px-3 py-1 rounded-full">
                        {testimonial.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Featured Testimonial */}
        <div className="bg-black rounded-2xl p-8 lg:p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full opacity-20 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 rounded-full opacity-20 transform -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="md:flex items-center relative z-10">
            <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
              <div className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center text-black text-5xl font-bold">
                M
              </div>
            </div>
            <div className="md:w-2/3 md:pl-8">
              <div className="text-5xl text-yellow-400 font-serif mb-6">"</div>
              <p className="text-xl md:text-2xl text-white italic mb-6">
                When we needed to scale quickly during our seasonal rush, they provided flexible warehousing solutions that accommodated our changing needs. Their climate-controlled facilities and security measures gave us complete peace of mind.
              </p>
              <div className="flex items-center">
                <div>
                  <p className="font-bold text-lg text-white">Thomas Clark</p>
                  <p className="text-gray-300">Distribution Director, Consumer Products Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Customer Satisfaction */}
          <div className="bg-black rounded-xl p-8 text-white flex flex-col items-center text-center">
            <FaStar className="w-10 h-10 mb-4 text-yellow-400" />
            <h3 className="text-3xl font-bold mb-2">98%</h3>
            <p className="text-lg font-medium">Customer Satisfaction</p>
            <div className="flex mt-4">
              {[1,2,3,4,5].map(star => (
                <FaStar key={star} className="w-5 h-5 text-yellow-400" />
              ))}
            </div>
          </div>
          
          {/* Clients Served */}
          <div className="bg-yellow-400 rounded-xl p-8 flex flex-col items-center text-center text-black">
            <FaUsers className="w-10 h-10 mb-4" />
            <h3 className="text-3xl font-bold mb-2">3,200+</h3>
            <p className="text-lg font-medium">Clients Nationwide</p>
            <p className="text-sm text-black text-opacity-70 mt-2">Across 48 states</p>
          </div>
          
          {/* Response Time */}
          <div className="bg-black rounded-xl p-8 flex flex-col items-center text-center">
            <FaCheckCircle className="w-10 h-10 mb-4 text-yellow-400" />
            <h3 className="text-3xl font-bold mb-2 text-white">Under 1hr</h3>
            <p className="text-lg font-medium text-white">Average Response Time</p>
            <p className="text-sm text-gray-400 mt-2">24/7 service availability</p>
          </div>
        </div>
        
        {/* Industry Recognition */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Recognized Industry Leader</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-2xl font-bold text-black mb-2">2024</div>
              <p className="text-sm text-gray-600">Excellence in Logistics Award</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-2xl font-bold text-black mb-2">Top 10</div>
              <p className="text-sm text-gray-600">Freight Brokerage Service</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-2xl font-bold text-black mb-2">5-Star</div>
              <p className="text-sm text-gray-600">Customer Service Rating</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="text-2xl font-bold text-black mb-2">99.8%</div>
              <p className="text-sm text-gray-600">On-Time Performance</p>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-black rounded-2xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full opacity-10 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400 rounded-full opacity-10 transform -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to optimize your logistics?</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied businesses who trust our comprehensive services to keep their operations running smoothly.
            </p>
            <Link to="/contact">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
              Get a Free Consultation
            </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}