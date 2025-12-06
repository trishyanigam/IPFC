import React, { useState } from "react";
import { auth } from "../services/firebase";
import { sendEmailVerification } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function VerifyEmail() {
  const navigate = useNavigate();
  const user = auth.currentUser;

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(false);

  // Resend email function
  const handleResend = async () => {
    if (!user) return;
    setLoading(true);
    setMessage("");

    try {
      await sendEmailVerification(user);
      setMessage("✔ Verification email sent again! Check your inbox.");
    } catch (error) {
      setMessage("❌ Failed to resend email. Try again.");
    }

    setLoading(false);
  };

  // Check verification status
  const handleCheckVerified = async () => {
    if (!user) return;
    setChecking(true);
    setMessage("");

    await user.reload(); // refresh user data

    if (auth.currentUser.emailVerified) {
      navigate("/dashboard");
    } else {
      setMessage("❌ Email not verified yet. Please check again.");
    }

    setChecking(false);
  };

  return (
    <div className="pt-32 px-6 flex justify-center">
      <div className="max-w-lg w-full bg-gray-100 dark:bg-gray-900 rounded-2xl shadow-xl p-10 border border-gray-300 dark:border-gray-700 text-center">

        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Verify Your Email ✉️
        </h1>

        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          A verification link has been sent to:  
          <span className="font-semibold"> {user?.email}</span>
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Please click the link in your email to activate your account.
        </p>

        {/* Message display */}
        {message && (
          <p className="mb-6 text-sm font-medium text-center text-purple-500">
            {message}
          </p>
        )}

        {/* Buttons */}
        <div className="space-y-4">

          {/* RESEND BUTTON */}
          <button
            onClick={handleResend}
            disabled={loading}
            className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold shadow-md flex justify-center items-center gap-3 transition-all"
          >
            {loading && (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            )}
            {loading ? "Resending..." : "Resend Verification Email"}
          </button>

          {/* CHECK VERIFIED BUTTON */}
          <button
            onClick={handleCheckVerified}
            disabled={checking}
            className="w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md flex justify-center items-center gap-3 transition-all"
          >
            {checking && (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            )}
            {checking ? "Checking..." : "I Have Verified"}
          </button>
        </div>

        {/* Footer */}
        <p className="mt-6 text-xs text-gray-500 dark:text-gray-400">
          Didn’t receive the email? Try resending or check your spam folder.
        </p>
      </div>
    </div>
  );
}
