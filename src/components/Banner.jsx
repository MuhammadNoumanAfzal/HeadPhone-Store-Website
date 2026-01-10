import React from "react";
import { motion } from "framer-motion";

const fadeUp = (delay) => ({
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  },
});

const BannerImage = React.memo(() => (
  <motion.div
    variants={{
      hidden: { opacity: 0, x: -100, rotate: -10 },
      show: {
        opacity: 1,
        x: 0,
        rotate: 0,
        transition: { duration: 1, ease: "easeOut" },
      },
    }}
    viewport={{ once: true }}
    className="flex justify-center"
  >
    <img
      src="./headphone4.png"
      alt="Headphone"
      className="w-[250px] sm:w-[320px] md:w-[380px] lg:w-[450px] xl:w-[500px] object-contain"
      loading="lazy"
    />
  </motion.div>
));

const BannerText = React.memo(() => (
  <div className="flex flex-col justify-center space-y-5 text-center md:text-left">
    <motion.h1
      variants={fadeUp(0.5)}
      className="text-3xl sm:text-4xl md:text-5xl font-poppins font-extrabold leading-tight text-gray-900"
    >
      Experience the Future <br /> of Sound Technology
    </motion.h1>

    <motion.p
      variants={fadeUp(0.7)}
      className="text-gray-700 text-lg sm:text-xl"
    >
      Immerse yourself in high-fidelity audio with advanced noise cancellation
      and ultra-long battery life.
    </motion.p>

    <motion.button
      variants={fadeUp(1.1)}
      className="bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300 cursor-pointer w-40 mx-auto md:mx-0"
    >
      Buy Now
    </motion.button>
  </div>
));

const Banner = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 xl:px-32" id="about">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 items-center gap-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <BannerImage />
        <BannerText />
      </motion.div>
    </section>
  );
};

export default React.memo(Banner);
