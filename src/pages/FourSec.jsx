import React from "react";
import { motion } from "framer-motion";

function FourSec() {
  const images = [
    "celes.png",
    "pulse.png",
    "st.png",
    "apex.png",
    "quam.png",
    "acme 1.png",
    "outside.png",
    "echo.png",
  ];

  const logoVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.5 },
    },
  };

  return (
    <div className="w-full bg-black py-16 md:py-24 flex flex-col items-center overflow-hidden">
      
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-white/70 text-lg md:text-xl text-center px-4"
      >
        Trusted by the world’s most innovative teams
      </motion.h1>

      <div className="w-full mt-10 flex flex-col gap-6 items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 w-11/12 md:w-4/5">
          {images.map((img, i) => (
            <motion.section
              key={i}
              custom={i}
              variants={logoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="h-[4.5rem] sm:h-[5rem]  border border-white/10 rounded-xl flex justify-center items-center hover:scale-105 hover:border-white/30 transition-all duration-300"
            >
              <img
                src={img}
                alt={`logo-${i + 1}`}
                className="max-h-[70%] max-w-[70%] object-contain brightness-90"
              />
            </motion.section>
          ))}
        </div>
      </div>
      <motion.div
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="text-white mt-16 md:mt-24 text-center space-y-2 text-lg md:text-2xl font-light px-4"
      >
        <p>Harness the power of , making</p>
        <p>search engine optimization intuitive</p>
        <p>and effective for all skill levels.</p>
      </motion.div>
    </div>
  );
}

export default FourSec;
