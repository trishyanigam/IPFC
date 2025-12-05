import React from "react";
import AppRouter from "./routes/AppRouter";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Subtle gradient background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-blue-600/15 via-purple-600/15 to-pink-600/15 dark:from-blue-600/25 dark:via-purple-600/25 dark:to-pink-600/25" />
      <AppRouter />
    </div>
  );
}
