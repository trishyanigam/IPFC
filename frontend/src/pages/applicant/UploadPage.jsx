// import React, { useState, useRef } from "react";
// import { Upload, File, X, FolderPlus } from "lucide-react";

// export default function UploadPage() {
//   const [files, setFiles] = useState([]);
//   const [category, setCategory] = useState("");
//   const fileInputRef = useRef(null);

//   const handleFileSelect = (e) => {
//     const newFiles = Array.from(e.target.files);
//     setFiles((prev) => [...prev, ...newFiles]);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const droppedFiles = Array.from(e.dataTransfer.files);
//     setFiles((prev) => [...prev, ...droppedFiles]);
//   };

//   const removeFile = (index) => {
//     setFiles((prev) => prev.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="px-6 max-w-4xl mx-auto">

//       {/* HEADER */}
//       <div className="
//         mt-10 p-10 rounded-3xl shadow-2xl relative overflow-hidden
//         bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600
//         dark:from-purple-900 dark:via-indigo-900 dark:to-blue-900
//         text-white backdrop-blur-xl border border-white/20
//         animate-[fadeIn_0.7s_ease]
//       ">
//         <h1 className="text-4xl font-extrabold tracking-wide">Upload Documents 📤</h1>
//         <p className="mt-2 opacity-95 text-lg">
//           Upload supporting files for your IP application.
//         </p>
//       </div>

//       {/* CATEGORY SELECTION */}
//       <div className="
//         mt-10 p-6 rounded-2xl bg-white/70 dark:bg-gray-900/60 
//         shadow-xl border border-gray-300 dark:border-gray-700 backdrop-blur-xl
//         animate-[slideUp_0.7s_ease]
//       ">
//         <label className="text-gray-700 dark:text-gray-300 font-medium">
//           Select Document Category
//         </label>

//         <select
//           className="mt-2 input-field w-full"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//         >
//           <option value="">Choose Category</option>
//           <option value="specification">Patent Specification</option>
//           <option value="drawings">Technical Drawings</option>
//           <option value="identity">Identity Proof</option>
//           <option value="ownership">Proof of Ownership</option>
//           <option value="forms">Declaration Forms</option>
//           <option value="others">Other Supporting Documents</option>
//         </select>
//       </div>

//       {/* DRAG & DROP ZONE */}
//       <div
//         onDragOver={(e) => e.preventDefault()}
//         onDrop={handleDrop}
//         onClick={() => fileInputRef.current.click()}
//         className="
//           mt-8 border-2 border-dashed border-purple-500 dark:border-purple-400
//           rounded-3xl p-12 text-center cursor-pointer 
//           bg-white/50 dark:bg-gray-900/40 backdrop-blur-xl
//           hover:bg-purple-50 dark:hover:bg-gray-800/40
//           transition-all shadow-lg hover:shadow-2xl
//           animate-[fadeIn_0.8s_ease]
//         "
//       >
//         <Upload size={50} className="mx-auto text-purple-600 dark:text-purple-300" />
//         <p className="mt-4 text-lg font-semibold">
//           Drag & Drop files here
//         </p>
//         <p className="text-gray-600 dark:text-gray-400">
//           or click to browse
//         </p>

//         <input
//           type="file"
//           multiple
//           hidden
//           ref={fileInputRef}
//           onChange={handleFileSelect}
//         />
//       </div>

//       {/* FILE LIST */}
//       {files.length > 0 && (
//         <div className="
//           mt-10 p-6 rounded-2xl bg-white/70 dark:bg-gray-900/60 
//           shadow-xl border border-gray-300 dark:border-gray-700 
//           backdrop-blur-xl animate-[slideUp_0.6s_ease]
//         ">
//           <h2 className="text-xl font-bold mb-4">Uploaded Files</h2>

