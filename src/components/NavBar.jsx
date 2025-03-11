import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Home", "Services", "About Us", "Testimonial", "Contact", "FAQ"];

  // Animation Variants
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, // Stagger effect when opening
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1, // Reverse order on close
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }, // Slide out to the right when closing
  };

  return (
    <div className=" fixed w-full z-50">
      <nav className="flex  justify-between items-center h-16 px-4 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white">
        <div className="text-xl font-bold text-[#F39C12]">TruckRepair Logistics</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-6">
          <ul className="flex space-x-6">
            {navItems.map((name, index) => (
              <li key={index}>
                <Link to={name} smooth={true} aria-label={`${name}`} className="text-white hover:text-blue-600 underline cursor-pointer">
                  {name}
                </Link>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu with Reverse Stagger Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="absolute top-16 left-0 w-full bg-gradient-to-r from-neutral-900 to-neutral-800 text-white md:hidden p-4 z-50"
          >
            <motion.ul className="flex flex-col space-y-4">
              {navItems.map((name, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <Link to={name} smooth={true} className="text-white hover:text-blue-600 block">
                    {name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
