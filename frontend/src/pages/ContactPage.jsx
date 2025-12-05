import React from "react";
export default function ContactPage() {
  return (
    <div className="px-6 max-w-3xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center">
        Contact Us
      </h1>
      <p className="mt-3 text-center text-gray-600 dark:text-gray-300">
        Have queries about IP filing or this portal? Reach out to us.
      </p>

      <form className="mt-8 bg-gray-100/90 dark:bg-gray-900/70 p-6 rounded-2xl border border-gray-200 dark:border-gray-800 space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 outline-none"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full p-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 outline-none"
        />
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
