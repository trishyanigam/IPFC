// import React, { useState, useEffect } from "react";
// import { Eye, X, Search, Filter, ChevronDown } from "lucide-react";

// export default function MyApplicationsPage() {
//   // SAMPLE DATA
//   const sampleApps = [
//     {
//       id: "IP-2024-001",
//       title: "AI Smart Helmet",
//       type: "Patent",
//       date: "2024-01-12",
//       status: "Approved",
//       description: "An AI-based helmet that provides accident prediction alerts.",
//     },
//     {
//       id: "IP-2024-002",
//       title: "Brand Logo - Trishya",
//       type: "Trademark",
//       date: "2024-01-25",
//       status: "Pending",
//       description: "Trademark registration for Trishya’s brand identity.",
//     },
//     {
//       id: "IP-2024-003",
//       title: "Automatic Water Dispenser",
//       type: "Design",
//       date: "2024-02-10",
//       status: "Rejected",
//       description: "Innovative design for smart irrigation system.",
//     },
//     {
//       id: "IP-2024-004",
//       title: "Campus Navigation System",
//       type: "Copyright",
//       date: "2024-02-15",
//       status: "Under Review",
//       description: "Mobile app that helps students navigate campus efficiently.",
//     },
//   ];

//   const [apps, setApps] = useState([]);
//   const [search, setSearch] = useState("");
//   const [statusFilter, setStatusFilter] = useState("All");
//   const [sortOrder, setSortOrder] = useState("Newest");
//   const [loading, setLoading] = useState(true);
//   const [selectedApp, setSelectedApp] = useState(null);

//   // Load Data with delay (simulate server)
//   useEffect(() => {
//     setTimeout(() => {
//       setApps(sampleApps);
//       setLoading(false);
//     }, 900);
//   }, []);

//   // Status Colors
//   const statusColors = {
//     Pending: "bg-yellow-100 text-yellow-700 dark:bg-yellow-700/40 dark:text-yellow-100",
//     Approved: "bg-green-100 text-green-700 dark:bg-green-700/40 dark:text-green-100",
//     Rejected: "bg-red-100 text-red-700 dark:bg-red-700/40 dark:text-red-100",
//     "Under Review": "bg-blue-100 text-blue-700 dark:bg-blue-700/40 dark:text-blue-100",
//   };

//   // 🔍 Filter + Search Logic
//   const filteredApps = apps
//     .filter((app) =>
//       statusFilter === "All" ? true : app.status === statusFilter
//     )
//     .filter((app) =>
//       app.title.toLowerCase().includes(search.toLowerCase()) ||
//       app.id.toLowerCase().includes(search.toLowerCase())
//     )
//     .sort((a, b) =>
//       sortOrder === "Newest"
//         ? new Date(b.date) - new Date(a.date)
//         : new Date(a.date) - new Date(b.date)
//     );

//   return (
//     <div className="px-6 max-w-6xl mx-auto">

//       {/* ===== HEADER ===== */}
//       <div className="mt-10 p-12 rounded-3xl shadow-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-900 dark:via-indigo-900 dark:to-blue-900 text-white backdrop-blur-xl border border-white/20 relative overflow-hidden animate-[fadeIn_0.6s_ease]">
//         <h1 className="text-4xl font-extrabold tracking-wide relative z-10">
//           My Applications 📄
//         </h1>
//         <p className="mt-3 text-lg opacity-95 relative z-10">
//           Search, filter, and track your IP submissions efficiently.
//         </p>
//       </div>

//       {/* ===== FILTER BAR ===== */}
//       <div className="mt-10 mb-6 flex flex-wrap items-center gap-4 p-5 rounded-2xl shadow bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-300 dark:border-gray-700 animate-[slideUp_0.6s_ease]">

//         {/* Search Input */}
//         <div className="flex items-center gap-3 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl flex-1">
//           <Search size={20} className="text-gray-500" />
//           <input
//             type="text"
//             placeholder="Search by title or ID..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="bg-transparent focus:outline-none w-full"
//           />
//         </div>

