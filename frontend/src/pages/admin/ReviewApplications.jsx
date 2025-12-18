// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Search,
//   Filter,
//   FileText,
//   Clock,
//   CheckCircle,
//   XCircle,
// } from "lucide-react";

// export default function ReviewApplications() {
//   const [filter, setFilter] = useState("all");

//   const apps = [
//     { id: 1, name: "Rohan Sharma", type: "Patent", status: "Pending", date: "02 Feb 2025" },
//     { id: 2, name: "Anita Verma", type: "Trademark", status: "In Review", date: "01 Feb 2025" },
//     { id: 3, name: "Rahul Singh", type: "Copyright", status: "Rejected", date: "29 Jan 2025" },
//     { id: 4, name: "Priya Gupta", type: "Patent", status: "Approved", date: "28 Jan 2025" },
//   ];

//   const filteredApps =
//     filter === "all" ? apps : apps.filter((a) => a.status.toLowerCase() === filter);

//   const statusColor = {
//     pending: "bg-yellow-500",
//     "in review": "bg-blue-500",
//     approved: "bg-green-500",
//     rejected: "bg-red-500",
//   };

//   return (
//     <div className="pt-16 px-8 max-w-7xl mx-auto dark:text-gray-100">

//       {/* PAGE TITLE */}
//       <motion.div
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="flex justify-between items-center mb-10"
//       >
//         <h1 className="text-4xl font-bold">Review Applications</h1>

//         <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition">
//           <Filter size={18} />
//           Filters
//         </button>
//       </motion.div>

//       {/* FILTER TABS */}
//       <div className="flex gap-4 mb-6 text-sm">
//         {["all", "pending", "in review", "approved", "rejected"].map((tab) => (
//           <button
//             key={tab}
//             onClick={() => setFilter(tab)}
//             className={`px-4 py-2 rounded-xl transition ${
//               filter === tab
//                 ? "bg-purple-600 text-white"
//                 : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
//             }`}
//           >
//             {tab.toUpperCase()}
//           </button>
//         ))}
//       </div>

//       {/* SEARCH BAR */}
//       <div className="relative mb-8">
//         <Search className="absolute left-3 top-3 text-gray-500" size={18} />
//         <input
//           type="text"
//           placeholder="Search applications..."
//           className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300/40 dark:border-gray-700/40 focus:ring-2 focus:ring-purple-500 outline-none"
//         />
//       </div>

//       {/* APPLICATION TABLE */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow border border-gray-300/40 dark:border-gray-700/40 overflow-hidden"
//       >
//         <table className="w-full text-left">
//           <thead>
//             <tr className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">
//               <th className="p-4">Applicant</th>
//               <th className="p-4">Application Type</th>
//               <th className="p-4">Submitted On</th>
//               <th className="p-4">Status</th>
//               <th className="p-4 text-right">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {filteredApps.map((app) => (
//               <motion.tr
//                 key={app.id}
//                 whileHover={{ scale: 1.01 }}
//                 className="border-b dark:border-gray-700 hover:bg-gray-200/60 dark:hover:bg-gray-700/60 transition"
//               >
//                 <td className="p-4 flex items-center gap-3">
//                   <FileText className="text-purple-500" size={20} />
//                   <span className="font-medium">{app.name}</span>
//                 </td>

//                 <td className="p-4">{app.type}</td>
//                 <td className="p-4">{app.date}</td>

//                 <td className="p-4">
//                   <span
//                     className={`
//                       px-3 py-1 rounded-full text-white text-sm
//                       ${statusColor[app.status.toLowerCase()]}
//                     `}
//                   >
//                     {app.status}
//                   </span>
//                 </td>

//                 <td className="p-4 text-right">
//                   <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
//                     View Details
//                   </button>
//                 </td>
//               </motion.tr>
//             ))}
//           </tbody>
//         </table>
//       </motion.div>
//     </div>
//   );
// }

// src/pages/admin/ReviewApplications.jsx
// import React, { useState, useEffect } from "react";
// import api from "../../services/api";
// import toast from "react-hot-toast";

// export default function ReviewApplications() {
//   const [filter, setFilter] = useState("all");
//   const [apps, setApps] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const load = async () => {
//     setLoading(true);
//     try {
//       const res = await api.get("/applications/all");
//       setApps(res.data || []);
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to load applications");
//     } finally { setLoading(false); }
//   };

//   useEffect(() => {
//     load();
//     const interval = setInterval(load, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const updateStatus = async (id, status) => {
//     try {
//       await api.patch(`/applications/${id}/status`, { status });
//       setApps((prev) => prev.map(a => (a._id === id ? { ...a, status } : a)));
//       toast.success(`Application ${status}`);
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to update");
//     }
//   };

//   const filtered = apps.filter(a => filter === "all" ? true : a.status.toLowerCase() === filter);

//   return (
//     <div className="pt-16 px-8 max-w-7xl mx-auto">
//       <div className="flex justify-between items-center mb-10">
//         <h1 className="text-4xl font-bold">Review Applications</h1>
//         <button onClick={load} className="px-4 py-2 rounded-lg bg-purple-600 text-white">Refresh</button>
//       </div>

//       <div className="flex gap-4 mb-6">
//         {["all","pending","in review","approved","rejected"].map(tab => (
//           <button key={tab} onClick={() => setFilter(tab)} className={`px-4 py-2 rounded-xl ${filter===tab ? "bg-purple-600 text-white" : "bg-gray-200"}`}>{tab.toUpperCase()}</button>
//         ))}
//       </div>