//           <div className="space-y-4">
//             {files.map((file, index) => (
//               <div
//                 key={index}
//                 className="
//                   flex justify-between items-center p-4 rounded-xl
//                   bg-gray-100 dark:bg-gray-800 shadow 
//                   border border-gray-300 dark:border-gray-700
//                   hover:shadow-lg transition-all animate-[fadeIn_0.4s_ease]
//                 "
//               >
//                 <div className="flex items-center gap-4">
//                   <File size={28} className="text-purple-600 dark:text-purple-300" />

//                   <div>
//                     <p className="font-semibold">{file.name}</p>
//                     <p className="text-sm text-gray-500 dark:text-gray-400">
//                       {(file.size / 1024).toFixed(2)} KB
//                     </p>
//                   </div>
//                 </div>

//                 <button
//                   onClick={() => removeFile(index)}
//                   className="text-red-500 hover:text-red-700 transition"
//                 >
//                   <X size={26} />
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* SUBMIT BUTTONS */}
//       <div className="flex justify-end gap-4 mt-10 mb-14">
//         <button className="
//           px-6 py-3 rounded-xl bg-gray-600 text-white
//           hover:bg-gray-700 transition shadow
//         ">
//           Save Draft
//         </button>

//         <button className="
//           px-8 py-3 rounded-xl bg-purple-600 text-white 
//           hover:bg-purple-700 transition shadow-lg 
//           flex items-center gap-2
//         ">
//           <FolderPlus size={20} /> Submit Documents
//         </button>
//       </div>
//     </div>
//   );
// }

// src/pages/applicant/UploadPage.jsx
// import React, { useState, useRef, useEffect } from "react";
// import { Upload, File, X, FolderPlus } from "lucide-react";
// import api from "../../services/api";
// import toast from "react-hot-toast";

// export default function UploadPage() {
//   const [files, setFiles] = useState([]);
//   const [category, setCategory] = useState("");
//   const [loading, setLoading] = useState(false);
//   const fileInputRef = useRef(null);

//   const handleFileSelect = (e) => {
//     const newFiles = Array.from(e.target.files);
//     setFiles((prev) => [...prev, ...newFiles]);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     const droppedFiles = Array.from(e.dataTransfer.files);
//     setFiles((prev) => [...prev, ...droppedFiles]);
//   };

//   const removeFile = (index) => setFiles((prev) => prev.filter((_, i) => i !== index));

//   // load user's documents and auto-refresh
//   const [userDocs, setUserDocs] = useState([]);
//   const [loadingDocs, setLoadingDocs] = useState(true);
//   const prevDocsRef = React.useRef([]);

//   const loadDocuments = async () => {
//     setLoadingDocs(true);
//     try {
//       const res = await api.get("/documents/my");
//       const docs = res.data || [];
//       // detect newly reviewed doc statuses and toast
//       const prev = prevDocsRef.current;
//       docs.forEach((d) => {
//         const p = prev.find((x) => x._id === d._id);
//         if (p && p.status !== d.status) {
//           toast(`Your document "${d.name}" is now ${d.status}`, { icon: d.status === "verified" ? "✅" : "⚠️" });
//         }
//       });
//       prevDocsRef.current = docs;
//       setUserDocs(docs);
//     } catch (err) {
//       console.error(err);
//     } finally { setLoadingDocs(false); }
//   };

//   useEffect(() => {
//     loadDocuments();
//     const interval = setInterval(loadDocuments, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const submitFiles = async () => {
//     if (!category) return toast.error("Select a category");
//     if (files.length === 0) return toast.error("Add files first");

//     setLoading(true);
//     const t = toast.loading("Uploading...");
//     try {
//       for (const file of files) {
//         const formData = new FormData();
//         formData.append("file", file);
//         formData.append("category", category);
//         formData.append("name", file.name);

