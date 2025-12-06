import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Shield,
  Users,
  BarChart3,
  CheckCircle,
} from "lucide-react";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function FeaturesPage() {
  const features = [
    {
      icon: FileText,
      title: "Unified IP Application",
      desc: "Submit patents, trademarks and copyrights using structured forms.",
    },
    {
      icon: Shield,
      title: "Secure Document Upload",
      desc: "Upload and store IP-related documents safely in the system.",
    },
    {
      icon: Users,
      title: "Role-based Views",
      desc: "Different dashboards for applicants, coordinators and admins.",
    },
    {
      icon: BarChart3,
      title: "Status & Analytics",
      desc: "Track counts by stage, timelines and approval statistics.",
    },
    {
      icon: CheckCircle,
      title: "Workflow & Decisions",
      desc: "Admins can review, approve, reject or ask for clarifications.",
    },
  ];

  return (
    <div className="relative px-6 max-w-6xl mx-auto py-20">

      {/* ✨ Animated Background Blobs */}
      <div className="absolute inset-0 -z-10 opacity-60 pointer-events-none">
        <motion.div
          className="absolute -top-10 left-10 w-60 h-60 bg-purple-500/30 blur-[100px] rounded-full"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-10 w-64 h-64 bg-blue-500/30 blur-[120px] rounded-full"
          animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Heading Section */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white"
      >
        Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Features</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-center text-gray-700 dark:text-gray-300 max-w-2xl mx-auto"
      >
        The IPFC Management Portal supports the complete lifecycle of intellectual property applications — from submission to approval.
      </motion.p>

      {/* Features Grid */}
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={i}
            whileHover={{
              scale: 1.06,
              rotateX: 4,
              rotateY: -4,
              translateY: -6,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            className="p-6 rounded-2xl bg-white/30 dark:bg-gray-900/40 backdrop-blur-xl shadow-xl border border-white/20 dark:border-gray-700/40 cursor-pointer transform-gpu"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 text-white">
              <f.icon size={26} />
            </div>

            <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-white">
              {f.title}
            </h3>

            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  );
}
