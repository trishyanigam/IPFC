// import React, { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import { Link } from "react-router-dom";
// import {
//   FilePlus,
//   UploadCloud,
//   FolderSearch,
//   HelpCircle,
//   CheckCircle,
//   Clock,
//   XCircle,
// } from "lucide-react";

// export default function DashboardPage() {
//   const { user, role } = useContext(AuthContext);

//   const name = user?.displayName?.split("__")[0] || "User";
//   const email = user?.email;

//   return (
//     <div className="px-6 max-w-6xl mx-auto">

//       {/* ================= HEADER SECTION ================ */}
//       <div className="
//         mt-10 p-10 rounded-3xl shadow-2xl
//         bg-gradient-to-r from-purple-600/60 via-indigo-600/60 to-blue-600/60
//         dark:from-purple-800/40 dark:via-indigo-700/40 dark:to-blue-700/40
//         backdrop-blur-xl border border-white/20
//         text-white animate-fade-in
//       ">
//         <h1 className="text-4xl font-extrabold tracking-wide">
//           Welcome, {name} 👋
//         </h1>

//         <p className="mt-2 text-lg opacity-90">{email}</p>

//         <span className="
//           mt-5 inline-block px-5 py-1 
//           bg-white/20 text-white rounded-full text-sm
//           shadow-sm backdrop-blur-md
//         ">
//           Role: {role?.toUpperCase()}
//         </span>
//       </div>

//       {/* ================= STAT CARDS ================ */}
//       <h2 className="text-2xl font-bold mt-14 mb-4">Your IP Summary</h2>

//       <div className="grid md:grid-cols-4 gap-7">

//         <StatCard
//           title="Total Applications"
//           value="4"
//           icon={<FolderSearch size={28} />}
//           color="bg-blue-500/20 text-blue-400"
//         />

//         <StatCard
//           title="Pending Review"
//           value="2"
//           icon={<Clock size={28} />}
//           color="bg-yellow-500/20 text-yellow-400"
//         />

//         <StatCard
//           title="Approved"
//           value="1"
//           icon={<CheckCircle size={28} />}
//           color="bg-green-500/20 text-green-400"
//         />

//         <StatCard
//           title="Rejected"
//           value="1"
//           icon={<XCircle size={28} />}
//           color="bg-red-500/20 text-red-400"
//         />

//       </div>

//       {/* ================= QUICK ACTIONS ================ */}
//       <h2 className="text-2xl font-bold mt-14 mb-4">Quick Actions</h2>

//       <div className="grid md:grid-cols-4 gap-7">

//         <ActionCard
//           title="Apply for IP"
//           desc="Submit a new IP application."
//           icon={<FilePlus size={34} />}
//           link="/apply"
//         />

//         <ActionCard
//           title="Upload Files"
//           desc="Submit required verification documents."
//           icon={<UploadCloud size={34} />}
//           link="/upload"
//         />

//         <ActionCard
//           title="Track Applications"
//           desc="View status & reviewer updates."
//           icon={<FolderSearch size={34} />}
//           link="/my-applications"
//         />

//         <ActionCard
//           title="Support"
//           desc="Need guidance? Contact support."
//           icon={<HelpCircle size={34} />}
//           link="/support"
//         />

//       </div>

//       {/* ================= RECENT ACTIVITY ================ */}
//       <h2 className="text-2xl font-bold mt-14 mb-4">Recent Activity</h2>

//       <div className="
//         bg-gray-100 dark:bg-gray-900 
//         p-6 rounded-3xl border border-gray-300 dark:border-gray-700 
//         shadow-xl
//       ">
//         <ul className="space-y-5">
//           <Timeline text="Uploaded PatentDraft.pdf" time="2 hours ago" />
//           <Timeline text="Submitted Trademark Application" time="Yesterday" />
//           <Timeline text="Reviewer requested revision" time="2 days ago" />
//         </ul>
//       </div>

//     </div>
//   );
// }

// function StatCard({ title, value, icon, color }) {
//   return (
//     <div
//       className={`
//         p-6 rounded-3xl shadow-xl border border-gray-300 dark:border-gray-700
//         bg-white/80 dark:bg-gray-900/70 backdrop-blur-lg 
//         transform transition-all duration-300 hover:scale-[1.04]
//         hover:shadow-2xl
//       `}
//     >
//       <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${color}`}>
//         {icon}
//       </div>
//       <h3 className="text-lg font-semibold">{title}</h3>
//       <p className="text-3xl font-bold mt-2">{value}</p>
//     </div>
//   );
// }