//         await api.post("/documents/upload", formData, { headers: { "Content-Type": "multipart/form-data" } });
//       }
//       toast.success("Files uploaded");
//       setFiles([]);
//       loadDocuments();
//     } catch (err) {
//       console.error(err);
//       toast.error("Upload failed");
//     } finally {
//       toast.dismiss(t);
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="px-6 max-w-4xl mx-auto">
//       <div className="mt-10 p-10 rounded-3xl shadow-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white">
//         <h1 className="text-4xl font-extrabold">Upload Documents 📤</h1>
//       </div>

//       <div className="mt-10 p-6 rounded-2xl bg-white/70">
//         <label className="text-gray-700 font-medium">Select Document Category</label>
//         <select className="mt-2 input-field w-full" value={category} onChange={(e) => setCategory(e.target.value)}>
//           <option value="">Choose Category</option>
//           <option value="specification">Patent Specification</option>
//           <option value="drawings">Technical Drawings</option>
//           <option value="identity">Identity Proof</option>
//           <option value="ownership">Proof of Ownership</option>
//           <option value="forms">Declaration Forms</option>
//           <option value="others">Other Supporting Documents</option>
//         </select>
//       </div>

//       <div onDragOver={(e) => e.preventDefault()} onDrop={handleDrop} onClick={() => fileInputRef.current.click()} className="mt-8 border-2 border-dashed rounded-3xl p-12 text-center cursor-pointer bg-white/50">
//         <Upload size={50} className="mx-auto text-purple-600" />
//         <p className="mt-4 text-lg font-semibold">Drag & Drop files here</p>
//         <p className="text-gray-600">or click to browse</p>
//         <input type="file" multiple hidden ref={fileInputRef} onChange={handleFileSelect} />
//       </div>

//       {files.length > 0 && (
//         <div className="mt-10 p-6 rounded-2xl bg-white/70">
//           <h2 className="text-xl font-bold mb-4">Files to Upload</h2>
//           <div className="space-y-4">
//             {files.map((file, index) => (
//               <div key={index} className="flex justify-between items-center p-4 rounded-xl bg-gray-100">
//                 <div className="flex items-center gap-4">
//                   <File size={28} className="text-purple-600" />
//                   <div>
//                     <p className="font-semibold">{file.name}</p>
//                     <p className="text-sm text-gray-500">{(file.size / 1024).toFixed(2)} KB</p>
//                   </div>
//                 </div>
//                 <button onClick={() => removeFile(index)} className="text-red-500"><X size={26} /></button>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       <div className="flex justify-end gap-4 mt-10 mb-14">
//         <button className="px-6 py-3 rounded-xl bg-gray-600 text-white">Save Draft</button>
//         <button onClick={submitFiles} disabled={loading} className="px-8 py-3 rounded-xl bg-purple-600 text-white flex items-center gap-2">
//           <FolderPlus size={20} /> {loading ? "Uploading..." : "Submit Documents"}
//         </button>
//       </div>

//       <div className="mt-10">
//         <h2 className="text-xl font-bold mb-4">Your Uploaded Documents</h2>
//         {loadingDocs ? <p>Loading...</p> : (
//           <div className="grid gap-4">
//             {userDocs.map(doc => (
//               <div key={doc._id} className="p-4 rounded-xl bg-white shadow flex items-center gap-4">
//                 <img src={doc.url} alt="preview" className="w-24 h-24 object-cover rounded" />
//                 <div className="flex-1">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <h3 className="font-semibold">{doc.name}</h3>
//                       <p className="text-sm text-gray-500">{doc.category}</p>
//                     </div>
//                     <span className={`px-3 py-1 rounded-full text-white text-sm`} style={{background: doc.status === "verified" ? "#10b981" : doc.status === "rejected" ? "#ef4444" : "#f59e0b"}}>{doc.status}</span>
//                   </div>
//                   <p className="text-xs text-gray-500 mt-2">Uploaded {new Date(doc.uploadedAt).toLocaleString()}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


