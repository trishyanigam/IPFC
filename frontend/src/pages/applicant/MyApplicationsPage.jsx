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

/* ---------------------- DETAILS MODAL ---------------------- */
function DetailsModal({ app, close }) {
  const file = Array.isArray(app.files) ? app.files[0] : null;

  // ✅ VIEW DOCUMENT (same as admin portal)
  const handleView = () => {
  if (!file?._id) {
    toast.error("Document not available");
    return;
  }

  const token = localStorage.getItem("token"); // or your auth key

  const url = `${import.meta.env.VITE_BACKEND_URL}/api/documents/view/${file._id}?token=${token}`;

  window.open(url, "_blank", "noopener,noreferrer");
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

              {/* ✅ VIEW DOCUMENT BUTTON */}
              <button
  onClick={() =>
    window.open(
      `${import.meta.env.VITE_BACKEND_URL}/api/documents/view/${file._id}`,
      "_blank",
      "noopener,noreferrer"
    )
  }
  className="mt-4 w-full block py-2 bg-green-600 hover:bg-green-700 
             text-white rounded-xl shadow text-center transition"
>
  View Document
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
