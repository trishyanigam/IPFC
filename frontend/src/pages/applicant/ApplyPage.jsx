// import React, { useState } from "react";
// import { UploadCloud, XCircle, FileText, ChevronDown } from "lucide-react";

// export default function ApplyPage() {
//   const [form, setForm] = useState({
//     ipType: "",
//     title: "",
//     description: "",
//     file: null,
//     previewUrl: "",
//   });

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleFile = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const previewUrl = file.type.startsWith("image")
//       ? URL.createObjectURL(file)
//       : null;

//     setForm({ ...form, file, previewUrl });
//   };

//   const removeFile = () => {
//     setForm({ ...form, file: null, previewUrl: "" });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!form.file) return alert("Please upload a document!");
//     alert("Application Submitted Successfully 🎉");
//   };

//   return (
//     <div className="px-6 max-w-5xl mx-auto">

//       {/* ========== HEADER (Animated) ========== */}
//       <div
//         className="
//         mt-10 p-10 rounded-3xl shadow-2xl animate-[fadeIn_0.6s_ease]
//         bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600
//         dark:from-purple-800 dark:via-blue-900 dark:to-pink-900
//         text-white backdrop-blur-xl border border-white/20
//       "
//       >
//         <h1 className="text-4xl font-extrabold tracking-wide">
//           Start Your IP Filing ✨
//         </h1>
//         <p className="mt-3 text-lg opacity-90">
//           Submit your intellectual property information with required documents.
//         </p>
//       </div>

//       {/* ========== FORM CARD ========== */}
//       <form
//         onSubmit={handleSubmit}
//         className="
//           mt-10 p-10 rounded-3xl shadow-xl 
//           bg-white/60 dark:bg-gray-900/70 
//           backdrop-blur-xl border border-gray-300 dark:border-gray-700 
//           space-y-9 animate-[slideUp_0.6s_ease]
//         "
//       >
//         {/* ====== BASIC INFO ====== */}
//         <div className="grid md:grid-cols-2 gap-10">
//           {/* IP TYPE */}
//           <div className="relative">
//             <label className="text-sm font-medium">IP Type</label>
//             <select
//               name="ipType"
//               value={form.ipType}
//               onChange={handleChange}
//               required
//               className="
//                 w-full mt-1 px-4 py-3 rounded-2xl bg-gray-100 dark:bg-gray-800 
//                 border border-gray-300 dark:border-gray-600
//                 focus:ring-2 focus:ring-purple-500 transition
//                 appearance-none text-gray-800 dark:text-gray-200
//               "
//             >
//               <option value="">Choose an option</option>
//               <option value="Patent">Patent</option>
//               <option value="Trademark">Trademark</option>
//               <option value="Copyright">Copyright</option>
//               <option value="Design">Design</option>
//             </select>

//             <ChevronDown
//               size={20}
//               className="absolute right-4 top-1/2 text-gray-500 -translate-y-1/2"
//             />
//           </div>

//           {/* TITLE */}
//           <div>
//             <label className="text-sm font-medium">Title</label>
//             <input
//               type="text"
//               name="title"
//               value={form.title}
//               onChange={handleChange}
//               required
//               placeholder="e.g., AI-based Smart Helmet"
//               className="
//                 w-full mt-1 px-4 py-3 rounded-2xl bg-gray-100 dark:bg-gray-800 
//                 border border-gray-300 dark:border-gray-700
//                 focus:ring-2 focus:ring-purple-500 transition
//               "
//             />
//           </div>
//         </div>

//         {/* ====== DESCRIPTION ====== */}
//         <div>
//           <label className="text-sm font-medium">Description</label>
//           <textarea
//             name="description"
//             value={form.description}
//             onChange={handleChange}
//             required
//             rows="5"
//             placeholder="Describe the invention / concept..."
//             className="
//               w-full mt-1 p-4 rounded-2xl bg-gray-100 dark:bg-gray-800 
//               border border-gray-300 dark:border-gray-700
//               focus:ring-2 focus:ring-purple-500 transition resize-none
//             "
//           />
//         </div>

//         {/* ========== FILE UPLOAD WITH PREVIEW ========== */}
//         <div>
//           <label className="text-sm font-medium">Upload Document</label>

//           {/* Upload Box */}
//           <label
//             htmlFor="uploadInput"
//             className="
//               mt-2 flex flex-col justify-center items-center p-8 rounded-3xl
//               border-2 border-dashed border-gray-400 dark:border-gray-600
//               cursor-pointer transition-all
//               hover:bg-gray-200/40 dark:hover:bg-gray-700/40 
//               hover:scale-[1.02] active:scale-[0.98]
//             "
//           >
//             <UploadCloud size={48} className="text-purple-500 mb-2" />
//             <p className="text-gray-600 dark:text-gray-300">
//               Click to upload your file
//             </p>

