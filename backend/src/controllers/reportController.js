const Application = require("../models/Application");
const Document = require("../models/Document");

exports.getReports = async (req, res) => {
  try {
    const apps = await Application.find();
    const documents = await Document.find();

    const total = apps.length;
    const approved = apps.filter(a => a.status === "approved").length;
    const rejected = apps.filter(a => a.status === "rejected").length;
    const pending = apps.filter(a => a.status === "pending").length;
    const inReview = apps.filter(a => a.status === "in review").length;

    const approvalRate = total ? Math.round((approved / total) * 100) : 0;

    // Documents verified count
    const verifiedDocs = documents.filter(d => d.status === "verified").length;

    // Monthly growth (last 30 days)
    const now = new Date();
    const lastMonth = new Date(now.setDate(now.getDate() - 30));

    const monthlyNewApps = apps.filter(a => new Date(a.createdAt) > lastMonth).length;

    res.json({
      totalApplications: total,
      approved,
      rejected,
      pending,
      inReview,
      approvalRate,
      verifiedDocs,
      monthlyNewApps,
      breakdown: {
        patent: apps.filter(a => a.ipType === "Patent").length,
        trademark: apps.filter(a => a.ipType === "Trademark").length,
        copyright: apps.filter(a => a.ipType === "Copyright").length,
      },
      timeline: apps.map(a => ({
        date: a.createdAt,
        status: a.status,
      }))
    });

  } catch (err) {
    console.log("Report error:", err);
    res.status(500).json({ error: "Failed to generate report" });
  }
};
