import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import FeaturesPage from "../pages/FeaturesPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MyApplicationsPage from "../pages/applicant/MyApplicationsPage";
import UploadPage from "../pages/applicant/UploadPage";
import SupportPage from "../pages/applicant/SupportPage";

import VerifyEmail from "../pages/VerifyEmail";

import DashboardPage from "../pages/applicant/DashboardPage"; // ✅ Correct path
import ApplyPage from "../pages/applicant/ApplyPage";

import AdminDashboard from "../pages/admin/AdminDashboard";
import ReviewApplications from "../pages/admin/ReviewApplications";
import VerifyDocuments from "../pages/admin/VerifyDocuments";
import UsersManagement from "../pages/admin/UsersManagement";
import ReportsPage from "../pages/admin/ReportsPage";


import NotFoundPage from "../pages/NotFoundPage";

export default function AppRouter() {
  return (
    <main className="pt-24 pb-10">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verify-email" element={<VerifyEmail />} />

        {/* Applicant Dashboard */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/my-applications" element={<MyApplicationsPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/support" element={<SupportPage />} />

        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/review" element={<ReviewApplications />} />
        <Route path="/verify-docs" element={<VerifyDocuments />} />
        <Route path="/users" element={<UsersManagement />} />
        <Route path="/reports" element={<ReportsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}