//             {/* SHOW SELECTED FILE */}
//             {form.file && (
//               <p className="mt-3 text-green-600 dark:text-green-400 font-semibold">
//                 {form.file.name}
//               </p>
//             )}
//           </label>

//           {/* Hidden Input */}
//           <input
//             type="file"
//             id="uploadInput"
//             accept=".pdf,.png,.jpg,.jpeg"
//             onChange={handleFile}
//             className="hidden"
//           />

//           {/* ===== FILE PREVIEW BOX ===== */}
//           {form.file && (
//             <div
//               className="
//                 mt-5 p-5 rounded-2xl border border-gray-300 dark:border-gray-700 
//                 bg-gray-50 dark:bg-gray-800 shadow-md flex items-center gap-5 animate-[fadeIn_0.3s_ease]
//               "
//             >
//               {form.previewUrl ? (
//                 <img
//                   src={form.previewUrl}
//                   alt="Preview"
//                   className="w-24 h-24 object-cover rounded-xl shadow"
//                 />
//               ) : (
//                 <FileText size={50} className="text-purple-500" />
//               )}

//               <div className="flex-1">
//                 <p className="font-medium">{form.file.name}</p>
//                 <p className="text-sm opacity-70">
//                   {(form.file.size / 1024).toFixed(1)} KB
//                 </p>
//               </div>

//               <button
//                 type="button"
//                 onClick={removeFile}
//                 className="text-red-500 hover:text-red-600 transition"
//               >
//                 <XCircle size={32} />
//               </button>
//             </div>
//           )}
//         </div>

//         {/* ===== SUBMIT BUTTON ===== */}
//         <button
//           className="
//             w-full py-4 text-lg rounded-2xl font-semibold text-white
//             bg-gradient-to-r from-purple-600 to-blue-600
//             hover:from-purple-700 hover:to-blue-700 
//             shadow-xl hover:shadow-2xl transition-all
//             animate-[fadeIn_0.4s_ease]
//           "
//         >
//           Submit Application 🚀
//         </button>
//       </form>
//     </div>
//   );
// }

// src/pages/applicant/ApplyPage.jsx
// import React, { useState } from "react";
// import { UploadCloud, XCircle, FileText, ChevronDown } from "lucide-react";
// import api from "../../services/api";
// import toast from "react-hot-toast";

// export default function ApplyPage() {
//   const [form, setForm] = useState({ ipType: "", title: "", description: "", file: null, previewUrl: "" });
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
//   const handleFile = (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     const previewUrl = file.type.startsWith("image") ? URL.createObjectURL(file) : null;
//     setForm((s) => ({ ...s, file, previewUrl }));
//   };
//   const removeFile = () => setForm((s) => ({ ...s, file: null, previewUrl: "" }));

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!form.file) return toast.error("Please upload a document");
//     if (!form.title || !form.ipType || !form.description) return toast.error("Fill required fields");

//     setLoading(true);
//     const t = toast.loading("Submitting application...");
//     try {
//       const fd = new FormData();
//       fd.append("file", form.file);
//       fd.append("name", form.file.name);
//       fd.append("category", form.ipType);

//       const uploadRes = await api.post("/documents/upload", fd, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       const fileObj = {
//         filename: uploadRes.data.filename,
//         url: uploadRes.data.url,
//         mimeType: uploadRes.data.mimeType,
//         size: uploadRes.data.size,
//       };

//       await api.post("/applications/submit", {
//         title: form.title,
//         ipType: form.ipType,
//         description: form.description,
//         files: [fileObj],
//       });

//       toast.success("Application submitted");
//       setForm({ ipType: "", title: "", description: "", file: null, previewUrl: "" });
//     } catch (err) {
//       console.error(err);
//       toast.error(err?.response?.data?.error || "Submission failed");
//     } finally {
//       toast.dismiss(t);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="px-6 max-w-5xl mx-auto">
//       <div className="mt-10 p-10 rounded-3xl shadow-2xl bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 text-white">
//         <h1 className="text-4xl font-extrabold">Start Your IP Filing ✨</h1>
//         <p className="mt-3 text-lg opacity-90">Submit your intellectual property information with required documents.</p>
//       </div>

//       <form onSubmit={handleSubmit} className="mt-10 p-10 rounded-3xl bg-white/60 space-y-9">
//         <div className="grid md:grid-cols-2 gap-10">
//           <div className="relative">
//             <label className="text-sm font-medium">IP Type</label>
//             <select name="ipType" value={form.ipType} onChange={handleChange} required className="w-full mt-1 px-4 py-3 rounded-2xl">
//               <option value="">Choose an option</option>
//               <option value="Patent">Patent</option>
//               <option value="Trademark">Trademark</option>
//               <option value="Copyright">Copyright</option>
//               <option value="Design">Design</option>
//             </select>
//             <ChevronDown size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" />
//           </div>

