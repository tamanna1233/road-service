import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaCheck } from 'react-icons/fa';

import safety from "../assets/safety.webp";
import Dispatch from "../assets/dispatch.webp";
import  Freight from "../assets/freight.webp";
import warehouse from "../assets/warehouse.webp";
import container from "../assets/containerwebp.webp";
import intermodal from "../assets/intermodal.webp";

const services = [
  {
    id: "safety-maintenance",
    title: "Safety & Maintenance Services",
    subtitle: "Keeping Your Fleet Compliant, Road-Ready & Risk-Free",
    description: "We provide 24/7 safety and preventive maintenance to help fleets minimize downtime, avoid fines, and maintain peak vehicle performance.",
    points: [
      "Preventive maintenance (brakes, tires, filters, fluids, etc.)",
      "DOT compliance inspections & CSA readiness",
      "24/7 roadside assistance & towing",
      "Reefer unit maintenance and diagnostics",
      "Trailer & chassis repairs",
      "Maintenance record management",
      "Fully FMCSA & DOT compliant",
      "Emergency and scheduled services available"
    ],
    image: safety, // Will be replaced with imported image
    alt: "Fleet maintenance service"
  },
  {
    id: "dispatch",
    title: "Dispatch Services",
    subtitle: "Reliable, Revenue-Driven Dispatch for Owner-Operators & Fleets",
    description: "Our dispatch team acts as your virtual office, ensuring you're always loaded, compliant, and paid on time.",
    points: [
      "Load sourcing & negotiation for best rates",
      "24/7 communication and live driver tracking",
      "Carrier setup, paperwork & rate confirmations",
      "Route planning, fuel optimization, and HOS management",
      "Multilingual support and professional dispatchers",
      "Maximize profits and reduce deadhead miles"
    ],
    image: Dispatch, // Will be replaced with imported image
    alt: "Dispatch services"
  },
  {
    id: "freight-brokerage",
    title: "Freight Brokerage Services",
    subtitle: "Connecting Shippers & Carriers Through Strategic Coordination",
    description: "As a licensed freight broker, we bridge the gap between reliable carriers and cargo-ready shippers.",
    points: [
      "Full Truckload (FTL) & Less Than Truckload (LTL) coordination",
      "Carrier vetting and compliance checks",
      "Competitive rate negotiation & volume discounts",
      "Real-time freight tracking",
      "Damage claims management and resolution",
      "Customized freight solutions for all industries"
    ],
    image: Freight, // Will be replaced with imported image
    alt: "Freight brokerage"
  },
  {
    id: "warehousing",
    title: "Warehousing Solutions",
    subtitle: "Secure, Scalable Storage for Modern Supply Chains",
    description: "Perfect for businesses needing storage, fulfillment, or inventory staging—short or long-term.",
    points: [
      "Temperature-controlled and ambient facilities",
      "Cross-docking & transloading",
      "Real-time inventory tracking and reporting",
      "E-commerce pick & pack fulfillment",
      "Bonded and insured storage facilities",
      "Conveniently located near major ports and highways"
    ],
    image: warehouse, // Will be replaced with imported image
    alt: "Warehouse storage"
  },
  {
    id: "container-drayage",
    title: "Container & Drayage Services",
    subtitle: "Efficient Movement of Port Cargo — On Time, Every Time",
    description: "We specialize in container drayage and port logistics, ensuring fast, reliable cargo transfers.",
    points: [
      "Port pickups & delivery for dry and reefer containers",
      "FCL and LCL drayage",
      "Chassis provision & heavy-load handling",
      "Detention, demurrage & customs clearance support",
      "Bonded drayage available",
      "We simplify the complex port logistics process"
    ],
    image: container, // Will be replaced with imported image
    alt: "Container logistics"
  },
  {
    id: "intermodal",
    title: "Intermodal Logistics",
    subtitle: "Eco-Friendly & Cost-Effective Multi-Modal Freight Movement",
    description: "Our intermodal services combine truck, rail, and port transport into a seamless logistics solution.",
    points: [
      "Direct rail and terminal access",
      "First and last mile truck movement",
      "Cross-border compliance (U.S. & Canada)",
      "Load consolidation and transloading",
      "Complete tracking from origin to destination",
      "A smarter, greener way to ship freight long-distance"
    ],
    image: intermodal, // Will be replaced with imported image
    alt: "Intermodal transport"
  }
];



