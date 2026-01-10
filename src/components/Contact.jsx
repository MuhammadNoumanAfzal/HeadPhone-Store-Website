import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const fadeIn = (delay) => ({
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

const contactInfo = [
  {
    id: 1,
    icon: <FaPhoneAlt className="text-blue-600 text-3xl" />,
    title: "Phone",
    detail: "+123 456 7890",
  },
  {
    id: 2,
    icon: <FaEnvelope className="text-green-600 text-3xl" />,
    title: "Email",
    detail: "contact@company.com",
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt className="text-red-600 text-3xl" />,
    title: "Address",
    detail: "123 Street, City, Country",
  },
];

const ContactInfoCard = React.memo(({ icon, title, detail, variants }) => (
  <motion.div
    variants={variants}
    className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    <p className="text-gray-600">{detail}</p>
  </motion.div>
));

const ContactForm = React.memo(() => (
  <motion.form variants={fadeIn(0.7)} className="mt-10 space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <textarea
      placeholder="Your Message"
      rows="4"
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    ></textarea>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300 w-full md:w-auto mx-auto block"
    >
      Send Message
    </motion.button>
  </motion.form>
));

const Contact = () => {
  return (
    <section
      className="py-16 px-6 md:px-12 lg:px-16 xl:px-32 bg-gray-100 font-varela"
      id="contact"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-5xl mx-auto bg-[#aa6d6b] shadow-lg rounded-3xl p-8 md:p-12"
      >
        {/* Heading */}
        <motion.h1
          variants={fadeIn(0.3)}
          className="text-3xl md:text-4xl font-extrabold text-white text-center"
        >
          Get in Touch
        </motion.h1>
        <motion.p
          variants={fadeIn(0.5)}
          className="text-white text-center mt-3"
        >
          Have any questions? Reach out to us and we’ll get back to you soon.
        </motion.p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {contactInfo.map((info, index) => (
            <ContactInfoCard
              key={info.id}
              icon={info.icon}
              title={info.title}
              detail={info.detail}
              variants={fadeIn(0.4 + index * 0.2)}
            />
          ))}
        </div>

        {/* Contact Form */}
        <ContactForm />
      </motion.div>
    </section>
  );
};

export default React.memo(Contact);
