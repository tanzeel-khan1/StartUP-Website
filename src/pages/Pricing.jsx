import React from "react";
import { motion } from "framer-motion";

const PricingSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  return (
    <section
      className="relative bg-black text-white py-24 px-6 flex flex-col items-center overflow-hidden"
      style={{
        backgroundImage: "url('bg (2).png')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div className="relative z-10 text-center mb-12">
        <h2 className="text-4xl font-semibold mb-3">Pricing</h2>
        <p className="text-gray-400 max-w-lg mx-auto">
          Choose the right plan to meet your needs and start optimizing today.
        </p>
        <div className="flex justify-center mt-6">
          <div className="bg-gray-800/60 px-4 py-2 rounded-full flex items-center gap-2 text-sm">
            <span>☁️</span> Cloud
          </div>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {[
          {
            title: "Pricing",
            price: "$39/mo",
            features: [
              "Keyword optimization",
              "Automated meta tags",
              "SEO monitoring",
              "Monthly reports",
            ],
            buttonStyle: "border border-gray-700 hover:bg-gray-800",
          },
          {
            title: "Pro",
            price: "$79/mo",
            features: [
              "Keyword optimization",
              "Automated meta tags",
              "SEO monitoring",
              "Monthly reports",
              "Content suggestions",
              "Link optimization",
            ],
            highlighted: true,
            buttonStyle: "bg-purple-600 hover:bg-purple-700",
          },
          {
            title: "Business",
            price: "$149/mo",
            features: [
              "Keyword optimization",
              "Automated meta tags",
              "SEO monitoring",
              "Monthly reports",
              "Content suggestions",
              "Link optimization",
              "Multi-user access",
              "API integration",
            ],
            buttonStyle: "border border-gray-700 hover:bg-gray-800",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} 
            className={`rounded-2xl p-8 min-h-[500px] flex flex-col justify-between transition-transform duration-300 hover:-translate-y-2 ${
              card.highlighted
                ? "bg-purple-600/10 border border-purple-500 shadow-[0_0_35px_rgba(168,85,247,0.3)] hover:shadow-[0_0_60px_rgba(168,85,247,0.5)]"
                : "bg-gray-900/40 border border-gray-700 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)]"
            }`}
          >
            <div>
              <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
              <p className="text-3xl font-bold mb-6">{card.price}</p>
              <ul className="text-gray-300 space-y-3 mb-8">
                {card.features.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>
            </div>
            <button
              className={`w-full py-2 rounded-xl cursor-pointer transition ${card.buttonStyle}`}
            >
              Join waitlist
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
