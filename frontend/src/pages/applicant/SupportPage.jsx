import React, { useState } from "react";
import { Mail, MessageCircle, ChevronDown, HelpCircle } from "lucide-react";

export default function SupportPage() {
  const [faqOpen, setFaqOpen] = useState(null);

  const faqs = [
    {
      q: "How do I submit my IP application?",
      a: "Go to Apply page, fill required fields, upload your main document, and click Submit.",
    },
    {
      q: "How long does verification take?",
      a: "Admin usually reviews documents within 3–5 working days.",
    },
    {
      q: "Can I upload more files after applying?",
      a: "Yes! Use the Upload section to attach additional documents anytime.",
    },
    {
      q: "What if my application gets rejected?",
      a: "You will receive a reason. You can re-apply after making necessary corrections.",
    },
  ];

  return (
    <div className="px-6 max-w-5xl mx-auto">

      {/* HEADER */}
      <div className="
        mt-10 p-10 rounded-3xl shadow-xl text-white 
        bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600
        dark:from-purple-900 dark:via-indigo-900 dark:to-blue-900
        border border-white/20 backdrop-blur-xl animate-[fadeIn_0.6s_ease]
      ">
        <h1 className="text-4xl font-extrabold flex items-center gap-3">
          <HelpCircle size={40} /> Support Center
        </h1>
        <p className="mt-2 opacity-90">
          We're here to help you with your Intellectual Property filings.
        </p>
      </div>

      {/* CONTACT FORM */}
      <div className="
        mt-10 p-8 rounded-3xl bg-white/70 dark:bg-gray-900/60
        shadow-xl border border-gray-300 dark:border-gray-700
        backdrop-blur-xl animate-[slideUp_0.5s_ease]
      ">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Mail /> Contact Support
        </h2>

        <form className="space-y-6">

          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">Full Name</label>
            <input type="text" className="input-field mt-1" placeholder="Enter your name" required />
          </div>

          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">Email Address</label>
            <input type="email" className="input-field mt-1" placeholder="Enter your email" required />
          </div>

          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">Issue Type</label>
            <select className="input-field mt-1">
              <option>Select issue category</option>
              <option>Document Upload Issue</option>
              <option>Application Status Issue</option>
              <option>Payment Issue</option>
              <option>Portal Technical Issue</option>
              <option>Other Queries</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              className="input-field mt-1 h-32 resize-none"
              placeholder="Describe your issue..."
              required
            />
          </div>

          <button className="btn-primary w-full py-3 text-lg">Submit Ticket</button>
        </form>
      </div>

      {/* FAQ SECTION */}
      <div className="mt-14 mb-20 animate-[fadeIn_0.8s_ease]">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
          <MessageCircle /> Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((item, index) => {
            const isOpen = faqOpen === index;

            return (
              <div
                key={index}
                onClick={() => setFaqOpen(isOpen ? null : index)}
                className={`
                  p-6 rounded-2xl cursor-pointer transition-all shadow-md
                  hover:shadow-xl border

                  ${isOpen
                    ? "bg-purple-100 dark:bg-purple-800/40 border-purple-500 dark:border-purple-300"
                    : "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                  }
                `}
              >
                {/* QUESTION ROW */}
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{item.q}</h3>

                  <ChevronDown
                    className={`
                      transition-transform duration-300
                      ${isOpen ? "rotate-180 text-purple-600 dark:text-purple-300" : ""}
                    `}
                  />
                </div>

                {/* ANSWER - SLIDE DOWN */}
                <div
                  className={`
                    overflow-hidden transition-all duration-300
                    ${isOpen ? "max-h-40 mt-3" : "max-h-0"}
                  `}
                >
                  <p className="text-gray-600 dark:text-gray-300">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
