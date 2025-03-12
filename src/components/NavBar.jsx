import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink, scroller } from "react-scroll";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Home", "Services", "About Us", "Testimonial", "Contact", "FAQ"];

  return (
    <div className="fixed w-full z-50">
      <nav className="flex justify-between items-center h-16 px-4 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white">
        <div className="text-xl font-bold text-[#F39C12]">TruckRepair Logistics</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <ul className="flex space-x-6">
            {navItems.map((name, index) => {
              const formattedName = name.toLowerCase().replace(/\s+/g, "-");

              return (
                <li key={index}>
                  {/* SEO & React-Scroll Hybrid */}
                  <a
                    href={`/#${formattedName}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scroller.scrollTo(formattedName, {
                        smooth: true,
                        duration: 500,
                        offset: -70,
                      });
                    }}
                    className="cursor-pointer text-white hover:text-blue-600 underline"
                  >
                    {name}
                  </a>
                </li>
              );
            })}
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-gradient-to-r from-neutral-900 to-neutral-800 text-white md:hidden p-4 z-50"
          >
            <motion.ul className="flex flex-col space-y-4">
              {navItems.map((name, index) => {
                const formattedName = name.toLowerCase().replace(/\s+/g, "-");

                return (
                  <motion.li key={index}>
                    {/* SEO & React-Scroll Hybrid */}
                    <a
                      href={`/#${formattedName}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scroller.scrollTo(formattedName, {
                          smooth: true,
                          duration: 500,
                          offset: -70,
                        });
                        setIsMenuOpen(false); // Close menu after click
                      }}
                      className="text-white hover:text-blue-600 block"
                    >
                      {name}
                    </a>
                  </motion.li>
                );
              })}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
