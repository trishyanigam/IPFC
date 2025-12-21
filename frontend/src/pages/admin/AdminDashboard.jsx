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
// import React, { useEffect, useState } from "react";
// import { Users, FileText, Clock, TrendingUp } from "lucide-react";
// import api from "../../services/api";

// export default function AdminDashboard() {
//   const [stats, setStats] = useState({ totalApplicants: 0, applicationsSubmitted: 0, pendingReviews: 0, approvalRate: "0%" });
//   const [loading, setLoading] = useState(true);

//   const load = async () => {
//     setLoading(true);
//     try {
//       const appsRes = await api.get("/applications/all");
//       const usersRes = await api.get("/users");
//       const total = appsRes.data.length;
//       const pending = appsRes.data.filter(a => a.status === "pending" || a.status === "Pending").length;
//       const approved = appsRes.data.filter(a => a.status === "approved" || a.status === "Approved").length;
//       const approvalRate = total ? `${Math.round((approved / total) * 100)}%` : "0%";
//       setStats({
//         totalApplicants: usersRes.data.length,
//         applicationsSubmitted: total,
//         pendingReviews: pending,
//         approvalRate,
//       });
//     } catch (err) {
//       console.error(err);
//     } finally { setLoading(false); }
//   };

//   useEffect(() => {
//     load();
//     const interval = setInterval(load, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="pt-15 px-8 max-w-7xl mx-auto">
//       <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 text-white mb-12">
//         <h1 className="text-4xl font-bold">Admin Dashboard</h1>
//         <p className="text-lg mt-2 opacity-90">Overview of applications, users, verification progress, and system analytics.</p>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//         <Kpi icon={<Users />} label="Total Applicants" value={loading ? "..." : stats.totalApplicants} />
//         <Kpi icon={<FileText />} label="Applications Submitted" value={loading ? "..." : stats.applicationsSubmitted} />
//         <Kpi icon={<Clock />} label="Pending Reviews" value={loading ? "..." : stats.pendingReviews} />
//         <Kpi icon={<TrendingUp />} label="Approval Rate" value={loading ? "..." : stats.approvalRate} />
//       </div>
//     </div>
//   );
// }

// function Kpi({ icon, label, value }) {
//   return (
//     <div className="p-6 rounded-2xl bg-gray-100">
//       <div className="mb-3">{icon}</div>
//       <h2 className="text-lg font-semibold">{label}</h2>
//       <p className="text-4xl font-extrabold mt-2">{value}</p>
//     </div>
//   );
// }

// src/pages/admin/AdminDashboard.jsx
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import FloatingChat from "../../components/chat/FloatingChat";


