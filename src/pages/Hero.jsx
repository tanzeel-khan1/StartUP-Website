import React, { useState } from "react";
import { TrendingUp, TrendingDown, Search, Settings } from "lucide-react";
import { motion } from "framer-motion";
import FourSec from "./FourSec";
import Five from "./Five"
import FakeAnalytics from "./FakeAna";
import Elevate from "./Elevate";
import Pricing from "./Pricing";
import Submit from "./Submit";
import Footer from "./Footer";
function Hero() {
  const [activeTab, setActiveTab] = useState("overview");

  const menuItems = [
    { id: "overview", label: "Site Overview", icon: "📊" },
    { id: "analytics", label: "Analytics", icon: "📈" },
    { id: "smart", label: "Smart Keyword Optimizer", icon: "🔍" },
    { id: "goals", label: "Goals", icon: "🎯" },
    { id: "channel", label: "Channel Explorer", icon: "📺" },
    { id: "backlink", label: "Backlink Audit", icon: "🔗" },
    { id: "live", label: "Live Optimization Wizard", icon: "⚡" },
  ];

  const topKeywords = [
    "online payment processing",
    "demo transactions",
    "payment gateway",
    "online shopping payments",
    "e-commerce payment gateway",
    "B2B payment processing",
    "safe online payments",
  ];

  // 🔹 Reusable animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
    <div className="min-h-screen w-full bg-gradient-to-b from-black via-[#4D3763] via-40% via-[#602A9A] to-[#9855FF] flex flex-col items-center px-4 sm:px-6 lg:px-12 py-16">
      
      {/* Banner */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="w-full max-w-md bg-black mt-10 text-[#9855FF] border border-white/60 rounded-full flex justify-center items-center px-4 py-2 text-sm sm:text-base"
      >
        <div className="bg-violet-600 text-black font-bold text-center rounded-full px-3 py-1 mr-3 text-xs sm:text-sm">
          NEW
        </div>
        Latest integration just arrived
      </motion.div>

      {/* Headings */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false}}
        className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white mt-8 text-center"
      >
        Boost Your
      </motion.h1>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        className="text-4xl sm:text-6xl lg:text-8xl font-bold text-purple-400 text-center mt-2"
      >
        Rankings With ME.
      </motion.h1>

      {/* Subtext */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="mt-8 text-center"
      >
        <p className="text-white text-lg sm:text-xl">
          Elevate your site’s visibility effortlessly with AI,
        </p>
        <p className="text-white text-base sm:text-lg mt-2">
          where smart technology meets user-friendly SEO tools.
        </p>
      </motion.div>

      {/* CTA */}
      <motion.button
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="text-black bg-white px-6 py-3 font-bold mt-8 rounded-md cursor-pointer hover:bg-purple-600 transition hover:text-white "
      >
        Start For Free
      </motion.button>

      {/* Dashboard */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="w-full max-w-7xl mt-16"
      >
        <div className="bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 text-white p-4 sm:p-6 rounded-md">
          <div className="flex flex-col lg:flex-row gap-6">
            
             <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="w-full lg:w-64 bg-black/40 rounded-2xl p-4 backdrop-blur-sm border border-white/10"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 cursor-pointer ${
                      activeTab === item.id
                        ? "bg-purple-600/50 text-white"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span className="text-sm">{item.label}</span>
                  </button>
                ))}
              </nav>
            </motion.div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                <div>
                  <motion.h1
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false }}
                    className="text-2xl font-bold mb-1"
                  >
                    Site Overview
                  </motion.h1>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="relative flex-1 sm:flex-none">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full bg-black/30 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <button className="p-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition">
                    <Settings className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Stats Grid */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Velocity */}
                <motion.div
                  variants={fadeUp}
                  className="bg-black/40 rounded-2xl p-6 backdrop-blur-sm border border-white/10 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-400">Jan 24 - Today</span>
                    <Settings className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
                  </div>
                  <div className="mb-6">
                    <div className="text-sm text-gray-400 mb-2">Velocity</div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-bold">10.15%</span>
                      <span className="text-green-400 text-sm flex items-center gap-1">
                        <TrendingUp className="w-4 h-4" /> +2.5%
                      </span>
                    </div>
                  </div>
                  <div className="relative h-28 sm:h-32">
                    <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="rgb(147, 51, 234)" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0,80 L50,70 L100,60 L150,55 L200,45 L250,30 L300,35"
                        fill="none"
                        stroke="rgb(168, 85, 247)"
                        strokeWidth="2"
                      />
                      <path
                        d="M0,80 L50,70 L100,60 L150,55 L200,45 L250,30 L300,35 L300,100 L0,100 Z"
                        fill="url(#gradient)"
                      />
                      <circle cx="250" cy="30" r="4" fill="white" />
                      <circle cx="250" cy="30" r="8" fill="white" fillOpacity="0.3" />
                    </svg>
                  </div>
                </motion.div>

                {/* Keywords */}
                <motion.div
                  variants={fadeUp}
                  className="bg-black/30 rounded-2xl p-6 backdrop-blur-sm border border-white/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-400">Organic Keywords</span>
                    <Settings className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-bold">35.6K</span>
                      <span className="text-red-400 text-sm flex items-center gap-1">
                        <TrendingDown className="w-4 h-4" /> -6%
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-3">Top Keywords</div>
                    <div className="space-y-2">
                      {topKeywords.map((keyword, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm">
                          <span className="text-purple-400">🔹</span>
                          <span className="text-gray-300">{keyword}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Traffic */}
                <motion.div
                  variants={fadeUp}
                  className="bg-black/30 rounded-2xl p-6 backdrop-blur-sm border border-white/10 md:col-span-2"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-400">Traffic</span>
                    <Settings className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-bold">59.8K</span>
                    <span className="text-green-400 text-sm flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" /> +12%
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
    <FourSec/>
    <Five/>
    <FakeAnalytics/>
    <Elevate/>
     <div className="h-44 w-full bg-black flex flex-col justify-center items-center overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-white text-3xl text-center"
      >
        Our Clients
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
        className="text-white text-center mt-3"
      >
        Hear firsthand how our solutions have
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
        className="text-white text-center"
      >
        boosted online success for users like you.
      </motion.p>
    </div>
          <Pricing/>
          <Submit/>
<Footer/>
    </>
  );
}

export default Hero;
