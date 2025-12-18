import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    role: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.role) {
      setError("Please select a role.");
      return;
    }

    setLoading(true);

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      const profileData = userCredential.user.displayName;
      const savedRole = profileData?.split("__")[1];

      if (savedRole !== form.role) {
        setError("Role mismatch! Choose correct role.");
        setLoading(false);
        return;
      }

      navigate("/dashboard");

    } catch {
      setError("Invalid email or password");
    }

    setLoading(false);
  };

  return (
    <div className="pt-18 px-6 flex justify-center">
      <div className="max-w-md w-full bg-gray-100 dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-300 dark:border-gray-700">

        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
          Login
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          Select your role and login
        </p>

        {error && <p className="text-red-500 text-sm text-center mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* ROLE SELECT — AT TOP */}
          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">Select Role</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="input-field mt-1 text-gray-600 dark:text-gray-300"
            >
              <option value="">Select Role (Applicant / Admin)</option>
              <option value="applicant">Applicant</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">Email</label>
            <input
              name="email"
              type="email"
              onChange={handleChange}
              className="input-field mt-1"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* PASSWORD */}
          <div className="relative">
            <label className="text-sm text-gray-700 dark:text-gray-300">Password</label>

            <input
              name="password"
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              className="input-field mt-1 pr-10"
              placeholder="Enter your password"
              required
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 cursor-pointer text-xl select-none"
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          {/* BUTTON */}
          <button
            disabled={loading}
            className="btn-primary flex items-center justify-center gap-3"
          >
            {loading && (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            )}
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <Link className="text-purple-500 hover:underline" to="/register">
              Register
            </Link>
          </p>

        </form>
      </div>
    </div>
  );
}
