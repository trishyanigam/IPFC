// import React from "react";
// import { motion } from "framer-motion";
// import {
//   Users,
//   FileText,
//   Clock,
//   TrendingUp,
//   CheckCircle,
//   PieChart,
//   ShieldCheck,
//   Layers,
//   ClipboardList,
//   AlertTriangle,
// } from "lucide-react";

// export default function AdminDashboard() {
//   return (
//     <div className="pt-15 px-8 max-w-7xl mx-auto text-gray-900 dark:text-gray-100">

//       {/* HEADER */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="p-8 rounded-2xl bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 shadow-xl text-white mb-12"
//       >
//         <h1 className="text-4xl font-bold">Admin Dashboard</h1>
//         <p className="text-lg mt-2 opacity-90">
//           Overview of applications, users, verification progress, and system analytics.
//         </p>
//       </motion.div>

//       {/* KPI CARDS */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

//         {/* KPI 1 */}
//         <motion.div
//           whileHover={{ scale: 1.04 }}
//           transition={{ type: "spring", stiffness: 150 }}
//           className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-md border border-gray-300/40 dark:border-gray-700/40"
//         >
//           <Users className="size-10 text-blue-500 mb-3" />
//           <h2 className="text-lg font-semibold">Total Applicants</h2>
//           <p className="text-4xl font-extrabold mt-2">120</p>
//         </motion.div>

//         {/* KPI 2 */}
//         <motion.div
//           whileHover={{ scale: 1.04 }}
//           transition={{ type: "spring", stiffness: 150 }}
//           className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-md border border-gray-300/40 dark:border-gray-700/40"
//         >
//           <FileText className="size-10 text-purple-500 mb-3" />
//           <h2 className="text-lg font-semibold">Applications Submitted</h2>
//           <p className="text-4xl font-extrabold mt-2">310</p>
//         </motion.div>

//         {/* KPI 3 */}
//         <motion.div
//           whileHover={{ scale: 1.04 }}
//           transition={{ type: "spring", stiffness: 150 }}
//           className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-md border border-gray-300/40 dark:border-gray-700/40"
//         >
//           <Clock className="size-10 text-orange-500 mb-3" />
//           <h2 className="text-lg font-semibold">Pending Reviews</h2>
//           <p className="text-4xl font-extrabold mt-2">45</p>
//         </motion.div>

//         {/* KPI 4 */}
//         <motion.div
//           whileHover={{ scale: 1.04 }}
//           transition={{ type: "spring", stiffness: 150 }}
//           className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-md border border-gray-300/40 dark:border-gray-700/40"
//         >
//           <TrendingUp className="size-10 text-green-500 mb-3" />
//           <h2 className="text-lg font-semibold">Approval Rate</h2>
//           <p className="text-4xl font-extrabold mt-2">78%</p>
//         </motion.div>

//       </div>

//       {/* ANALYTICS SECTION */}
//       <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-10">

//         {/* SPARKLINE TRENDS */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="col-span-2 bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow border border-gray-300/40 dark:border-gray-700/40"
//         >
//           <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
//             <TrendingUp /> Application Trends
//           </h2>

//           <div className="h-72 flex items-center justify-center text-gray-700 dark:text-gray-300">
//             📈 Trend chart will appear here (Recharts AreaChart)
//           </div>
//         </motion.div>

//         {/* APPLICATION DISTRIBUTION PIE */}
//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow border border-gray-300/40 dark:border-gray-700/40"
//         >
//           <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
//             <PieChart /> Application Categories
//           </h2>

//           <div className="h-72 flex items-center justify-center text-gray-700 dark:text-gray-300">
//             🥧 Pie chart placeholder (Patent / Trademark / Copyright)
//           </div>
//         </motion.div>

//       </div>

//       {/* LOWER GRID: VERIFICATION PROGRESS + SYSTEM STATUS + TASKS */}
//       <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-10">

