import React from "react";
export default function AboutPage() {
  return (
    <div className="px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        About IPFC Management System
      </h1>

      <p className="mt-5 text-gray-700 dark:text-gray-300 leading-relaxed">
        The Intellectual Property Facilitation Centre (IPFC) Management System aims to
        digitize and streamline the process of filing and managing intellectual property
        applications within an institute or organization.
      </p>

      <h2 className="mt-8 text-2xl font-semibold text-gray-900 dark:text-white">
        Objectives
      </h2>
      <ul className="mt-3 list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
        <li>Simplify IP filing for students, researchers and faculty.</li>
        <li>Provide transparency in application status and timelines.</li>
        <li>Reduce manual paperwork and coordination overhead.</li>
        <li>Enable admins to manage, review and approve applications efficiently.</li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold text-gray-900 dark:text-white">
        Technology Stack
      </h2>
      <ul className="mt-3 list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
        <li>Frontend: React + Vite + Tailwind CSS</li>
        <li>Authentication: Firebase Authentication</li>
        <li>Backend: Node.js + Express (for APIs)</li>
        <li>Database: MongoDB (for persisting application data)</li>
      </ul>
    </div>
  );
}