// function ActionCard({ title, desc, icon, link }) {
//   return (
//     <Link
//       to={link}
//       className="
//         p-6 rounded-3xl border border-gray-300 dark:border-gray-700
//         bg-white dark:bg-gray-800 shadow-xl 
//         hover:shadow-2xl hover:-translate-y-1 hover:bg-purple-50/50 
//         dark:hover:bg-gray-700 transition-all duration-300
//         group
//       "
//     >
//       <div className="text-purple-500 mb-3 group-hover:scale-110 transition-all">
//         {icon}
//       </div>

//       <h3 className="text-lg font-bold mb-1">{title}</h3>
//       <p className="text-sm opacity-70">{desc}</p>
//     </Link>
//   );
// }

// function Timeline({ text, time }) {
//   return (
//     <li
//       className="
//         border-l-4 border-purple-500 pl-4 
//         dark:border-purple-400
//       "
//     >
//       <p className="text-gray-800 dark:text-gray-200 font-medium">{text}</p>
//       <span className="text-sm opacity-60">{time}</span>
//     </li>
//   );
// }

// src/pages/applicant/DashboardPage.jsx
// import React, { useContext, useEffect, useState, useRef } from "react";
// import { AuthContext } from "../../context/AuthContext";
// import { FolderSearch, Clock, CheckCircle, XCircle } from "lucide-react";
// import api from "../../services/api";
// import toast from "react-hot-toast";

// export default function DashboardPage() {
//   const { user, role } = useContext(AuthContext);
//   const [stats, setStats] = useState({ total: 0, pending: 0, approved: 0, rejected: 0 });
//   const [loading, setLoading] = useState(true);

//   const prevAppsRef = useRef([]);
//   const prevDocsRef = useRef([]);

//   const loadDashboard = async () => {
//     try {
//       // 1️⃣ LOAD APPLICATIONS
//       const resApps = await api.get("/applications/my");
//       const apps = resApps.data || [];

//       // Detect changes in application status
//       apps.forEach((a) => {
//         const prev = prevAppsRef.current.find((p) => p._id === a._id);
//         if (prev && prev.status !== a.status) {
//           const icon = a.status === "approved" ? "✅" : a.status === "rejected" ? "❌" : "⚠️";
//           toast(`${a.title} is now ${a.status}`, { icon });
//         }
//       });
//       prevAppsRef.current = apps;

//       // 2️⃣ LOAD DOCUMENTS
//       const resDocs = await api.get("/documents/my");
//       const docs = resDocs.data || [];

//       // Detect document verification or rejection
//       docs.forEach((d) => {
//         const prev = prevDocsRef.current.find((p) => p._id === d._id);
//         if (prev && prev.status !== d.status) {
//           const icon = d.status === "verified" ? "📄✔" : "📄❌";
//           toast(`Document "${d.name}" is now ${d.status}`, { icon });
//         }
//       });
//       prevDocsRef.current = docs;

//       // 3️⃣ UPDATE DASHBOARD COUNTS
//       const total = apps.length;
//       const pending = apps.filter(a => a.status.toLowerCase() === "pending").length;
//       const approved = apps.filter(a => a.status.toLowerCase() === "approved").length;
//       const rejected = apps.filter(a => a.status.toLowerCase() === "rejected").length;

//       setStats({ total, pending, approved, rejected });
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadDashboard();
//     const interval = setInterval(loadDashboard, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const name = user?.displayName?.split("__")[0] || "User";

//   return (
//     <div className="px-6 max-w-6xl mx-auto">
//       {/* HEADER */}
//       <div className="mt-10 p-10 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-xl">
//         <h1 className="text-4xl font-extrabold">Welcome, {name} 👋</h1>
//         <p className="mt-2 opacity-80">{user.email}</p>
//       </div>

