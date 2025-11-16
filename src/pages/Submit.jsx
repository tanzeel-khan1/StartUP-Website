import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AIPromotionSection = () => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const savedEmail = localStorage.getItem("userEmail");
    if (savedEmail) setEmail(savedEmail);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    localStorage.setItem("userEmail", value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      toast.error("Please enter an email before submitting.");
      return;
    }

    toast.success("Your email is submitted!");

    setEmail("");
    localStorage.removeItem("userEmail");
  };

  return (
    <div className="h-screen w-full bg-black flex justify-center items-center px-4 sm:px-8">
      <ToastContainer position="top-center" autoClose={2000} />

      <motion.div
        className="relative h-[90vh] w-[95%] max-w-6xl text-center flex flex-col justify-center items-center overflow-hidden rounded-2xl"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div
          className="absolute inset-0 z-0 opacity-80 mix-blend-screen"
          style={{
            background:
              "radial-gradient(circle at center, #6B21A8 0%, transparent 70%)",
          }}
        ></div>

        <div
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, #ffffff 1px, transparent 1px),
              linear-gradient(to bottom, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
        ></div>

        <div className="relative z-10 p-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight"
          >
            AI-driven New <br className="sm:hidden" /> for everyone.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-4"
          >
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={handleChange}
              className="w-full sm:w-80 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
            />
            <button
              onClick={handleSubmit}
              className="w-full sm:w-auto cursor-pointer px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition duration-200"
            >
              Join waitlist
            </button>
          </motion.div>

          <p className="text-sm text-white/60 mt-3">
            No credit card required &middot; 7-days free trial
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AIPromotionSection;
