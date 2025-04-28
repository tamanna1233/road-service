// import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Github } from "lucide-react";
import { FaAngleRight, FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoIosTime } from "react-icons/io";
import { LiaLinkedinIn } from "react-icons/lia";
import logo from "../assets/logo3.avif";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
export default function Footer() {
  const Quicllinks = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about-us" },
    { name: "Testimonials", link: "/testimonial" },
    { name: "Blog", link: "/blogs" },
    { name: "Contact", link: "/contact" },
  ];

  const services = [
    { name: "Safety & Maintenance Services", link: "safety-maintenance" },
    { name: "Dispatch Services", link: "dispatch" },
    { name: "Freight Brokerage Services", link: "freight-brokerage" },
    { name: "Warehousing Solutions", link: "warehousing" },
    { name: "Container & Drayage Services", link: "container-drayage" },
    { name: "Intermodal Logistics", link: "intermodal" },
  ];
  return (
    <>
      <footer className="  px-4 md:px-12 py-12 bg-black text-white border-t-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
          {/* Company Info */}
          <div>
            <img
              src={logo}
              alt="brand logo"
              className="h-24 mx-auto"
              loading="lazy"
            />

            <p className="px-2 md:px-8 text-xl py-2">
              Your trusted partner in complete logistics, transportation, and
              fleet management services across North America since 2016.{" "}
            </p>
            <div className="flex  gap-4 items-center px-2 md:px-8">
              <a
                href="#"
                className="hover:text-yellow-500 transition duration-300"
                aria-label="twitter"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href="#"
                className="hover:text-yellow-500 transition duration-300"
                aria-label="linkedin"
              >
                <LiaLinkedinIn size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-500">
              Quick Links
            </h3>

            {Quicllinks.map(({ name, link }, index) => (
              <ol className="space-y-3" key={index}>
                <li>
                  <Link
                    to={link}
                    className="hover:text-white transition duration-300 flex items-center gap-2"
                    aria-label={name}
                  >
                    <FaAngleRight /> {name}
                  </Link>
                </li>
              </ol>
            ))}
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-500">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map(({ name, link }, index) => (
                <li className="flex items-center gap-2 text-white" key={index}>
                  <FaAngleRight />
                  <Link
                    to={`/services/${link}`}
                    className="hover:text-white transition duration-300"
                    aria-label={link}
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-yellow-500">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <FaPhone size={25} className=" text-yellow-400" />
                <a
                  href="tel: +91 85804-66164"
                  title="Call +91 98765 43210"
                  aria-label="Call us at +91 85804-66164"
                >
                  +91 85804-66164
                </a>
              </li>
              <li className="flex items-center gap-2 ">
                <MdOutlineEmail size={25} className=" text-yellow-400" />

                <a
                  href="mailto:Rahulwalia@gmail.com"
                  title="Email Rahulwalia@gmail.com<"
                  aria-label="Rahulwalia@gmail.com"
                >
                  Rahulwalia@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <CiLocationOn size={25} className=" text-yellow-400" /> North
                America
              </li>
            </ul>
            <div className="mt-6 flex gap-2 items-center ">
              <IoIosTime size={25} className=" text-yellow-400" />
              <ul>
                <li> Monday - Friday: 8:00 AM - 6:00 PM</li>
                <li>Saturday: 9:00 AM - 3:00 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="bg-black text-white py-5 ">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-white">
            &copy; {new Date().getFullYear()} The Walia Group of Company. All
            rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
