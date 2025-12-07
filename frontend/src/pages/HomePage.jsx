import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "../components/FeatureCard";
import {
  FileText,
  Users,
  BarChart3,
  ShieldCheck,
  Clock,
  Sparkles,
  Quote,
} from "lucide-react";

// Motion variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 * i, duration: 0.6, ease: "easeOut" },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function HomePage() {
  const features = [
    {
      icon: FileText,
      title: "Easy IP Applications",
      desc: "Submit and track patents, trademarks & copyrights from one unified portal.",
    },
    {
      icon: Users,
      title: "Role-based Dashboards",
      desc: "Dedicated views for applicants, reviewers and administrators.",
    },
    {
      icon: BarChart3,
      title: "Analytics & Tracking",
      desc: "Monitor progress, approval timeframes and stage-wise updates.",
    },
  ];

  const steps = [
    {
      icon: ShieldCheck,
      title: "Submit Your IP",
      desc: "Upload your invention, research work or creative asset securely.",
    },
    {
      icon: Clock,
      title: "Review & Processing",
      desc: "Your application flows through institutional IP cells and reviewers.",
    },
    {
      icon: Sparkles,
      title: "Approval & Protection",
      desc: "Get notified on each milestone and access approval documents anytime.",
    },
  ];

  const testimonials = [
    {
      name: "Research Lab Coordinator",
      role: "University Innovation Cell",
      quote:
        "This portal cut our IP processing time by more than half. Faculty and students finally have clarity on every application.",
    },
    {
      name: "Startup Founder",
      role: "Campus Incubation Program",
      quote:
        "We can track each patent filing across mentors, legal teams and institutes from a single dashboard.",
    },
  ];

  const stats = [
    { value: "1500+", label: "Applications Managed" },
    { value: "98%", label: "Process Accuracy" },
    { value: "20+ Days", label: "Average Time Saved" },
  ];

  return (
    <div className="relative overflow-hidden min-h-screen">
      {/* 🌈 Layered Animated Background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-gray-900 via-slate-900 to-black dark:from-gray-950 dark:via-slate-950 dark:to-black" />
      <div className="absolute inset-0 -z-10 opacity-60 pointer-events-none">
        <motion.div
          className="absolute -top-32 -left-10 w-72 h-72 bg-blue-500/40 blur-[110px] rounded-full"
          animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 right-0 w-80 h-80 bg-purple-500/40 blur-[120px] rounded-full"
          animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-120px] left-1/3 w-72 h-72 bg-pink-500/35 blur-[120px] rounded-full"
          animate={{ y: [0, 18, 0] }}
          transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        />
      </div>

      {/* ✨ Floating Accent Elements */}
      <motion.div
        className="hidden md:block absolute top-32 left-10"
        animate={{ y: [0, -10, 0], rotate: [0, 4, -4, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      >
        <div className="px-3 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur text-xs text-gray-100 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Live IP Tracking Enabled
        </div>
      </motion.div>

      <motion.div
        className="hidden md:block absolute top-52 right-8"
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      >
        <div className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-500/40 to-purple-500/40 border border-white/15 backdrop-blur text-xs text-gray-100 flex items-center gap-2">
          <Sparkles size={14} />
          <span>Smart Reminders</span>
        </div>
      </motion.div>

      {/* MAIN CONTENT */}
      <div className="px-6 max-w-6xl mx-auto pt-16 pb-24 text-center">
        {/* Badge */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex px-4 py-1.5 rounded-full bg-gray-900/70 dark:bg-gray-900/80 border border-white/10 text-gray-200 text-xs md:text-sm backdrop-blur"
        >
          Secure • Transparent • Streamlined IP Management
        </motion.div>

        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mt-14"
        >
          <motion.h1
            variants={fadeUp}
            custom={0}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
          >
            One Portal for All Your
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Intellectual Property Needs
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={1}
            className="mt-4 text-base md:text-lg text-gray-300 max-w-3xl mx-auto"
          >
            From patent filings to copyright management — empower students,
            researchers and startups with a single, intuitive IP facilitation
            system tailored for institutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            custom={2}
            className="mt-8 flex justify-center gap-4 flex-wrap"
          >
            <motion.a
              href="/register"
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow:
                  "0 18px 45px rgba(59,130,246,0.55), 0 0 0 1px rgba(255,255,255,0.09)",
              }}
              whileTap={{ scale: 0.97 }}
              className="px-7 py-3 rounded-xl text-sm md:text-base font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            >
              Get Started →
            </motion.a>
            <motion.a
              href="/features"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-xl text-sm md:text-base border border-gray-500/60 text-gray-100 bg-white/5 hover:bg-white/10 backdrop-blur"
            >
              Explore Features
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Glass Stats Row */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              custom={idx}
              whileHover={{ scale: 1.07, translateY: -4 }}
              className="p-5 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md"
            >
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Cards with subtle 3D tilt */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="mt-18 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              custom={i}
              whileHover={{
                scale: 1.05,
                rotateX: -5,
                rotateY: 5,
                translateY: -4,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="transform-gpu"
            >
              <FeatureCard icon={f.icon} title={f.title} desc={f.desc} />
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="mt-20 h-px bg-gradient-to-r from-transparent via-gray-500/40 to-transparent" />

        {/* How It Works */}
        <section className="mt-16">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl font-bold text-white"
          >
            How the Portal Works
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="text-gray-300 max-w-2xl mx-auto mt-2 text-sm md:text-base"
          >
            A guided workflow to support every stakeholder — applicants,
            reviewers and administrators — through each stage of IP management.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                custom={i}
                whileHover={{ scale: 1.06, translateY: -4 }}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-gray-700/80 shadow-lg"
              >
                <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none" />
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500">
                  <s.icon className="text-white w-6 h-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-gray-300">{s.desc}</p>
                <span className="absolute -top-3 -right-3 h-7 w-7 rounded-full bg-white/10 border border-white/30 flex items-center justify-center text-xs text-gray-100">
                  {i + 1}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Testimonials */}
        <section className="mt-20">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-3xl font-bold text-white"
          >
            Trusted by Innovators & Institutions
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={1}
            className="text-gray-300 max-w-2xl mx-auto mt-2 text-sm md:text-base"
          >
            Designed to meet the needs of universities, research centres and
            startup incubators.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                custom={idx}
                whileHover={{ scale: 1.03, translateY: -2 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-left"
              >
                <div className="flex items-center gap-2 text-gray-300">
                  <Quote size={18} className="text-purple-400" />
                  <span className="text-xs uppercase tracking-wide">
                    Testimonial
                  </span>
                </div>
                <p className="mt-3 text-sm md:text-base text-gray-100 leading-relaxed">
                  “{t.quote}”
                </p>
                <div className="mt-4">
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-gray-300">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Final CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="mt-24 mb-10 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-white/20 backdrop-blur-lg"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Ready to streamline your IP facilitation?
          </h2>
          <p className="text-gray-100 mt-2 text-sm md:text-base max-w-2xl mx-auto">
            Launch your institution’s IP portal in days, not months — with
            dashboards for every stakeholder and a delightful, modern UI.
          </p>
          <motion.a
            href="/register"
            whileHover={{
              scale: 1.06,
              y: -2,
              boxShadow:
                "0 18px 40px rgba(129,140,248,0.5), 0 0 0 1px rgba(255,255,255,0.15)",
            }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 inline-block px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold"
          >
            Create Your Account
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
