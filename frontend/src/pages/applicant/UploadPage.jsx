// src/pages/applicant/UploadPage.jsx
import React, { useState, useRef, useEffect } from "react";
import { UploadCloud, FileText, XCircle, ChevronDown } from "lucide-react";
import api from "../../services/api";
import toast from "react-hot-toast";

export default function UploadPage() {
  const [category, setCategory] = useState("");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [buttonState, setButtonState] = useState("default");

  // ✅ NEW: application linking
  const [applications, setApplications] = useState([]);
  const [applicationId, setApplicationId] = useState("");

  const fileInputRef = useRef(null);

  /* ------------------ LOAD USER APPLICATIONS ------------------ */
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await api.get("/applications/my");
        setApplications(res.data || []);
      } catch (err) {
        console.error("Failed to load applications");
      }
    };
    fetchApplications();
  }, []);

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
    if (!applicationId) return toast.error("Please select an application");
    if (!category) return toast.error("Please select a category");
    if (files.length === 0) return toast.error("Add files first");

    setLoading(true);
    const loader = toast.loading("Uploading your documents...");

    try {
      for (const f of files) {
        const fd = new FormData();
        fd.append("file", f.file);
        fd.append("name", f.file.name);
        fd.append("category", category);

        // ✅ CRITICAL FIX
        fd.append("applicationId", applicationId);

        await api.post("/documents/upload", fd, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      }

      toast.dismiss(loader);
      toast.success("Documents submitted successfully 🎉");

      setFiles([]);
      setCategory("");
      setApplicationId("");
      setButtonState("submitted");

      setTimeout(() => setButtonState("default"), 2000);
    } catch (err) {
      console.error(err);
      toast.dismiss(loader);
      toast.error("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  /* ------------------ UI ------------------ */
  return (
    <div className="px-6 max-w-5xl mx-auto">

      {/* HEADER */}
      <div className="
        mt-10 p-10 rounded-3xl shadow-2xl
        bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600
        text-white backdrop-blur-xl border border-white/20
      ">
        <h1 className="text-4xl font-extrabold tracking-wide">
          Upload Documents 📤
        </h1>
        <p className="mt-3 text-lg opacity-90">
          Upload supporting files for your IP application.
        </p>
      </div>

      {/* APPLICATION SELECT */}
      <div className="
        mt-10 p-10 rounded-3xl shadow-xl 
        bg-white/60 dark:bg-gray-900/70
        border border-gray-300 dark:border-gray-700 backdrop-blur-xl
      ">
        <label className="text-sm font-medium">Select Application</label>
        <select
          value={applicationId}
          onChange={(e) => setApplicationId(e.target.value)}
          className="
            mt-2 w-full px-4 py-3 rounded-2xl bg-gray-100 dark:bg-gray-800
            border border-gray-300 dark:border-gray-600
            focus:ring-2 focus:ring-purple-500 transition
          "
        >
          <option value="">Choose Application</option>
          {applications.map((app) => (
            <option key={app._id} value={app._id}>
              {app.title}
            </option>
          ))}
        </select>
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
          <ChevronDown
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            size={20}
          />
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
        <input
          type="file"
          hidden
          multiple
          ref={fileInputRef}
          onChange={handleFileSelect}
        />
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
              <div
                key={index}
                className="
                  p-5 rounded-2xl border border-gray-300 
                  bg-gray-50 shadow-md flex items-center gap-5
                "
              >
                {item.preview ? (
                  <img
                    src={item.preview}
                    className="w-24 h-24 object-cover rounded-xl"
                  />
                ) : (
                  <FileText size={50} className="text-purple-500" />
                )}

                <div className="flex-1">
                  <p className="font-medium">{item.file.name}</p>
                  <p className="text-sm text-gray-600">
                    {(item.file.size / 1024).toFixed(1)} KB
                  </p>
                </div>

                <button
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-600"
                >
                  <XCircle size={32} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUBMIT BUTTON */}
      <button
        disabled={loading}
        onClick={submitUploads}
        className="
          mt-10 w-full py-4 text-lg rounded-2xl font-semibold text-white
          bg-gradient-to-r from-purple-600 to-blue-600
          hover:from-purple-700 hover:to-blue-700 shadow-xl transition
        "
      >
        {loading ? "Uploading..." : "Submit Documents 🚀"}
      </button>
    </div>
  );
}

