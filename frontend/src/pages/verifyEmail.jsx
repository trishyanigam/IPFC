import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { sendEmailVerification } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";

export default function VerifyEmail() {
  const { user } = useContext(AuthContext);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const checkVerification = async () => {
    await user.reload(); // refresh user info
    if (user.emailVerified) {
      navigate("/");
    } else {
      setStatus("Email not verified yet. Please check again.");
    }
  };

  const resendEmail = async () => {
    try {
      await sendEmailVerification(auth.currentUser);
      setStatus("Verification email sent again! Check inbox.");
    } catch (err) {
      setStatus("Error sending email. Try again.");
    }
  };

  return (
    <div className="pt-32 px-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
        Verify Your Email
      </h1>

      <div className="mt-8 bg-gray-100 dark:bg-gray-900 p-8 rounded-xl border dark:border-gray-800 space-y-4">

        <p className="text-center text-gray-700 dark:text-gray-300">
          A verification link has been sent to:
          <br />
          <span className="font-semibold">{user?.email}</span>
        </p>

        {status && (
          <p className="text-sm text-center text-blue-500">{status}</p>
        )}

        <button
          onClick={checkVerification}
          className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium"
        >
          I have verified my email
        </button>

        <button
          onClick={resendEmail}
          className="w-full py-3 rounded-lg bg-gray-300 dark:bg-gray-800 hover:bg-gray-700 dark:text-gray-200"
        >
          Resend Verification Email
        </button>
      </div>
    </div>
  );
}