//         {/* Status Filter */}
//         <select
//           value={statusFilter}
//           onChange={(e) => setStatusFilter(e.target.value)}
//           className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
//         >
//           <option value="All">All Status</option>
//           <option value="Pending">Pending</option>
//           <option value="Approved">Approved</option>
//           <option value="Under Review">Under Review</option>
//           <option value="Rejected">Rejected</option>
//         </select>

//         {/* Sort */}
//         <select
//           value={sortOrder}
//           onChange={(e) => setSortOrder(e.target.value)}
//           className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
//         >
//           <option value="Newest">Newest First</option>
//           <option value="Oldest">Oldest First</option>
//         </select>
//       </div>

//       {/* ===== TABLE CARD ===== */}
//       <div className="mt-5 p-10 rounded-3xl shadow-xl bg-white/70 dark:bg-gray-900/60 border border-gray-300 dark:border-gray-700 backdrop-blur-xl">

//         {loading ? (
//           <SkeletonLoader />
//         ) : (
//           <table className="w-full">
//             <thead>
//               <tr className="text-left text-gray-600 dark:text-gray-300 text-sm">
//                 <th className="pb-4">ID</th>
//                 <th className="pb-4">Title</th>
//                 <th className="pb-4">Type</th>
//                 <th className="pb-4">Date</th>
//                 <th className="pb-4">Status</th>
//                 <th className="pb-4">Action</th>
//               </tr>
//             </thead>

//             <tbody>
//               {filteredApps.map((app, index) => (
//                 <tr
//                   key={app.id}
//                   className="
//                     group border-t border-gray-300 dark:border-gray-700 
//                     hover:bg-gray-200/40 dark:hover:bg-gray-800/40 cursor-pointer transition-all
//                     animate-[fadeIn_0.6s_ease]
//                   "
//                   style={{ animationDelay: `${index * 0.1}s` }}
//                 >
//                   <td className="py-4 font-semibold">{app.id}</td>
//                   <td className="py-4">{app.title}</td>
//                   <td className="py-4">{app.type}</td>
//                   <td className="py-4">{app.date}</td>

//                   <td>
//                     <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusColors[app.status]}`}>
//                       {app.status}
//                     </span>
//                   </td>

//                   <td>
//                     <button
//                       onClick={() => setSelectedApp(app)}
//                       className="flex items-center gap-2 px-4 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition shadow-md"
//                     >
//                       <Eye size={18} /> View
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

//       {/* ===== DETAILS MODAL ===== */}
//       {selectedApp && <DetailsModal app={selectedApp} close={() => setSelectedApp(null)} />}
//     </div>
//   );
// }

// /* ---------------------- DETAILS MODAL ---------------------- */
// function DetailsModal({ app, close }) {
//   return (
//     <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 animate-[fadeIn_0.4s_ease]">
//       <div className="bg-white dark:bg-gray-900 p-7 rounded-3xl shadow-2xl w-[90%] max-w-lg animate-[slideUp_0.4s_ease] border border-gray-300 dark:border-gray-700">
        
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold">{app.title}</h2>
//           <button onClick={close} className="text-red-500 hover:text-red-700">
//             <X size={26} />
//           </button>
//         </div>

//         <p><strong>ID:</strong> {app.id}</p>
//         <p><strong>Type:</strong> {app.type}</p>
//         <p><strong>Status:</strong> {app.status}</p>
//         <p><strong>Date:</strong> {app.date}</p>

//         <p className="mt-4 text-gray-700 dark:text-gray-300">
//           {app.description}
//         </p>

//         <button
//           onClick={close}
//           className="mt-6 w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }

// /* ---------------------- SKELETON SHIMMER ---------------------- */
// function SkeletonLoader() {
//   return (
//     <div className="space-y-4 animate-pulse">
//       {[1, 2, 3].map((i) => (
//         <div key={i} className="h-10 bg-gray-300 dark:bg-gray-700 rounded-xl"></div>
//       ))}
//     </div>
//   );
// }


