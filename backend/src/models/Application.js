const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema(
  {
    applicantUid: { type: String, required: true },
    applicantEmail: { type: String },
    title: { type: String, required: true },
    ipType: {
      type: String,
      enum: ["Patent", "Trademark", "Copyright", "Design", "Other"],
      default: "Patent",
    },
    description: { type: String },

    files: [
      {
        filename: String,
        url: String,
        mimeType: String,
        size: Number,
      },
    ],

    status: {
      type: String,
      enum: ["pending", "under review", "approved", "rejected"],
      default: "pending",
    },

    adminNotes: { type: String },
  },
  { timestamps: true }   // ✅ CORRECT PLACE
);

module.exports = mongoose.model("Application", ApplicationSchema);


 