import { motion } from "framer-motion";
import {
  Users,
  FileText,
  Clock,
  TrendingUp,
  PieChart as PieIcon,
  ShieldCheck,
  Layers,
  ClipboardList,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import api from "../../services/api";

// Recharts imports
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";




export default function AdminDashboard() {

  const { user, role } = useContext(AuthContext);

  const name = user?.displayName?.split("__")[0] || "Admin";
  const email = user?.email;

  const [stats, setStats] = useState({
    totalApplicants: 0,
    applicationsSubmitted: 0,
    pendingReviews: 0,
    approvalRate: "0%",
  });

  const [progress, setProgress] = useState({
    verified: 0,
    totalDocs: 0,
    percent: 0,
  });

  const [trendData, setTrendData] = useState([]); // for AreaChart
  const [pieData, setPieData] = useState([]); // for Donut
  const [loading, setLoading] = useState(true);


  const COLORS = ["#8b5cf6", "#3b82f6", "#f97316"]; // purple, blue, orange


  // load all needed endpoints
  const loadAll = async () => {
    setLoading(true);
    try {
      // parallel requests
      const [appsRes, usersRes, docsRes, reportsRes] = await Promise.all([
        api.get("/applications/all"),
        api.get("/users"),
        api.get("/documents/all"),
        api.get("/reports"),
      ]);

      const apps = Array.isArray(appsRes.data) ? appsRes.data : [];
      const users = Array.isArray(usersRes.data) ? usersRes.data : [];
      const docs = Array.isArray(docsRes.data) ? docsRes.data : [];
      const report = reportsRes.data || {};

      // KPIs
      const totalApps = apps.length;
      const pending = apps.filter(
        (a) =>
          (a.status || "").toLowerCase() === "pending" ||
          (a.status || "").toLowerCase() === "under review"
      ).length;
      const approved = apps.filter(
        (a) => (a.status || "").toLowerCase() === "approved"
      ).length;
      const approvalRate = totalApps
        ? `${Math.round((approved / totalApps) * 100)}%`
        : "0%";

      setStats({
        totalApplicants: users.length,
        applicationsSubmitted: totalApps,
        pendingReviews: pending,
        approvalRate,
      });

      // Documents progress
      const totalDocs = docs.length;
      const verified = docs.filter(
        (d) => (d.status || "").toLowerCase() === "verified"
      ).length;
      const percent = totalDocs ? Math.round((verified / totalDocs) * 100) : 0;
      setProgress({ verified, totalDocs, percent });

      // Trend data: prefer report.timeline if present, otherwise derive from applications
      let timeline = [];
      if (Array.isArray(report.timeline) && report.timeline.length > 0) {
        // transform timeline (array of {date, status}) into counts per date
        // We count submissions per date
        const counts = {};
        report.timeline.forEach((t) => {
          const d = t.date ? new Date(t.date) : null;
          if (!d) return;
          const key = d.toLocaleDateString("en-IN"); // dd/mm/yyyy
          counts[key] = (counts[key] || 0) + 1;
        });
        timeline = Object.keys(counts)
          .sort((a, b) => {
            // parse dd/mm/yyyy to Date for sort
            const [da, ma, ya] = a.split("/").map(Number);
            const [db, mb, yb] = b.split("/").map(Number);
            return new Date(ya, ma - 1, da) - new Date(yb, mb - 1, db);
          })
          .map((k) => ({ date: k, applications: counts[k] }));
      } else {
        // fallback: derive from applications' createdAt
        const counts = {};
        apps.forEach((a) => {
          const d = a.createdAt ? new Date(a.createdAt) : null;
          if (!d) return;
          const key = d.toLocaleDateString("en-IN");
          counts[key] = (counts[key] || 0) + 1;
        });
        timeline = Object.keys(counts)
          .sort((a, b) => {
            const [da, ma, ya] = a.split("/").map(Number);
            const [db, mb, yb] = b.split("/").map(Number);
            return new Date(ya, ma - 1, da) - new Date(yb, mb - 1, db);
          })
          .map((k) => ({ date: k, applications: counts[k] }));
      }
      setTrendData(timeline);

      // Pie / Donut data: prefer report.breakdown if available
      if (report.breakdown) {
        setPieData([
          { name: "Patent", value: report.breakdown.patent || 0 },
          { name: "Trademark", value: report.breakdown.trademark || 0 },
          { name: "Copyright", value: report.breakdown.copyright || 0 },
        ]);
      } else {
        // derive from apps
        const patent = apps.filter(
          (a) => (a.ipType || "").toLowerCase() === "patent"
        ).length;
        const trademark = apps.filter(
          (a) => (a.ipType || "").toLowerCase() === "trademark"
        ).length;
        const copyright = apps.filter(
          (a) => (a.ipType || "").toLowerCase() === "copyright"
        ).length;
        setPieData([
          { name: "Patent", value: patent },
          { name: "Trademark", value: trademark },
          { name: "Copyright", value: copyright },
        ]);
      }
    } catch (err) {
      console.error("AdminDashboard load error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAll();
    const interval = setInterval(loadAll, 20000); // refresh every 20s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-15 px-8 max-w-7xl mx-auto text-gray-900 dark:text-gray-100">
      <FloatingChat />
      {/* HEADER */}
      <motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="
    p-10 rounded-3xl shadow-2xl
    bg-gradient-to-r from-purple-600/70 via-indigo-600/70 to-blue-600/70
    backdrop-blur-xl border border-white/20
    text-white mb-12
  "
>
  <h1 className="text-4xl font-extrabold tracking-wide">
    Welcome, {name} 👋
  </h1>

  <p className="mt-2 text-lg opacity-90">{email}</p>

  <span
    className="
      mt-5 inline-block px-5 py-1 
      bg-white/20 text-white rounded-full text-sm
      shadow-sm backdrop-blur-md
    "
  >
    Role: {role?.toUpperCase() || "ADMIN"}
  </span>
</motion.div>


      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Kpi
          icon={<Users className="size-10 text-blue-500" />}
          label="Total Applicants"
          value={loading ? "..." : stats.totalApplicants}
        />
        <Kpi
          icon={<FileText className="size-10 text-purple-500" />}
          label="Applications Submitted"
          value={loading ? "..." : stats.applicationsSubmitted}
        />
        <Kpi
          icon={<Clock className="size-10 text-orange-500" />}
          label="Pending Reviews"
          value={loading ? "..." : stats.pendingReviews}
        />
        <Kpi
          icon={<TrendingUp className="size-10 text-green-500" />}
          label="Approval Rate"
          value={loading ? "..." : stats.approvalRate}
        />
      </div>


      {/* ANALYTICS SECTION */}
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* AREA CHART (Trend) */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="col-span-2 bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow border border-gray-300/40 dark:border-gray-700/40"
        >
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
            <TrendingUp /> Application Trends
          </h2>

          <div className="h-72">
            {trendData.length === 0 ? (
              <div className="h-full flex items-center justify-center text-gray-700 dark:text-gray-300">
                No trend data available
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={trendData}
                  margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorApps" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#8b5cf6"
                        stopOpacity={0.05}
                      />
                    </linearGradient>
                  </defs>

                  <CartesianGrid strokeDasharray="3 3" stroke="#44444440" />

                  <XAxis dataKey="date" stroke="#ccc" tick={{ fontSize: 12 }} />

                  <YAxis
                    stroke="#ccc"
                    allowDecimals={false}
                    tick={{ fontSize: 12 }}
                  />

                  <Tooltip
                    contentStyle={{
                      background: "#1f2937",
                      border: "1px solid #4b5563",
                      borderRadius: "10px",
                      color: "white",
                    }}
                    labelStyle={{ color: "#a78bfa", fontWeight: "bold" }}
                  />

                  <Area
                    type="monotone"
                    dataKey="applications"
                    stroke="#8b5cf6"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorApps)"
                    dot={{ r: 6, fill: "#8b5cf6" }}
                    activeDot={{ r: 8 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
        </motion.div>

        {/* DONUT PIE CHART */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow border border-gray-300/40 dark:border-gray-700/40"
        >
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
            <PieIcon /> Application Categories
          </h2>

          <div className="h-72 flex items-center justify-center">
            {pieData.reduce((s, p) => s + (p.value || 0), 0) === 0 ? (
              <div className="text-gray-700 dark:text-gray-300">
                No category data
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={4}
                    dataKey="value"
                    label
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </motion.div>
      </div>

      {/* LOWER GRID */}
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* VERIFICATION PROGRESS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow border border-gray-300/40 dark:border-gray-700/40"
        >
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
            <ShieldCheck /> Verification Progress
          </h2>

          <p className="font-semibold mb-2">
            Documents Verified: {progress.verified} / {progress.totalDocs}
          </p>

          <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 rounded-full"
              style={{ width: `${progress.percent}%` }}
            />
          </div>

          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            Last updated just now
          </p>
        </motion.div>

        {/* SYSTEM HEALTH (FAKE / decorative per request) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow border border-gray-300/40 dark:border-gray-700/40"
        >
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
            <Layers /> System Health
          </h2>

          <ul className="space-y-3">
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-green-500 rounded-full" />
              Database Connection Stable
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-green-500 rounded-full" />
              Authentication Working Smoothly
            </li>
            <li className="flex items-center gap-3">
              <span className="w-3 h-3 bg-yellow-500 rounded-full" />
              High Number of Pending Reviews
            </li>
          </ul>
        </motion.div>

        {/* ADMIN TASKS (decorative) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow border border-gray-300/40 dark:border-gray-700/40"
        >
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
            <ClipboardList /> Pending Tasks
          </h2>

          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-3">
              <AlertTriangle className="text-orange-500" />
              Review {stats.pendingReviews} pending applications
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle className="text-green-500" />
              Verify uploaded documents
            </li>
            <li className="flex items-center gap-3">
              <Users className="text-blue-500" />
              Check newly registered applicants
            </li>
          </ul>
        </motion.div>
      </div>
      
    </div>
  );
}

/* KPI Card component */
function Kpi({ icon, label, value }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 150 }}
      className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-md border border-gray-300/40 dark:border-gray-700/40"
    >
      <div className="mb-3">{icon}</div>
      <h2 className="text-lg font-semibold">{label}</h2>
      <p className="text-4xl font-extrabold mt-2">{value}</p>
    </motion.div>
  );
}


