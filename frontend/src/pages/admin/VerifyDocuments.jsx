// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Search,
//   FileCheck,
//   FileX,
//   File,
//   Filter,
// } from "lucide-react";

// export default function VerifyDocuments() {
//   const [filter, setFilter] = useState("all");

//   const docs = [
//     {
//       id: 1,
//       name: "Amit Kumar",
//       docName: "ID Proof",
//       preview: "https://via.placeholder.com/150",
//       status: "Pending",
//     },
//     {
//       id: 2,
//       name: "Priya Sharma",
//       docName: "Address Proof",
//       preview: "https://via.placeholder.com/150",
//       status: "Verified",
//     },
//     {
//       id: 3,
//       name: "Rohan Gupta",
//       docName: "Aadhar Card",
//       preview: "https://via.placeholder.com/150",
//       status: "Rejected",
//     },
//   ];

//   const filteredDocs =
//     filter === "all"
//       ? docs
//       : docs.filter((d) => d.status.toLowerCase() === filter);

//   const statusColor = {
//     pending: "bg-yellow-500",
//     verified: "bg-green-600",
//     rejected: "bg-red-600",
//   };

//   return (
//     <div className="pt-16 px-8 max-w-7xl mx-auto dark:text-white">

//       {/* PAGE TITLE */}
//       <motion.div
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="flex justify-between items-center mb-10"
//       >
//         <h1 className="text-4xl font-bold">Verify Documents</h1>

//         <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition">
//           <Filter size={18} />
//           Filters
//         </button>
//       </motion.div>

//       {/* FILTER TABS */}
//       <div className="flex gap-4 mb-6 text-sm">
//         {["all", "pending", "verified", "rejected"].map((tab) => (
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
//           placeholder="Search documents..."
//           className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300/40 dark:border-gray-700/40 focus:ring-2 focus:ring-purple-500 outline-none"
//         />
//       </div>

//       {/* DOCUMENT CARDS GRID */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

//         {filteredDocs.map((doc) => (
//           <motion.div
//             key={doc.id}
//             whileHover={{ scale: 1.03 }}
//             transition={{ type: "spring", stiffness: 150 }}
//             className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow border border-gray-300/40 dark:border-gray-700/40"
//           >

//             {/* Document Preview */}
//             <img
//               src={doc.preview}
//               alt="document preview"
//               className="w-full h-40 object-cover rounded-lg mb-4"
//             />

//             {/* User & Document Info */}
//             <h2 className="text-xl font-semibold">{doc.name}</h2>
//             <p className="text-gray-600 dark:text-gray-300">{doc.docName}</p>

//             {/* STATUS BADGE */}
//             <span
//               className={`
//                 inline-block mt-3 px-4 py-1 text-white rounded-full text-sm
//                 ${statusColor[doc.status.toLowerCase()]}
//               `}
//             >
//               {doc.status}
//             </span>

//             {/* BUTTONS */}
//             <div className="flex gap-3 mt-5">
//               <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition">
//                 <FileCheck size={18} />
//                 Approve
//               </button>

//               <button className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition">
//                 <FileX size={18} />
//                 Reject
//               </button>
//             </div>

//           </motion.div>
//         ))}

//       </div>
//     </div>
//   );
// }

// src/pages/admin/VerifyDocuments.jsx
// import React, { useState, useEffect } from "react";
// import api from "../../services/api";
// import toast from "react-hot-toast";

// export default function VerifyDocuments() {
//   const [filter, setFilter] = useState("all");
//   const [docs, setDocs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const load = async () => {
//     setLoading(true);
//     try {
//       const res = await api.get("/documents/all");
//       setDocs(res.data || []);
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to load documents");
//     } finally { setLoading(false); }
//   };

//   useEffect(() => {
//     load();
//     const interval = setInterval(load, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const review = async (id, action) => {
//     try {
//       await api.patch(`/documents/${id}/review`, { action });
//       setDocs(prev => prev.map(d => d._id === id ? { ...d, status: action === "verify" ? "verified" : "rejected" } : d));
//       toast.success(action === "verify" ? "Document verified" : "Document rejected");
//     } catch (err) {
//       console.error(err);
//       toast.error("Failed to update");
//     }
//   };

//   const filtered = docs.filter(d => filter === "all" ? true : d.status.toLowerCase() === filter);

//   return (
//     <div className="pt-16 px-8 max-w-7xl mx-auto">
//       <div className="flex justify-between items-center mb-10">
//         <h1 className="text-4xl font-bold">Verify Documents</h1>
//         <button onClick={load} className="px-4 py-2 rounded-lg bg-purple-600 text-white">Refresh</button>
//       </div>

