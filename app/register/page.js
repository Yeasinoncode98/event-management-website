"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { toast } from "react-hot-toast";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const { register, loginWithGoogle } = useAuth();
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const validatePassword = (pwd) => {
    const errors = [];

    if (pwd.length < 6) {
      errors.push("Password must be at least 6 characters long 🔒");
    }

    if (!/[a-z]/.test(pwd)) {
      errors.push(
        "Password must contain at least one lowercase letter (a-z) 🔤"
      );
    }

    if (!/[A-Z]/.test(pwd)) {
      errors.push(
        "Password must contain at least one uppercase letter (A-Z) 🔠"
      );
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(pwd)) {
      errors.push(
        "Password must contain at least one special character (!@#$%^&*) 🔐"
      );
    }

    return errors;
  };

  const handleSubmit = async () => {
    // Validation checks
    if (!name.trim()) {
      return toast.error("👤 Please enter your name!");
    }

    if (!email.trim()) {
      return toast.error("📧 Please enter your email address!");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return toast.error("📧 Please enter a valid email address!");
    }

    if (photoURL.trim() && !photoURL.startsWith("http")) {
      return toast.error(
        "🖼️ Please enter a valid photo URL (starting with http:// or https://)!"
      );
    }

    if (!password) {
      return toast.error("🔑 Please enter a password!");
    }

    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      passwordErrors.forEach((error) => toast.error(error));
      return;
    }

    if (!confirmPassword) {
      return toast.error("🔑 Please confirm your password!");
    }

    if (password !== confirmPassword) {
      return toast.error("❌ Passwords do not match!");
    }

    // All validations passed
    try {
      setLoading(true);
      console.log("Starting registration process...");

      // Register user
      const result = await register(email, password);
      console.log("Registration result:", result);

      // Update profile if user was created
      if (result && result.user) {
        console.log("Updating profile for user:", result.user.uid);
        await updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL || null,
        });
        console.log("Profile updated successfully");

        toast.success("✅ Account created successfully!");

        // Small delay to show success message
        setTimeout(() => {
          router.push("/");
        }, 500);
      } else {
        throw new Error("Registration succeeded but user object not found");
      }
    } catch (error) {
      console.error("Registration error:", error);

      // Handle specific Firebase errors
      if (error.code === "auth/email-already-in-use") {
        toast.error(
          "📧 This email is already registered. Please login instead."
        );
      } else if (error.code === "auth/weak-password") {
        toast.error("🔒 Password is too weak. Please use a stronger password.");
      } else if (error.code === "auth/invalid-email") {
        toast.error("📧 Invalid email address format.");
      } else if (error.code === "auth/operation-not-allowed") {
        toast.error(
          "❌ Email/password accounts are not enabled. Please contact support."
        );
      } else if (error.code === "auth/network-request-failed") {
        toast.error("🌐 Network error. Please check your internet connection.");
      } else {
        // Generic error message
        toast.error(
          error.message || "❌ Registration failed. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      setLoading(true);
      console.log("Starting Google sign up...");

      await loginWithGoogle();

      toast.success("✅ Signed up with Google successfully!");

      setTimeout(() => {
        router.push("/");
      }, 500);
    } catch (error) {
      console.error("Google sign up error:", error);

      if (error.code === "auth/popup-closed-by-user") {
        toast.error("⚠️ Sign up cancelled.");
      } else if (error.code === "auth/network-request-failed") {
        toast.error("🌐 Network error. Please check your internet connection.");
      } else {
        toast.error(
          error.message || "❌ Google sign up failed. Please try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !loading) {
      handleSubmit();
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes register-float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes register-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.5), 0 0 40px rgba(139, 92, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(99, 102, 241, 0.8), 0 0 60px rgba(139, 92, 246, 0.5); }
        }
        @keyframes register-slideIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .register-animate-float {
          animation: register-float 3s ease-in-out infinite;
        }
        .register-animate-glow {
          animation: register-glow 2s ease-in-out infinite;
        }
        .register-animate-slideIn {
          animation: register-slideIn 0.5s ease-out forwards;
        }
        .register-input-glow:focus {
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3), 0 0 20px rgba(139, 92, 246, 0.4);
          transform: translateY(-2px);
        }
        .register-btn-glow:hover:not(:disabled) {
          box-shadow: 0 0 30px rgba(99, 102, 241, 0.6), 0 10px 30px rgba(0, 0, 0, 0.3);
          transform: translateY(-3px);
        }
        .register-btn-glow:active:not(:disabled) {
          transform: translateY(-1px);
        }
      `,
        }}
      />

      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4 py-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="w-full max-w-md bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl p-8 relative z-10 register-animate-slideIn border border-white/20">
          <div className="text-center mb-8 register-animate-float">
            <div className="inline-block p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full mb-4 register-animate-glow">
              <svg
                className="w-12 h-12 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Create Account
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Join us today and get started!
            </p>
          </div>

          <div className="space-y-5">
            <div className="transform transition-all duration-300 hover:scale-[1.02]">
              <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium flex items-center gap-2">
                <span className="text-indigo-500">👤</span> Full Name *
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:border-indigo-500 transition-all duration-300 register-input-glow"
                disabled={loading}
              />
            </div>

            <div className="transform transition-all duration-300 hover:scale-[1.02]">
              <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium flex items-center gap-2">
                <span className="text-indigo-500">📧</span> Email *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:border-indigo-500 transition-all duration-300 register-input-glow"
                disabled={loading}
              />
            </div>

            <div className="transform transition-all duration-300 hover:scale-[1.02]">
              <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium flex items-center gap-2">
                <span className="text-indigo-500">🖼️</span> Photo URL (Optional)
              </label>
              <input
                type="url"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="https://example.com/photo.jpg"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:border-indigo-500 transition-all duration-300 register-input-glow"
                disabled={loading}
              />
            </div>

            <div className="transform transition-all duration-300 hover:scale-[1.02]">
              <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium flex items-center gap-2">
                <span className="text-indigo-500">🔑</span> Password *
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Min 6 chars, A-Z, a-z, @#$"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:border-indigo-500 transition-all duration-300 register-input-glow"
                disabled={loading}
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 ml-1">
                Must contain: 6+ characters, uppercase, lowercase, special
                character
              </p>
            </div>

            <div className="transform transition-all duration-300 hover:scale-[1.02]">
              <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium flex items-center gap-2">
                <span className="text-indigo-500">🔐</span> Confirm Password *
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Re-enter your password"
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 focus:outline-none focus:border-indigo-500 transition-all duration-300 register-input-glow"
                disabled={loading}
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed register-btn-glow shadow-lg"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Creating Account...
                </span>
              ) : (
                "✨ Register"
              )}
            </button>
          </div>

          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300 dark:border-gray-700"></div>
            <span className="px-4 text-gray-500 dark:text-gray-400 font-medium">
              OR
            </span>
            <div className="flex-1 border-t border-gray-300 dark:border-gray-700"></div>
          </div>

          <button
            onClick={handleGoogleSignUp}
            disabled={loading}
            className="w-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 px-6 py-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 border-2 border-gray-300 dark:border-gray-700 shadow-md hover:shadow-xl transform hover:scale-[1.02]"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <span className="font-semibold">
              {loading ? "Signing up..." : "Sign up with Google"}
            </span>
          </button>

          <p className="mt-6 text-gray-600 dark:text-gray-400 text-center">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300 font-semibold hover:underline transition-colors"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