// src/pages/applicant/MyApplicationsPage.jsx

// import React, { useState, useEffect, useRef } from "react";
// import { Eye, Search } from "lucide-react";
// import api from "../../services/api";
// import toast from "react-hot-toast";

// export default function MyApplicationsPage() {
//   const [apps, setApps] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);

//   // track previous applications for detecting status changes
//   const prevAppsRef = useRef([]);
//   const prevDocsRef = useRef([]);

//   const loadEverything = async () => {
//     try {
//       // ---------------------------------------
//       // LOAD APPLICATIONS
//       // ---------------------------------------
//       const resApps = await api.get("/applications/my");
//       const newApps = resApps.data || [];

//       // Detect changes in application status
//       newApps.forEach((app) => {
//         const old = prevAppsRef.current.find((p) => p._id === app._id);
//         if (old && old.status !== app.status) {
//           toast(`${app.title} is now ${app.status}`, {
//             icon:
//               app.status === "approved"
//                 ? "✅"
//                 : app.status === "rejected"
//                 ? "❌"
//                 : "⚠️",
//           });
//         }
//       });

//       prevAppsRef.current = newApps;
//       setApps(newApps);

//       // ---------------------------------------
//       // LOAD DOCUMENTS (so changes update here too)
//       // ---------------------------------------
//       const resDocs = await api.get("/documents/my");
//       const docs = resDocs.data || [];

//       docs.forEach((doc) => {
//         const old = prevDocsRef.current.find((p) => p._id === doc._id);
//         if (old && old.status !== doc.status) {
//           toast(`Document "${doc.name}" is now ${doc.status}`, {
//             icon: doc.status === "verified" ? "📄✔" : "📄❌",
//           });
//         }
//       });

//       prevDocsRef.current = docs;

//       setLoading(false);
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to load application data");
//     }
//   };

//   // Auto-refresh every 5 seconds (same as dashboard)
//   useEffect(() => {
//     loadEverything();
//     const interval = setInterval(loadEverything, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   // -----------------------
//   // STATUS COLOR STYLES
//   // -----------------------
//   const statusStyles = {
//     pending: "bg-yellow-500/20 text-yellow-300 border border-yellow-600",
//     approved: "bg-green-500/20 text-green-300 border border-green-600",
//     rejected: "bg-red-500/20 text-red-300 border border-red-600",
//     "under review": "bg-blue-500/20 text-blue-300 border border-blue-600",
//   };

//   const filteredApps = apps.filter((app) =>
//     app.title.toLowerCase().includes(search.toLowerCase()) ||
//     app._id.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="px-6 max-w-6xl mx-auto">

//       {/* HEADER */}
//       <div className="mt-10 p-10 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-xl">
//         <h1 className="text-4xl font-extrabold flex items-center gap-3">My Applications 📄</h1>
//       </div>

//       {/* SEARCH BAR */}
//       <div className="mt-10 mb-6 flex items-center gap-4 p-5 rounded-2xl bg-white/10 backdrop-blur border border-white/10">
//         <div className="flex items-center gap-3 px-4 py-2 bg-white/10 rounded-xl flex-1">
//           <Search size={20} className="text-gray-300" />
//           <input
//             type="text"
//             placeholder="Search applications..."
//             className="bg-transparent w-full text-white placeholder-gray-400"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* APPLICATION TABLE */}
//       <div className="mt-5 p-10 rounded-3xl bg-white/5 backdrop-blur border border-white/10 shadow-xl">
//         {loading ? (
//           <p className="text-gray-300">Loading...</p>
//         ) : (
//           <table className="w-full text-gray-200">
//             <thead>
//               <tr className="text-left text-gray-400 text-sm border-b border-gray-700">
//                 <th className="pb-4">ID</th>
//                 <th className="pb-4">Title</th>
//                 <th className="pb-4">Type</th>
//                 <th className="pb-4">Date</th>
//                 <th className="pb-4">Status</th>
//                 <th className="pb-4">Action</th>
//               </tr>
//             </thead>