//       {/* SUMMARY CARDS */}
//       <h2 className="text-2xl font-bold mt-10 mb-4">Your IP Summary</h2>
//       <div className="grid md:grid-cols-4 gap-7">
//         <StatCard title="Total Applications" value={stats.total} icon={<FolderSearch />} gradient="from-blue-600 to-blue-800" />
//         <StatCard title="Pending Review" value={stats.pending} icon={<Clock />} gradient="from-yellow-600 to-yellow-800" />
//         <StatCard title="Approved" value={stats.approved} icon={<CheckCircle />} gradient="from-green-600 to-green-800" />
//         <StatCard title="Rejected" value={stats.rejected} icon={<XCircle />} gradient="from-red-600 to-red-800" />
//       </div>
//     </div>
//   );
// }

// function StatCard({ title, value, icon, gradient }) {
//   return (
//     <div className={`p-6 rounded-3xl shadow-lg bg-gradient-to-br ${gradient} text-white`}>
//       <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
//         {icon}
//       </div>
//       <p className="text-lg opacity-80">{title}</p>
//       <p className="text-4xl font-bold">{value}</p>
//     </div>
//   );
// }


// src/pages/applicant/DashboardPage.jsx
import React, { useContext, useEffect, useState, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import {
  FilePlus,
  UploadCloud,
  FolderSearch,
  HelpCircle,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react";
import api from "../../services/api";
import toast from "react-hot-toast";

export default function DashboardPage() {
  const { user, role } = useContext(AuthContext);

  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    rejected: 0,
  });

  const [docStats, setDocStats] = useState({
  total: 0,
  pending: 0,
  verified: 0,
  rejected: 0,
});


  const [activity, setActivity] = useState([]);


  const prevAppsRef = useRef([]);
  const prevDocsRef = useRef([]);

  const loadDashboard = async () => {
    try {
      // 🔹 LOAD APPLICATIONS
      const resApps = await api.get("/applications/my");
      const apps = resApps.data || [];

      // 🔹 Detect application status change
      apps.forEach((a) => {
        const prev = prevAppsRef.current.find((p) => p._id === a._id);
        if (prev && prev.status !== a.status) {
          const icon =
            a.status === "approved"
              ? "✅"
              : a.status === "rejected"
              ? "❌"
              : "⚠️";
          toast(`${a.title} is now ${a.status}`, { icon });
        }
      });
      prevAppsRef.current = apps;

      // 🔹 LOAD DOCUMENTS (for notifications only)
      const resDocs = await api.get("/documents/my");
      const docs = resDocs.data || [];

      docs.forEach((d) => {
        const prev = prevDocsRef.current.find((p) => p._id === d._id);
        if (prev && prev.status !== d.status) {
          const icon = d.status === "verified" ? "📄✔" : "📄❌";
          toast(`Document "${d.name}" is now ${d.status}`, { icon });
        }
      });
      prevDocsRef.current = docs;

      // 🔹 UPDATE APPLICATION STATS
      setStats({
        total: apps.length,
        pending: apps.filter((a) => a.status === "pending").length,
        approved: apps.filter((a) => a.status === "approved").length,
        rejected: apps.filter((a) => a.status === "rejected").length,
      });
    } catch (err) {
      console.error("Dashboard load error:", err);
    }
  };

  // ✅ FIX 1: WAIT FOR USER BEFORE LOADING DASHBOARD
  useEffect(() => {
    if (!user) return;

    loadDashboard();
    const interval = setInterval(loadDashboard, 5000);
    return () => clearInterval(interval);
  }, [user]);


  useEffect(() => {
  if (!user) return;

  const loadActivity = async () => {
    try {
      const res = await api.get("/applications/activity");
      setActivity(res.data || []);
    } catch (err) {
      console.error("Failed to load activity");
    }
  };

  loadActivity();
}, [user]);


  // ✅ FIX 2: WAIT FOR USER BEFORE FETCHING DOCUMENT STATS
  // useEffect(() => {
  //   if (!user) return;

  //   const fetchDocumentStats = async () => {
  //     try {
  //       const res = await api.get("/documents/stats");
  //       setDocStats(res.data);
  //     } catch (err) {
  //       console.error(
  //         "Failed to load document stats",
  //         err.response?.data || err.message
  //       );
  //     }
  //   };

  //   fetchDocumentStats();
  // }, [user]);

  const name = user?.displayName?.split("__")[0] || "User";
  const email = user?.email;

  return (
    <div className="px-6 max-w-6xl mx-auto">

      {/* HEADER */}
      <div
        className="
        mt-10 p-10 rounded-3xl shadow-2xl
        bg-gradient-to-r from-purple-600/60 via-indigo-600/60 to-blue-600/60
        dark:from-purple-800/40 dark:via-indigo-700/40 dark:to-blue-700/40
        backdrop-blur-xl border border-white/20
        text-white animate-fade-in
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
          Role: {role?.toUpperCase()}
        </span>
      </div>

      {/* APPLICATION SUMMARY */}
      <h2 className="text-2xl font-bold mt-14 mb-4">Your IP Summary</h2>

      <div className="grid md:grid-cols-4 gap-7">
        <StatCard
          title="Total Applications"
          value={stats.total}
          icon={<FolderSearch size={28} />}
          color="bg-blue-500/20 text-blue-400"
        />

        <StatCard
          title="Pending Review"
          value={stats.pending}
          icon={<Clock size={28} />}
          color="bg-yellow-500/20 text-yellow-400"
        />

        <StatCard
          title="Approved"
          value={stats.approved}
          icon={<CheckCircle size={28} />}
          color="bg-green-500/20 text-green-400"
        />

        <StatCard
          title="Rejected"
          value={stats.rejected}
          icon={<XCircle size={28} />}
          color="bg-red-500/20 text-red-400"
        />
      </div>


      {/* QUICK ACTIONS */}
      <h2 className="text-2xl font-bold mt-14 mb-4">Quick Actions</h2>

      <div className="grid md:grid-cols-4 gap-7">
        <ActionCard
          title="Apply for IP"
          desc="Submit a new IP application."
          icon={<FilePlus size={34} />}
          link="/apply"
        />

        <ActionCard
          title="Upload Files"
          desc="Submit required verification documents."
          icon={<UploadCloud size={34} />}
          link="/upload"
        />

        <ActionCard
          title="Track Applications"
          desc="View status & reviewer updates."
          icon={<FolderSearch size={34} />}
          link="/my-applications"
        />

        <ActionCard
          title="Support"
          desc="Need guidance? Contact support."
          icon={<HelpCircle size={34} />}
          link="/support"
        />
      </div>

      {/* RECENT ACTIVITY */}
      <h2 className="text-2xl font-bold mt-14 mb-4">Recent Activity</h2>

      <div
        className="
        bg-gray-100 dark:bg-gray-900 
        p-6 rounded-3xl border border-gray-300 dark:border-gray-700 
        shadow-xl
      "
      >
        <ul className="space-y-5">
  {activity.length === 0 && (
    <p className="text-gray-500 dark:text-gray-400">
      No recent activity yet.
    </p>
  )}

  {activity.map((a, i) => (
    <Timeline
      key={i}
      text={a.text}
      time={new Date(a.time).toLocaleString()}
    />
  ))}
</ul>

      </div>
    </div>
  );
}