const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedServices, setRelatedServices] = useState([]);

  useEffect(() => {
    // Find the service that matches the URL parameter
    const foundService = services.find(s => s.id === serviceId);
    console.log(serviceId)
    setService(foundService);
    
    // Get 3 related services (excluding current one)
    if (foundService) {
      const related = services
        .filter(s => s.id !== serviceId)
        .slice(0, 3);
      setRelatedServices(related);
    }
    
    setLoading(false);
    
    // Scroll to top when service changes
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-400"></div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
        <p className="mb-8">The service you're looking for doesn't exist.</p>
        <Link to="/services" className="bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold hover:bg-yellow-500 transition-colors">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-neutral-100 mi-h-screen">
      {/* Hero Section */}
      <div className="bg-white text-black relative">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <Link to="/services" className="inline-flex items-center mb-8 text-lg font-semibold  gap-4">
            <FaArrowLeft className="mr-2" /> Back to Services
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h1>
              <div className="h-1 w-20 bg-yellow-400 mb-6"></div>
              <h2 className="text-xl md:text-2xl font-light mb-6 ">{service.subtitle}</h2>
              <p className="text-lg mb-6">{service.description}</p>
              <Link 
                to="/contact" 
                className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-yellow-500 transition-colors"
              >
                Request Service
              </Link>
            </div>
            
            <div className="hidden md:block">
              {/* Replace this with your actual image when implementing */}
              <div className="flex items-center justify-center">
                <img src={service.image} alt={service.alt}  className=' object-scale-down rounded-lg'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Service Details */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
          <h3 className="text-2xl font-bold mb-6">What We Offer</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">Key Benefits</h4>
              <ul className="space-y-3">
                {service.points.slice(0, Math.ceil(service.points.length / 2)).map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 text-yellow-500">
                      <FaCheck />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4 md:hidden">Additional Features</h4>
              <ul className="space-y-3">
                {service.points.slice(Math.ceil(service.points.length / 2)).map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1 text-yellow-500">
                      <FaCheck />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mt-10 pt-10 border-t border-gray-200">
            <h3 className="text-2xl font-bold mb-6">Why Choose Our {service.title}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black text-white p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-yellow-400">Experience & Expertise</h4>
                <p>Our team brings years of specialized experience in {service.title.toLowerCase()}, ensuring top-quality service delivery.</p>
              </div>
              
              <div className="bg-black text-white p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-yellow-400">Tailored Solutions</h4>
                <p>We customize our approach to meet your specific needs, not offering one-size-fits-all solutions.</p>
              </div>
              
              <div className="bg-black text-white p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-2 text-yellow-400">24/7 Support</h4>
                <p>Our commitment to your success means we're available whenever you need us, providing continuous support.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Call To Action */}
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Optimize Your Logistics?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Get in touch with our {service.title} specialists today and discover how we can help streamline your operations.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-md font-semibold hover:bg-yellow-500 transition-colors"
          >
            Contact Us Now
          </Link>
        </div>
      </div>
      
      {/* Related Services */}
      <div className="container mx-auto px-4 py-16">
  <h3 className="text-2xl font-bold mb-8">Related Services</h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {relatedServices.map((related) => (
      <Link key={related.id} to={`/services/${related.id}`} className="group">
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
          
          {/* Fixed size image container */}
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <img
              src={related.image}
              alt={related.alt}
              className="w-full h-full object-cover" // consistent sizing
            />
          </div>

          <div className="p-6">
            <h4 className="text-lg font-semibold mb-2 group-hover:text-yellow-500 transition-colors">
              {related.title}
            </h4>
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {related.description}
            </p>
            <span className="text-yellow-500 font-medium inline-flex items-center">
              Learn More <span className="ml-1 group-hover:ml-2 transition-all">→</span>
            </span>
          </div>
        </div>
      </Link>
    ))}
  </div>
</div>

      
    
    </div>
  );
};

export default ServiceDetail;