//             <tbody>
//               {filteredApps.map((app) => (
//                 <tr
//                   key={app._id}
//                   className="border-b border-gray-800 hover:bg-white/5 transition"
//                 >
//                   <td className="py-4">{app._id}</td>
//                   <td className="py-4">{app.title}</td>
//                   <td className="py-4">{app.ipType}</td>
//                   <td className="py-4">
//                     {new Date(app.createdAt).toLocaleDateString()}
//                   </td>

//                   {/* Status Badge */}
//                   <td className="py-4">
//                     <span
//                       className={`px-3 py-1 rounded-full text-sm font-medium ${
//                         statusStyles[app.status.toLowerCase()] ||
//                         "bg-gray-500/20 text-gray-300"
//                       }`}
//                     >
//                       {app.status}
//                     </span>
//                   </td>

//                   {/* View Button */}
//                   <td className="py-4">
//                     <button className="px-4 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2 transition">
//                       <Eye size={16} />
//                       View
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }


// src/pages/applicant/MyApplicationsPage.jsx

// import React, { useState, useEffect, useRef } from "react";
// import { Eye, X, Search } from "lucide-react";
// import api from "../../services/api";
// import toast from "react-hot-toast";

// export default function MyApplicationsPage() {
//   const [apps, setApps] = useState([]);
//   const [search, setSearch] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [selectedApp, setSelectedApp] = useState(null);

//   const prevAppsRef = useRef([]);
//   const prevDocsRef = useRef([]);

//   const loadEverything = async () => {
//     try {
//       const resApps = await api.get("/applications/my");
//       const newApps = resApps.data || [];

//       // toast detect changes
//       newApps.forEach((app) => {
//         const old = prevAppsRef.current.find((p) => p._id === app._id);
//         if (old && old.status !== app.status) {
//           toast(`${app.title} is now ${app.status}`, {
//             icon: app.status === "approved" ? "✅" : app.status === "rejected" ? "❌" : "⚠️",
//           });
//         }
//       });

//       prevAppsRef.current = newApps;
//       setApps(newApps);

//       const resDocs = await api.get("/documents/my");
//       const docs = resDocs.data || [];

//       docs.forEach((doc) => {
//         const old = prevDocsRef.current.find((p) => p._id === doc._id);
//         if (old && old.status !== doc.status) {
//           toast(`Document "${doc.name}" is now ${doc.status}`, {
//             icon: doc.status === "verified" ? "📄✔" : "📄❌",
//           });
//         }
//       });

//       prevDocsRef.current = docs;
//       setLoading(false);
//     } catch (err) {
//       toast.error("Failed to load applications");
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     loadEverything();
//     const interval = setInterval(loadEverything, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const statusStyles = {
//     pending: "bg-yellow-400/20 text-yellow-300 border border-yellow-500",
//     approved: "bg-green-400/20 text-green-300 border border-green-500",
//     rejected: "bg-red-400/20 text-red-300 border border-red-500",
//     "under review": "bg-blue-400/20 text-blue-300 border border-blue-500",
//   };

//   const filteredApps = apps.filter(
//     (app) =>
//       app.title.toLowerCase().includes(search.toLowerCase()) ||
//       app._id.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="px-6 max-w-6xl mx-auto">

//       {/* HEADER */}
//       <div className="mt-10 p-10 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-xl">
//         <h1 className="text-4xl font-extrabold">My Applications 📄</h1>
//       </div>

