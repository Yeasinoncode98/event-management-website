// "use client";

// import React from "react";
// import {
//   CalendarCheck,
//   PlusSquare,
//   Wrench,
//   Trash2,
//   Users,
//   Utensils,
//   Camera,
//   Mail,
//   Zap,
// } from "lucide-react";

// import Hero from "./components/Hero"; // <-- Keeping your existing Hero component import

// // --- PLACEHOLDER DATA (Simulating API/Database Fetch) ---

// const coreFunctionsData = [
//   {
//     icon: PlusSquare,
//     title: "Create Events",
//     description:
//       "Design, schedule, and publish any event with our intuitive builder.",
//   },
//   {
//     icon: Wrench,
//     title: "Manage & Update",
//     description:
//       "Modify logistics, capacity, and details in real-time from a centralized dashboard.",
//   },
//   {
//     icon: Users,
//     title: "Handle Registrations",
//     description:
//       "Track RSVPs, process tickets, and manage guest lists instantly.",
//   },
//   {
//     icon: Trash2,
//     title: "Cancel/Archive",
//     description: "Securely close or archive past events and related data.",
//   },
// ];

// const upcomingEventsData = [
//   {
//     id: 1,
//     name: "Annual Tech Summit 2026",
//     date: "Jan 15, 2026",
//     time: "9:00 AM",
//     location: "Convention Hall A",
//     tags: ["Tech", "Business"],
//     color: "text-blue-400",
//   },
//   {
//     id: 2,
//     name: "Gourmet Food Festival",
//     date: "Feb 28, 2026",
//     time: "11:00 AM",
//     location: "City Park Grounds",
//     tags: ["Food", "Leisure"],
//     color: "text-green-400",
//   },
//   {
//     id: 3,
//     name: "Spring Wedding Expo",
//     date: "Mar 10, 2026",
//     time: "1:00 PM",
//     location: "Grand Hotel Ballroom",
//     tags: ["Wedding", "Lifestyle"],
//     color: "text-pink-400",
//   },
// ];

// const eventPackagesData = [
//   {
//     name: "Friends Party",
//     price: "$2,500",
//     time: "Half Day (8hr)",
//     catering: "Basic Appetizers",
//     camera: "None",
//     details: [
//       "Venue consultation",
//       "Standard A/V setup",
//       "Soft-Drinks Unlimited",
//     ],
//     baseColor: "from-yellow-900/50 to-gray-800",
//   },
//   {
//     name: "DJ Party",
//     price: "$4,200",
//     time: "Full Day (20hr)",
//     catering: "Buffet Style (2 options)",
//     camera: "1 Photographer (20hr)",
//     details: [
//       "Full venue sourcing",
//       "Personalized playlist/DJ",
//       "Desert Treat",
//     ],
//     isFeatured: true,
//     baseColor: "from-blue-900/70 to-blue-800/50",
//   },
//   {
//     name: "Marriage Ceremony",
//     price: "$9,800",
//     time: "Full Day & Night (2day)",
//     catering: "3-Course Plated Dinner",
//     camera: "2 Cameraman(22hr)",
//     details: [
//       "Dedicated Event Planner",
//       "Premium decor package",
//       "Luxury transportation service",
//     ],
//     baseColor: "from-purple-900/50 to-pink-800/50",
//   },
// ];

// const featuredVendorsData = [
//   {
//     name: "Alpha Catering Co.",
//     service: "Catering Service",
//     icon: Utensils,
//     rating: 5,
//     color: "text-amber-400",
//     gradient: "from-amber-600/30 to-amber-900/50",
//   },
//   {
//     name: "Lens Pro Media",
//     service: "Cameraman/Video",
//     icon: Camera,
//     rating: 4.8,
//     color: "text-indigo-400",
//     gradient: "from-indigo-600/30 to-indigo-900/50",
//   },
//   {
//     name: "Event Master Pro",
//     service: "Best Event Handler",
//     icon: Zap,
//     rating: 4.9,
//     color: "text-red-400",
//     gradient: "from-red-600/30 to-red-900/50",
//   },
// ];

