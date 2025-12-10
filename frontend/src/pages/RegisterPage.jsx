import React, { useState, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../services/firebase";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function RegisterPage() {
  const navigate = useNavigate();
  const { forceAuthUpdate } = useContext(AuthContext);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);

  const [form, setForm] = useState({
    role: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // ⭐ PASSWORD VALIDATION
  const validatePassword = (password) => {
    const minLength = /.{8,}/;
    const upper = /[A-Z]/;
    const number = /[0-9]/;
    const special = /[@$!%*?&#]/;

    if (!minLength.test(password))
      return "Password must be at least 8 characters long.";
    if (!upper.test(password))
      return "Password must contain at least one uppercase letter.";
    if (!number.test(password))
      return "Password must contain at least one number.";
    if (!special.test(password))
      return "Password must contain at least one special character (@$!%*?&#).";

    return null;
  };

  // ⭐ SUBMIT HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // 🔥 1. Validate password
    const passwordError = validatePassword(form.password);
    if (passwordError) {
      setError(passwordError);
      setLoading(false);
      return;
    }

    // 🔥 2. Check confirm password match
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const cred = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );

      await updateProfile(cred.user, {
        displayName: `${form.fullName}__${form.role}`,
      });

      await forceAuthUpdate();
      await sendEmailVerification(cred.user);

      navigate("/verify-email");
    } catch (err) {
      setError(err.message);
    }

    setLoading(false);
  };

  return (
    <div className="pt-10 px-6 flex justify-center">
      <div className="max-w-md w-full bg-gray-100 dark:bg-gray-900 
        rounded-2xl shadow-xl p-8 border border-gray-300 dark:border-gray-700">

        <h1 className="text-3xl font-bold text-center mb-2 text-gray-900 dark:text-white">
          Create Your Account
        </h1>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          Register to access your dashboard
        </p>

        {error && <p className="text-red-500 text-sm text-center mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* ROLE FIELD */}
          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">
              Select Role
            </label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="input-field mt-1 text-gray-700 dark:text-gray-300"
              required
            >
              <option value="">Select Role (Applicant / Admin)</option>
              <option value="applicant">Applicant</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* FULL NAME */}
          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">
              Full Name
            </label>
            <input
              name="fullName"
              onChange={handleChange}
              className="input-field mt-1"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">
              Email Address
            </label>
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
            <label className="text-sm text-gray-700 dark:text-gray-300">
              Password
            </label>

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
              className="absolute right-3 top-10 cursor-pointer select-none text-xl"
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          {/* CONFIRM PASSWORD */}
          <div className="relative">
            <label className="text-sm text-gray-700 dark:text-gray-300">
              Confirm Password
            </label>

            <input
              name="confirmPassword"
              type={showCPassword ? "text" : "password"}
              onChange={handleChange}
              className="input-field mt-1 pr-10"
              placeholder="Re-enter your password"
              required
            />

            <span
              onClick={() => setShowCPassword(!showCPassword)}
              className="absolute right-3 top-10 cursor-pointer select-none text-xl"
            >
              {showCPassword ? "🙈" : "👁️"}
            </span>
          </div>

          {/* BUTTON */}
          <button
            disabled={loading}
            className="btn-primary w-full flex justify-center items-center gap-3"
          >
            {loading && (
              <span className="w-5 h-5 border-2 border-white border-t-transparent 
              rounded-full animate-spin"></span>
            )}
            {loading ? "Creating Account..." : "Sign Up"}
          </button>

          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            Already have an account?{" "}
            <Link className="text-purple-500 hover:underline" to="/login">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
