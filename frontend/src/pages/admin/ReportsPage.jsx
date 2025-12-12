// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Download,
//   TrendingUp,
//   TrendingDown,
//   BarChart3,
//   PieChart,
//   Calendar,
// } from "lucide-react";

// export default function ReportsPage() {
//   const [filter, setFilter] = useState("monthly");

//   return (
//     <div className="pt-16 px-8 max-w-7xl mx-auto dark:text-white">

//       {/* PAGE HEADER */}
//       <motion.div
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="flex justify-between items-center mb-10"
//       >
//         <div>
//           <h1 className="text-4xl font-bold">Reports & Analytics</h1>
//           <p className="text-gray-600 dark:text-gray-400 mt-1">
//             Insights on applications, approval rates, and workflow efficiency.
//           </p>
//         </div>

//         <button className="flex items-center gap-2 px-5 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition shadow-md">
//           <Download size={18} /> Export Report
//         </button>
//       </motion.div>

//       {/* FILTER TABS */}
//       <div className="flex gap-4 mb-8 text-sm">
//         {["monthly", "quarterly", "yearly"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setFilter(tab)}
//             className={`px-4 py-2 rounded-xl transition flex items-center gap-2 ${
//               filter === tab
//                 ? "bg-purple-600 text-white"
//                 : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
//             }`}
//           >
//             <Calendar size={16} /> {tab.toUpperCase()}
//           </button>
//         ))}
//       </div>

//       {/* KPI CARDS */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

//         {/* Total Applications */}
//         <motion.div
//           whileHover={{ scale: 1.04 }}
//           className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-300/40 dark:border-gray-700/40 shadow"
//         >
//           <BarChart3 className="text-purple-500 size-10 mb-3" />
//           <h2 className="text-lg font-semibold">Total Applications</h2>
//           <p className="text-4xl font-extrabold mt-2">310</p>
//           <p className="text-green-500 flex items-center gap-1 mt-2">
//             <TrendingUp size={16} /> +12% from last month
//           </p>
//         </motion.div>

//         {/* Approval Rate */}
//         <motion.div
//           whileHover={{ scale: 1.04 }}
//           className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-300/40 dark:border-gray-700/40 shadow"
//         >
//           <PieChart className="text-blue-500 size-10 mb-3" />
//           <h2 className="text-lg font-semibold">Approval Rate</h2>
//           <p className="text-4xl font-extrabold mt-2">78%</p>
//           <p className="text-red-500 flex items-center gap-1 mt-2">
//             <TrendingDown size={16} /> -3% from last month
//           </p>
//         </motion.div>

//         {/* Avg Processing Time */}
//         <motion.div
//           whileHover={{ scale: 1.04 }}
//           className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 border border-gray-300/40 dark:border-gray-700/40 shadow"
//         >
//           <Calendar className="text-green-500 size-10 mb-3" />
//           <h2 className="text-lg font-semibold">Avg Processing Time</h2>
//           <p className="text-4xl font-extrabold mt-2">5.2 Days</p>
//           <p className="text-green-500 flex items-center gap-1 mt-2">
//             <TrendingUp size={16} /> Improved by 1.1 days
//           </p>
//         </motion.div>

//       </div>

//       {/* CHARTS SECTION */}
//       <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10">

//         {/* LINE CHART PLACEHOLDER */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow border border-gray-300/40 dark:border-gray-700/40"
//         >
//           <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
//             <BarChart3 /> Applications Over Time
//           </h2>

//           <div className="h-80 flex items-center justify-center text-gray-600 dark:text-gray-300">
//             📈 Line Chart Placeholder (Recharts LineChart)
//           </div>
//         </motion.div>

//         {/* PIE CHART PLACEHOLDER */}
//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow border border-gray-300/40 dark:border-gray-700/40"
//         >
//           <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
//             <PieChart /> Application Breakdown
//           </h2>

//           <div className="h-80 flex items-center justify-center text-gray-600 dark:text-gray-300">
//             🥧 Pie Chart Placeholder (Trademark / Patent / Copyright)
//           </div>
//         </motion.div>

//       </div>

//       {/* BOTTOM STATS */}
//       <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-10">

//         {/* Pending Applications */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow border border-gray-300/40 dark:border-gray-700/40"
//         >
//           <h3 className="text-xl font-semibold mb-2">Pending Applications</h3>
//           <p className="text-4xl font-bold">45</p>
//         </motion.div>

//         {/* Verified Documents */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow border border-gray-300/40 dark:border-gray-700/40"
//         >
//           <h3 className="text-xl font-semibold mb-2">Documents Verified</h3>
//           <p className="text-4xl font-bold">260</p>
//         </motion.div>

