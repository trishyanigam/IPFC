import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "../components/FeatureCard";
import { FileText, Users, BarChart3 } from "lucide-react";

export default function HomePage() {
  const features = [
    {
      icon: FileText,
      title: "Easy IP Applications",
      desc: "Submit and track patents, trademarks & copyrights from one portal.",
    },
    {
      icon: Users,
      title: "Role-based Dashboards",
      desc: "Separate views for applicants, reviewers and administrators.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Tracking",
      desc: "Monitor application stages, approvals and timelines easily.",
    },
  ];

  return (
    <div className="px-6 max-w-6xl mx-auto text-center">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex px-4 py-1.5 rounded-full bg-gray-900/70 dark:bg-gray-900/80 border border-white/10 text-gray-200 text-xs md:text-sm"
      >
        Secure • Transparent • Streamlined IP Management
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-6 text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white"
      >
        Intellectual Property
        <br />
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
          Facilitation Centre Portal
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
      >
        File, monitor and manage your IP applications through a single, user-friendly
        platform built for institutes and innovation centres.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8 flex justify-center gap-4"
      >
        <a
          href="/login"
          className="px-7 py-3 rounded-xl text-sm md:text-base font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90"
        >
          Get Started →
        </a>
        <a
          href="/features"
          className="px-6 py-3 rounded-xl text-sm md:text-base border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-100/70 dark:hover:bg-gray-900/60"
        >
          View Features
        </a>
      </motion.div>

      {/* Feature Cards */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            <FeatureCard icon={f.icon} title={f.title} desc={f.desc} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