//       {/* SEARCH BAR */}
//       <div className="mt-10 mb-6 flex items-center gap-4 p-5 rounded-2xl bg-white/10 backdrop-blur border border-white/10">
//         <div className="flex items-center gap-3 px-4 py-2 bg-white/10 rounded-xl flex-1">
//           <Search size={20} className="text-gray-300" />
//           <input
//             type="text"
//             placeholder="Search applications..."
//             className="bg-transparent w-full text-white placeholder-gray-400"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* TABLE */}
//       <div className="mt-5 p-10 rounded-3xl bg-white/5 backdrop-blur border border-white/10 shadow-xl">
//         {loading ? (
//           <SkeletonLoader />
//         ) : (
//           <table className="w-full text-gray-200">
//             <thead>
//               <tr className="text-left text-gray-400 text-sm border-b border-gray-700">
//                 <th className="pb-4">ID</th>
//                 <th className="pb-4">Title</th>
//                 <th className="pb-4">Type</th>
//                 <th className="pb-4">Date</th>
//                 <th className="pb-4">Status</th>
//                 <th className="pb-4">Action</th>
//               </tr>
//             </thead>

//             <tbody>
//               {filteredApps.map((app) => (
//                 <tr
//                   key={app._id}
//                   className="border-b border-gray-800 hover:bg-white/5 transition"
//                 >
//                   <td className="py-4">{app._id}</td>
//                   <td className="py-4">{app.title}</td>
//                   <td className="py-4">{app.ipType}</td>
//                   <td className="py-4">{new Date(app.createdAt).toLocaleDateString()}</td>

//                   <td className="py-4">
//                     <span
//                       className={`px-3 py-1 rounded-full text-sm font-medium ${
//                         statusStyles[app.status.toLowerCase()] || "bg-gray-500/20 text-gray-300"
//                       }`}
//                     >
//                       {app.status}
//                     </span>
//                   </td>

//                   {/* VIEW BUTTON (FIXED) */}
//                   <td className="py-4">
//                     <button
//                       onClick={() => {
//                         console.log("Opening modal for:", app);  // DEBUG
//                         setSelectedApp(app);
//                       }}
//                       className="px-4 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2 transition"
//                     >
//                       <Eye size={16} />
//                       View
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>

//       {/* MODAL */}
//       {selectedApp && (
//         <DetailsModal
//           app={selectedApp}
//           close={() => {
//             console.log("Closing modal"); // DEBUG
//             setSelectedApp(null);
//           }}
//         />
//       )}
//     </div>
//   );
// }

// /* ---------------------- DETAILS MODAL (CRASH-PROOF) ---------------------- */
// function DetailsModal({ app, close }) {
//   if (!app) return null; // prevents blank screen

//   const file = Array.isArray(app.files) ? app.files[0] : null;

//   // Safe URL builder (never crashes)
//   const getFileURL = () => {
//     if (!file?.url) return "";
//     try {
//       return file.url.startsWith("http")
//         ? file.url
//         : `${import.meta.env.VITE_BACKEND_URL.replace(/\/$/, "")}/${file.url.replace(/^\//, "")}`;
//     } catch {
//       return "";
//     }
//   };

//   const fileURL = getFileURL();

//   return (
//     <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[9999]">
//       <div className="bg-gray-900 text-white p-7 rounded-3xl shadow-2xl 
//         w-[90%] max-w-lg max-h-[90vh] overflow-y-auto border border-white/10">

//         {/* HEADER */}
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-2xl font-bold">{app.title || "Application Details"}</h2>
//           <button onClick={close} className="text-red-400 hover:text-red-600">
//             <X size={26} />
//           </button>
//         </div>

//         {/* BASIC INFO */}
//         <div className="space-y-1 text-gray-300">
//           <p><strong>ID:</strong> {app._id || "N/A"}</p>
//           <p><strong>Type:</strong> {app.ipType || "N/A"}</p>
//           <p><strong>Status:</strong> {app.status || "N/A"}</p>
//           <p><strong>Date:</strong> {app.createdAt ? new Date(app.createdAt).toLocaleString() : "N/A"}</p>
//         </div>

//         {/* DESCRIPTION */}
//         <p className="mt-4 text-gray-400">
//           {app.description || "No description available."}
//         </p>

//         {/* DOCUMENT INFO */}
//         <div className="mt-6 p-4 rounded-xl bg-gray-800 border border-gray-700">
//           <h3 className="text-lg font-semibold mb-2">Uploaded Document</h3>

