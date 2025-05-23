import safety from "../assets/matainece.avif";
import Dispatch from "../assets/dispacth.avif";
import Freight from "../assets/brokrege.avif";
import warehouse from "../assets/warehouse.avif";
import container from "../assets/containers.avif";
import intermodal from "../assets/intermodal.avif";
import { Link } from "react-router-dom";

const services = [
  {
    id: "safety-maintenance",
    title: "Safety & Maintenance Services",
    subtitle: "Keeping Your Fleet Compliant, Road-Ready & Risk-Free",
    description:
      "We provide 24/7 safety and preventive maintenance to help fleets minimize downtime, avoid fines, and maintain peak vehicle performance.",
    points: [
      "Preventive maintenance (brakes, tires, filters, fluids, etc.)",
      "DOT compliance inspections & CSA readiness",
      "24/7 roadside assistance & towing",
      "Reefer unit maintenance and diagnostics",
      "Trailer & chassis repairs",
      "Maintenance record management",
      "Fully FMCSA & DOT compliant",
      "Emergency and scheduled services available",
    ],
    image: safety,
    alt: "Fleet maintenance service",
  },
  {
    id: "dispatch",
    title: "Dispatch Services",
    subtitle: "Reliable, Revenue-Driven Dispatch for Owner-Operators & Fleets",
    description:
      "Our dispatch team acts as your virtual office, ensuring you’re always loaded, compliant, and paid on time.",
    points: [
      "Load sourcing & negotiation for best rates",
      "24/7 communication and live driver tracking",
      "Carrier setup, paperwork & rate confirmations",
      "Route planning, fuel optimization, and HOS management",
      "Multilingual support and professional dispatchers",
      "Maximize profits and reduce deadhead miles",
    ],
    image: Dispatch,
    alt: "Dispatch services",
  },
  {
    id: "freight-brokerage",
    title: "Freight Brokerage Services",
    subtitle: "Connecting Shippers & Carriers Through Strategic Coordination",
    description:
      "As a licensed freight broker, we bridge the gap between reliable carriers and cargo-ready shippers.",
    points: [
      "Full Truckload (FTL) & Less Than Truckload (LTL) coordination",
      "Carrier vetting and compliance checks",
      "Competitive rate negotiation & volume discounts",
      "Real-time freight tracking",
      "Damage claims management and resolution",
      "Customized freight solutions for all industries",
    ],
    image: Freight,
    alt: "Freight brokerage",
  },
  {
    id: "warehousing",
    title: "Warehousing Solutions",
    subtitle: "Secure, Scalable Storage for Modern Supply Chains",
    description:
      "Perfect for businesses needing storage, fulfillment, or inventory staging—short or long-term.",
    points: [
      "Temperature-controlled and ambient facilities",
      "Cross-docking & transloading",
      "Real-time inventory tracking and reporting",
      "E-commerce pick & pack fulfillment",
      "Bonded and insured storage facilities",
      "Conveniently located near major ports and highways",
    ],
    image: warehouse,
    alt: "Warehouse storage",
  },
  {
    id: "container-drayage",
    title: "Container & Drayage Services",
    subtitle: "Efficient Movement of Port Cargo — On Time, Every Time",
    description:
      "We specialize in container drayage and port logistics, ensuring fast, reliable cargo transfers.",
    points: [
      "Port pickups & delivery for dry and reefer containers",
      "FCL and LCL drayage",
      "Chassis provision & heavy-load handling",
      "Detention, demurrage & customs clearance support",
      "Bonded drayage available",
      "We simplify the complex port logistics process",
    ],
    image: container,
    alt: "Container logistics",
  },
  {
    id: "intermodal",
    title: "Intermodal Logistics",
    subtitle: "Eco-Friendly & Cost-Effective Multi-Modal Freight Movement",
    description:
      "Our intermodal services combine truck, rail, and port transport into a seamless logistics solution.",
    points: [
      "Direct rail and terminal access",
      "First and last mile truck movement",
      "Cross-border compliance (U.S. & Canada)",
      "Load consolidation and transloading",
      "Complete tracking from origin to destination",
      "A smarter, greener way to ship freight long-distance",
    ],
    image: intermodal,
    alt: "Intermodal transport",
  },
];

const ServiceCard = ({
  title,
  image,
  description,
  alt,
  isReversed,
  icon,
  points,
  id,
}) => (
  <div
    className={`flex flex-col-reverse md:flex-row ${
      isReversed ? "md:flex-row-reverse" : ""
    } items-center md:items-stretch gap-4 bg-[#1e1e1e] 
    rounded-xl overflow-hidden container w-full min-h-96`}
  >
    {/* Text Section */}
    <div className="flex-2 flex flex-col items-center justify-start text-center p-6 text-[#facc15]">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-[#facc15]">{title}</h3>
      <p className="text-white mb-4">{description}</p>
      <ul className="hidden md:flex md:flex-col text-left list-disc space-y-1 text-white py-1.5">
        {points?.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <Link to={`/services/${id}`} className="inline-flex items-center group">
        <span
          className="bg-yellow-400 text-black px-6 py-2 rounded-md font-semibold 
                    group-hover:bg-yellow-500 transition-colors inline-flex items-center"
        >
          View Details
          {/* <FaArrowRight className="ml-2 group-hover:ml-3 transition-all" /> */}
        </span>
      </Link>{" "}
    </div>

    {/* Image Section */}
    <div className="flex-2 ">
      <img
        src={image}
        alt={alt || title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  </div>
);

const ServicesSection = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#facc15] ">
          Services
        </h2>
        <div className="h-1 w-20 bg-yellow-400 mx-auto" />

        <h3 className="text-white text-center p-4">
          Comprehensive logistics solutions tailored to meet your business needs
          with unmatched reliability and efficiency.
        </h3>
        <div className="flex flex-col gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`w-full flex justify-center items-center`}
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
