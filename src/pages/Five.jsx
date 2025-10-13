import React from "react";
import { motion } from "framer-motion";

const SeoDashboardSection = () => {
  return (
    <section className="w-full bg-black flex flex-col md:flex-row items-center justify-center py-20 px-6 md:px-12 text-white gap-10 overflow-hidden">

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left"
      >
        <img
          src="Visual.png" 
          alt="SEO Goal Setting"
          className="w-52 h-52 object-contain mb-6"
        />
        <h3 className="text-lg font-semibold mb-2">New goal setting</h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          Helps you set and achieve opal goals with guided assistance.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: false }}
        className="md:w-2/3 w-full bg-gradient-to-br from-[#100B1E] via-[#1E0D2E] to-[#2D1350] rounded-3xl p-6 md:p-10 shadow-[0_0_50px_rgba(128,0,255,0.4)] relative overflow-hidden"
      >
        <div className="flex gap-2 mb-6">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>

        <div className="mb-6">
          <h4 className="text-gray-300 text-sm">Site Overview</h4>
        </div>

        <div className="flex gap-4 mb-6 text-xs">
          <button className="bg-[#2E1E48] px-3 py-1 rounded-md text-gray-200">
            Site Overview
          </button>
          <button className="text-gray-500 hover:text-gray-300 transition">
            Analytics
          </button>
          <button className="text-gray-500 hover:text-gray-300 transition">
            Smart Keyword Generator
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: false }}
          className="bg-gradient-to-tr from-[#35145F] to-[#6B2FC8] rounded-2xl p-5 mb-8"
        >
          <p className="text-xs text-gray-400 mb-1">Visibility</p>
          <h2 className="text-2xl font-bold">
            10.15% <span className="text-green-400 text-sm font-normal">+5.6%</span>
          </h2>
          <div className="w-full h-16 bg-gradient-to-r from-[#4b1a77] to-[#6e29b3] rounded-lg mt-3 relative">
            <div className="absolute left-3 bottom-2 text-[10px] text-gray-400">
              Jun 18
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h4 className="text-md font-semibold mb-1">
            User-friendly dashboard
          </h4>
          <p className="text-gray-400 text-sm">
            Perform complex Opal audits and optimizations with a single click.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SeoDashboardSection;
