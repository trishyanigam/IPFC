import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, form.email, form.password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="pt-32 px-6 flex justify-center">
      <div className="max-w-md w-full bg-gray-100 dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-300 dark:border-gray-700">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-900 dark:text-white">
          Create Your Account
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          Register to access your dashboard
        </p>

        {error && (
          <p className="text-red-500 text-sm text-center mb-3">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">
              Full Name
            </label>
            <input
              name="fullName"
              onChange={handleChange}
              className="input-field mt-1"
              placeholder="Enter your name"
              required
            />
          </div>

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

          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              className="input-field mt-1"
              placeholder="Enter your password"
              required
            />
          </div>

          <button className="btn-primary">Sign Up</button>

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
