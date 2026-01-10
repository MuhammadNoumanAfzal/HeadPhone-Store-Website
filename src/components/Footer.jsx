import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const fadeIn = (delay) => ({
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

const socialIcons = [FaFacebookF, FaTwitter, FaInstagram, FaLinkedin];
const quickLinks = ["Home", "About", "Services", "Contact"];

const CompanyInfo = React.memo(() => (
  <motion.div variants={fadeIn(0.3)} className="space-y-4">
    <h2 className="text-2xl font-bold text-black">
      NOAN / <span className="font-extralight text-white/70">STORE</span>
    </h2>
    <p className="text-white">
      Bringing you the latest technology with top-notch quality and innovation.
      Reliable, secure, and better products available in one place.
    </p>
  </motion.div>
));

const QuickLinks = React.memo(() => (
  <motion.div variants={fadeIn(0.5)} className="space-y-4">
    <h3 className="text-xl font-bold text-black">Quick Links</h3>
    <ul className="space-y-2">
      {quickLinks.map((item, index) => (
        <li key={index}>
          <a
            href={`#${item.toLowerCase()}`}
            className="text-white hover:text-white transition duration-300"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  </motion.div>
));

const SocialMedia = React.memo(() => (
  <motion.div variants={fadeIn(0.7)} className="space-y-4">
    <h3 className="text-xl font-bold text-black">Follow Us</h3>
    <div className="flex space-x-4">
      {socialIcons.map((Icon, index) => (
        <motion.a
          key={index}
          href="#"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition duration-300"
        >
          <Icon className="text-white text-lg" />
        </motion.a>
      ))}
    </div>
  </motion.div>
));

const Footer = () => {
  return (
    <footer className="bg-[#aa6d6b] text-gray-300 py-12 px-6 md:px-12 lg:px-20 xl:px-32 font-poppins">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <CompanyInfo />
        <QuickLinks />
        <SocialMedia />
      </motion.div>

      {/* Copyright */}
      <motion.div
        variants={fadeIn(0.9)}
        className="text-center text-white text-sm mt-8"
      >
        © {new Date().getFullYear()} NOAN / STORE. All Rights Reserved.
      </motion.div>
    </footer>
  );
};

export default React.memo(Footer);
