// // app/components/ProtectedRoute.js
// import { useAuth } from "../lib/firebase";
// import { useRouter } from "next/router";

// const ProtectedRoute = ({ children }) => {
//   const { user, loading } = useAuth();
//   const router = useRouter();

//   if (loading) return <div>Loading...</div>;

//   if (!user) {
//     router.push("/login");
//     return null;
//   }

//   return <>{children}</>;
// };

// export default ProtectedRoute;

// app/components/ProtectedRoute.js
import { useAuth } from "../lib/firebase";
import { useRouter } from "next/router";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth(); // Assuming `useAuth` is a custom hook
  const router = useRouter();

  if (loading) return <div>Loading...</div>;

  if (!user) {
    router.push("/login"); // Redirect to login if user is not authenticated
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
