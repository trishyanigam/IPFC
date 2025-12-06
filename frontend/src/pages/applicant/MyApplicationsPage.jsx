import React, { useState, useEffect } from "react";
import { Eye, X, Search, Filter, ChevronDown } from "lucide-react";

export default function MyApplicationsPage() {
  // SAMPLE DATA
  const sampleApps = [
    {
      id: "IP-2024-001",
      title: "AI Smart Helmet",
      type: "Patent",
      date: "2024-01-12",
      status: "Approved",
      description: "An AI-based helmet that provides accident prediction alerts.",
    },
    {
      id: "IP-2024-002",
      title: "Brand Logo - Trishya",
      type: "Trademark",
      date: "2024-01-25",
      status: "Pending",
      description: "Trademark registration for Trishya’s brand identity.",
    },
    {
      id: "IP-2024-003",
      title: "Automatic Water Dispenser",
      type: "Design",
      date: "2024-02-10",
      status: "Rejected",
      description: "Innovative design for smart irrigation system.",
    },
    {
      id: "IP-2024-004",
      title: "Campus Navigation System",
      type: "Copyright",
      date: "2024-02-15",
      status: "Under Review",
      description: "Mobile app that helps students navigate campus efficiently.",
    },
  ];

  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("Newest");
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState(null);

  // Load Data with delay (simulate server)
  useEffect(() => {
    setTimeout(() => {
      setApps(sampleApps);
      setLoading(false);
    }, 900);
  }, []);

  // Status Colors
  const statusColors = {
    Pending: "bg-yellow-100 text-yellow-700 dark:bg-yellow-700/40 dark:text-yellow-100",
    Approved: "bg-green-100 text-green-700 dark:bg-green-700/40 dark:text-green-100",
    Rejected: "bg-red-100 text-red-700 dark:bg-red-700/40 dark:text-red-100",
    "Under Review": "bg-blue-100 text-blue-700 dark:bg-blue-700/40 dark:text-blue-100",
  };

  // 🔍 Filter + Search Logic
  const filteredApps = apps
    .filter((app) =>
      statusFilter === "All" ? true : app.status === statusFilter
    )
    .filter((app) =>
      app.title.toLowerCase().includes(search.toLowerCase()) ||
      app.id.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "Newest"
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    );

  return (
    <div className="px-6 max-w-6xl mx-auto">

      {/* ===== HEADER ===== */}
      <div className="mt-10 p-12 rounded-3xl shadow-2xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-600 dark:from-purple-900 dark:via-indigo-900 dark:to-blue-900 text-white backdrop-blur-xl border border-white/20 relative overflow-hidden animate-[fadeIn_0.6s_ease]">
        <h1 className="text-4xl font-extrabold tracking-wide relative z-10">
          My Applications 📄
        </h1>
        <p className="mt-3 text-lg opacity-95 relative z-10">
          Search, filter, and track your IP submissions efficiently.
        </p>
      </div>

      {/* ===== FILTER BAR ===== */}
      <div className="mt-10 mb-6 flex flex-wrap items-center gap-4 p-5 rounded-2xl shadow bg-white/70 dark:bg-gray-900/60 backdrop-blur-xl border border-gray-300 dark:border-gray-700 animate-[slideUp_0.6s_ease]">

        {/* Search Input */}
        <div className="flex items-center gap-3 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-xl flex-1">
          <Search size={20} className="text-gray-500" />
          <input
            type="text"
            placeholder="Search by title or ID..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent focus:outline-none w-full"
          />
        </div>

        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
        >
          <option value="All">All Status</option>
          <option value="Pending">Pending</option>
          <option value="Approved">Approved</option>
          <option value="Under Review">Under Review</option>
          <option value="Rejected">Rejected</option>
        </select>

        {/* Sort */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-4 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700"
        >
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>
      </div>

      {/* ===== TABLE CARD ===== */}
      <div className="mt-5 p-10 rounded-3xl shadow-xl bg-white/70 dark:bg-gray-900/60 border border-gray-300 dark:border-gray-700 backdrop-blur-xl">

        {loading ? (
          <SkeletonLoader />
        ) : (
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-600 dark:text-gray-300 text-sm">
                <th className="pb-4">ID</th>
                <th className="pb-4">Title</th>
                <th className="pb-4">Type</th>
                <th className="pb-4">Date</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredApps.map((app, index) => (
                <tr
                  key={app.id}
                  className="
                    group border-t border-gray-300 dark:border-gray-700 
                    hover:bg-gray-200/40 dark:hover:bg-gray-800/40 cursor-pointer transition-all
                    animate-[fadeIn_0.6s_ease]
                  "
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <td className="py-4 font-semibold">{app.id}</td>
                  <td className="py-4">{app.title}</td>
                  <td className="py-4">{app.type}</td>
                  <td className="py-4">{app.date}</td>

                  <td>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusColors[app.status]}`}>
                      {app.status}
                    </span>
                  </td>

                  <td>
                    <button
                      onClick={() => setSelectedApp(app)}
                      className="flex items-center gap-2 px-4 py-1.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition shadow-md"
                    >
                      <Eye size={18} /> View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* ===== DETAILS MODAL ===== */}
      {selectedApp && <DetailsModal app={selectedApp} close={() => setSelectedApp(null)} />}
    </div>
  );
}

/* ---------------------- DETAILS MODAL ---------------------- */
function DetailsModal({ app, close }) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 animate-[fadeIn_0.4s_ease]">
      <div className="bg-white dark:bg-gray-900 p-7 rounded-3xl shadow-2xl w-[90%] max-w-lg animate-[slideUp_0.4s_ease] border border-gray-300 dark:border-gray-700">
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{app.title}</h2>
          <button onClick={close} className="text-red-500 hover:text-red-700">
            <X size={26} />
          </button>
        </div>

        <p><strong>ID:</strong> {app.id}</p>
        <p><strong>Type:</strong> {app.type}</p>
        <p><strong>Status:</strong> {app.status}</p>
        <p><strong>Date:</strong> {app.date}</p>

        <p className="mt-4 text-gray-700 dark:text-gray-300">
          {app.description}
        </p>

        <button
          onClick={close}
          className="mt-6 w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl shadow"
        >
          Close
        </button>
      </div>
    </div>
  );
}

/* ---------------------- SKELETON SHIMMER ---------------------- */
function SkeletonLoader() {
  return (
    <div className="space-y-4 animate-pulse">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-10 bg-gray-300 dark:bg-gray-700 rounded-xl"></div>
      ))}
    </div>
  );
}
