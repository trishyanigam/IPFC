import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function UserDashboard() {
  const { user } = useContext(AuthContext);

  return (
    <div className="px-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        User Dashboard
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Logged in as: <span className="font-semibold">{user?.email}</span>
      </p>

      <p className="mt-6 text-gray-700 dark:text-gray-300">
        Here you will later display:
      </p>
      <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300">
        <li>List of IP applications submitted by the user</li>
        <li>Status of each application (Submitted, Under Review, Approved, Rejected)</li>
        <li>Option to create a new application</li>
      </ul>
    </div>
  );
}
