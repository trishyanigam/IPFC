import React from "react";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate, Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (error) {
      setErr("Invalid email or password");
    }
  };

  return (
    <div className="px-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
        Login
      </h1>

      <form
        onSubmit={handleLogin}
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
          Login
        </button>

        <p className="text-xs text-center text-gray-600 dark:text-gray-400 mt-2">
          Don't have an account?{" "}
          <Link to="/register" className="text-purple-500 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
