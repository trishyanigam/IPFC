import React from "react";
import { motion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function ContactPage() {
  return (
    <div className="relative px-6 max-w-4xl mx-auto py-20">

      {/* 🌈 Floating Background Blobs */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-40">
        <motion.div
          className="absolute top-0 left-0 w-72 h-72 bg-purple-500/40 blur-[120px] rounded-full"
          animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/40 blur-[130px] rounded-full"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Tag */}
      <motion.div
        className="absolute top-16 right-8 hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs text-gray-100"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <Sparkles size={14} />
        We're here to help
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white text-center"
      >
        Contact Us
      </motion.h1>

      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={1}
        className="mt-4 text-center text-gray-700 dark:text-gray-300 max-w-xl mx-auto"
      >
        Have questions regarding IP filing, approvals, or portal usage?  
        Drop your message below — we’ll get back to you shortly.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={2}
        className="mt-10 p-8 rounded-3xl bg-white/30 dark:bg-gray-900/30 backdrop-blur-xl border border-white/20 dark:border-gray-800/40 shadow-xl space-y-5"
      >
        {/* Name */}
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-700 outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Email */}
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-700 outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Message */}
        <motion.textarea
          whileFocus={{ scale: 1.02 }}
          rows="5"
          placeholder="Your Message"
          className="w-full p-3 rounded-lg bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-700 outline-none focus:ring-2 focus:ring-purple-500"
        />

        {/* Button */}
        <motion.button
          type="submit"
          whileHover={{
            scale: 1.05,
            boxShadow:
              "0 12px 35px rgba(139,92,246,0.45), 0 0 0 1px rgba(255,255,255,0.2)",
          }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white font-semibold shadow-lg"
        >
          <div className="flex items-center justify-center gap-2">
            <Mail size={18} />
            Send Message
          </div>
        </motion.button>
      </motion.form>

      {/* Bottom Note */}
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={3}
        className="text-center text-gray-600 dark:text-gray-400 mt-6 text-sm"
      >
        We typically respond within <span className="font-semibold">24–48 hours</span>.
      </motion.p>
    </div>
  );
}
