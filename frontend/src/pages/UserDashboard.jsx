// import React from "react";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

// export default function UserDashboard() {
//   const { user } = useContext(AuthContext);

//   return (
//     <div className="px-6 max-w-5xl mx-auto">
//       <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
//         User Dashboard
//       </h1>
//       <p className="mt-2 text-gray-600 dark:text-gray-300">
//         Logged in as: <span className="font-semibold">{user?.email}</span>
//       </p>

//       <p className="mt-6 text-gray-700 dark:text-gray-300">
//         Here you will later display:
//       </p>
//       <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300">
//         <li>List of IP applications submitted by the user</li>
//         <li>Status of each application (Submitted, Under Review, Approved, Rejected)</li>
//         <li>Option to create a new application</li>
//       </ul>
//     </div>
//   );
// }

import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../services/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function UserDashboard() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="pt-32 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        Welcome, {user?.email}
      </h1>

      <p className="mt-2 text-gray-700 dark:text-gray-300">
        You can upload and manage your IP documents here.
      </p>

      <button
        onClick={logout}
        className="mt-6 px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 shadow-md"
      >
        Logout
      </button>
    </div>
  );
}
