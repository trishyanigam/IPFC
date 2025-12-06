import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Filter,
  FileText,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function ReviewApplications() {
  const [filter, setFilter] = useState("all");

  const apps = [
    { id: 1, name: "Rohan Sharma", type: "Patent", status: "Pending", date: "02 Feb 2025" },
    { id: 2, name: "Anita Verma", type: "Trademark", status: "In Review", date: "01 Feb 2025" },
    { id: 3, name: "Rahul Singh", type: "Copyright", status: "Rejected", date: "29 Jan 2025" },
    { id: 4, name: "Priya Gupta", type: "Patent", status: "Approved", date: "28 Jan 2025" },
  ];

  const filteredApps =
    filter === "all" ? apps : apps.filter((a) => a.status.toLowerCase() === filter);

  const statusColor = {
    pending: "bg-yellow-500",
    "in review": "bg-blue-500",
    approved: "bg-green-500",
    rejected: "bg-red-500",
  };

  return (
    <div className="pt-16 px-8 max-w-7xl mx-auto dark:text-gray-100">

      {/* PAGE TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-10"
      >
        <h1 className="text-4xl font-bold">Review Applications</h1>

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition">
          <Filter size={18} />
          Filters
        </button>
      </motion.div>

      {/* FILTER TABS */}
      <div className="flex gap-4 mb-6 text-sm">
        {["all", "pending", "in review", "approved", "rejected"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-xl transition ${
              filter === tab
                ? "bg-purple-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* SEARCH BAR */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-3 text-gray-500" size={18} />
        <input
          type="text"
          placeholder="Search applications..."
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300/40 dark:border-gray-700/40 focus:ring-2 focus:ring-purple-500 outline-none"
        />
      </div>

      {/* APPLICATION TABLE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow border border-gray-300/40 dark:border-gray-700/40 overflow-hidden"
      >
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
              <th className="p-4">Applicant</th>
              <th className="p-4">Application Type</th>
              <th className="p-4">Submitted On</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredApps.map((app) => (
              <motion.tr
                key={app.id}
                whileHover={{ scale: 1.01 }}
                className="border-b dark:border-gray-700 hover:bg-gray-200/60 dark:hover:bg-gray-700/60 transition"
              >
                <td className="p-4 flex items-center gap-3">
                  <FileText className="text-purple-500" size={20} />
                  <span className="font-medium">{app.name}</span>
                </td>

                <td className="p-4">{app.type}</td>
                <td className="p-4">{app.date}</td>

                <td className="p-4">
                  <span
                    className={`
                      px-3 py-1 rounded-full text-white text-sm
                      ${statusColor[app.status.toLowerCase()]}
                    `}
                  >
                    {app.status}
                  </span>
                </td>

                <td className="p-4 text-right">
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                    View Details
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}
