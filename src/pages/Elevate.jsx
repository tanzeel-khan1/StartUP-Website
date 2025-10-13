import React from "react";
import { motion } from "framer-motion";
import {
  BarChart2,
  KeyRound,
  AlertTriangle,
  Link2,
  Settings,
  Eye,
  Target,
  Users,
} from "lucide-react";

const features = [
  {
    icon: <BarChart2 className="w-5 h-5 text-indigo-400" />,
    title: "User-friendly dashboard",
    desc: "Perform complex SEO audits and optimizations with a single click.",
  },
  {
    icon: <Eye className="w-5 h-5 text-indigo-400" />,
    title: "Visual reports",
    desc: "Visual insights into your site's performance.",
  },
  {
    icon: <KeyRound className="w-5 h-5 text-indigo-400" />,
    title: "Smart Keyword Generator",
    desc: "Automatic suggestions and the best keywords to target.",
  },
  {
    icon: <Settings className="w-5 h-5 text-indigo-400" />,
    title: "Content evaluation",
    desc: "Simple corrections for immediate improvements.",
  },
  {
    icon: <Target className="w-5 h-5 text-indigo-400" />,
    title: "SEO goal setting",
    desc: "Helps you set and achieve SEO goals with guided assistance.",
  },
  {
    icon: <AlertTriangle className="w-5 h-5 text-indigo-400" />,
    title: "Automated alerts",
    desc: "Automatic notifications about your SEO health, including quick fixes.",
  },
  {
    icon: <Link2 className="w-5 h-5 text-indigo-400" />,
    title: "Link Optimization Wizard",
    desc: "Guides you through the process of creating and managing links.",
  },
  {
    icon: <Settings className="w-5 h-5 text-indigo-400" />,
    title: "One-click optimization",
    desc: "Perform complex SEO audits and optimizations with a single click.",
  },
  {
    icon: <Users className="w-5 h-5 text-indigo-400" />,
    title: "Competitor reports",
    desc: "Provides insights into competitors' keyword strategies and ranking.",
  },
];

export default function SeoFeatures() {
  return (
    <section className="bg-gradient-to-br from-[#0b021e] to-[#1a1038] text-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
          className="text-4xl font-bold mb-12"
        >
          Elevate your{" "}
          <span className="text-indigo-400">SEO efforts.</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 text-left">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex items-start gap-4 hover:scale-105 transition-transform duration-300"
            >
              <div className="mt-1">{feature.icon}</div>
              <div>
                <h3 className="font-semibold mb-1">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
