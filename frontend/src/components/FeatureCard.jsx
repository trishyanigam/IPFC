import React from "react";
export default function FeatureCard({ icon: Icon, title, desc }) {
  return (
    <div className="p-6 rounded-2xl bg-gray-100/80 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center mx-auto">
        <Icon className="text-white" size={24} />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        {desc}
      </p>
    </div>
  );
}
