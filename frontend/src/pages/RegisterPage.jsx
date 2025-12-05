import React from "react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      setErr("Registration failed. Try a different email or stronger password.");
    }
  };

  return (
    <div className="px-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
        Create Account
      </h1>

      <form
        onSubmit={register}
        className="mt-6 bg-gray-100/90 dark:bg-gray-900/70 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-4"
      >
        {err && (
          <p className="text-sm text-red-500 text-center">{err}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium"
        >
          Register
        </button>

        <p className="text-xs text-center text-gray-600 dark:text-gray-400 mt-2">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-500 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