//         {/* Monthly Growth */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow border border-gray-300/40 dark:border-gray-700/40"
//         >
//           <h3 className="text-xl font-semibold mb-2">Monthly Growth</h3>
//           <p className="text-4xl font-bold text-green-500">+12%</p>
//         </motion.div>

//       </div>
//     </div>
//   );
// }

// src/pages/admin/ReportsPage.jsx
// import React, { useState, useEffect } from "react";
// import { Download, BarChart3, PieChart, Calendar } from "lucide-react";
// import api from "../../services/api";

// export default function ReportsPage() {
//   const [filter, setFilter] = useState("monthly");
//   const [report, setReport] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const load = async (f) => {
//     setLoading(true);
//     try {
//       // if your backend doesn't support reports endpoint, compute simple aggregation client-side
//       const res = await api.get("/applications/all");
//       const apps = res.data || [];
//       const total = apps.length;
//       const approved = apps.filter(a => a.status === "approved").length;
//       const avgProcessingTime = "N/A";
//       setReport({ total, approvalRate: total ? `${Math.round((approved/total)*100)}%` : "0%", avgProcessingTime });
//     } catch (err) {
//       console.error(err);
//     } finally { setLoading(false); }
//   };

//   useEffect(() => { load(filter); const interval = setInterval(()=>load(filter), 5000); return ()=>clearInterval(interval); }, [filter]);

//   return (
//     <div className="pt-16 px-8 max-w-7xl mx-auto">
//       <div className="flex justify-between items-center mb-10">
//         <div>
//           <h1 className="text-4xl font-bold">Reports & Analytics</h1>
//           <p className="text-gray-600 mt-1">Insights on applications, approval rates, and workflow efficiency.</p>
//         </div>
//         <button className="flex items-center gap-2 px-5 py-3 bg-purple-600 text-white rounded-xl"><Download size={18} /> Export Report</button>
//       </div>

//       <div className="flex gap-4 mb-8 text-sm">
//         {["monthly","quarterly","yearly"].map(tab => (
//           <button key={tab} onClick={() => setFilter(tab)} className={`px-4 py-2 rounded-xl ${filter===tab ? "bg-purple-600 text-white" : "bg-gray-200"}`}>{tab.toUpperCase()}</button>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="p-6 rounded-2xl bg-gray-100">
//           <BarChart3 /> <h2 className="text-lg font-semibold">Total Applications</h2>
//           <p className="text-4xl font-extrabold mt-2">{report?.total ?? "..."}</p>
//         </div>

//         <div className="p-6 rounded-2xl bg-gray-100">
//           <PieChart /> <h2 className="text-lg font-semibold">Approval Rate</h2>
//           <p className="text-4xl font-extrabold mt-2">{report?.approvalRate ?? "..."}</p>
//         </div>

//         <div className="p-6 rounded-2xl bg-gray-100">
//           <Calendar /> <h2 className="text-lg font-semibold">Avg Processing Time</h2>
//           <p className="text-4xl font-extrabold mt-2">{report?.avgProcessingTime ?? "..."}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// src/pages/admin/ReportsPage.jsx
// src/pages/admin/ReportsPage.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Download,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Calendar,
} from "lucide-react";
import api from "../../services/api";

