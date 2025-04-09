// import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Github } from "lucide-react";
import { FaAngleRight, FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter,FaPhone } from "react-icons/fa6";
import { IoIosMailUnread } from "react-icons/io";
import {  LiaLinkedinIn } from "react-icons/lia";
import logo from '../assets/logo3.png'
export default function Footer() {
  const Quicllinks=[
    { name: "Home", link: "#" },
    { name: "About Us", link: "#" },
    { name: "Services", link: "#" },
    { name: "Testimonials", link: "#" },
    { name: "Blog", link: "#" },
    { name: "Contact", link: "#" },
  ]
  return (
    <>
    <footer className="  px-4 py-12 bg-black text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
        {/* Company Info */}
        <div>
         <img src={logo} alt="" className="h-24 mx-auto" />

          <p className="px-2 md:px-8 text-xl py-2">
          Your trusted partner in complete logistics, transportation, and fleet management services across North America since 2016.          </p>
          <div className="flex px-2 md:px-8">
            
            <a href="#" className="hover:text-yellow-500 transition duration-300" aria-label="twitter">
              <FaSquareXTwitter size={24} />
            </a>
            <a href="#" className="hover:text-yellow-500 transition duration-300" aria-label="linkedin">
              <LiaLinkedinIn size={24} />
            </a>
           
          </div>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-6 text-yellow-500">Quick Links</h3>

          {Quicllinks.map(({name,link, index}) => (
            <ol className="space-y-3" key={index}>
            <li><a href={link} className="hover:text-white transition duration-300 flex items-center gap-2" aria-label={name}><FaAngleRight/> {name}</a></li>
            
          </ol>))}
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
    <div className="bg-gray-900 text-white py-6 ">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        
      </div>
    </div>
 
    </>
  );
}
