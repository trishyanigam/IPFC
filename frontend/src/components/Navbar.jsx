import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../services/firebase";
import ApplicantNotifications from "../pages/applicant/ApplicantNotifications";
import { BookCheck } from "lucide-react";


export default function Navbar() {
  const { user, role, verified } = useContext(AuthContext);

  const logout = () => {
    auth.signOut();
    window.location.href = "/";
  };

  // Normalize role completely
  const normalizedRole = role?.trim().toLowerCase();   // 🔥 FIX → removes spaces + handles ADMIN/APPLICANT

  const publicMenu = (
    <>
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/features" className="nav-link">Features</Link>
      <Link to="/about" className="nav-link">About</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
    </>
  );

  const applicantMenu = (
    <>
      <Link to="/dashboard" className="nav-link">Dashboard</Link>
      <Link to="/apply" className="nav-link">Apply</Link>
      <Link to="/my-applications" className="nav-link">My Applications</Link>
      <Link to="/upload" className="nav-link">Upload</Link>
      <Link to="/support" className="nav-link">Support</Link>
    </>
  );

  const adminMenu = (
    <>
      <Link to="/admin" className="nav-link">Dashboard</Link>
      <Link to="/review" className="nav-link">Review</Link>
      <Link to="/verify-docs" className="nav-link">Verify Docs</Link>
      <Link to="/users" className="nav-link">Users</Link>
      <Link to="/reports" className="nav-link">Reports</Link>
    </>
  );

  return (
    <nav className="fixed w-full top-0 z-30 bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow">
  <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

    {/* LEFT — LOGO */}
    
    <Link to="/" className="flex gap-2 text-xl font-bold text-purple-600 dark:text-purple-400">
      <BookCheck size={30} />
      IPAssist Hub
    </Link>

    {/* CENTER — NAVIGATION TABS */}
    <div className="flex gap-8 items-center">
      {(!user || !verified) && publicMenu}
      {user && verified && normalizedRole === "applicant" && applicantMenu}
      {user && verified && normalizedRole === "admin" && adminMenu}
    </div>

    {/* RIGHT — LOGIN / LOGOUT / NOTIFICATIONS */}
    <div className="flex items-center gap-4">
      {user && verified && normalizedRole === "applicant" && <ApplicantNotifications />}

      {!user && (
        <Link to="/login" className="btn-primary px-4 py-2 rounded-lg">
          Login
        </Link>
      )}

      {user && verified && (
        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      )}
    </div>

  </div>
</nav>
  );
}
