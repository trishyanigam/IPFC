import React, { createContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(true);

  // 🔥 KEY FIX: whenever this changes, Navbar rerenders
  const [authChanged, setAuthChanged] = useState(false);

  // 🔥 Call this whenever user signs up or logs in
  async function forceAuthUpdate() {
    setAuthChanged(prev => !prev); // toggle to force re-render
  }

  async function loadUser() {
    const current = auth.currentUser;

    if (!current) {
      setUser(null);
      setRole(null);
      setVerified(false);
      return;
    }

    await current.reload();
    const updated = auth.currentUser;

    setUser(updated);

    if (updated?.displayName?.includes("__")) {
      const [, r] = updated.displayName.split("__");
      setRole(r.trim().toLowerCase());
    }

    setVerified(updated.emailVerified);
  }

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(async () => {
      await loadUser();
      setLoading(false);
    });

    return () => unsub();
  }, []);

  // 🔥 Whenever forceAuthUpdate() is called, reload user immediately
  useEffect(() => {
    loadUser();
  }, [authChanged]);

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        verified,
        loading,
        forceAuthUpdate,   // expose ONLY this
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}
