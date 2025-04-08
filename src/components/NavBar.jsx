import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      dropdown: [
        { name: "Wheel Laser Alignment", path: "/services/Wheel Laser Alignment" },
        { name: "New Tires Installation", path: "/services/New Tires Installation" },
        { name: "Mobile Truck Repair", path: "/services/Mobile Truck Repair" },
      ],
    },
    {
      name: "About Us",
      dropdown: [
        { name: "Our mission", path: "/our_mission" },
        { name: "Why Choose Us", path: "/why-us" },
      ],
    },
    { name: "Testimonial", path: "/testimonial" },
    { name: "Contact", path: "/contact" },
    { name: "blogs", path: "/blogs" },

  ];

  // Close dropdown when clicking outside (for desktop only)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setDropdown(null);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="fixed w-full z-50 bg-gradient-to-r from-neutral-900 to-neutral-800">
      <nav className="flex justify-between items-center h-16 px-6 text-white">
        <Link to="/" className="text-xl font-bold text-[#F39C12]">
         TWGC
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center space-x-6">
          <ul className="flex space-x-6">
            {navItems.map((item, index) => (
              <li key={index} className="relative dropdown">
                {item.dropdown ? (
                  <button
                    className="flex items-center gap-1 text-white hover:text-blue-600"
                    onClick={() => setDropdown(dropdown === item.name ? null : item.name)}
                    aria-expanded={dropdown === item.name}
                    aria-label={`Toggle ${item.name} menu`}
                  >
                    {item.name}
                    <AiOutlineDown
                      className={`transition-transform ${dropdown === item.name ? "rotate-180" : ""}`}
                    />
                  </button>
                ) : (
                  <Link to={item.path} className="text-white hover:text-blue-600">
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu (Only for Desktop) */}
                <AnimatePresence>
                  {item.dropdown && dropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="absolute left-0 mt-2 w-48 bg-neutral-800 shadow-lg rounded-md overflow-hidden"
                    >
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className="block w-full px-4 py-2 text-white hover:bg-neutral-700"
                          onClick={() => setDropdown(null)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-400 hover:text-white"
          aria-label="Toggle mobile menu"
        >
          <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 w-full bg-gradient-to-r from-neutral-900 to-neutral-800 text-white md:hidden p-4"
          >
            <motion.ul
              className="flex flex-col space-y-4"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
              }}
            >
              {navItems.map((item, index) => (
                <motion.li key={index} className="relative">
                  {item.dropdown ? (
                    <>
                      <button
                        className="flex justify-between items-center w-full text-white hover:text-blue-600"
                        onClick={() => setMobileDropdown(mobileDropdown === item.name ? null : item.name)}
                      >
                        {item.name}
                        <AiOutlineDown
                          className={`transition-transform ${mobileDropdown === item.name ? "rotate-180" : ""}`}
                        />
                      </button>

                      {/* Mobile Dropdown */}
                      <AnimatePresence>
                        {mobileDropdown === item.name && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="mt-2 space-y-2 pl-4 border-l border-gray-600"
                          >
                            {item.dropdown.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  to={subItem.path}
                                  className="block text-white hover:text-blue-600"
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    setMobileDropdown(null);
                                  }}
                                >
                                  {subItem.name}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="block text-white hover:text-blue-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
