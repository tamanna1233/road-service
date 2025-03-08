import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Home", "Service", "About Us", "Location", "Contact", "FAQ"];

  return (
    <>
    <nav className="flex justify-between items-center h-16 px-4 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white">
      <div className="text-xl font-bold text-[#F39C12]">TruckRepair Logistics</div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex   md:items-center md:space-x-6">
        <ul className="flex space-x-6">
          {navItems.map((name, index) => (
            <li key={index}>
              <a
                href="#"
                className="text-white hover:text-blue-600 underline"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Mobile Menu Button */}
      <div className="flex md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          className="text-gray-400 hover:text-white"
        >
          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      
     
    </nav>
     {/* Mobile Navigation Menu */}
     {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gradient-to-r from-neutral-900 to-neutral-800 text-white md:hidden p-4 z-50">
          <ul className="flex flex-col space-y-4">
            {navItems.map((name, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-white hover:text-blue-600  block"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>

  );
}
