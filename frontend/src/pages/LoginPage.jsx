import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, form.email, form.password);
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="pt-32 px-6 flex justify-center">
      <div className="max-w-md w-full bg-gray-100 dark:bg-gray-900 rounded-2xl shadow-xl p-8 border border-gray-300 dark:border-gray-700">
        <h1 className="text-3xl font-bold text-center mb-2 text-gray-900 dark:text-white">
          Login
        </h1>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-6">
          Welcome back! Log into your account.
        </p>

        {error && (
          <p className="text-red-500 text-sm text-center mb-3">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">
              Email
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

          <button className="btn-primary">Login</button>

          <p className="text-sm text-center text-gray-600 dark:text-gray-400">
            Don't have an account?{" "}
            <Link className="text-purple-500 hover:underline" to="/register">
              Create Account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
