import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">

        {/* Navbar shown ONCE globally */}
        <Navbar />

        {/* All routes */}
        <AppRouter />

        <Footer />
      </div>
    </BrowserRouter>
  );
}