//           {!file ? (
//             <p className="text-gray-400">No document uploaded.</p>
//           ) : (
//             <>
//               <p><strong>Name:</strong> {file.filename || "Unknown"}</p>
//               <p><strong>Type:</strong> {file.mimeType || "Unknown"}</p>
//               <p><strong>Size:</strong> {file.size ? (file.size / 1024).toFixed(1) + " KB" : "Unknown"}</p>

//               {/* Download Button */}
//               <a
//                 href={fileURL}
//                 download={file.filename || "document"}
//                 className="mt-4 w-full block py-2 bg-green-600 hover:bg-green-700 
//                 text-white rounded-xl shadow text-center transition"
//               >
//                 Download Document
//               </a>
//             </>
//           )}
//         </div>

//         {/* CLOSE BUTTON */}
//         <button
//           onClick={close}
//           className="mt-6 w-full py-3 bg-purple-600 hover:bg-purple-700 
//           text-white rounded-xl shadow transition"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }


// /* ---------------------- LOADER ---------------------- */
// function SkeletonLoader() {
//   return (
//     <div className="space-y-4 animate-pulse">
//       {[1, 2, 3].map((i) => (
//         <div key={i} className="h-10 bg-gray-700 rounded-xl"></div>
//       ))}
//     </div>
//   );
// }





import React, { useState, useEffect, useRef } from "react";
import { Eye, X, Search } from "lucide-react";
import api from "../../services/api";
import toast from "react-hot-toast";