/* -------------------- UI COMPONENTS (UNCHANGED) -------------------- */

function StatCard({ title, value, icon, color }) {
  return (
    <div
      className="
        p-6 rounded-3xl shadow-xl border border-gray-300 dark:border-gray-700
        bg-white/80 dark:bg-gray-900/70 backdrop-blur-lg 
        transform transition-all duration-300 hover:scale-[1.04]
        hover:shadow-2xl
      "
    >
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 ${color}`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}

function ActionCard({ title, desc, icon, link }) {
  return (
    <Link
      to={link}
      className="
        p-6 rounded-3xl border border-gray-300 dark:border-gray-700
        bg-white dark:bg-gray-800 shadow-xl 
        hover:shadow-2xl hover:-translate-y-1 hover:bg-purple-50/50 
        dark:hover:bg-gray-700 transition-all duration-300
        group
      "
    >
      <div className="text-purple-500 mb-3 group-hover:scale-110 transition-all">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-1">{title}</h3>
      <p className="text-sm opacity-70">{desc}</p>
    </Link>
  );
}

function Timeline({ text, time }) {
  return (
    <li
      className="
        border-l-4 border-purple-500 pl-4
        dark:border-purple-400
      "
    >
      <p className="text-gray-800 dark:text-gray-200 font-medium">
        {text}
      </p>
      <span className="text-sm opacity-60">{time}</span>
    </li>
  );
}

