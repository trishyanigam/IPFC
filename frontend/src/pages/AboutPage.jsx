import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Target, Lightbulb, LineChart } from "lucide-react";

// Fade-up animation
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.18,
      duration: 0.65,
      ease: "easeOut",
    },
  }),
};

export default function AboutPage() {
  return (
    <div className="relative px-6 max-w-5xl mx-auto py-20">
      {/* 🌈 Floating Gradient Blobs Background */}
      <div className="absolute inset-0 -z-10 opacity-[0.35] pointer-events-none">
        <motion.div
          className="absolute top-0 -left-10 w-72 h-72 bg-purple-500/40 blur-[130px] rounded-full"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/35 blur-[140px] rounded-full"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* ✨ Floating Label */}
      <motion.div
        className="absolute top-10 right-10 hidden md:flex items-center gap-2 px-4 py-1.5 
             text-xs text-white bg-white/10 border border-white/20 backdrop-blur 
             rounded-full"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles size={14} />
        Empowering Innovation
      </motion.div>

      {/* 🌟 MAIN TITLE */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight"
      >
        About the{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          IPFC Management System
        </span>
      </motion.h1>

      {/* Intro Paragraph */}
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={1}
        className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed text-lg"
      >
        The Intellectual Property Facilitation Centre (IPFC) Management System
        is designed to transform how institutions handle innovation. It
        digitizes the entire lifecycle of intellectual property — from
        submission to review to approval — ensuring faster, smarter, and more
        transparent processing.
      </motion.p>

      {/* Section Divider */}
      <div className="mt-12 h-px bg-gradient-to-r from-transparent via-gray-500/40 to-transparent" />

      {/* 🎯 Objectives Section */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={2}
        className="mt-14 text-3xl font-bold text-gray-900 dark:text-white"
      >
        Our Core Objectives
      </motion.h2>

      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3, once: true }}
        className="mt-6 space-y-4"
      >
        {[
          "Simplify the IP filing experience for students, researchers and faculty.",
          "Provide complete transparency in application status, workflow and review timelines.",
          "Reduce manual paperwork, follow-ups and delays across departments.",
          "Offer a unified dashboard for applicants, coordinators, reviewers and administrators.",
        ].map((text, i) => (
          <motion.li
            key={i}
            variants={fadeUp}
            custom={i}
            className="flex gap-3 items-start text-gray-800 dark:text-gray-300 text-md"
          >
            <span className="mt-1 h-3 w-3 rounded-full bg-purple-500"></span>
            {text}
          </motion.li>
        ))}
      </motion.ul>

      {/* 💎 Glassmorphic Impact Boxes */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2, once: true }}
        variants={fadeUp}
        custom={5}
        className="mt-16 grid md:grid-cols-3 gap-8"
      >
        {/* Box 1 */}
        <motion.div
          whileHover={{ scale: 1.06, y: -6, rotateX: 4, rotateY: -4 }}
          transition={{ type: "spring", stiffness: 180, damping: 16 }}
          className="p-6 rounded-2xl bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 shadow-lg text-center"
        >
          <Target className="mx-auto text-purple-500" size={38} />
          <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
            Precision Workflow
          </h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
            Every IP request follows a clear and structured review path.
          </p>
        </motion.div>

        {/* Box 2 */}
        <motion.div
          whileHover={{ scale: 1.06, y: -6, rotateX: 4, rotateY: -4 }}
          transition={{ type: "spring", stiffness: 180, damping: 16 }}
          className="p-6 rounded-2xl bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 shadow-lg text-center"
        >
          <Lightbulb className="mx-auto text-yellow-400" size={38} />
          <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
            Empowering Innovators
          </h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
            Students & researchers get clarity, speed and confidence.
          </p>
        </motion.div>

        {/* Box 3 */}
        <motion.div
          whileHover={{ scale: 1.06, y: -6, rotateX: 4, rotateY: -4 }}
          transition={{ type: "spring", stiffness: 180, damping: 16 }}
          className="p-6 rounded-2xl bg-white/30 dark:bg-gray-900/30 backdrop-blur-lg border border-white/20 dark:border-gray-700/30 shadow-lg text-center"
        >
          <LineChart className="mx-auto text-blue-400" size={38} />
          <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
            Data-Driven Oversight
          </h3>
          <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
            Track progress, processing time, and approval trends with ease.
          </p>
        </motion.div>
      </motion.div>

      {/* ✨ Final Impact Statement */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        custom={7}
        className="mt-20 p-8 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/20 dark:border-gray-700/20"
      >
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          A Modern Approach to Intellectual Property
        </h2>
        <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
          Innovation thrives when processes are clear, fast and accessible. The
          IPFC Management System helps institutions build a culture of
          creativity and protection — ensuring that every idea gets the
          recognition and support it deserves.
        </p>
      </motion.div>
    </div>
  );
}