// // --- FEATURE CARD COMPONENTS (UPDATED for Glassy/Gradient Look) ---

// // Card for Core Functions
// const CoreFunctionCard = ({ icon: Icon, title, description }) => (
//   <div className="p-6 rounded-xl border border-blue-600/50 bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm transition-all duration-500 transform hover:scale-[1.05] shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] cursor-pointer">
//     <Icon className="w-10 h-10 text-blue-400 mb-3" />
//     <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
//     <p className="text-gray-300 text-sm">{description}</p>
//   </div>
// );

// // Card for Upcoming Events
// const UpcomingEventCard = ({ name, date, time, location, color }) => (
//   <div className="p-5 rounded-xl border border-green-600/50 bg-gradient-to-br from-green-900/60 to-gray-900/80 backdrop-blur-sm transition-all duration-500 transform hover:scale-[1.05] shadow-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] cursor-pointer">
//     <div className="flex items-start justify-between">
//       <h3 className={`text-2xl font-bold ${color}`}>{name}</h3>
//       <CalendarCheck className={`w-6 h-6 ${color}`} />
//     </div>
//     <p className="text-gray-200 mt-2">
//       <span className="font-semibold text-white">{date}</span> at {time}
//     </p>
//     <p className="text-gray-400 text-sm">{location}</p>
//     <button className="mt-4 text-sm font-medium text-green-400 hover:text-green-300 transition-colors">
//       Register Now &rarr;
//     </button>
//   </div>
// );

// // Card for Event Packages
// const PackageCard = ({
//   name,
//   price,
//   time,
//   catering,
//   camera,
//   details,
//   isFeatured,
//   baseColor,
// }) => (
//   <div
//     className={`p-8 rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-[1.07] cursor-pointer
//       bg-gradient-to-br ${baseColor} border-2
//       ${
//         isFeatured
//           ? "border-blue-400 shadow-[0_0_40px_rgba(96,165,250,0.6)]"
//           : "border-gray-700 hover:border-blue-500"
//       }
//       backdrop-blur-sm
//     `}
//   >
//     <div className="flex justify-between items-center mb-4">
//       <h3
//         className={`text-3xl font-extrabold ${
//           isFeatured ? "text-white" : "text-blue-400"
//         }`}
//       >
//         {name}
//       </h3>
//       {isFeatured && (
//         <span className="text-xs uppercase bg-yellow-400 text-gray-900 py-1 px-3 rounded-full font-bold shadow-md">
//           Best Value
//         </span>
//       )}
//     </div>
//     <div className="text-5xl font-extrabold text-red-400 mb-4">{price}</div>

//     <p className="text-gray-300 mb-6 flex items-center">
//       <CalendarCheck className="w-5 h-5 mr-3 text-yellow-400" /> {time}
//     </p>

//     <div className="space-y-3 text-sm">
//       <p className="flex items-center text-gray-100 font-semibold">
//         <Utensils className="w-4 h-4 mr-3 text-green-400" /> **Catering:**{" "}
//         {catering}
//       </p>
//       <p className="flex items-center text-gray-100 font-semibold">
//         <Camera className="w-4 h-4 mr-3 text-indigo-400" /> **Cameraman:**{" "}
//         {camera}
//       </p>
//       {details.map((d, i) => (
//         <p key={i} className="flex items-center text-gray-300">
//           <span className="text-blue-400 mr-3 text-lg leading-none">
//             &bull;
//           </span>{" "}
//           {d}
//         </p>
//       ))}
//     </div>
//     <button
//       className={`mt-8 w-full py-3 rounded-lg font-bold transition-all duration-300 shadow-xl
//         ${
//           isFeatured
//             ? "bg-blue-500 text-white hover:bg-blue-600 shadow-blue-500/50"
//             : "bg-green-500 text-gray-900 hover:bg-green-600 shadow-green-500/50"
//         }`}
//     >
//       Book Package
//     </button>
//   </div>
// );

