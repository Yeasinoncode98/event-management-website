// // app/components/ProtectedRoute.js

// "use client"; // Mark this file as a Client Component

// import { useRouter } from "next/router";
// import { useEffect } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../lib/firebase.js"; // Firebase authentication setup

// const ProtectedRoute = ({ children }) => {
//   const [user, loading] = useAuthState(auth); // Get user state from Firebase
//   const router = useRouter();

//   useEffect(() => {
//     if (loading) return; // Do nothing while the authentication state is loading
//     if (!user) {
//       // Redirect to login page if the user is not logged in
//       router.push("/login");
//     }
//   }, [user, loading, router]);

//   if (loading || !user) {
//     // Optionally return a loading state while the user is being checked
//     return <div>Loading...</div>;
//   }

//   return <>{children}</>; // If user is authenticated, render the children (protected page content)
// };

// export default ProtectedRoute;

// ..............2.................

// app/components/ProtectedRoute.js
"use client";

import { useRouter } from "next/navigation"; // ✅ Fixed: use next/navigation for App Router
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase.js";

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (!user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
