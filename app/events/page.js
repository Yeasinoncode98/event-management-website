// // vercel deploy

// "use client";

// import EventCard from "../components/EventCard";
// import axiosInstance from "../lib/axios.js";
// import { useEffect, useState } from "react";

// const Events = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = () => {
//     setLoading(true);
//     axiosInstance
//       .get("/api/events")
//       .then((response) => {
//         // Check if response has the events array
//         if (response.data.success && response.data.events) {
//           setEvents(response.data.events);
//         } else {
//           setEvents([]);
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching events:", err);
//         setError("Failed to load events. Please try again later.");
//         setLoading(false);
//       });
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
//           <p className="text-lg text-gray-600">Loading events...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="p-8">
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//           {error}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-8 max-w-7xl mx-auto">
//       <div className="mb-8">
//         <h1 className="text-4xl font-bold text-gray-800 mb-2">
//           Upcoming Events
//         </h1>
//         <p className="text-gray-600">
//           Discover and participate in our community events
//         </p>
//       </div>

//       {events.length === 0 ? (
//         <div className="text-center py-12">
//           <p className="text-xl text-gray-500">
//             No events available at the moment.
//           </p>
//           <p className="text-gray-400 mt-2">
//             Check back later for upcoming events!
//           </p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {events.map((event) => (
//             <EventCard key={event._id} event={event} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Events;

// ...............2.............

// "use client";

// import EventCard from "../components/EventCard";
// import axiosInstance from "../lib/axios.js";
// import { useEffect, useState } from "react";

// const Events = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedType, setSelectedType] = useState("all");

//   useEffect(() => {
//     fetchEvents();
//   }, []);

//   const fetchEvents = () => {
//     setLoading(true);
//     axiosInstance
//       .get("/api/events")
//       .then((response) => {
//         if (response.data.success && response.data.events) {
//           setEvents(response.data.events);
//         } else {
//           setEvents([]);
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching events:", err);
//         setError("Failed to load events. Please try again later.");
//         setLoading(false);
//       });
//   };

//   // Normalize text for comparison (removes spaces, converts to lowercase)
//   const normalizeText = (text) => {
//     return text.toLowerCase().replace(/\s+/g, "");
//   };

//   // Filter events based on search and type
//   const filteredEvents = events.filter((event) => {
//     const matchesSearch =
//       searchQuery.trim() === "" ||
//       normalizeText(event.title || "").includes(normalizeText(searchQuery)) ||
//       normalizeText(event.description || "").includes(
//         normalizeText(searchQuery)
//       );

//     const matchesType =
//       selectedType === "all" ||
//       (event.type && event.type.toLowerCase() === selectedType.toLowerCase());

//     return matchesSearch && matchesType;
//   });

//   // Get unique event types for dropdown
//   const eventTypes = [
//     "all",
//     ...new Set(events.map((e) => e.type).filter(Boolean)),
//   ];

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
//           <p className="text-lg text-gray-600">Loading events...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="p-8">
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//           {error}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="p-8 max-w-7xl mx-auto">
//       <div className="mb-8 text-center">
//         <h1 className="text-4xl font-bold text-gray-800 mb-2">
//           Upcoming Events
//         </h1>
//         <p className="text-gray-600">
//           Discover and participate in our community events
//         </p>
//       </div>

//       {/* Search and Filter Section */}
//       <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
//         <div className="w-full sm:w-96">
//           <input
//             type="text"
//             placeholder="Search events by name..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           />
//         </div>

//         <div className="w-full sm:w-48">
//           <select
//             value={selectedType}
//             onChange={(e) => setSelectedType(e.target.value)}
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
//           >
//             {eventTypes.map((type) => (
//               <option key={type} value={type}>
//                 {type === "all"
//                   ? "All Types"
//                   : type.charAt(0).toUpperCase() + type.slice(1)}
//               </option>
//             ))}
//           </select>
//         </div>
//       </div>

//       {filteredEvents.length === 0 ? (
//         <div className="text-center py-12">
//           <p className="text-xl text-gray-500">
//             {searchQuery || selectedType !== "all"
//               ? "No events match your search criteria."
//               : "No events available at the moment."}
//           </p>
//           <p className="text-gray-400 mt-2">
//             {searchQuery || selectedType !== "all"
//               ? "Try adjusting your search or filter."
//               : "Check back later for upcoming events!"}
//           </p>
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredEvents.map((event) => (
//             <EventCard key={event._id} event={event} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Events;

// 3/
"use client";

import EventCard from "../components/EventCard";
import axiosInstance from "../lib/axios.js";
import { useEffect, useState } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    setLoading(true);
    axiosInstance
      .get("/api/events")
      .then((response) => {
        if (response.data.success && response.data.events) {
          setEvents(response.data.events);
        } else {
          setEvents([]);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching events:", err);
        setError("Failed to load events. Please try again later.");
        setLoading(false);
      });
  };

  // Normalize text for comparison (removes spaces, converts to lowercase)
  const normalizeText = (text) => {
    return text.toLowerCase().replace(/\s+/g, "");
  };

  // Filter events based on search and type
  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      searchQuery.trim() === "" ||
      normalizeText(event.title || "").includes(normalizeText(searchQuery)) ||
      normalizeText(event.description || "").includes(
        normalizeText(searchQuery)
      );

    const matchesType =
      selectedType === "all" ||
      (event.type && event.type.toLowerCase() === selectedType.toLowerCase());

    return matchesSearch && matchesType;
  });

  // Get unique event types for dropdown
  const eventTypes = [
    "all",
    ...new Set(events.map((e) => e.type).filter(Boolean)),
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading events...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-5">
          Upcoming Events( {events.length})
        </h1>
        <p className="text-gray-600 mb-5">
          Discover and participate in our community events
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-12 flex flex-col sm:flex-row gap-4 items-center justify-center ">
        <div className="w-full sm:w-96">
          <input
            type="text"
            placeholder="Search events by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div className="w-full sm:w-48">
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white appearance-none cursor-pointer text-gray-800"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.75rem center",
              backgroundSize: "1.5em 1.5em",
              paddingRight: "2.5rem",
            }}
          >
            {eventTypes.map((type) => (
              <option
                key={type}
                value={type}
                className="bg-gray-900 text-white"
              >
                {type === "all"
                  ? "All Types"
                  : type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredEvents.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">
            {searchQuery || selectedType !== "all"
              ? "No events match your search criteria."
              : "No events available at the moment."}
          </p>
          <p className="text-gray-400 mt-2">
            {searchQuery || selectedType !== "all"
              ? "Try adjusting your search or filter."
              : "Check back later for upcoming events!"}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {filteredEvents.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;
