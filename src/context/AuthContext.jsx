// src/context/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, provider } from "../firebaseConfig";
import {
  signInWithPopup,
  signOut as fbSignOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!auth) return;
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);

  const signIn = async () => {
    try {
      if (!auth || !provider)
        throw new Error(
          "Firebase not configured. Paste credentials into src/firebaseConfig.js"
        );
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Sign-in failed:", error.message);
      alert(error.message);
    }
  };

  const signOut = async () => {
    try {
      await fbSignOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Sign-out failed:", error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
