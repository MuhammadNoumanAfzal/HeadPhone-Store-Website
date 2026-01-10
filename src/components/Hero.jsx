import React, { useState, useMemo } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const headPhoneData = [
  {
    id: 1,
    image: "/headphone.png",
    title: "HeadPhone Wireless",
    description:
      "Premium noise-canceling headphones with exceptional sound quality.",
    price: "$399",
    modal: "Modal Brown",
    bgColor: "#8b5958",
  },
  {
    id: 2,
    image: "/headphone2.png",
    title: "HeadPhone Wireless 2",
    description:
      "Crystal-clear audio with deep bass and a sleek, modern design.",
    price: "$299",
    modal: "Lime Green",
    bgColor: "#638153",
  },
  {
    id: 3,
    image: "/headphone3.png",
    title: "HeadPhone Wireless 3",
    description: "Lightweight, stylish, and perfect for immersive listening.",
    price: "$349",
    modal: "Ocean Blue",
    bgColor: "#5d818c",
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay, ease: "easeInOut" },
  },
});

const HeroImage = React.memo(({ image, title }) => (
  <motion.div
    key={image}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="flex justify-center"
  >
    <img
      src={image}
      alt={title}
      className="w-[300px] md:w-[400px] xl:w-[550px]"
      loading="lazy"
    />
  </motion.div>
));

const HeadphoneList = React.memo(({ headPhoneData, setActiveData }) => (
  <motion.div variants={fadeUp(1.2)} className="grid grid-cols-3 gap-6 mt-6">
    {headPhoneData.map((item) => (
      <motion.div
        key={item.id}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setActiveData(item)}
        className="flex flex-col items-center cursor-pointer transition-transform duration-300"
      >
        <img
          src={item.image}
          alt={item.modal}
          className="w-[150px] md:w-[180px]"
          loading="lazy"
        />
        <p className="text-base font-normal mt-2">{item.modal}</p>
        <p className="text-xs font-light">{item.price}</p>
      </motion.div>
    ))}
  </motion.div>
));

const Hero = () => {
  const [activeData, setActiveData] = useState(headPhoneData[0]);

  const memoizedHeadphoneData = useMemo(() => headPhoneData, []);

  return (
    <section
      className="bg-[#151616] text-white px-6 md:px-12 lg:px-20 py-12"
      id="home"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px] gap-12 items-center font-varela">
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp(0.2)}
          className="space-y-6 text-center md:text-left"
        >
          <motion.h1
            variants={fadeUp(0.4)}
            className="text-3xl font-bold lg:text-6xl"
          >
            {activeData.title}
          </motion.h1>
          <motion.p
            variants={fadeUp(0.6)}
            className="text-sm leading-loose text-white/80"
          >
            {activeData.description}
          </motion.p>
          <motion.button
            variants={fadeUp(0.8)}
            style={{ backgroundColor: activeData.bgColor }}
            className="px-6 py-3 font-medium rounded-sm transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            Buy and Listen
          </motion.button>

          <motion.div
            variants={fadeUp(1)}
            className="flex items-center justify-center md:justify-start gap-4 mt-12"
          >
            <div className="w-20 h-[1px] bg-white"></div>
            <p className="uppercase text-sm">Top HeadPhones for You</p>
            <div className="w-20 h-[1px] bg-white"></div>
          </motion.div>

          <HeadphoneList
            headPhoneData={memoizedHeadphoneData}
            setActiveData={setActiveData}
          />
        </motion.div>

        <HeroImage image={activeData.image} title={activeData.title} />
      </div>

      <motion.div
        initial={{ y: 10 }}
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="fixed bottom-10 right-10 text-3xl text-white z-50 mix-blend-difference hover:rotate-180 transition-transform duration-500"
      >
        <a href="#">
          <FaWhatsapp />
        </a>
      </motion.div>
    </section>
  );
};

export default React.memo(Hero);
