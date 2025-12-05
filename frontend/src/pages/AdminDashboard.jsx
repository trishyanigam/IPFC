import React from "react";
export default function AdminDashboard() {
  return (
    <div className="px-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Admin Dashboard
      </h1>

      <p className="mt-4 text-gray-700 dark:text-gray-300">
        This page will be used for:
      </p>
      <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300">
        <li>Viewing all IP applications submitted in the system</li>
        <li>Filtering applications by status</li>
        <li>Reviewing details and updating status (approve / reject)</li>
      </ul>
    </div>
  );
}