// Recharts
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Pie,
  PieChart as RCPieChart,
  Cell,
  Legend,
} from "recharts";

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export default function ReportsPage() {
  const [filter, setFilter] = useState("monthly");
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch analytics data
  const load = async () => {
    setLoading(true);
    try {
      const res = await api.get("/reports");
      setReport(res.data);
    } catch (err) {
      console.error("Report load error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Auto refresh (smooth)
  useEffect(() => {
    load();
    const interval = setInterval(load, 20000);
    return () => clearInterval(interval);
  }, []);

  if (!report) return <p className="pt-16 px-8">Loading...</p>;

  // Prepare Line Chart data
  const lineData = report.timeline.map((t) => ({
    date: new Date(t.date).toLocaleDateString("en-IN"),
    status: t.status,
    value:
      t.status === "approved"
        ? 3
        : t.status === "pending"
        ? 2
        : t.status === "in review"
        ? 1
        : 0,
  }));

  // Prepare Pie Chart data
  const pieData = [
    { name: "Patent", value: report.breakdown?.patent || 0 },
    { name: "Trademark", value: report.breakdown?.trademark || 0 },
    { name: "Copyright", value: report.breakdown?.copyright || 0 },
  ];

  const COLORS = ["#8b5cf6", "#3b82f6", "#f97316"]; // Purple, Blue, Orange

  

  const exportCSV = () => {
  if (!report) return;

  const rows = [
    ["Metric", "Value"],
    ["Total Applications", report.totalApplications],
    ["Approval Rate (%)", report.approvalRate],
    ["Pending Applications", report.pending],
    ["Verified Documents", report.verifiedDocs],
    ["Monthly Growth", report.monthlyNewApps],
    ["Patents", report.breakdown.patent],
    ["Trademarks", report.breakdown.trademark],
    ["Copyright", report.breakdown.copyright],
  ];

  const csvContent = rows.map((r) => r.join(",")).join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "IPAssist_Report.csv";
  link.click();
  URL.revokeObjectURL(url);
};


  const exportPDF = () => {
  if (!report) return;

  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("IPAssist Hub - Report Summary", 14, 18);

  const tableData = [
    ["Total Applications", report.totalApplications],
    ["Approval Rate (%)", report.approvalRate],
    ["Pending Applications", report.pending],
    ["Verified Documents", report.verifiedDocs],
    ["Monthly Growth", report.monthlyNewApps],
    ["Patents", report.breakdown.patent],
    ["Trademarks", report.breakdown.trademark],
    ["Copyright", report.breakdown.copyright],
  ];

   autoTable(doc, {
    startY: 30,
    head: [["Metric", "Value"]],
    body: tableData,
  });



  doc.save("IPAssist_Report.pdf");
};


  return (
    <div className="pt-16 px-8 max-w-7xl mx-auto dark:text-white">
      {/* HEADER */}
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

        <div className="flex gap-3">
  <button
    onClick={exportCSV}
    className="flex items-center gap-2 px-5 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition shadow-md"
  >
    <Download size={18} /> Export CSV
  </button>

  <button
    onClick={exportPDF}
    className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition shadow-md"
  >
    <Download size={18} /> Export PDF
  </button>
</div>

      </motion.div>

      {/* FILTER TABS */}
      <div className="flex gap-4 mb-8 text-sm">
        {["monthly", "quarterly", "yearly"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-xl flex items-center gap-2 ${
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
          className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow border border-gray-700/40"
        >
          <BarChart3 className="text-purple-500 size-10 mb-3" />
          <h2 className="text-lg font-semibold">Total Applications</h2>
          <p className="text-4xl font-extrabold mt-2">
            {report.totalApplications}
          </p>
          <p className="text-green-500 flex items-center gap-1 mt-2">
            <TrendingUp size={16} /> Live Count
          </p>
        </motion.div>

        {/* Approval Rate */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow border border-gray-700/40"
        >
          <PieChart className="text-blue-500 size-10 mb-3" />
          <h2 className="text-lg font-semibold">Approval Rate</h2>
          <p className="text-4xl font-extrabold mt-2">{report.approvalRate}%</p>
          <p className="text-red-500 flex items-center gap-1 mt-2">
            <TrendingDown size={16} /> Compared to last period
          </p>
        </motion.div>

        {/* Monthly Growth */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-800 shadow border border-gray-700/40"
        >
          <Calendar className="text-green-500 size-10 mb-3" />
          <h2 className="text-lg font-semibold">Monthly Growth</h2>
          <p className="text-4xl font-extrabold mt-2 text-green-500">
            +{report.monthlyNewApps}
          </p>
        </motion.div>
      </div>

      {/* CHARTS */}
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LINE CHART */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow border border-gray-700/40"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <BarChart3 /> Applications Over Time
          </h2>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="date" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#8b5cf6"
                  strokeWidth={3}
                  dot={{ r: 5 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* PIE CHART */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow border border-gray-700/40"
        >
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <PieChart /> Application Breakdown
          </h2>

          <div className="h-80 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RCPieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Legend />
              </RCPieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM STATS */}
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Pending */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow border border-gray-700/40"
        >
          <h3 className="text-xl font-semibold mb-2">Pending Applications</h3>
          <p className="text-4xl font-bold">{report.pending}</p>
        </motion.div>

        {/* Verified Docs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow border border-gray-700/40"
        >
          <h3 className="text-xl font-semibold mb-2">Documents Verified</h3>
          <p className="text-4xl font-bold">{report.verifiedDocs}</p>
        </motion.div>

        {/* Monthly Growth */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-6 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow border border-gray-700/40"
        >
          <h3 className="text-xl font-semibold mb-2">Monthly Growth</h3>
          <p className="text-4xl font-bold text-green-500">
            +{report.monthlyNewApps}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
