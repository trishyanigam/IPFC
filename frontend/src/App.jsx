// import React from "react";
// import { BrowserRouter } from "react-router-dom";
// import AppRouter from "./routes/AppRouter";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">

//         {/* Navbar shown ONCE globally */}
//         <Navbar />

//         {/* All routes */}
//         <AppRouter />

//         <Footer />
//       </div>
//     </BrowserRouter>
//   );
// }


import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">

        {/* 🔥 Global Toasts - Always visible above everything */}
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              zIndex: 999999999,  // ensures toast stays above navbar & modals
              fontSize: "16px",
              borderRadius: "12px",
            },
          }}
        />

        {/* Navbar shown ONCE globally */}
        <Navbar />

        {/* All routes */}
        <AppRouter />

        <Footer />
      </div>
    </BrowserRouter>
  );
}
