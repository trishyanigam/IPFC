// import React, { useState } from "react";
// import { Mail, MessageCircle, ChevronDown, HelpCircle } from "lucide-react";

// export default function SupportPage() {
//   const [faqOpen, setFaqOpen] = useState(null);

//   const faqs = [
//     {
//       q: "How do I submit my IP application?",
//       a: "Go to Apply page, fill required fields, upload your main document, and click Submit.",
//     },
//     {
//       q: "How long does verification take?",
//       a: "Admin usually reviews documents within 3–5 working days.",
//     },
//     {
//       q: "Can I upload more files after applying?",
//       a: "Yes! Use the Upload section to attach additional documents anytime.",
//     },
//     {
//       q: "What if my application gets rejected?",
//       a: "You will receive a reason. You can re-apply after making necessary corrections.",
//     },
//   ];

//   return (
//     <div className="px-6 max-w-5xl mx-auto">

//       {/* HEADER */}
//       <div className="
//         mt-10 p-10 rounded-3xl shadow-xl text-white 
//         bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600
//         dark:from-purple-900 dark:via-indigo-900 dark:to-blue-900
//         border border-white/20 backdrop-blur-xl animate-[fadeIn_0.6s_ease]
//       ">
//         <h1 className="text-4xl font-extrabold flex items-center gap-3">
//           <HelpCircle size={40} /> Support Center
//         </h1>
//         <p className="mt-2 opacity-90">
//           We're here to help you with your Intellectual Property filings.
//         </p>
//       </div>

//       {/* CONTACT FORM */}
//       <div className="
//         mt-10 p-8 rounded-3xl bg-white/70 dark:bg-gray-900/60
//         shadow-xl border border-gray-300 dark:border-gray-700
//         backdrop-blur-xl animate-[slideUp_0.5s_ease]
//       ">
//         <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
//           <Mail /> Contact Support
//         </h2>

//         <form className="space-y-6">

//           <div>
//             <label className="text-sm text-gray-700 dark:text-gray-300">Full Name</label>
//             <input type="text" className="input-field mt-1" placeholder="Enter your name" required />
//           </div>

//           <div>
//             <label className="text-sm text-gray-700 dark:text-gray-300">Email Address</label>
//             <input type="email" className="input-field mt-1" placeholder="Enter your email" required />
//           </div>

//           <div>
//             <label className="text-sm text-gray-700 dark:text-gray-300">Issue Type</label>
//             <select className="input-field mt-1">
//               <option>Select issue category</option>
//               <option>Document Upload Issue</option>
//               <option>Application Status Issue</option>
//               <option>Payment Issue</option>
//               <option>Portal Technical Issue</option>
//               <option>Other Queries</option>
//             </select>
//           </div>

//           <div>
//             <label className="text-sm text-gray-700 dark:text-gray-300">Message</label>
//             <textarea
//               className="input-field mt-1 h-32 resize-none"
//               placeholder="Describe your issue..."
//               required
//             />
//           </div>

//           <button className="btn-primary w-full py-3 text-lg">Submit Ticket</button>
//         </form>
//       </div>

//       {/* FAQ SECTION */}
//       <div className="mt-14 mb-20 animate-[fadeIn_0.8s_ease]">
//         <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
//           <MessageCircle /> Frequently Asked Questions
//         </h2>

//         <div className="space-y-4">
//           {faqs.map((item, index) => {
//             const isOpen = faqOpen === index;

//             return (
//               <div
//                 key={index}
//                 onClick={() => setFaqOpen(isOpen ? null : index)}
//                 className={`
//                   p-6 rounded-2xl cursor-pointer transition-all shadow-md
//                   hover:shadow-xl border

//                   ${isOpen
//                     ? "bg-purple-100 dark:bg-purple-800/40 border-purple-500 dark:border-purple-300"
//                     : "bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700"
//                   }
//                 `}
//               >
//                 {/* QUESTION ROW */}
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-lg font-semibold">{item.q}</h3>

//                   <ChevronDown
//                     className={`
//                       transition-transform duration-300
//                       ${isOpen ? "rotate-180 text-purple-600 dark:text-purple-300" : ""}
//                     `}
//                   />
//                 </div>

//                 {/* ANSWER - SLIDE DOWN */}
//                 <div
//                   className={`
//                     overflow-hidden transition-all duration-300
//                     ${isOpen ? "max-h-40 mt-3" : "max-h-0"}
//                   `}
//                 >
//                   <p className="text-gray-600 dark:text-gray-300">{item.a}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//     </div>
//   );
// }


// src/pages/applicant/SupportPage.jsx
import React, { useState } from "react";
import { Mail, MessageCircle, ChevronDown, HelpCircle } from "lucide-react";
import api from "../../services/api";
import toast from "react-hot-toast";

export default function SupportPage() {
  const [faqOpen, setFaqOpen] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    issueType: "",
    message: "",
  });

  const faqs = [
    { q: "How do I submit my IP application?", a: "Go to Apply page, fill required fields, upload your main document, and click Submit." },
    { q: "How long does verification take?", a: "Admin usually reviews documents within 3–5 working days." },
    { q: "Can I upload more files after applying?", a: "Yes! Use the Upload section to attach additional documents anytime." },
    { q: "What if my application gets rejected?", a: "You will receive a reason. You can re-apply after making necessary corrections." },
  ];

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name";
    if (!form.email.trim()) return "Please enter your email";
    // basic email pattern
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Please enter a valid email";
    if (!form.issueType) return "Please select an issue type";
    if (!form.message.trim()) return "Please describe your issue";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) return toast.error(err);

    setSubmitting(true);
    const loader = toast.loading("Submitting ticket...");
    try {
      // POST to backend (your api instance likely prefixes /api automatically)
      const res = await api.post("/support/create", {
        name: form.name,
        email: form.email,
        issueType: form.issueType,
        message: form.message,
      });

      // success
      toast.dismiss(loader);
      toast.success("Ticket submitted successfully! Our support will contact you.", { position: "top-center" });

      // clear form & scroll to top so toast is visible under navbar
      setForm({ name: "", email: "", issueType: "", message: "" });
      window.scrollTo({ top: 0, behavior: "smooth" });

    } catch (error) {
      console.error("Ticket submit error:", error);
      toast.dismiss(loader);
      const msg = error?.response?.data?.error || "Failed to submit ticket. Try again.";
      toast.error(msg, { position: "top-center" });
    } finally {
      setSubmitting(false);
    }
  };

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

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">Full Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              className="input-field mt-1"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">Email Address</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              className="input-field mt-1"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">Issue Type</label>
            <div className="relative">
              <select
                name="issueType"
                value={form.issueType}
                onChange={handleChange}
                className="input-field mt-1"
                required
              >
                <option value="">Select issue category</option>
                <option value="Document Upload Issue">Document Upload Issue</option>
                <option value="Application Status Issue">Application Status Issue</option>
                <option value="Payment Issue">Payment Issue</option>
                <option value="Portal Technical Issue">Portal Technical Issue</option>
                <option value="Other Queries">Other Queries</option>
              </select>
              <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>

          <div>
            <label className="text-sm text-gray-700 dark:text-gray-300">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="input-field mt-1 h-32 resize-none"
              placeholder="Describe your issue..."
              required
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="btn-primary w-full py-3 text-lg"
          >
            {submitting ? "Submitting..." : "Submit Ticket"}
          </button>
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
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{item.q}</h3>

                  <ChevronDown
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-purple-600 dark:text-purple-300" : ""}`}
                  />
                </div>

                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 mt-3" : "max-h-0"}`}>
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
