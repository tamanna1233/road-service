import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const services = [
  { id: 1, title: "Wheel Laser Alignment", description: "Precision wheel alignment ensures smooth and safe rides." },
  { id: 2, title: "New Tires Installation", description: "We install top-quality tires for maximum road grip and safety." },
  { id: 3, title: "Mobile Truck Repair", description: "On-site truck repair available 24/7." },
  { id: 4, title: "Mobile Trailer Repair", description: "Expert trailer repair at your location." },
  { id: 5, title: "Rear Brakes Services", description: "Brake inspection, maintenance, and replacements." },
  { id: 6, title: "Battery & Electrical System", description: "Battery checks, wiring, and diagnostics." },
  { id: 7, title: "Oil & Filter Change", description: "Protect your engine with routine oil changes." },
  { id: 8, title: "Air Conditioning & Heater", description: "Stay comfortable with AC & heater services." },
  { id: 9, title: "Hydraulic Service", description: "Hydraulic system repairs and maintenance." },
  { id: 10, title: "Water Pumps Repair", description: "Fix leaks and overheating with water pump repair." },
  { id: 11, title: "Lights & Wiring", description: "Electrical troubleshooting and repairs." },
  { id: 12, title: "Tailgate Repair", description: "Fix damaged or malfunctioning tailgates." },
  { id: 13, title: "Radiator Repair", description: "Radiator diagnostics, maintenance, and fixes." },
  { id: 14, title: "Roadside Assistance", description: "24/7 emergency roadside support." },
  { id: 15, title: "Landing Gear Repair", description: "Landing gear troubleshooting and servicing." },
  { id: 16, title: "Towing Services", description: "Fast and reliable towing services." }
];

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(services[0]); // Default to first service
  const { id } = useParams();
console.log(id)
  useEffect(() => {
    if (id) {
      const foundService = services.find((s) => s.title === id);
      if (foundService) setSelectedService(foundService);
    }
  }, [id]);

  return (
    <section className="py-20 bg-neutral-900 text-yellow-300">
      <div className=" mx-auto px-4 flex flex-col md:flex-row gap-6">
        
        {/* Left: Service List */}
        <div className=" p-6 w-full md:w-1/3 max-h-[700px] overflow-y-auto">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Our Services</h2>
          <ul className="space-y-4">
            {services.map((service) => (
              <li
                key={service.id}
                className={`cursor-pointer p-4 rounded-lg text-lg font-semibold ${
                  selectedService.id === service.id ? "bg-yellow-400 text-gray-900" : "bg-gray-800 text-yellow-300"
                } hover:bg-yellow-500 hover:text-gray-900 transition`}
                onClick={() => setSelectedService(service)}
              >
                {service.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Service Details */}
        <div className=" p-8 = w-full md:w-2/3">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">{selectedService.title}</h2>
          <p className="mt-4 text-gray-400">{selectedService.description}</p>
        </div>

      </div>
    </section>
  );
};

export default ServicesPage;
