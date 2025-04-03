// import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Github } from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter,FaPhone } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
export default function Footer() {
  return (
    <>
    <footer className="  px-4 py-12 bg-gray-900 text-gray-400">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-yellow-500">TruckRepair Logistics</h3>
          <p className="mb-6">
            Providing professional truck repair and roadside assistance services nationwide. Keeping America's commercial fleets running efficiently 24/7/365.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-yellow-500 transition duration-300" aria-label="Facebook">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="hover:text-yellow-500 transition duration-300" aria-label="twitter">
              <FaSquareXTwitter size={24} />
            </a>
            <a href="#" className="hover:text-yellow-500 transition duration-300" aria-label="linkedin">
              {/* <Linkedin size={24} /> */}
            </a>
           
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-yellow-500">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white transition duration-300" aria-label="Home">Home</a></li>
            <li><a href="#" className="hover:text-white transition duration-300" aria-label="About us">About Us</a></li>
            <li><a href="#" className="hover:text-white transition duration-300 "aria-label="Services">Services</a></li>
            <li><a href="#" className="hover:text-white transition duration-300" aria-label="Contact">Contact</a></li>
          </ul>
        </div>
        
        {/* Our Services */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-yellow-500">Our Services</h3>
          <ul className="space-y-3">
            <li><a href="#services" className="hover:text-white transition duration-300" aria-label="Emergency Roadside Assistance">Emergency Roadside Assistance</a></li>
            <li><a href="#services" className="hover:text-white transition duration-300" aria-label="Engine Diagnostics & Repair">Engine Diagnostics & Repair</a></li>
            <li><a href="#services" className="hover:text-white transition duration-300" aria-label="Preventive Maintenance">Preventive Maintenance</a></li>
            <li><a href="#services" className="hover:text-white transition duration-300" aria-label="Fleet Management Solutions">Fleet Management Solutions</a></li>
          </ul>
        </div>
        
        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-yellow-500">Contact Us</h3>
          <ul className="space-y-4">
            <li className="flex items-center">
              {/* <MapPin size={20} className="text-yellow-500 mr-3" /> */}
              1250 Logistics Drive, Suite 300, Chicago, IL 60607
            </li>
            <li className="flex items-center">
              <FaPhone size={20} className="text-yellow-500 mr-3" />
              <div>
                <p><strong>Emergency:</strong> 1-800-TRUCK-HELP</p>
                <p><strong>Office:</strong> (312) 555-7890</p>
              </div>
            </li>
            <li className="flex items-center">
              <IoIosMailUnread size={20} className="text-yellow-500 mr-3" />
              <a href="mailto:info@truckrepairlogistics.com" className="hover:text-white transition duration-300">
                info@truckrepairlogistics.com
              </a>
            </li>
          </ul>
          <div className="mt-6">
            <a href="#emergency" className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md inline-flex items-center text-sm font-semibold transition duration-300">
              24/7 Emergency Response
            </a>
          </div>
        </div>
      </div>
      </footer>
    <div className="bg-gray-900 text-white py-6 mt-0.5">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <nav className="mt-4">
          <ul className="flex justify-center space-x-4">
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
 
    </>
  );
}