//       <div className="flex gap-4 mb-6">
//         {["all","pending","verified","rejected"].map(tab => (
//           <button key={tab} onClick={() => setFilter(tab)} className={`px-4 py-2 rounded-xl ${filter===tab ? "bg-purple-600 text-white" : "bg-gray-200"}`}>{tab.toUpperCase()}</button>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {loading ? <p>Loading...</p> : filtered.map(doc => (
//           <div key={doc._id} className="bg-gray-100 p-6 rounded-2xl shadow">
//             <img src={doc.url} alt="preview" className="w-full h-40 object-cover rounded-lg mb-4" />
//             <h2 className="text-xl font-semibold">{doc.ownerEmail || doc.ownerUid}</h2>
//             <p className="text-gray-600">{doc.name}</p>
//             <span className={`inline-block mt-3 px-4 py-1 text-white rounded-full text-sm`} style={{background: statusColor(doc.status)}}>{doc.status}</span>
//             <div className="flex gap-3 mt-5">
//               <button onClick={() => review(doc._id, "verify")} className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-xl">Approve</button>
//               <button onClick={() => review(doc._id, "reject")} className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-xl">Reject</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// function statusColor(status) {
//   const s = (status || "").toLowerCase();
//   if (s.includes("pending")) return "#f59e0b";
//   if (s.includes("verified")) return "#10b981";
//   if (s.includes("rejected")) return "#ef4444";
//   return "#9ca3af";
// }

// src/pages/admin/VerifyDocuments.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search, FileCheck, FileX, Filter, Eye } from "lucide-react";
import api from "../../services/api";
import toast from "react-hot-toast";

export default function VerifyDocuments() {
  const [filter, setFilter] = useState("all");
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const load = async () => {
    setLoading(true);
    try {
      const res = await api.get("/documents/all");
      setDocs(res.data || []);
    } catch (err) {
      console.error(err);
      toast.error("Failed to load documents");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    const interval = setInterval(async () => {
      try {
        const res = await api.get("/documents/all");
        setDocs((prev) => {
          const updated = [...prev];
          res.data.forEach((serverDoc) => {
            const index = updated.findIndex((d) => d._id === serverDoc._id);
            if (index !== -1)
              updated[index] = { ...updated[index], ...serverDoc };
          });
          return updated;
        });
      } catch {}
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const review = async (id, action) => {
    try {
      await api.patch(`/documents/${id}/review`, { action });

      setDocs((prev) =>
        prev.map((d) =>
          d._id === id
            ? { ...d, status: action === "verify" ? "verified" : "rejected" }
            : d
        )
      );

      toast.success(
        action === "verify" ? "Document verified" : "Document rejected"
      );
    } catch (err) {
      console.error(err);
      toast.error("Failed to update");
    }
  };

  const filteredDocs = docs
    .filter((d) =>
      filter === "all" ? true : d.status?.toLowerCase() === filter
    )
    .filter((d) =>
      search.trim() === ""
        ? true
        : d.name?.toLowerCase().includes(search.toLowerCase()) ||
          d.ownerEmail?.toLowerCase().includes(search.toLowerCase())
    );

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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-800 
                     border border-gray-300/40 dark:border-gray-700/40 
                     focus:ring-2 focus:ring-purple-500 outline-none"
        />
      </div>

      {/* DOCUMENT GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading ? (
          <p>Loading...</p>
        ) : (
          filteredDocs.map((doc) => (
            <motion.div
              key={doc._id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow 
                         border border-gray-300/40 dark:border-gray-700/40"
            >
              {/* PREVIEW */}
              <img
                src={`${import.meta.env.VITE_BACKEND_URL}${doc.url}`}
                alt="document preview"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />

              {/* INFO */}
              <h2 className="text-xl font-semibold">
                {doc.ownerEmail || doc.ownerUid}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">{doc.name}</p>

              {/* STATUS */}
              <span
                className={`inline-block mt-3 px-4 py-1 text-white rounded-full text-sm 
                ${statusColor[doc.status?.toLowerCase()] || "bg-gray-500"}`}
              >
                {doc.status}
              </span>

              {/* ACTIONS */}
              <div className="mt-5 space-y-3">
                {/* VIEW BUTTON (TOP) */}
                <button
                  onClick={() =>
                    window.open(
                      `${import.meta.env.VITE_BACKEND_URL}${doc.url}`,
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                  className="w-full flex items-center justify-center gap-2 
               bg-indigo-600 text-white px-4 py-2 rounded-xl 
               hover:bg-indigo-700 transition"
                >
                  <Eye size={18} />
                  View
                </button>

                {/* APPROVE + REJECT (BOTTOM ROW) */}
                <div className="flex gap-3">
                  <button
                    onClick={() => review(doc._id, "verify")}
                    className="flex-1 flex items-center justify-center gap-2 
                 bg-green-600 text-white px-4 py-2 rounded-xl 
                 hover:bg-green-700 transition"
                  >
                    <FileCheck size={18} />
                    Approve
                  </button>

                  <button
                    onClick={() => review(doc._id, "reject")}
                    className="flex-1 flex items-center justify-center gap-2 
                 bg-red-600 text-white px-4 py-2 rounded-xl 
                 hover:bg-red-700 transition"
                  >
                    <FileX size={18} />
                    Reject
                  </button>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