//           <div>
//             <label className="text-sm font-medium">Title</label>
//             <input type="text" name="title" value={form.title} onChange={handleChange} required placeholder="e.g., AI-based Smart Helmet" className="w-full mt-1 px-4 py-3 rounded-2xl" />
//           </div>
//         </div>

//         <div>
//           <label className="text-sm font-medium">Description</label>
//           <textarea name="description" value={form.description} onChange={handleChange} required rows="5" placeholder="Describe the invention..." className="w-full mt-1 p-4 rounded-2xl" />
//         </div>

//         <div>
//           <label className="text-sm font-medium">Upload Document</label>
//           <label htmlFor="uploadInput" className="mt-2 flex flex-col items-center p-8 rounded-3xl border-2 border-dashed cursor-pointer">
//             <UploadCloud size={48} className="text-purple-500 mb-2" />
//             <p>Click to upload your file</p>
//             {form.file && <p className="mt-3 text-green-600 font-semibold">{form.file.name}</p>}
//           </label>
//           <input type="file" id="uploadInput" accept=".pdf,.png,.jpg,.jpeg" onChange={handleFile} className="hidden" />

//           {form.file && (
//             <div className="mt-5 p-5 rounded-2xl border bg-gray-50 flex items-center gap-5">
//               {form.previewUrl ? <img src={form.previewUrl} alt="Preview" className="w-24 h-24 object-cover rounded-xl shadow" /> : <FileText size={50} className="text-purple-500" />}
//               <div className="flex-1">
//                 <p className="font-medium">{form.file.name}</p>
//                 <p className="text-sm opacity-70">{(form.file.size / 1024).toFixed(1)} KB</p>
//               </div>
//               <button type="button" onClick={removeFile} className="text-red-500">
//                 <XCircle size={32} />
//               </button>
//             </div>
//           )}
//         </div>

//         <button disabled={loading} className="w-full py-4 text-lg rounded-2xl font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600">
//           {loading ? "Submitting..." : "Submit Application 🚀"}
//         </button>
//       </form>
//     </div>
//   );
// }


// src/pages/applicant/ApplyPage.jsx
import React, { useState } from "react";
import { UploadCloud, XCircle, FileText, ChevronDown } from "lucide-react";
import api from "../../services/api";
import toast from "react-hot-toast";

