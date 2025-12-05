import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Sun, Moon, UserCircle } from "lucide-react";

export default function Navbar() {
  const { user } = useContext(AuthContext);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const navLinkClass = ({ isActive }) =>
    `text-sm md:text-base ${
      isActive
        ? "text-white font-semibold"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="w-full fixed top-0 z-50 bg-gray-900/50 dark:bg-gray-950/60 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
            IP
          </div>
          <span className="text-lg font-semibold text-white hidden sm:inline">
            IPFC Portal
          </span>
        </Link>

        {/* Nav links + actions */}
        <div className="flex items-center gap-4 md:gap-6">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/features" className={navLinkClass}>
            Features
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full bg-gray-800/80 hover:bg-gray-700/90 flex items-center justify-center"
          >
            {theme === "dark" ? (
              <Sun className="text-yellow-300" size={20} />
            ) : (
              <Moon className="text-gray-900" size={20} />
            )}
          </button>

          {/* Login / Profile */}
          {user ? (
            <Link
              to="/dashboard"
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white"
            >
              <UserCircle size={22} />
              <span className="hidden sm:inline text-sm">Dashboard</span>
            </Link>
          ) : (
            <Link
              to="/login"
              className="px-4 py-1.5 rounded-full bg-purple-600 hover:bg-purple-700 text-sm text-white"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
