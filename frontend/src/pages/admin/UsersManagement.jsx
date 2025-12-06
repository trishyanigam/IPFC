import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Shield,
  Trash2,
  Ban,
  CheckCircle,
  User,
} from "lucide-react";

export default function UsersManagement() {
  const [filter, setFilter] = useState("all");

  const users = [
    {
      id: 1,
      name: "Rahul Singh",
      email: "rahul@example.com",
      role: "Applicant",
      status: "Active",
    },
    {
      id: 2,
      name: "Ananya Gupta",
      email: "ananya@example.com",
      role: "Applicant",
      status: "Blocked",
    },
    {
      id: 3,
      name: "Admin Two",
      email: "admin2@example.com",
      role: "Admin",
      status: "Active",
    },
  ];

  const filtered =
    filter === "all"
      ? users
      : users.filter((u) => u.role.toLowerCase() === filter);

  const statusColor = {
    active: "bg-green-600",
    blocked: "bg-red-600",
  };

  return (
    <div className="pt-16 px-8 max-w-7xl mx-auto dark:text-white">

      {/* PAGE TITLE */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-10"
      >
        <h1 className="text-4xl font-bold">Users Management</h1>
      </motion.div>

      {/* FILTER TABS */}
      <div className="flex gap-4 mb-6 text-sm">
        {["all", "applicant", "admin"].map((tab) => (
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
          placeholder="Search users..."
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300/40 dark:border-gray-700/40 focus:ring-2 focus:ring-purple-500 outline-none"
        />
      </div>

      {/* USERS TABLE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow border border-gray-300/40 dark:border-gray-700/40 overflow-hidden"
      >
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
              <th className="p-4">User</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
              <th className="p-4">Status</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((user) => {
              const isAdmin = user.role === "Admin";

              return (
                <motion.tr
                  key={user.id}
                  whileHover={{ scale: 1.01 }}
                  className="border-b dark:border-gray-700 hover:bg-gray-200/60 dark:hover:bg-gray-700/60 transition"
                >
                  {/* NAME + AVATAR */}
                  <td className="p-4 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-600 text-white flex items-center justify-center font-semibold text-lg">
                      {user.name.charAt(0)}
                    </div>
                    <span className="font-medium">{user.name}</span>
                  </td>

                  <td className="p-4">{user.email}</td>

                  {/* ROLE BADGE */}
                  <td className="p-4 flex items-center gap-2">
                    {isAdmin ? (
                      <Shield className="text-blue-500" size={18} />
                    ) : (
                      <User className="text-purple-500" size={18} />
                    )}
                    {user.role}
                  </td>

                  {/* STATUS */}
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm ${
                        statusColor[user.status.toLowerCase()]
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  {/* ACTION BUTTONS */}
                  <td className="p-4 text-right flex gap-3 justify-end">

                    {/* If ADMIN → no actions allowed */}
                    {isAdmin ? (
                      <span className="text-gray-400 text-sm italic">
                        No actions allowed
                      </span>
                    ) : (
                      <>
                        {/* Block / Unblock */}
                        <button
                          className={`px-3 py-1 rounded-lg flex items-center gap-1 transition text-white ${
                            user.status === "Active"
                              ? "bg-red-600 hover:bg-red-700"
                              : "bg-green-600 hover:bg-green-700"
                          }`}
                        >
                          {user.status === "Active" ? (
                            <>
                              <Ban size={16} /> Block
                            </>
                          ) : (
                            <>
                              <CheckCircle size={16} /> Unblock
                            </>
                          )}
                        </button>

                        {/* Delete */}
                        <button className="px-3 py-1 bg-gray-300 dark:bg-gray-600 text-black dark:text-white rounded-lg hover:bg-gray-400 dark:hover:bg-gray-500 transition flex items-center gap-1">
                          <Trash2 size={16} />
                          Delete
                        </button>
                      </>
                    )}

                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}