export default function ApplyPage() {
  const [form, setForm] = useState({
    ipType: "",
    title: "",
    description: "",
    file: null,
    previewUrl: "",
  });

  const [loading, setLoading] = useState(false);
  const [buttonState, setButtonState] = useState("default"); 
  // default | submitting | submitted

  /* ---------------- CHANGE HANDLERS ---------------- */

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const previewUrl = file.type.startsWith("image")
      ? URL.createObjectURL(file)
      : null;

    setForm((prev) => ({ ...prev, file, previewUrl }));
  };

  const removeFile = () =>
    setForm((prev) => ({ ...prev, file: null, previewUrl: "" }));

  /* ---------------- SUBMIT HANDLER ---------------- */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.file) return toast.error("Please upload a document");
    if (!form.title || !form.ipType || !form.description)
      return toast.error("Please fill all required fields");

    setLoading(true);
    setButtonState("submitting");

    const t = toast.loading("Submitting application...");

    try {
      /* --- 1️⃣ UPLOAD DOCUMENT --- */
      const fd = new FormData();
      fd.append("file", form.file);
      fd.append("name", form.file.name);
      fd.append("category", form.ipType);

      const uploadRes = await api.post("/documents/upload", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const fileObj = {
        filename: uploadRes?.data?.filename || form.file.name,
        url: uploadRes?.data?.url || "",
        mimeType: uploadRes?.data?.mimeType || form.file.type,
        size: uploadRes?.data?.size || form.file.size,
      };

      /* --- 2️⃣ SUBMIT APPLICATION --- */
      await api.post("/applications/submit", {
        title: form.title,
        ipType: form.ipType,
        description: form.description,
        files: [fileObj],
      });

      toast.dismiss(t);
      toast.success("Application submitted successfully 🎉");

      setButtonState("submitted");

      /* --- RESET FORM --- */
      setForm({
        ipType: "",
        title: "",
        description: "",
        file: null,
        previewUrl: "",
      });

      /* --- Scroll to top --- */
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);

      /* Reset button back to default after 2 sec */
      setTimeout(() => {
        setButtonState("default");
      }, 2000);

    } catch (err) {
      toast.dismiss(t);
      toast.error(err?.response?.data?.error || "Submission failed");
    } finally {
      setLoading(false);
    }
  };

  /* ---------------- UI ---------------- */

  return (
    <div className="px-6 max-w-5xl mx-auto">

      {/* HEADER */}
      <div
        className="
          mt-10 p-10 rounded-3xl shadow-2xl
          bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600
          text-white backdrop-blur-xl border border-white/20
          animate-[fadeIn_0.6s_ease]
        "
      >
        <h1 className="text-4xl font-extrabold tracking-wide">
          Start Your IP Filing ✨
        </h1>
        <p className="mt-3 text-lg opacity-90">
          Submit your intellectual property information with required documents.
        </p>
      </div>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="
          mt-10 p-10 rounded-3xl shadow-xl 
          bg-white/60 dark:bg-gray-900/70 
          border border-gray-300 dark:border-gray-700 
          backdrop-blur-xl space-y-9 animate-[slideUp_0.6s_ease]
        "
      >
        {/* IP TYPE + TITLE */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* IP Type */}
          <div className="relative">
            <label className="text-sm font-medium">IP Type</label>
            <select
              name="ipType"
              value={form.ipType}
              onChange={handleChange}
              required
              className="
                w-full mt-1 px-4 py-3 rounded-2xl bg-gray-100 dark:bg-gray-800 
                border border-gray-300 dark:border-gray-600
                focus:ring-2 focus:ring-purple-500 transition appearance-none
              "
            >
              <option value="">Choose an option</option>
              <option value="Patent">Patent</option>
              <option value="Trademark">Trademark</option>
              <option value="Copyright">Copyright</option>
              <option value="Design">Design</option>
            </select>

            <ChevronDown
              size={20}
              className="absolute right-4 top-1/2 text-gray-500 -translate-y-1/2"
            />
          </div>

          {/* Title */}
          <div>
            <label className="text-sm font-medium">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
              placeholder="e.g., AI-based Smart Helmet"
              className="
                w-full mt-1 px-4 py-3 rounded-2xl bg-gray-100 dark:bg-gray-800 
                border border-gray-300 dark:border-gray-700
                focus:ring-2 focus:ring-purple-500 transition
              "
            />
          </div>
        </div>

        {/* DESCRIPTION */}
        <div>
          <label className="text-sm font-medium">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Describe the invention / concept..."
            className="
              w-full mt-1 p-4 rounded-2xl bg-gray-100 dark:bg-gray-800 
              border border-gray-300 dark:border-gray-700
              focus:ring-2 focus:ring-purple-500 transition resize-none
            "
          />
        </div>

        {/* FILE UPLOAD */}
        <div>
          <label className="text-sm font-medium">Upload Document</label>

          {/* Upload Box */}
          <label
            htmlFor="uploadInput"
            className="
              mt-2 flex flex-col justify-center items-center p-8 rounded-3xl
              border-2 border-dashed border-gray-400 dark:border-gray-600
              cursor-pointer transition
              hover:bg-gray-200/40 dark:hover:bg-gray-700/40 
              hover:scale-[1.02] active:scale-[0.98]
            "
          >
            <UploadCloud size={48} className="text-purple-500 mb-2" />
            <p className="text-gray-600 dark:text-gray-300">
              Click to upload your file
            </p>

            {form.file && (
              <p className="mt-3 text-green-600 dark:text-green-400 font-semibold">
                {form.file.name}
              </p>
            )}
          </label>

          <input
            type="file"
            id="uploadInput"
            accept=".pdf,.png,.jpg,.jpeg"
            onChange={handleFile}
            className="hidden"
          />

          {/* Preview */}
          {form.file && (
            <div
              className="
                mt-5 p-5 rounded-2xl border border-gray-300 dark:border-gray-700 
                bg-gray-50 dark:bg-gray-800 shadow-md flex items-center gap-5
              "
            >
              {form.previewUrl ? (
                <img
                  src={form.previewUrl}
                  alt="Preview"
                  className="w-24 h-24 object-cover rounded-xl shadow"
                />
              ) : (
                <FileText size={50} className="text-purple-500" />
              )}

              <div className="flex-1">
                <p className="font-medium">{form.file.name}</p>
                <p className="text-sm opacity-70">
                  {(form.file.size / 1024).toFixed(1)} KB
                </p>
              </div>

              <button
                type="button"
                onClick={removeFile}
                className="text-red-500 hover:text-red-600 transition"
              >
                <XCircle size={32} />
              </button>
            </div>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          disabled={loading}
          className="
            w-full py-4 text-lg rounded-2xl font-semibold text-white
            bg-gradient-to-r from-purple-600 to-blue-600
            hover:from-purple-700 hover:to-blue-700 
            shadow-xl hover:shadow-2xl transition-all
          "
        >
          {buttonState === "submitting"
            ? "Submitting..."
            : buttonState === "submitted"
            ? "Submitted ✓"
            : "Submit Application 🚀"}
        </button>
      </form>
    </div>
  );
}

