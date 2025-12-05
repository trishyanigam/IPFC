import React from "react";
import { FileText, Shield, Users, BarChart3, CheckCircle } from "lucide-react";

export default function FeaturesPage() {
  const features = [
    {
      icon: FileText,
      title: "Unified IP Application",
      desc: "Submit patents, trademarks and copyrights using structured forms."
    },
    {
      icon: Shield,
      title: "Secure Document Upload",
      desc: "Upload and store IP-related documents safely in the system."
    },
    {
      icon: Users,
      title: "Role-based Views",
      desc: "Different dashboards for applicants, coordinators and admins."
    },
    {
      icon: BarChart3,
      title: "Status & Analytics",
      desc: "Track counts by stage, timelines and approval statistics."
    },
    {
      icon: CheckCircle,
      title: "Workflow & Decisions",
      desc: "Admins can review, approve, reject or ask for clarifications."
    },
  ];

  return (
    <div className="px-6 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center">
        Project Features
      </h1>
      <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
        The IPFC Management Portal is designed to support the complete lifecycle of
        intellectual property applications.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {features.map((f) => (
          <div
            key={f.title}
            className="p-6 rounded-2xl bg-gray-100/90 dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800"
          >
            <f.icon size={32} className="text-purple-500" />
            <h3 className="mt-3 text-xl font-semibold text-gray-900 dark:text-white">
              {f.title}
            </h3>
            <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
