// "use client";

// import Link from "next/link";
// import { useAuth } from "../context/AuthContext";
// import { useState, useEffect, useRef } from "react";
// import { useRouter } from "next/navigation";

// // Define NavLink component OUTSIDE the main component for better performance/stability
// const NavLink = ({
//   href,
//   children,
//   setIsMenuOpen,
//   setIsDropdownOpen,
//   ...props
// }) => (
//   <li className="w-full lg:w-auto text-center">
//     <Link
//       href={href}
//       className="block px-3 py-2 hover:text-blue-400 transition-colors duration-300 font-medium relative group"
//       onClick={() => {
//         // Safely close both menus on navigation click
//         if (setIsMenuOpen) setIsMenuOpen(false);
//         if (setIsDropdownOpen) setIsDropdownOpen(false);
//       }}
//       {...props}
//     >
//       {children}
//       <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
//     </Link>
//   </li>
// );

// const Navbar = () => {
//   const { user, logout } = useAuth();
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
//   const dropdownRef = useRef(null);
//   const router = useRouter();

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleLogout = async () => {
//     await logout();
//     setIsDropdownOpen(false);
//     setIsMenuOpen(false); // Close mobile menu on logout
//     router.push("/");
//   };

//   return (
//     <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-3">
//         {/* === 1. Top Bar (Logo | Center Links | Auth/Profile | Hamburger) === */}
//         <div className="flex items-center justify-between lg:justify-start">
//           {/* A. Logo/Brand (Left) */}
//           <Link
//             href="/"
//             className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-blue-500 hover:to-purple-600 transition-all duration-300 mr-8"
//             onClick={() => setIsMenuOpen(false)}
//           >
//             EventHub
//           </Link>
//           {/* text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 */}

//           {/* B. Center Navigation Links (Visible on Large Screens Only) */}
//           <ul className="hidden lg:flex flex-1 justify-center space-x-8 items-center">
//             {/* Desktop Order: Home, About Us, Events (Centralized) */}
//             <NavLink href="/" setIsMenuOpen={setIsMenuOpen}>
//               Home
//             </NavLink>
//             <NavLink href="/about" setIsMenuOpen={setIsMenuOpen}>
//               About Us
//             </NavLink>
//             <NavLink href="/events" setIsMenuOpen={setIsMenuOpen}>
//               Events
//             </NavLink>
//             <NavLink href="/packages" setIsMenuOpen={setIsMenuOpen}>
//               Our Packages
//             </NavLink>
//           </ul>

//           {/* C. Right-Aligned Auth/Profile (Visible on Large Screens Only) */}
//           <div className="hidden lg:flex space-x-4 items-center ml-auto">
//             {/* Auth Links (Desktop) */}
//             {!user && (
//               <>
//                 <NavLink href="/login" setIsMenuOpen={setIsMenuOpen}>
//                   Login
//                 </NavLink>
//                 <li className="list-none">
//                   {" "}
//                   {/* Used for Register button styling */}
//                   <Link
//                     href="/register"
//                     className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/50"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     Register
//                   </Link>
//                 </li>
//               </>
//             )}

//             {/* Profile Dropdown (Desktop) */}
//             {user && (
//               <li className="list-none relative" ref={dropdownRef}>
//                 <button
//                   onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                   className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300 focus:outline-none"
//                 >
//                   <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-400 hover:border-blue-500 transition-colors duration-300 shadow-lg">
//                     {user.photoURL ? (
//                       <img
//                         src={user.photoURL}
//                         alt={user.displayName || "User"}
//                         className="w-full h-full object-cover"
//                       />
//                     ) : (
//                       <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
//                         {user.displayName
//                           ? user.displayName.charAt(0).toUpperCase()
//                           : user.email.charAt(0).toUpperCase()}
//                       </div>
//                     )}
//                   </div>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className={`h-5 w-5 transition-transform duration-300 ${
//                       isDropdownOpen ? "rotate-180" : ""
//                     }`}
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </button>

//                 {/* Dropdown Menu (Desktop) */}
//                 {isDropdownOpen && (
//                   <div className="absolute right-0 mt-3 w-64 bg-gray-800 rounded-lg shadow-2xl border border-gray-700 py-2 animate-fadeIn z-50">
//                     {/* User Info Section */}
//                     <div className="px-4 py-3 border-b border-gray-700">
//                       <p className="text-white font-semibold text-sm truncate">
//                         {user.displayName || "User"}
//                       </p>
//                       <p className="text-gray-400 text-xs truncate mt-1">
//                         {user.email}
//                       </p>
//                     </div>

//                     {/* Menu Items */}
//                     <div className="py-2">
//                       <Link
//                         href="/add-event"
//                         className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
//                         onClick={() => setIsDropdownOpen(false)}
//                       >
//                         Add Event
//                       </Link>
//                       <Link
//                         href="/manage-event"
//                         className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
//                         onClick={() => setIsDropdownOpen(false)}
//                       >
//                         Manage Events
//                       </Link>
//                     </div>

//                     {/* Logout Section */}
//                     <div className="border-t border-gray-700 pt-2">
//                       <button
//                         onClick={handleLogout}
//                         className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:bg-gray-700 hover:text-red-300 transition-colors duration-200"
//                       >
//                         Logout
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </li>
//             )}
//           </div>

//           {/* D. Hamburger Menu for Mobile (Hidden on Large Screens) */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="lg:hidden p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ml-auto"
//             aria-label="Toggle navigation menu"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d={
//                   isMenuOpen
//                     ? "M6 18L18 6M6 6l12 12"
//                     : "M4 6h16M4 12h16M4 18h16"
//                 }
//               />
//             </svg>
//           </button>
//         </div>

//         {/* === 2. Mobile Menu Content (Hidden on Large Screens, Collapsed on Mobile) === */}
//         <div
//           className={`${
//             isMenuOpen ? "block" : "hidden"
//           } lg:hidden flex-col space-y-2 mt-4`}
//         >
//           {/* Mobile Links (Col wise) */}
//           <ul className="flex flex-col space-y-2 items-center w-full">
//             {/* Mobile Order: Home, About Us, Events */}
//             <NavLink href="/" setIsMenuOpen={setIsMenuOpen}>
//               Home
//             </NavLink>
//             <NavLink href="/about" setIsMenuOpen={setIsMenuOpen}>
//               About Us
//             </NavLink>
//             <NavLink href="/events" setIsMenuOpen={setIsMenuOpen}>
//               Events
//             </NavLink>

//             {/* Mobile Auth Links */}
//             {!user && (
//               <>
//                 <NavLink href="/login" setIsMenuOpen={setIsMenuOpen}>
//                   Login
//                 </NavLink>
//                 <li className="w-full text-center">
//                   <Link
//                     href="/register"
//                     className="block bg-blue-600 hover:bg-blue-700 px-4 py-2 mx-auto w-11/12 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/50"
//                     onClick={() => setIsMenuOpen(false)}
//                   >
//                     Register
//                   </Link>
//                 </li>
//               </>
//             )}

//             {/* Mobile Profile Section */}
//             {user && (
//               <>
//                 {/* User Info in Mobile */}
//                 <li className="w-full px-4 py-3 border-t border-b border-gray-700">
//                   <p className="text-white font-semibold text-sm text-center truncate">
//                     {user.displayName || "User"}
//                   </p>
//                   <p className="text-gray-400 text-xs text-center truncate mt-1">
//                     {user.email}
//                   </p>
//                 </li>

//                 <NavLink href="/add-event" setIsMenuOpen={setIsMenuOpen}>
//                   Add Event
//                 </NavLink>
//                 <NavLink href="/manage-event" setIsMenuOpen={setIsMenuOpen}>
//                   Manage Events
//                 </NavLink>
//                 <li className="w-full">
//                   <button
//                     onClick={handleLogout}
//                     className="flex items-center justify-center w-full px-4 py-2 text-sm text-red-400 hover:bg-gray-700 hover:text-red-300 transition-colors duration-200"
//                   >
//                     Logout
//                   </button>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// ...................2....................
"use client";

import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

// Define NavLink component OUTSIDE the main component for better performance/stability
const NavLink = ({
  href,
  children,
  setIsMenuOpen,
  setIsDropdownOpen,
  ...props
}) => (
  <li className="w-full lg:w-auto text-center">
    <Link
      href={href}
      className="block px-3 py-2 hover:text-blue-400 transition-colors duration-300 font-medium relative group"
      onClick={() => {
        // Safely close both menus on navigation click
        if (setIsMenuOpen) setIsMenuOpen(false);
        if (setIsDropdownOpen) setIsDropdownOpen(false);
      }}
      {...props}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
    </Link>
  </li>
);

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const dropdownRef = useRef(null);
  const router = useRouter();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await logout();
    setIsDropdownOpen(false);
    setIsMenuOpen(false); // Close mobile menu on logout
    router.push("/");
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        {/* === 1. Top Bar (Logo | Center Links | Auth/Profile | Hamburger) === */}
        <div className="flex items-center justify-between lg:justify-start">
          {/* A. Logo/Brand (Left) */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-blue-500 hover:to-purple-600 transition-all duration-300 mr-8"
            onClick={() => setIsMenuOpen(false)}
          >
            EventHub
          </Link>
          {/* text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400 */}

          {/* B. Center Navigation Links (Visible on Large Screens Only) */}
          <ul className="hidden lg:flex flex-1 justify-center space-x-8 items-center">
            {/* Desktop Order: Home, About Us, Events (Centralized) */}
            <NavLink href="/" setIsMenuOpen={setIsMenuOpen}>
              Home
            </NavLink>
            <NavLink href="/about" setIsMenuOpen={setIsMenuOpen}>
              About Us
            </NavLink>
            <NavLink href="/events" setIsMenuOpen={setIsMenuOpen}>
              Events
            </NavLink>
            {/* THIS IS THE MAIN PACKAGES LINK - KEPT */}
            <NavLink href="/packages" setIsMenuOpen={setIsMenuOpen}>
              Our Packages
            </NavLink>
          </ul>

          {/* C. Right-Aligned Auth/Profile (Visible on Large Screens Only) */}
          <div className="hidden lg:flex space-x-4 items-center ml-auto">
            {/* Auth Links (Desktop) */}
            {!user && (
              <>
                <NavLink href="/login" setIsMenuOpen={setIsMenuOpen}>
                  Login
                </NavLink>
                <li className="list-none">
                  {" "}
                  {/* Used for Register button styling */}
                  <Link
                    href="/register"
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                </li>
              </>
            )}

            {/* Profile Dropdown (Desktop) */}
            {user && (
              <li className="list-none relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-300 focus:outline-none"
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-400 hover:border-blue-500 transition-colors duration-300 shadow-lg">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt={user.displayName || "User"}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                        {user.displayName
                          ? user.displayName.charAt(0).toUpperCase()
                          : user.email.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu (Desktop) */}
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-3 w-64 bg-gray-800 rounded-lg shadow-2xl border border-gray-700 py-2 animate-fadeIn z-50">
                    {/* User Info Section */}
                    <div className="px-4 py-3 border-b border-gray-700">
                      <p className="text-white font-semibold text-sm truncate">
                        {user.displayName || "User"}
                      </p>
                      <p className="text-gray-400 text-xs truncate mt-1">
                        {user.email}
                      </p>
                    </div>

                    {/* Menu Items */}
                    <div className="py-2">
                      {/* REDUNDANT "All Packages" LINK REMOVED FROM HERE */}
                      <Link
                        href="/add-event"
                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Add Event
                      </Link>
                      <Link
                        href="/manage-event"
                        className="flex items-center px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Manage Events
                      </Link>
                    </div>

                    {/* Logout Section */}
                    <div className="border-t border-gray-700 pt-2">
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:bg-gray-700 hover:text-red-300 transition-colors duration-200"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </li>
            )}
          </div>

          {/* D. Hamburger Menu for Mobile (Hidden on Large Screens) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ml-auto"
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* === 2. Mobile Menu Content (Hidden on Large Screens, Collapsed on Mobile) === */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:hidden flex-col space-y-2 mt-4`}
        >
          {/* Mobile Links (Col wise) */}
          <ul className="flex flex-col space-y-2 items-center w-full">
            {/* Mobile Order: Home, About Us, Events */}
            <NavLink href="/" setIsMenuOpen={setIsMenuOpen}>
              Home
            </NavLink>
            <NavLink href="/about" setIsMenuOpen={setIsMenuOpen}>
              About Us
            </NavLink>
            <NavLink href="/events" setIsMenuOpen={setIsMenuOpen}>
              Events
            </NavLink>
            {/* THIS IS THE MAIN PACKAGES LINK - KEPT */}
            <NavLink href="/packages" setIsMenuOpen={setIsMenuOpen}>
              Our Packages
            </NavLink>

            {/* Mobile Auth Links */}
            {!user && (
              <>
                <NavLink href="/login" setIsMenuOpen={setIsMenuOpen}>
                  Login
                </NavLink>
                <li className="w-full text-center">
                  <Link
                    href="/register"
                    className="block bg-blue-600 hover:bg-blue-700 px-4 py-2 mx-auto w-11/12 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-blue-500/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                </li>
              </>
            )}

            {/* Mobile Profile Section */}
            {user && (
              <>
                {/* User Info in Mobile */}
                <li className="w-full px-4 py-3 border-t border-b border-gray-700">
                  <p className="text-white font-semibold text-sm text-center truncate">
                    {user.displayName || "User"}
                  </p>
                  <p className="text-gray-400 text-xs text-center truncate mt-1">
                    {user.email}
                  </p>
                </li>

                {/* REDUNDANT "All Packages" LINK REMOVED FROM HERE in the profile section */}

                <NavLink href="/add-event" setIsMenuOpen={setIsMenuOpen}>
                  Add Event
                </NavLink>
                <NavLink href="/manage-event" setIsMenuOpen={setIsMenuOpen}>
                  Manage Events
                </NavLink>
                <li className="w-full">
                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center w-full px-4 py-2 text-sm text-red-400 hover:bg-gray-700 hover:text-red-300 transition-colors duration-200"
                  >
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