// // Card for Featured Vendors
// const VendorCard = ({ name, service, icon: Icon, rating, color, gradient }) => (
//   <div
//     className={`p-5 rounded-xl border border-gray-700 flex items-center space-x-4 transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-2xl cursor-pointer
//         bg-gradient-to-r ${gradient} backdrop-blur-sm`}
//   >
//     <Icon className={`w-10 h-10 ${color} flex-shrink-0`} />
//     <div>
//       <h3 className="text-xl font-semibold text-white">{name}</h3>
//       <p className="text-sm text-gray-300">{service}</p>
//     </div>
//     <div className="ml-auto flex items-center text-yellow-400 font-bold text-lg">
//       {rating} <span className="ml-1 text-2xl">★</span>
//     </div>
//   </div>
// );

// // --- MAIN HOME COMPONENT ---
// const Home = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       {/* 1. Existing Hero Section */}
//       <Hero /> {/* Display Hero section */}
//       {/* 2. Welcome/Intro Section (Updated for Glassy Look) */}
//       <section className="text-center max-w-4xl mx-auto space-y-4 pt-16 pb-20 px-4">
//         <div className="p-8 rounded-xl border border-blue-600/50 bg-gradient-to-br from-gray-800/50 to-gray-900/80 shadow-2xl backdrop-blur-md">
//           <h1 className="text-5xl font-extrabold tracking-tight text-blue-400">
//             Welcome to Our Event Management System
//           </h1>
//           <p className="text-xl text-gray-300 mt-4">
//             Explore events, register, and manage your own events easily. Our
//             platform is your complete event control center.
//           </p>
//         </div>
//       </section>
//       {/* --- FEATURE SECTIONS START HERE --- */}
//       <div className="pt-0 pb-24 px-4 sm:px-8 space-y-24">
//         {/* 3. Core Functions of the Website */}
//         <section className="max-w-7xl mx-auto">
//           <h2 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
//             Organizer Core Functions
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {coreFunctionsData.map((fn, index) => (
//               <CoreFunctionCard key={index} {...fn} />
//             ))}
//           </div>
//         </section>

//         {/* 4. Upcoming Events Card Section */}
//         <section className="max-w-7xl mx-auto">
//           <h2 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
//             Upcoming Events
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {upcomingEventsData.map((event) => (
//               <UpcomingEventCard key={event.id} {...event} />
//             ))}
//           </div>
//           <div className="text-center mt-12">
//             <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl shadow-purple-500/50">
//               View All Events &rarr;
//             </button>
//           </div>
//         </section>

//         {/* 5. Best Party and Event Packages */}
//         <section className="max-w-7xl mx-auto">
//           <h2 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400">
//             All-Inclusive Event Packages
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
//             {eventPackagesData.map((pkg, index) => (
//               <PackageCard
//                 key={index}
//                 {...pkg}
//                 isFeatured={pkg.isFeatured} // Uses new data structure property
//               />
//             ))}
//           </div>
//         </section>

//         {/* 6. Featured Vendors & Event Handlers (MOVED UP) */}
//         <section className="max-w-7xl mx-auto">
//           <h2 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
//             Featured Vendors & Planners
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {featuredVendorsData.map((vendor, index) => (
//               <VendorCard key={index} {...vendor} />
//             ))}
//           </div>
//           <p className="text-center text-gray-400 mt-8">
//             Need something custom?{" "}
//             <a href="#" className="text-blue-400 hover:underline">
//               Explore our full Vendor Marketplace.
//             </a>
//           </p>
//         </section>

//         {/* 7. Newsletter Sign-up (Newssettler) */}
//         <section className="max-w-3xl mx-auto p-10 rounded-2xl border border-green-600/50 bg-gradient-to-br from-gray-800/80 to-gray-900/90 shadow-2xl backdrop-blur-md">
//           <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
//             <Mail className="w-12 h-12 text-green-400 flex-shrink-0 animate-pulse" />
//             <div>
//               <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-300">
//                 Stay Updated with Our Newsletter
//               </h3>
//               <p className="text-gray-300 mt-1">
//                 Receive the latest event trends, exclusive package deals, and
//                 vendor highlights directly in your inbox.
//               </p>
//             </div>
//           </div>
//           <form className="mt-6 flex flex-col sm:flex-row gap-4">
//             <input
//               type="email"
//               placeholder="Enter your email address"
//               className="flex-grow p-4 rounded-lg border border-gray-600 bg-gray-900/70 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500 transition-colors"
//               required
//             />
//             <button
//               type="submit"
//               className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-gray-900 font-bold rounded-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 flex-shrink-0 shadow-lg"
//             >
//               Subscribe Now
//             </button>
//           </form>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Home;

// .....................2................

"use client";

import React from "react";
import {
  CalendarCheck,
  PlusSquare,
  Wrench,
  Trash2,
  Users,
  Utensils,
  Camera,
  Mail,
  Zap,
} from "lucide-react";

import Hero from "./components/Hero"; // <-- Keeping your existing Hero component import

// --- PLACEHOLDER DATA (Simulating API/Database Fetch) ---

const coreFunctionsData = [
  {
    icon: PlusSquare,
    title: "Create Events",
    description:
      "Design, schedule, and publish any event with our intuitive builder.",
  },
  {
    icon: Wrench,
    title: "Manage & Update",
    description:
      "Modify logistics, capacity, and details in real-time from a centralized dashboard.",
  },
  {
    icon: Users,
    title: "Handle Registrations",
    description:
      "Track RSVPs, process tickets, and manage guest lists instantly.",
  },
  {
    icon: Trash2,
    title: "Cancel/Archive",
    description: "Securely close or archive past events and related data.",
  },
];

const upcomingEventsData = [
  {
    id: 1,
    name: "Annual Tech Summit 2026",
    date: "Jan 15, 2026",
    time: "9:00 AM",
    location: "Convention Hall A",
    tags: ["Tech", "Business"],
    color: "text-blue-400",
  },
  {
    id: 2,
    name: "Gourmet Food Festival",
    date: "Feb 28, 2026",
    time: "11:00 AM",
    location: "City Park Grounds",
    tags: ["Food", "Leisure"],
    color: "text-green-400",
  },
  {
    id: 3,
    name: "Spring Wedding Expo",
    date: "Mar 10, 2026",
    time: "1:00 PM",
    location: "Grand Hotel Ballroom",
    tags: ["Wedding", "Lifestyle"],
    color: "text-pink-400",
  },
];

const eventPackagesData = [
  {
    name: "Bronze Launch",
    price: "$1,500",
    time: "Half Day (4hr)",
    catering: "Basic Appetizers",
    camera: "None",
    details: ["Venue consultation", "Standard A/V setup"],
    baseColor: "from-yellow-900/50 to-gray-800",
  },
  {
    name: "Silver Celebration",
    price: "$4,200",
    time: "Full Day (8hr)",
    catering: "Buffet Style (2 options)",
    camera: "1 Photographer (4hr)",
    details: [
      "Full venue sourcing",
      "Personalized playlist/DJ",
      "2 standard services included",
    ],
    isFeatured: true,
    baseColor: "from-blue-900/70 to-blue-800/50",
  },
  {
    name: "Gold Premier",
    price: "$9,800",
    time: "Full Day & Night (12hr)",
    catering: "3-Course Plated Dinner",
    camera: "2 Photographers + Video (8hr)",
    details: [
      "Dedicated Event Planner",
      "Premium decor package",
      "Luxury transportation service",
    ],
    baseColor: "from-purple-900/50 to-pink-800/50",
  },
];

const featuredVendorsData = [
  {
    name: "Alpha Catering Co.",
    service: "Catering Service",
    icon: Utensils,
    rating: 5,
    color: "text-amber-400",
    gradient: "from-amber-600/30 to-amber-900/50",
  },
  {
    name: "Lens Pro Media",
    service: "Cameraman/Video",
    icon: Camera,
    rating: 4.8,
    color: "text-indigo-400",
    gradient: "from-indigo-600/30 to-indigo-900/50",
  },
  {
    name: "Event Master Pro",
    service: "Best Event Handler",
    icon: Zap,
    rating: 4.9,
    color: "text-red-400",
    gradient: "from-red-600/30 to-red-900/50",
  },
];

// --- FEATURE CARD COMPONENTS (UPDATED for Glassy/Gradient Look) ---

// Card for Core Functions
const CoreFunctionCard = ({ icon: Icon, title, description }) => (
  <div className="p-6 rounded-xl border border-blue-600/50 bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm transition-all duration-500 transform hover:scale-[1.05] shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] cursor-pointer">
    <Icon className="w-10 h-10 text-blue-400 mb-3" />
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-300 text-sm">{description}</p>
  </div>
);

// Card for Upcoming Events
const UpcomingEventCard = ({ name, date, time, location, color }) => (
  <div className="p-5 rounded-xl border border-green-600/50 bg-gradient-to-br from-green-900/60 to-gray-900/80 backdrop-blur-sm transition-all duration-500 transform hover:scale-[1.05] shadow-lg hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] cursor-pointer">
    <div className="flex items-start justify-between">
      <h3 className={`text-2xl font-bold ${color}`}>{name}</h3>
      <CalendarCheck className={`w-6 h-6 ${color}`} />
    </div>
    <p className="text-gray-200 mt-2">
      <span className="font-semibold text-white">{date}</span> at {time}
    </p>
    <p className="text-gray-400 text-sm">{location}</p>
    <button className="mt-4 text-sm font-medium text-green-400 hover:text-green-300 transition-colors">
      Register Now &rarr;
    </button>
  </div>
);

// Card for Event Packages
const PackageCard = ({
  name,
  price,
  time,
  catering,
  camera,
  details,
  isFeatured,
  baseColor,
}) => (
  <div
    className={`p-8 rounded-2xl shadow-2xl transition-all duration-500 transform hover:scale-[1.07] cursor-pointer 
      bg-gradient-to-br ${baseColor} border-2 
      ${
        isFeatured
          ? "border-blue-400 shadow-[0_0_40px_rgba(96,165,250,0.6)]"
          : "border-gray-700 hover:border-blue-500"
      }
      backdrop-blur-sm
    `}
  >
    <div className="flex justify-between items-center mb-4">
      <h3
        className={`text-3xl font-extrabold ${
          isFeatured ? "text-white" : "text-blue-400"
        }`}
      >
        {name}
      </h3>
      {isFeatured && (
        <span className="text-xs uppercase bg-yellow-400 text-gray-900 py-1 px-3 rounded-full font-bold shadow-md">
          Best Value
        </span>
      )}
    </div>
    <div className="text-5xl font-extrabold text-red-400 mb-4">{price}</div>

    <p className="text-gray-300 mb-6 flex items-center">
      <CalendarCheck className="w-5 h-5 mr-3 text-yellow-400" /> {time}
    </p>

    <div className="space-y-3 text-sm">
      <p className="flex items-center text-gray-100 font-semibold">
        <Utensils className="w-4 h-4 mr-3 text-green-400" /> **Catering:**{" "}
        {catering}
      </p>
      <p className="flex items-center text-gray-100 font-semibold">
        <Camera className="w-4 h-4 mr-3 text-indigo-400" /> **Cameraman:**{" "}
        {camera}
      </p>
      {details.map((d, i) => (
        <p key={i} className="flex items-center text-gray-300">
          <span className="text-blue-400 mr-3 text-lg leading-none">
            &bull;
          </span>{" "}
          {d}
        </p>
      ))}
    </div>
    <button
      className={`mt-8 w-full py-3 rounded-lg font-bold transition-all duration-300 shadow-xl 
        ${
          isFeatured
            ? "bg-blue-500 text-white hover:bg-blue-600 shadow-blue-500/50"
            : "bg-green-500 text-gray-900 hover:bg-green-600 shadow-green-500/50"
        }`}
    >
      Book Package
    </button>
  </div>
);

// Card for Featured Vendors
const VendorCard = ({ name, service, icon: Icon, rating, color, gradient }) => (
  <div
    className={`p-5 rounded-xl border border-gray-700 flex items-center space-x-4 transition-all duration-300 hover:scale-[1.03] shadow-lg hover:shadow-2xl cursor-pointer 
        bg-gradient-to-r ${gradient} backdrop-blur-sm`}
  >
    <Icon className={`w-10 h-10 ${color} flex-shrink-0`} />
    <div>
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="text-sm text-gray-300">{service}</p>
    </div>
    <div className="ml-auto flex items-center text-yellow-400 font-bold text-lg">
      {rating} <span className="ml-1 text-2xl">★</span>
    </div>
  </div>
);

// --- MAIN HOME COMPONENT ---
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* 1. Existing Hero Section */}
      <Hero /> {/* Display Hero section */}
      {/* 2. Welcome/Intro Section (Updated for Glassy Look) */}
      <section className="text-center max-w-4xl mx-auto space-y-4 pt-16 pb-20 px-4">
        <div className="p-8 rounded-xl border border-blue-600/50 bg-gradient-to-br from-gray-800/50 to-gray-900/80 shadow-2xl backdrop-blur-md">
          <h1 className="text-5xl font-extrabold tracking-tight text-blue-400">
            Welcome to Our Event Management System
          </h1>
          <p className="text-xl text-gray-300 mt-4">
            Explore events, register, and manage your own events easily. Our
            platform is your complete event control center.
          </p>
        </div>
      </section>
      {/* --- FEATURE SECTIONS START HERE --- */}
      <div className="pt-0 pb-24 px-4 sm:px-8 space-y-24">
        {/* 3. Core Functions of the Website */}
        <section className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Organizer Core Functions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreFunctionsData.map((fn, index) => (
              <CoreFunctionCard key={index} {...fn} />
            ))}
          </div>
        </section>

        {/* 4. Upcoming Events Card Section */}
        <section className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-400">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingEventsData.map((event) => (
              <UpcomingEventCard key={event.id} {...event} />
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/events" className="inline-block">
              {" "}
              {/* Changed to <a> tag with href */}
              <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl shadow-purple-500/50">
                View All Events &rarr;
              </button>
            </a>
          </div>
        </section>

        {/* 5. Best Party and Event Packages */}
        <section className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400">
            All-Inclusive Event Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
            {eventPackagesData.map((pkg, index) => (
              <PackageCard
                key={index}
                {...pkg}
                isFeatured={pkg.isFeatured} // Uses new data structure property
              />
            ))}
          </div>
        </section>

        {/* 6. Featured Vendors & Event Handlers */}
        <section className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
            Featured Vendors & Planners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredVendorsData.map((vendor, index) => (
              <VendorCard key={index} {...vendor} />
            ))}
          </div>
          <p className="text-center text-gray-400 mt-8">
            Need something custom?{" "}
            <a href="/vendors" className="text-blue-400 hover:underline">
              Explore our full Vendor Marketplace.
            </a>
          </p>
        </section>

        {/* 7. Newsletter Sign-up (Newssettler) */}
        <section className="max-w-3xl mx-auto p-10 rounded-2xl border border-green-600/50 bg-gradient-to-br from-gray-800/80 to-gray-900/90 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <Mail className="w-12 h-12 text-green-400 flex-shrink-0 animate-pulse" />
            <div>
              <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-green-300">
                Stay Updated with Our Newsletter
              </h3>
              <p className="text-gray-300 mt-1">
                Receive the latest event trends, exclusive package deals, and
                vendor highlights directly in your inbox.
              </p>
            </div>
          </div>
          <form className="mt-6 flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-grow p-4 rounded-lg border border-gray-600 bg-gray-900/70 text-white placeholder-gray-500 focus:ring-green-500 focus:border-green-500 transition-colors"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-gray-900 font-bold rounded-lg hover:from-green-600 hover:to-teal-600 transition-all duration-300 flex-shrink-0 shadow-lg"
            >
              Subscribe Now
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Home;
