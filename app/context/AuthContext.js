// // "use client";

// // import { createContext, useContext, useEffect, useState } from "react";
// // import {
// //   createUserWithEmailAndPassword,
// //   signInWithEmailAndPassword,
// //   signOut,
// //   onAuthStateChanged,
// //   GoogleAuthProvider,
// //   signInWithPopup,
// // } from "firebase/auth";
// // import { auth } from "../lib/firebase";
// // import { toast } from "react-hot-toast";

// // const AuthContext = createContext();

// // export function useAuth() {
// //   const context = useContext(AuthContext);
// //   if (!context) {
// //     throw new Error("useAuth must be used within an AuthProvider");
// //   }
// //   return context;
// // }

// // export function AuthProvider({ children }) {
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, (user) => {
// //       setUser(user);
// //       setLoading(false);
// //     });

// //     return unsubscribe;
// //   }, []);

// //   const register = async (email, password) => {
// //     try {
// //       const result = await createUserWithEmailAndPassword(
// //         auth,
// //         email,
// //         password
// //       );
// //       toast.success("Account created successfully!");
// //       return result;
// //     } catch (error) {
// //       toast.error(error.message || "Registration failed");
// //       throw error;
// //     }
// //   };

// //   const login = async (email, password) => {
// //     try {
// //       const result = await signInWithEmailAndPassword(auth, email, password);
// //       toast.success("Logged in successfully!");
// //       return result;
// //     } catch (error) {
// //       toast.error(error.message || "Login failed");
// //       throw error;
// //     }
// //   };

// //   const loginWithGoogle = async () => {
// //     try {
// //       const provider = new GoogleAuthProvider();
// //       const result = await signInWithPopup(auth, provider);
// //       toast.success("Logged in with Google successfully!");
// //       return result;
// //     } catch (error) {
// //       toast.error(error.message || "Google login failed");
// //       throw error;
// //     }
// //   };

// //   const logout = async () => {
// //     try {
// //       await signOut(auth);
// //       toast.success("Logged out successfully!");
// //     } catch (error) {
// //       toast.error(error.message || "Logout failed");
// //       throw error;
// //     }
// //   };

// //   const value = {
// //     user,
// //     loading,
// //     register,
// //     login,
// //     loginWithGoogle,
// //     logout,
// //   };

// //   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// // }

// // ............2...............toast issue

// "use client";

// import { createContext, useContext, useEffect, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "firebase/auth";
// import { auth } from "../lib/firebase";
// import { toast } from "react-hot-toast";

// const AuthContext = createContext();

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// }

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setUser(user);
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   const register = async (email, password) => {
//     try {
//       const result = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       // Removed toast here - let the component handle success message
//       return result;
//     } catch (error) {
//       toast.error(error.message || "Registration failed");
//       throw error;
//     }
//   };

//   const login = async (email, password) => {
//     try {
//       const result = await signInWithEmailAndPassword(auth, email, password);
//       toast.success("🎉 Logged in successfully!");
//       return result;
//     } catch (error) {
//       toast.error(error.message || "Login failed");
//       throw error;
//     }
//   };

//   const loginWithGoogle = async () => {
//     try {
//       const provider = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, provider);
//       toast.success("🎉 Logged in with Google successfully!");
//       return result;
//     } catch (error) {
//       toast.error(error.message || "Google login failed");
//       throw error;
//     }
//   };

//   const logout = async () => {
//     try {
//       await signOut(auth);
//       toast.success("👋 Logged out successfully! See you soon!");
//     } catch (error) {
//       toast.error(error.message || "Logout failed");
//       throw error;
//     }
//   };

//   const value = {
//     user,
//     loading,
//     register,
//     login,
//     loginWithGoogle,
//     logout,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// 2................

// "use client";

// import { createContext, useContext, useEffect, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "firebase/auth";
// import { auth } from "../lib/firebase";
// import { toast } from "react-hot-toast";

// const AuthContext = createContext();

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// }

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setUser(user);
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   const register = async (email, password) => {
//     try {
//       const result = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       // No toast here - Register component will handle it
//       return result;
//     } catch (error) {
//       toast.error(error.message || "❌ Registration failed", {
//         position: "top-center",
//         style: {
//           marginTop: "90px",
//           padding: "16px",
//           borderRadius: "10px",
//           background: "#F44336",
//           color: "white",
//         },
//       });
//       throw error;
//     }
//   };

//   const login = async (email, password) => {
//     try {
//       const result = await signInWithEmailAndPassword(auth, email, password);
//       toast.success("🎉 Logged in successfully!", {
//         position: "top-center",
//         style: {
//           marginTop: "90px",
//           padding: "16px",
//           borderRadius: "10px",
//           background: "#4CAF50",
//           color: "white",
//         },
//       });
//       return result;
//     } catch (error) {
//       toast.error(error.message || "❌ Login failed", {
//         position: "top-center",
//         style: {
//           marginTop: "90px",
//           padding: "16px",
//           borderRadius: "10px",
//           background: "#F44336",
//           color: "white",
//         },
//       });
//       throw error;
//     }
//   };

//   const loginWithGoogle = async () => {
//     try {
//       const provider = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, provider);
//       toast.success("🎉 Logged in with Google successfully!", {
//         position: "top-center",
//         style: {
//           marginTop: "90px",
//           padding: "16px",
//           borderRadius: "10px",
//           background: "#4CAF50",
//           color: "white",
//         },
//       });
//       return result;
//     } catch (error) {
//       toast.error(error.message || "❌ Google login failed", {
//         position: "top-center",
//         style: {
//           marginTop: "90px",
//           padding: "16px",
//           borderRadius: "10px",
//           background: "#F44336",
//           color: "white",
//         },
//       });
//       throw error;
//     }
//   };

//   const logout = async () => {
//     try {
//       await signOut(auth);
//       toast.success("👋 Logged out successfully! See you soon!", {
//         position: "top-center",
//         style: {
//           marginTop: "90px",
//           padding: "16px",
//           borderRadius: "10px",
//           background: "#4CAF50",
//           color: "white",
//         },
//       });
//     } catch (error) {
//       toast.error(error.message || "❌ Logout failed", {
//         position: "top-center",
//         style: {
//           marginTop: "90px",
//           padding: "16px",
//           borderRadius: "10px",
//           background: "#F44336",
//           color: "white",
//         },
//       });
//       throw error;
//     }
//   };

//   const value = {
//     user,
//     loading,
//     register,
//     login,
//     loginWithGoogle,
//     logout,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// .......3............
// "use client";

// import { createContext, useContext, useEffect, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "firebase/auth";
// import { auth } from "../lib/firebase";
// import { toast } from "react-hot-toast";

// const AuthContext = createContext();

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// }

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setUser(user);
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   const register = async (email, password) => {
//     try {
//       const result = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       // No toast here - Register component will handle it
//       return result;
//     } catch (error) {
//       toast.error(error.message || "❌ Registration failed", {
//         position: "top-center",
//         style: {
//           marginTop: "90px",
//           padding: "16px",
//           borderRadius: "10px",
//           background: "#F44336",
//           color: "white",
//         },
//       });
//       throw error;
//     }
//   };

//   const login = async (email, password) => {
//     try {
//       const result = await signInWithEmailAndPassword(auth, email, password);
//       toast.success("🎉 Logged in successfully!", {
//         position: "top-center",
//         style: {
//           marginTop: "90px",
//           padding: "16px",
//           borderRadius: "10px",
//           background: "#4CAF50",
//           color: "white",
//         },
//       });
//       return result;
//     } catch (error) {
//       toast.error(error.message || "❌ Login failed", {
//         position: "top-center",
//         style: {
//           marginTop: "90px",
//           padding: "16px",
//           borderRadius: "10px",
//           background: "#F44336",
//           color: "white",
//         },
//       });
//       throw error;
//     }
//   };

//   const loginWithGoogle = async () => {
//     try {
//       const provider = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, provider);
//       toast.success("🎉 Logged in with Google successfully!", {
//         position: "top-center",
//         style: {
//           marginTop: "90px",
//           padding: "16px",
//           borderRadius: "10px",
//           background: "#4CAF50",
//           color: "white",
//         },
//       });
//       return result;
//     } catch (error) {
//       toast.error(error.message || "❌ Google login failed", {
//         position: "top-center",
//         style: {
//           marginTop: "90px",
//           padding: "16px",
//           borderRadius: "10px",
//           background: "#F44336",
//           color: "white",
//         },
//       });
//       throw error;
//     }
//   };

//   const logout = async () => {
//     try {
//       await signOut(auth);
//       toast.success("👋 Logged out successfully! See you soon!", {
//         position: "top-center",
//         duration: 2000,
//         style: {
//           marginTop: "90px",
//           padding: "16px",
//           borderRadius: "10px",
//           background: "#4CAF50",
//           color: "white",
//         },
//       });
//       // Small delay to ensure toast shows before redirect
//       await new Promise((resolve) => setTimeout(resolve, 100));
//     } catch (error) {
//       toast.error(error.message || "❌ Logout failed", {
//         position: "top-center",
//         style: {
//           marginTop: "90px",
//           padding: "16px",
//           borderRadius: "10px",
//           background: "#F44336",
//           color: "white",
//         },
//       });
//       throw error;
//     }
//   };

//   const value = {
//     user,
//     loading,
//     register,
//     login,
//     loginWithGoogle,
//     logout,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// ..........44...........okayyyyyyyy..........

// "use client";

// import { createContext, useContext, useEffect, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   onAuthStateChanged,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "firebase/auth";
// import { auth } from "../lib/firebase";
// import { toast } from "react-hot-toast";

// const AuthContext = createContext();

// export function useAuth() {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// }

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setUser(user);
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   const register = async (email, password) => {
//     try {
//       const result = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       // No toast here - Register component will handle it
//       return result;
//     } catch (error) {
//       toast.error(error.message || "❌ Registration failed", {
//         position: "top-center",
//         style: {
//           marginTop: "90px",
//           padding: "16px",
//           borderRadius: "10px",
//           background: "#F44336",
//           color: "white",
//         },
//       });
//       throw error;
//     }
//   };

//   const login = async (email, password) => {
//     try {
//       const result = await signInWithEmailAndPassword(auth, email, password);
//       toast.success("🎉 Logged in successfully!", {
//         position: "top-center",
//         duration: 2000,
//         style: {
//           marginTop: "90px",
//           padding: "16px",
//           borderRadius: "10px",
//           background: "#4CAF50",
//           color: "white",
//         },
//       });
//       // Small delay to ensure toast shows
//       await new Promise((resolve) => setTimeout(resolve, 100));
//       return result;
//     } catch (error) {
//       toast.error(error.message || "❌ Login failed", {
//         position: "top-center",
//         style: {
//           marginTop: "90px",
//           padding: "16px",
//           borderRadius: "10px",
//           background: "#F44336",
//           color: "white",
//         },
//       });
//       throw error;
//     }
//   };

//   const loginWithGoogle = async () => {
//     try {
//       const provider = new GoogleAuthProvider();
//       const result = await signInWithPopup(auth, provider);
//       toast.success("🎉 Logged in with Google successfully!", {
//         position: "top-center",
//         duration: 2000,
//         style: {
//           marginTop: "90px",
//           padding: "16px",
//           borderRadius: "10px",
//           background: "#4CAF50",
//           color: "white",
//         },
//       });
//       // Small delay to ensure toast shows
//       await new Promise((resolve) => setTimeout(resolve, 100));
//       return result;
//     } catch (error) {
//       toast.error(error.message || "❌ Google login failed", {
//         position: "top-center",
//         style: {
//           marginTop: "90px",
//           padding: "16px",
//           borderRadius: "10px",
//           background: "#F44336",
//           color: "white",
//         },
//       });
//       throw error;
//     }
//   };

//   const logout = async () => {
//     try {
//       await signOut(auth);
//       toast.success("👋 Logged out successfully! See you soon!", {
//         position: "top-center",
//         duration: 2000,
//         style: {
//           marginTop: "90px",
//           padding: "16px",
//           borderRadius: "10px",
//           background: "#4CAF50",
//           color: "white",
//         },
//       });
//       // Small delay to ensure toast shows before redirect
//       await new Promise((resolve) => setTimeout(resolve, 100));
//     } catch (error) {
//       toast.error(error.message || "❌ Logout failed", {
//         position: "top-center",
//         style: {
//           marginTop: "90px",
//           padding: "16px",
//           borderRadius: "10px",
//           background: "#F44336",
//           color: "white",
//         },
//       });
//       throw error;
//     }
//   };

//   const value = {
//     user,
//     loading,
//     register,
//     login,
//     loginWithGoogle,
//     logout,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// }

// 5 ///........................
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../lib/firebase";
import { toast } from "react-hot-toast";

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const register = async (email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      toast.success("🎉 Registered successfully!", {
        position: "top-center",
        duration: 3000,
        style: {
          marginTop: "90px",
          padding: "16px",
          borderRadius: "10px",
          background: "#4CAF50",
          color: "white",
          fontWeight: "bold",
        },
      });
      await new Promise((resolve) => setTimeout(resolve, 100));
      return result;
    } catch (error) {
      toast.error(error.message || "❌ Registration failed", {
        position: "top-center",
        style: {
          marginTop: "90px",
          padding: "16px",
          borderRadius: "10px",
          background: "#F44336",
          color: "white",
        },
      });
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success("🎉 Logged in successfully!", {
        position: "top-center",
        duration: 4000,
        style: {
          marginTop: "90px",
          padding: "16px",
          borderRadius: "10px",
          background: "#4CAF50",
          color: "white",
        },
      });
      await new Promise((resolve) => setTimeout(resolve, 100));
      return result;
    } catch (error) {
      toast.error(error.message || "❌ Login failed", {
        position: "top-center",
        style: {
          marginTop: "90px",
          padding: "16px",
          borderRadius: "10px",
          background: "#F44336",
          color: "white",
        },
      });
      throw error;
    }
  };

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      // Add toast for successful Google login
      toast.success("🎉 Logged in with Google successfully!", {
        position: "top-center",
        duration: 4000,
        style: {
          marginTop: "90px",
          padding: "16px",
          borderRadius: "10px",
          background: "#4CAF50",
          color: "white",
        },
      });

      return result;
    } catch (error) {
      toast.error(error.message || "❌ Google login failed", {
        position: "top-center",
        style: {
          marginTop: "90px",
          padding: "16px",
          borderRadius: "10px",
          background: "#F44336",
          color: "white",
        },
      });
      throw error;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      toast.success("👋 Logged out successfully! See you soon!", {
        position: "top-center",
        duration: 4000,
        style: {
          marginTop: "90px",
          padding: "16px",
          borderRadius: "10px",
          background: "#4CAF50",
          color: "white",
        },
      });
      await new Promise((resolve) => setTimeout(resolve, 100));
    } catch (error) {
      toast.error(error.message || "❌ Logout failed", {
        position: "top-center",
        style: {
          marginTop: "90px",
          padding: "16px",
          borderRadius: "10px",
          background: "#F44336",
          color: "white",
        },
      });
      throw error;
    }
  };

  const value = {
    user,
    loading,
    register,
    login,
    loginWithGoogle,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
