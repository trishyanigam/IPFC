import React, { useState, useRef } from "react";
import { Upload, File, X, FolderPlus } from "lucide-react";

export default function UploadPage() {
  const [files, setFiles] = useState([]);
  const [category, setCategory] = useState("");
  const fileInputRef = useRef(null);

  const handleFileSelect = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...droppedFiles]);
  };

  const removeFile = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="px-6 max-w-4xl mx-auto">

      {/* HEADER */}
      <div className="
        mt-10 p-10 rounded-3xl shadow-2xl relative overflow-hidden
        bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600
        dark:from-purple-900 dark:via-indigo-900 dark:to-blue-900
        text-white backdrop-blur-xl border border-white/20
        animate-[fadeIn_0.7s_ease]
      ">
        <h1 className="text-4xl font-extrabold tracking-wide">Upload Documents 📤</h1>
        <p className="mt-2 opacity-95 text-lg">
          Upload supporting files for your IP application.
        </p>
      </div>

      {/* CATEGORY SELECTION */}
      <div className="
        mt-10 p-6 rounded-2xl bg-white/70 dark:bg-gray-900/60 
        shadow-xl border border-gray-300 dark:border-gray-700 backdrop-blur-xl
        animate-[slideUp_0.7s_ease]
      ">
        <label className="text-gray-700 dark:text-gray-300 font-medium">
          Select Document Category
        </label>

        <select
          className="mt-2 input-field w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Choose Category</option>
          <option value="specification">Patent Specification</option>
          <option value="drawings">Technical Drawings</option>
          <option value="identity">Identity Proof</option>
          <option value="ownership">Proof of Ownership</option>
          <option value="forms">Declaration Forms</option>
          <option value="others">Other Supporting Documents</option>
        </select>
      </div>

      {/* DRAG & DROP ZONE */}
      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current.click()}
        className="
          mt-8 border-2 border-dashed border-purple-500 dark:border-purple-400
          rounded-3xl p-12 text-center cursor-pointer 
          bg-white/50 dark:bg-gray-900/40 backdrop-blur-xl
          hover:bg-purple-50 dark:hover:bg-gray-800/40
          transition-all shadow-lg hover:shadow-2xl
          animate-[fadeIn_0.8s_ease]
        "
      >
        <Upload size={50} className="mx-auto text-purple-600 dark:text-purple-300" />
        <p className="mt-4 text-lg font-semibold">
          Drag & Drop files here
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          or click to browse
        </p>

        <input
          type="file"
          multiple
          hidden
          ref={fileInputRef}
          onChange={handleFileSelect}
        />
      </div>

      {/* FILE LIST */}
      {files.length > 0 && (
        <div className="
          mt-10 p-6 rounded-2xl bg-white/70 dark:bg-gray-900/60 
          shadow-xl border border-gray-300 dark:border-gray-700 
          backdrop-blur-xl animate-[slideUp_0.6s_ease]
        ">
          <h2 className="text-xl font-bold mb-4">Uploaded Files</h2>

          <div className="space-y-4">
            {files.map((file, index) => (
              <div
                key={index}
                className="
                  flex justify-between items-center p-4 rounded-xl
                  bg-gray-100 dark:bg-gray-800 shadow 
                  border border-gray-300 dark:border-gray-700
                  hover:shadow-lg transition-all animate-[fadeIn_0.4s_ease]
                "
              >
                <div className="flex items-center gap-4">
                  <File size={28} className="text-purple-600 dark:text-purple-300" />

                  <div>
                    <p className="font-semibold">{file.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {(file.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => removeFile(index)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <X size={26} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUBMIT BUTTONS */}
      <div className="flex justify-end gap-4 mt-10 mb-14">
        <button className="
          px-6 py-3 rounded-xl bg-gray-600 text-white
          hover:bg-gray-700 transition shadow
        ">
          Save Draft
        </button>

        <button className="
          px-8 py-3 rounded-xl bg-purple-600 text-white 
          hover:bg-purple-700 transition shadow-lg 
          flex items-center gap-2
        ">
          <FolderPlus size={20} /> Submit Documents
        </button>
      </div>
    </div>
  );
}
