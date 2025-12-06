import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  FileCheck,
  FileX,
  File,
  Filter,
} from "lucide-react";

export default function VerifyDocuments() {
  const [filter, setFilter] = useState("all");

  const docs = [
    {
      id: 1,
      name: "Amit Kumar",
      docName: "ID Proof",
      preview: "https://via.placeholder.com/150",
      status: "Pending",
    },
    {
      id: 2,
      name: "Priya Sharma",
      docName: "Address Proof",
      preview: "https://via.placeholder.com/150",
      status: "Verified",
    },
    {
      id: 3,
      name: "Rohan Gupta",
      docName: "Aadhar Card",
      preview: "https://via.placeholder.com/150",
      status: "Rejected",
    },
  ];

  const filteredDocs =
    filter === "all"
      ? docs
      : docs.filter((d) => d.status.toLowerCase() === filter);

  const statusColor = {
    pending: "bg-yellow-500",
    verified: "bg-green-600",
    rejected: "bg-red-600",
  };

  return (
    <div className="pt-16 px-8 max-w-7xl mx-auto dark:text-white">

      {/* PAGE TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-10"
      >
        <h1 className="text-4xl font-bold">Verify Documents</h1>

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition">
          <Filter size={18} />
          Filters
        </button>
      </motion.div>

      {/* FILTER TABS */}
      <div className="flex gap-4 mb-6 text-sm">
        {["all", "pending", "verified", "rejected"].map((tab) => (
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
          placeholder="Search documents..."
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300/40 dark:border-gray-700/40 focus:ring-2 focus:ring-purple-500 outline-none"
        />
      </div>

      {/* DOCUMENT CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredDocs.map((doc) => (
          <motion.div
            key={doc.id}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow border border-gray-300/40 dark:border-gray-700/40"
          >

            {/* Document Preview */}
            <img
              src={doc.preview}
              alt="document preview"
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            {/* User & Document Info */}
            <h2 className="text-xl font-semibold">{doc.name}</h2>
            <p className="text-gray-600 dark:text-gray-300">{doc.docName}</p>

            {/* STATUS BADGE */}
            <span
              className={`
                inline-block mt-3 px-4 py-1 text-white rounded-full text-sm
                ${statusColor[doc.status.toLowerCase()]}
              `}
            >
              {doc.status}
            </span>

            {/* BUTTONS */}
            <div className="flex gap-3 mt-5">
              <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition">
                <FileCheck size={18} />
                Approve
              </button>

              <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition">
                <FileX size={18} />
                Reject
              </button>
            </div>

          </motion.div>
        ))}

      </div>
    </div>
  );
}
