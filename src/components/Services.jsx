import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaBluetooth, FaBatteryFull } from "react-icons/fa";

const servicesData = [
  {
    id: 1,
    icon: <FaShieldAlt className="text-5xl text-blue-600" />,
    title: "Advanced Security",
    description:
      "Protect your data with top-tier encryption and multi-layer security features.",
    details:
      "Our security features include end-to-end encryption, secure pairing, and biometric authentication for ultimate safety.",
    delay: 0.5,
  },
  {
    id: 2,
    icon: <FaBluetooth className="text-5xl text-green-500" />,
    title: "Seamless Connectivity",
    description:
      "Experience ultra-fast and stable connectivity with the latest Bluetooth technology.",
    details:
      "Supports Bluetooth 5.3 for faster pairing, lower latency, and a wider range. Enjoy uninterrupted audio streaming even in crowded areas.",
    delay: 0.8,
  },
  {
    id: 3,
    icon: <FaBatteryFull className="text-5xl text-yellow-500" />,
    title: "Extended Battery Life",
    description:
      "Enjoy up to 40 hours of non-stop music playback with fast charging support.",
    details:
      "Get 4 hours of playback with just 10 minutes of charging. Designed for long trips, workouts, and all-day use.",
    delay: 1.1,
  },
];

const ServiceCard = React.memo(
  ({ icon, title, description, details, delay }) => (
    <motion.div
      className="bg-white shadow-lg rounded-2xl p-8 flex flex-col items-center text-center transition-transform duration-500 hover:scale-105 border border-gray-200 font-poppins"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      <div className="mb-6">{icon}</div>
      <h2 className="text-2xl font-semibold mb-3">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <p className="text-gray-500 text-sm">{details}</p>
    </motion.div>
  )
);

const Services = () => {
  return (
    <section className="bg-gray-100 py-14 px-6 lg:px-16" id="services">
      <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
        Our Premium Features
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-10 cursor-pointer">
        {servicesData.map((service) => (
          <ServiceCard
            key={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
            details={service.details}
            delay={service.delay}
          />
        ))}
      </div>
    </section>
  );
};

export default React.memo(Services);
