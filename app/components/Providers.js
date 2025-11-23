"use client";

import { AuthProvider } from "../context/AuthContext";
import { Toaster } from "react-hot-toast";

export function Providers({ children }) {
  return (
    <AuthProvider>
      {children}
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            background: "#363636",
            color: "#fff",
            marginTop: "200px",
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: "#4ade80",
              secondary: "#fff",
            },
          },
          error: {
            duration: 3000,
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />
    </AuthProvider>
  );
}

// ..........2.............
// "use client";

// import { AuthProvider } from "../context/AuthContext";
// import { Toaster } from "react-hot-toast";

// export function Providers({ children }) {
//   return (
//     <AuthProvider>
//       <Toaster
//         position="top-center"
//         reverseOrder={false}
//         gutter={8}
//         containerStyle={{
//           top: 80,
//         }}
//         toastOptions={{
//           duration: 3000,
//           style: {
//             background: "#363636",
//             color: "#fff",
//             padding: "16px",
//             borderRadius: "10px",
//           },
//           success: {
//             duration: 3000,
//             iconTheme: {
//               primary: "#4ade80",
//               secondary: "#fff",
//             },
//             style: {
//               background: "#1f2937",
//               color: "#fff",
//               border: "1px solid #4ade80",
//             },
//           },
//           error: {
//             duration: 3000,
//             iconTheme: {
//               primary: "#ef4444",
//               secondary: "#fff",
//             },
//             style: {
//               background: "#1f2937",
//               color: "#fff",
//               border: "1px solid #ef4444",
//             },
//           },
//         }}
//       />
//       {children}
//     </AuthProvider>
//   );
// }
