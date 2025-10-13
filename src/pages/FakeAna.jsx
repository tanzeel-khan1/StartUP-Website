import React from "react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", traffic: 40 },
  { name: "Tue", traffic: 60 },
  { name: "Wed", traffic: 45 },
  { name: "Thu", traffic: 80 },
  { name: "Fri", traffic: 55 },
  { name: "Sat", traffic: 70 },
  { name: "Sun", traffic: 50 },
];

export default function TrafficCard() {
  return (
    <div className="w-full bg-black flex flex-col md:flex-row items-center justify-center gap-6 p-4 md:p-8 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
        className="bg-[#1a0129] rounded-2xl p-6 w-full md:w-[65%] lg:w-[60%] h-auto text-white shadow-lg"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-sm text-gray-400">Traffic</p>
            <h2 className="text-2xl md:text-3xl font-bold">
              59.8K{" "}
              <span className="text-green-400 text-sm md:text-base">+9.3%</span>
            </h2>
          </div>
          <div className="w-10 h-10 bg-gradient-to-br from-purple-700 to-indigo-800 rounded-xl flex items-center justify-center text-xl">
            📊
          </div>
        </div>

        <div className="h-32 md:h-40 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Line
                type="monotone"
                dataKey="traffic"
                stroke="#8b5cf6"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div>
          <p className="text-gray-400 text-sm">Visual reports</p>
          <p className="text-gray-500 text-xs">
            Visual insights into your site’s performance.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
        className="border border-white/40 rounded-2xl p-6 w-full md:w-[35%] lg:w-[30%] h-auto flex flex-col items-center text-center"
      >
        <motion.img
          src="nook.png"
          alt="Keyword Generator"
          className="w-32 md:w-40 lg:w-48 object-contain"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        />
        <h1 className="text-white mt-5 font-bold text-lg md:text-xl">
          Smart Keyword Generator
        </h1>
        <p className="text-white text-sm mt-2">
          Automatic suggestions and the best keywords to target.
        </p>
      </motion.div>
    </div>
  );
}
