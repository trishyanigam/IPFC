import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { BookCheck } from "lucide-react";
export default function Navbar() {
  const { user } = useContext(AuthContext);

  return (
    <nav className="fixed w-full backdrop-blur bg-white/10 dark:bg-black/20 border-b border-gray-300/20 dark:border-gray-700/20 z-50 px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold text-purple-500 flex gap-2">
        <BookCheck size={30} />
        IPAssist Hub
      </Link>

      <div className="flex gap-6 text-sm font-medium">
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        {!user ? (
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
          >
            Login
          </Link>
        ) : (
          <Link
            to="/dashboard"
            className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
          >
            Dashboard
          </Link>
        )}
      </div>
    </nav>
  );
}
