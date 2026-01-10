import React from "react";
import { Link } from "react-scroll";
import { FaHeadphones } from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const NavBarMenu = [
  { id: 1, title: "Home", link: "home" },
  { id: 2, title: "Services", link: "services" },
  { id: 3, title: "About", link: "about" },
  { id: 4, title: "Contact", link: "contact" },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#151616] text-white py-10 px-10 font-varela">
      <nav className="flex justify-between items-center">
        {/* Logo Section */}
        <motion.a
          href="#"
          className="text-xl font-black uppercase"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Noan / <span className="font-extralight text-white/70">Store</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NavBarMenu.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              smooth={true}
              duration={500}
              offset={-80} // Adjust this value if you have a fixed header
              className="text-sm uppercase relative hover:text-gray-300 cursor-pointer"
            >
              {item.title}
            </Link>
          ))}
          <motion.button
            className="text-xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ rotate: 20 }}
          >
            <FaHeadphones />
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <MdClose className="text-3xl" />
            ) : (
              <MdMenu className="text-3xl" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden flex flex-col items-center mt-4 space-y-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {NavBarMenu.map((item) => (
              <Link
                key={item.id}
                to={item.link}
                smooth={true}
                duration={500}
                offset={-80} // Adjust this value if you have a fixed header
                className="text-sm uppercase hover:text-gray-300 cursor-pointer"
                onClick={() => setIsOpen(false)} // Close menu on link click
              >
                {item.title}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
