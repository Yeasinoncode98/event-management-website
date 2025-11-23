// "use client";

// import EventCard from "../components/EventCard";
// import axios from "axios";
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
//     axios
//       .get("http://localhost:5000/api/events")
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

// vercel deploy

"use client";

import EventCard from "../components/EventCard";
import axiosInstance from "../lib/axios.js";
import { useEffect, useState } from "react";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    setLoading(true);
    axiosInstance
      .get("/api/events")
      .then((response) => {
        // Check if response has the events array
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
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Upcoming Events
        </h1>
        <p className="text-gray-600">
          Discover and participate in our community events
        </p>
      </div>

      {events.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">
            No events available at the moment.
          </p>
          <p className="text-gray-400 mt-2">
            Check back later for upcoming events!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Events;