//       <div className="bg-gray-100 rounded-2xl shadow">
//         <table className="w-full text-left">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="p-4">Applicant</th>
//               <th className="p-4">Type</th>
//               <th className="p-4">Submitted On</th>
//               <th className="p-4">Status</th>
//               <th className="p-4 text-right">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filtered.map(app => (
//               <tr key={app._id} className="border-b hover:bg-gray-200">
//                 <td className="p-4">{app.applicantEmail || app.applicantUid}</td>
//                 <td className="p-4">{app.ipType}</td>
//                 <td className="p-4">{new Date(app.createdAt).toLocaleDateString()}</td>
//                 <td className="p-4"><span className="px-3 py-1 rounded-full text-white text-sm" style={{background: statusColor(app.status)}}>{app.status}</span></td>
//                 <td className="p-4 text-right">
//                   <div className="flex gap-2 justify-end">
//                     <button onClick={() => updateStatus(app._id, "under review")} className="px-3 py-1 bg-blue-500 text-white rounded">In Review</button>
//                     <button onClick={() => updateStatus(app._id, "approved")} className="px-3 py-1 bg-green-600 text-white rounded">Approve</button>
//                     <button onClick={() => updateStatus(app._id, "rejected")} className="px-3 py-1 bg-red-600 text-white rounded">Reject</button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// function statusColor(status) {
//   const s = (status||"").toLowerCase();
//   if (s.includes("pending")) return "#f59e0b";
//   if (s.includes("review")) return "#3b82f6";
//   if (s.includes("approved")) return "#10b981";
//   if (s.includes("rejected")) return "#ef4444";
//   return "#9ca3af";
// }

// src/pages/admin/ReviewApplications.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, Filter, FileText } from "lucide-react";
import api from "../../services/api";
import toast from "react-hot-toast";

export default function ReviewApplications() {
  const [filter, setFilter] = useState("all");
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const load = async () => {
    setLoading(true);
    try {
      const res = await api.get("/applications/all");
      setApps(res.data || []);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load applications");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    const interval = setInterval(load, 50000);
    return () => clearInterval(interval);
  }, []);

  const updateStatus = async (id, status) => {
    try {
      await api.patch(`/applications/${id}/status`, { status });
      setApps((prev) =>
        prev.map((a) => (a._id === id ? { ...a, status } : a))
      );
      toast.success(`Application marked as ${status}`);
    } catch (err) {
      console.error(err);
      toast.error("Failed to update status");
    }
  };

  const statusColor = {
    pending: "bg-yellow-500",
    approved: "bg-green-500",
    rejected: "bg-red-500",
  };

  const filteredApps = apps
    .filter((a) =>
      filter === "all" ? true : a.status?.toLowerCase() === filter
    )
    .filter((a) =>
      search.trim() === ""
        ? true
        : a.title?.toLowerCase().includes(search.toLowerCase()) ||
          a.applicantEmail?.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="pt-16 px-8 max-w-7xl mx-auto dark:text-gray-100">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-10"
      >
        <h1 className="text-4xl font-bold">Review Applications</h1>

        <button
          onClick={load}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition"
        >
          <Filter size={18} />
          Refresh
        </button>
      </motion.div>

      {/* FILTER TABS */}
      <div className="flex gap-4 mb-6 text-sm">
        {["all", "pending", "approved", "rejected"].map((tab) => (
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

      {/* SEARCH */}
      <div className="relative mb-8">
        <Search className="absolute left-3 top-3 text-gray-500" size={18} />
        <input
          type="text"
          placeholder="Search applications..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300/40 dark:border-gray-700/40 focus:ring-2 focus:ring-purple-500 outline-none"
        />
      </div>

      {/* TABLE */}
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
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="p-6 text-center text-gray-500">
                  Loading applications...
                </td>
              </tr>
            ) : filteredApps.length === 0 ? (
              <tr>
                <td colSpan="5" className="p-6 text-center text-gray-500">
                  No applications found.
                </td>
              </tr>
            ) : (
              filteredApps.map((app) => (
                <motion.tr
                  key={app._id}
                  whileHover={{ scale: 1.01 }}
                  className="border-b dark:border-gray-700 hover:bg-gray-200/60 dark:hover:bg-gray-700/60 transition"
                >
                  <td className="p-4 flex items-center gap-3">
                    <FileText className="text-purple-500" size={20} />
                    <span className="font-medium">
                      {app.applicantEmail || app.applicantUid}
                    </span>
                  </td>

                  <td className="p-4">{app.ipType}</td>

                  <td className="p-4">
                    {new Date(app.createdAt).toLocaleDateString()}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm ${
                        statusColor[app.status?.toLowerCase()] || "bg-gray-500"
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>

                  {/* ACTIONS */}
                  <td className="p-4 text-center">
                    <div className="flex gap-6 justify-center flex-wrap">

                      {app.files?.length > 0 ? (
                        <button
                          onClick={() => {
                            const file = app.files[0];
                            window.open(
                              `${import.meta.env.VITE_BACKEND_URL}/uploads/${file.filename}`,
                              "_blank",
                              "noopener,noreferrer"
                            );
                          }}
                          className="px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition"
                        >
                          View Document
                        </button>
                      ) : (
                        <span className="text-gray-400 text-sm">No document</span>
                      )}

                      <button
                        onClick={() => updateStatus(app._id, "approved")}
                        className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() => updateStatus(app._id, "rejected")}
                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
                      >
                        Reject
                      </button>

                    </div>
                  </td>
                </motion.tr>
              ))
            )}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}


