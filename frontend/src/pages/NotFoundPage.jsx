import React from "react";
export default function NotFoundPage() {
  return (
    <div className="px-6 max-w-3xl mx-auto text-center">
      <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white">
        404
      </h1>
      <p className="mt-3 text-gray-600 dark:text-gray-300">
        The page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="inline-block mt-6 px-6 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
      >
        Go Home
      </a>
    </div>
  );
}
