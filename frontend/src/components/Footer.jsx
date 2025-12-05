import React from "react";
export default function Footer() {
  return (
    <footer className="mt-10 border-t border-gray-200 dark:border-gray-800 py-4 text-center text-xs md:text-sm text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} IPFC Management System. All rights reserved.
    </footer>
  );
}
