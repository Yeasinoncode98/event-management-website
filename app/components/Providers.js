// "use client";

// import { AuthProvider } from "../context/AuthContext";
// import { Toaster } from "react-hot-toast";

// export function Providers({ children }) {
//   return (
//     <AuthProvider>
//       {children}
//       <Toaster
//         position="top-center"
//         toastOptions={{
//           duration: 3000,
//           style: {
//             background: "#363636",
//             color: "#fff",
//             marginTop: "200px",
//           },
//           success: {
//             duration: 3000,
//             iconTheme: {
//               primary: "#4ade80",
//               secondary: "#fff",
//             },
//           },
//           error: {
//             duration: 3000,
//             iconTheme: {
//               primary: "#ef4444",
//               secondary: "#fff",
//             },
//           },
//         }}
//       />
//     </AuthProvider>
//   );
// }

//.............2.............
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