//         {/* DOCUMENT VERIFICATION PROGRESS */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow border border-gray-300/40 dark:border-gray-700/40"
//         >
//           <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
//             <ShieldCheck /> Verification Progress
//           </h2>

//           <p className="font-semibold mb-2">Documents Verified: 260 / 310</p>

//           <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
//             <div className="h-full bg-green-500 rounded-full w-[84%]"></div>
//           </div>
//         </motion.div>

//         {/* SYSTEM HEALTH */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow border border-gray-300/40 dark:border-gray-700/40"
//         >
//           <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
//             <Layers /> System Health
//           </h2>

//           <ul className="space-y-3">
//             <li className="flex items-center gap-3">
//               <span className="w-3 h-3 bg-green-500 rounded-full"></span>
//               Database Connection Stable
//             </li>
//             <li className="flex items-center gap-3">
//               <span className="w-3 h-3 bg-green-500 rounded-full"></span>
//               Authentication Working Smoothly
//             </li>
//             <li className="flex items-center gap-3">
//               <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
//               High Number of Pending Reviews
//             </li>
//           </ul>
//         </motion.div>

//         {/* ADMIN TASKS */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow border border-gray-300/40 dark:border-gray-700/40"
//         >
//           <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
//             <ClipboardList /> Pending Tasks
//           </h2>

//           <ul className="space-y-3 text-gray-700 dark:text-gray-300">
//             <li className="flex items-center gap-3">
//               <AlertTriangle className="text-orange-500" />
//               Review 45 pending applications
//             </li>
//             <li className="flex items-center gap-3">
//               <CheckCircle className="text-green-500" />
//               Verify uploaded documents
//             </li>
//             <li className="flex items-center gap-3">
//               <Users className="text-blue-500" />
//               Check newly registered applicants
//             </li>
//           </ul>
//         </motion.div>

//       </div>
//     </div>
//   );
// }


// src/pages/admin/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import { Users, FileText, Clock, TrendingUp } from "lucide-react";
import api from "../../services/api";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ totalApplicants: 0, applicationsSubmitted: 0, pendingReviews: 0, approvalRate: "0%" });
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const appsRes = await api.get("/applications/all");
      const usersRes = await api.get("/users");
      const total = appsRes.data.length;
      const pending = appsRes.data.filter(a => a.status === "pending" || a.status === "Pending").length;
      const approved = appsRes.data.filter(a => a.status === "approved" || a.status === "Approved").length;
      const approvalRate = total ? `${Math.round((approved / total) * 100)}%` : "0%";
      setStats({
        totalApplicants: usersRes.data.length,
        applicationsSubmitted: total,
        pendingReviews: pending,
        approvalRate,
      });
    } catch (err) {
      console.error(err);
    } finally { setLoading(false); }
  };

  useEffect(() => {
    load();
    const interval = setInterval(load, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-15 px-8 max-w-7xl mx-auto">
      <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 text-white mb-12">
        <h1 className="text-4xl font-bold">Admin Dashboard</h1>
        <p className="text-lg mt-2 opacity-90">Overview of applications, users, verification progress, and system analytics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Kpi icon={<Users />} label="Total Applicants" value={loading ? "..." : stats.totalApplicants} />
        <Kpi icon={<FileText />} label="Applications Submitted" value={loading ? "..." : stats.applicationsSubmitted} />
        <Kpi icon={<Clock />} label="Pending Reviews" value={loading ? "..." : stats.pendingReviews} />
        <Kpi icon={<TrendingUp />} label="Approval Rate" value={loading ? "..." : stats.approvalRate} />
      </div>
    </div>
  );
}

function Kpi({ icon, label, value }) {
  return (
    <div className="p-6 rounded-2xl bg-gray-100">
      <div className="mb-3">{icon}</div>
      <h2 className="text-lg font-semibold">{label}</h2>
      <p className="text-4xl font-extrabold mt-2">{value}</p>
    </div>
  );
}
