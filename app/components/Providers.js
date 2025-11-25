"use client";

import { AuthProvider } from "../context/AuthContext";
import { Toaster } from "react-hot-toast";

export function Providers({ children }) {
  return (
    <AuthProvider>
      {children}
      <Toaster position="top-center" />
    </AuthProvider>
  );
}
