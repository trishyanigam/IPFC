import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Calendar,
} from "lucide-react";

export default function ReportsPage() {
  const [filter, setFilter] = useState("monthly");

  return (
    <div className="pt-16 px-8 max-w-7xl mx-auto dark:text-white">

      {/* PAGE HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-10"
      >
        <div>
          <h1 className="text-4xl font-bold">Reports & Analytics</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Insights on applications, approval rates, and workflow efficiency.
          </p>
        </div>

        <button className="flex items-center gap-2 px-5 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition shadow-md">
          <Download size={18} /> Export Report
        </button>
      </motion.div>

      {/* FILTER TABS */}
      <div className="flex gap-4 mb-8 text-sm">
        {["monthly", "quarterly", "yearly"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-xl transition flex items-center gap-2 ${
              filter === tab
                ? "bg-purple-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            <Calendar size={16} /> {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Total Applications */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-300/40 dark:border-gray-700/40 shadow"
        >
          <BarChart3 className="text-purple-500 size-10 mb-3" />
          <h2 className="text-lg font-semibold">Total Applications</h2>
          <p className="text-4xl font-extrabold mt-2">310</p>
          <p className="text-green-500 flex items-center gap-1 mt-2">
            <TrendingUp size={16} /> +12% from last month
          </p>
        </motion.div>

        {/* Approval Rate */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-300/40 dark:border-gray-700/40 shadow"
        >
          <PieChart className="text-blue-500 size-10 mb-3" />
          <h2 className="text-lg font-semibold">Approval Rate</h2>
          <p className="text-4xl font-extrabold mt-2">78%</p>
          <p className="text-red-500 flex items-center gap-1 mt-2">
            <TrendingDown size={16} /> -3% from last month
          </p>
        </motion.div>

        {/* Avg Processing Time */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-300/40 dark:border-gray-700/40 shadow"
        >
          <Calendar className="text-green-500 size-10 mb-3" />
          <h2 className="text-lg font-semibold">Avg Processing Time</h2>
          <p className="text-4xl font-extrabold mt-2">5.2 Days</p>
          <p className="text-green-500 flex items-center gap-1 mt-2">
            <TrendingUp size={16} /> Improved by 1.1 days
          </p>
        </motion.div>

      </div>

      {/* CHARTS SECTION */}
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LINE CHART PLACEHOLDER */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow border border-gray-300/40 dark:border-gray-700/40"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BarChart3 /> Applications Over Time
          </h2>

          <div className="h-80 flex items-center justify-center text-gray-600 dark:text-gray-300">
            📈 Line Chart Placeholder (Recharts LineChart)
          </div>
        </motion.div>

        {/* PIE CHART PLACEHOLDER */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow border border-gray-300/40 dark:border-gray-700/40"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <PieChart /> Application Breakdown
          </h2>

          <div className="h-80 flex items-center justify-center text-gray-600 dark:text-gray-300">
            🥧 Pie Chart Placeholder (Trademark / Patent / Copyright)
          </div>
        </motion.div>

      </div>

      {/* BOTTOM STATS */}
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* Pending Applications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow border border-gray-300/40 dark:border-gray-700/40"
        >
          <h3 className="text-xl font-semibold mb-2">Pending Applications</h3>
          <p className="text-4xl font-bold">45</p>
        </motion.div>

        {/* Verified Documents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow border border-gray-300/40 dark:border-gray-700/40"
        >
          <h3 className="text-xl font-semibold mb-2">Documents Verified</h3>
          <p className="text-4xl font-bold">260</p>
        </motion.div>

        {/* Monthly Growth */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow border border-gray-300/40 dark:border-gray-700/40"
        >
          <h3 className="text-xl font-semibold mb-2">Monthly Growth</h3>
          <p className="text-4xl font-bold text-green-500">+12%</p>
        </motion.div>

      </div>
    </div>
  );
}