export default function MyApplicationsPage() {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState(null);

  const prevAppsRef = useRef([]);
  const prevDocsRef = useRef([]);



  const loadEverything = async () => {
    try {
      // -------- APPLICATIONS --------
      const resApps = await api.get("/applications/my");
      const newApps = resApps.data || [];

      newApps.forEach((app) => {
        const old = prevAppsRef.current.find((p) => p._id === app._id);
        if (old && old.status !== app.status) {
          toast(`${app.title} is now ${app.status}`, {
            icon:
              app.status === "approved"
                ? "✅"
                : app.status === "rejected"
                ? "❌"
                : "⚠️",
          });
        }
      });

      prevAppsRef.current = newApps;
      setApps(newApps);

      // -------- DOCUMENTS --------
      const resDocs = await api.get("/documents/my");
      const docs = resDocs.data || [];

      docs.forEach((doc) => {
        const old = prevDocsRef.current.find((p) => p._id === doc._id);
        if (old && old.status !== doc.status) {
          toast(`Document "${doc.name}" is now ${doc.status}`, {
            icon: doc.status === "verified" ? "📄✔" : "📄❌",
          });
        }
      });

      prevDocsRef.current = docs;
      setLoading(false);
    } catch (err) {
      toast.error("Failed to load applications");
      console.error(err);
    }
  };

  useEffect(() => {
    loadEverything();
    const interval = setInterval(loadEverything, 5000);
    return () => clearInterval(interval);
  }, []);

  const statusStyles = {
    pending: "bg-yellow-400/20 text-yellow-300 border border-yellow-500",
    approved: "bg-green-400/20 text-green-300 border border-green-500",
    rejected: "bg-red-400/20 text-red-300 border border-red-500",
    "under review": "bg-blue-400/20 text-blue-300 border border-blue-500",
  };

  const filteredApps = apps.filter(
    (app) =>
      app.title.toLowerCase().includes(search.toLowerCase()) ||
      app._id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-6 max-w-6xl mx-auto">

      {/* HEADER */}
      <div className="mt-10 p-10 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-xl">
        <h1 className="text-4xl font-extrabold">My Applications 📄</h1>
      </div>

      {/* SEARCH */}
      <div className="mt-10 mb-6 flex items-center gap-4 p-5 rounded-2xl bg-white/10 backdrop-blur border border-white/10">
        <div className="flex items-center gap-3 px-4 py-2 bg-white/10 rounded-xl flex-1">
          <Search size={20} className="text-gray-300" />
          <input
            type="text"
            placeholder="Search applications..."
            className="bg-transparent w-full text-white placeholder-gray-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* TABLE */}
      <div className="mt-5 p-10 rounded-3xl bg-white/5 backdrop-blur border border-white/10 shadow-xl">
        {loading ? (
          <SkeletonLoader />
        ) : (
          <table className="w-full text-gray-200">
            <thead>
              <tr className="text-left text-gray-400 text-sm border-b border-gray-700">
                <th className="pb-4">ID</th>
                <th className="pb-4">Title</th>
                <th className="pb-4">Type</th>
                <th className="pb-4">Date</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredApps.map((app) => (
                <tr
                  key={app._id}
                  className="border-b border-gray-800 hover:bg-white/5 transition"
                >
                  <td className="py-4">{app._id}</td>
                  <td className="py-4">{app.title}</td>
                  <td className="py-4">{app.ipType}</td>
                  <td className="py-4">
                    {new Date(app.createdAt).toLocaleDateString()}
                  </td>

                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        statusStyles[app.status.toLowerCase()] ||
                        "bg-gray-500/20 text-gray-300"
                      }`}
                    >
                      {app.status}
                    </span>
                  </td>

                  <td className="py-4">
                    <button
                      onClick={() => setSelectedApp(app)}
                      className="px-4 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2 transition"
                    >
                      <Eye size={16} />
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* MODAL */}
      {selectedApp && (
        <DetailsModal app={selectedApp} close={() => setSelectedApp(null)} />
      )}
    </div>
  );
}

/* ---------------------- MODAL ---------------------- */
function DetailsModal({ app, close }) {
  const file = Array.isArray(app.files) ? app.files[0] : null;
    const handleDownload = async () => {
  try {
    const res = await api.get(
      `/documents/download/${file._id}`,
      { responseType: "blob" }
    );

    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", file.filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (err) {
    toast.error("Download failed");
    console.error(err);
  }
};

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-[9999]">
      <div className="bg-gray-900 text-white p-7 rounded-3xl shadow-2xl 
        w-[90%] max-w-lg max-h-[90vh] overflow-y-auto border border-white/10">

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">{app.title}</h2>
          <button onClick={close} className="text-red-400 hover:text-red-600">
            <X size={26} />
          </button>
        </div>

        <div className="space-y-1 text-gray-300">
          <p><strong>ID:</strong> {app._id}</p>
          <p><strong>Type:</strong> {app.ipType}</p>
          <p><strong>Status:</strong> {app.status}</p>
          <p>
            <strong>Date:</strong>{" "}
            {new Date(app.createdAt).toLocaleString()}
          </p>
        </div>

        <p className="mt-4 text-gray-400">
          {app.description || "No description provided."}
        </p>

        <div className="mt-6 p-4 rounded-xl bg-gray-800 border border-gray-700">
          <h3 className="text-lg font-semibold mb-2">Uploaded Document</h3>

          {!file ? (
            <p className="text-gray-400">No document uploaded.</p>
          ) : (
            <>
              <p><strong>Name:</strong> {file.filename}</p>
              <p><strong>Type:</strong> {file.mimeType}</p>

              {/* ✅ SECURE DOWNLOAD */}
              {/* <a
  href={`${import.meta.env.VITE_BACKEND_URL}/api/documents/download/${file._id}`}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-4 w-full block py-2 bg-green-600 hover:bg-green-700 
  text-white rounded-xl shadow text-center transition"
>
  Download Document
</a> */}
        <button
  onClick={handleDownload}
  className="mt-4 w-full py-2 bg-green-600 hover:bg-green-700 
  text-white rounded-xl shadow text-center transition"
>
  Download Document
</button>


            </>
          )}
        </div>

        <button
          onClick={close}
          className="mt-6 w-full py-3 bg-purple-600 hover:bg-purple-700 
          text-white rounded-xl shadow transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}

/* ---------------------- LOADER ---------------------- */
function SkeletonLoader() {
  return (
    <div className="space-y-4 animate-pulse">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-10 bg-gray-700 rounded-xl"></div>
      ))}
    </div>
  );
}