// src/pages/applicant/UploadPage.jsx
// src/pages/applicant/UploadPage.jsx
import React, { useState, useRef, useEffect } from "react";
import { UploadCloud, FileText, XCircle, ChevronDown } from "lucide-react";
import api from "../../services/api";
import toast from "react-hot-toast";

export default function UploadPage() {
  const [category, setCategory] = useState("");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [buttonState, setButtonState] = useState("default"); // default | submitted

  const fileInputRef = useRef(null);

  /* ------------------ HANDLE FILES ------------------ */
  const handleFileSelect = (e) => {
    const list = Array.from(e.target.files || []);
    const mapped = list.map((f) => ({
      file: f,
      preview: f.type.startsWith("image") ? URL.createObjectURL(f) : null,
    }));
    setFiles((prev) => [...prev, ...mapped]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const list = Array.from(e.dataTransfer.files || []);
    const mapped = list.map((f) => ({
      file: f,
      preview: f.type.startsWith("image") ? URL.createObjectURL(f) : null,
    }));
    setFiles((prev) => [...prev, ...mapped]);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  /* ------------------ SUBMIT UPLOAD ------------------ */
  const submitUploads = async () => {
    if (!category) return toast.error("Please select a category");
    if (files.length === 0) return toast.error("Add files first");

    setLoading(true);
    const loader = toast.loading("Uploading your documents...");

    try {
      // upload all files
      for (const f of files) {
        const fd = new FormData();
        fd.append("file", f.file);
        fd.append("name", f.file.name);
        fd.append("category", category);

        await api.post("/documents/upload", fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      await new Promise((res) => setTimeout(res, 1200)); // small delay

      toast.dismiss(loader);
      toast.success("Documents submitted successfully 🎉", { position: "top-center" });

      setButtonState("submitted"); // button changes to submitted ✓

      window.scrollTo({ top: 0, behavior: "smooth" });

      setFiles([]);
      setCategory("");
      loadDocuments();

      setTimeout(() => setButtonState("default"), 2000); // reset button

    } catch (err) {
      console.error(err);
      toast.dismiss(loader);
      toast.error("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  /* ------------------ LOAD USER DOCUMENTS ------------------ */
  const [userDocs, setUserDocs] = useState([]);

  const loadDocuments = async () => {
    try {
      const res = await api.get("/documents/my");
      const docs = res.data || [];

      // show only upload-page documents (exclude IP application documents)
      const filteredDocs = docs.filter(
        (doc) =>
          !["Patent", "Trademark", "Design", "Copyright"].includes(
            doc.category
          )
      );

      setUserDocs(filteredDocs);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadDocuments();
    const interval = setInterval(loadDocuments, 5000);
    return () => clearInterval(interval);
  }, []);

  /* ------------------ UI ------------------ */

  return (
    <div className="px-6 max-w-5xl mx-auto">

      {/* HEADER */}
      <div className="
        mt-10 p-10 rounded-3xl shadow-2xl
        bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600
        text-white backdrop-blur-xl border border-white/20
      ">
        <h1 className="text-4xl font-extrabold tracking-wide">Upload Documents 📤</h1>
        <p className="mt-3 text-lg opacity-90">
          Upload supporting files for your IP application.
        </p>
      </div>

      {/* CATEGORY */}
      <div className="
        mt-10 p-10 rounded-3xl shadow-xl 
        bg-white/60 dark:bg-gray-900/70
        border border-gray-300 dark:border-gray-700 backdrop-blur-xl
      ">
        <label className="text-sm font-medium">Document Category</label>
        <div className="relative mt-2">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="
              w-full px-4 py-3 rounded-2xl bg-gray-100 dark:bg-gray-800
              border border-gray-300 dark:border-gray-600
              focus:ring-2 focus:ring-purple-500 transition
            "
          >
            <option value="">Choose Category</option>
            <option value="specification">Patent Specification</option>
            <option value="drawings">Technical Drawings</option>
            <option value="identity">Identity Proof</option>
            <option value="ownership">Proof of Ownership</option>
            <option value="forms">Declaration Forms</option>
            <option value="others">Other Supporting Documents</option>
          </select>

          <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
        </div>
      </div>

      {/* DROPZONE */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current.click()}
        className="
          mt-8 flex flex-col justify-center items-center p-12
          rounded-3xl border-2 border-dashed border-purple-500
          cursor-pointer bg-white/50 backdrop-blur-xl
          hover:bg-gray-200/40 transition-all shadow-lg
        "
      >
        <UploadCloud size={48} className="text-purple-500 mb-2" />
        <p className="font-semibold text-lg">Drag & Drop files here</p>
        <p className="text-gray-600">or click to browse</p>

        <input type="file" hidden multiple ref={fileInputRef} onChange={handleFileSelect} />
      </div>

      {/* FILE PREVIEW */}
      {files.length > 0 && (
        <div className="
          mt-10 p-10 rounded-3xl shadow-xl bg-white/60
          border border-gray-300 backdrop-blur-xl
        ">
          <h2 className="text-xl font-bold mb-4">Files to Upload</h2>

          <div className="space-y-4">
            {files.map((item, index) => (
              <div key={index}
                className="
                  p-5 rounded-2xl border border-gray-300 
                  bg-gray-50 shadow-md flex items-center gap-5
                "
              >
                {item.preview ? (
                  <img src={item.preview} className="w-24 h-24 object-cover rounded-xl shadow" />
                ) : (
                  <FileText size={50} className="text-purple-500" />
                )}

                <div className="flex-1">
                  <p className="font-medium text-gray-900">{item.file.name}</p>
                  <p className="text-sm text-gray-600">
                    {(item.file.size / 1024).toFixed(1)} KB
                  </p>
                </div>

                <button onClick={() => removeFile(index)} className="text-red-500 hover:text-red-600">
                  <XCircle size={32} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUBMIT BUTTON WITH GREEN GLOW */}
      <button
        disabled={loading}
        onClick={submitUploads}
        className={`
          mt-10 w-full py-4 text-lg rounded-2xl font-semibold text-white
          bg-gradient-to-r from-purple-600 to-blue-600
          hover:from-purple-700 hover:to-blue-700 shadow-xl transition
          ${buttonState === "submitted" ? "animate-[pulse_1s_ease-in-out_infinite] !bg-green-600" : ""}
        `}
        style={{
          boxShadow:
            buttonState === "submitted"
              ? "0 0 20px 4px rgba(34,197,94,0.7)"
              : "",
        }}
      >
        {loading && buttonState === "default"
          ? "Uploading..."
          : buttonState === "submitted"
          ? "Submitted ✓"
          : "Submit Documents 🚀"}
      </button>

      {/* DOCUMENT LIST */}
      <div className="mt-14">
        <h2 className="text-2xl font-bold mb-5 text-white">Your Uploaded Documents</h2>

        <div className="space-y-4">
          {userDocs.map((doc) => (
            <div key={doc._id}
              className="p-5 rounded-2xl border bg-white shadow flex gap-5 items-center"
            >
              {doc.mimeType?.startsWith("image") ? (
                <img src={doc.url} className="w-20 h-20 object-cover rounded-xl" />
              ) : (
                <FileText size={48} className="text-purple-600" />
              )}

              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{doc.name}</h3>
                <p className="text-sm text-gray-700">{doc.category}</p>
                <p className="text-xs text-gray-600 mt-1">
                  Uploaded {new Date(doc.uploadedAt).toLocaleString()}
                </p>
              </div>

              <span
                className="px-3 py-1 rounded-full text-white text-sm"
                style={{
                  background:
                    doc.status === "verified"
                      ? "#10b981"
                      : doc.status === "rejected"
                      ? "#ef4444"
                      : "#f59e0b",
                }}
              >
                {doc.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
