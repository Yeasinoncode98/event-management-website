// // app/protected/manage-events.js
// import { useEffect, useState } from "react";
// import ProtectedRoute from "../components/ProtectedRoute";
// import axios from "../../lib/axios";
// import { useRouter } from "next/router";

// const ManageEvents = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await axios.get("/events"); // Fetch all events for the logged-in user
//         setEvents(response.data);
//       } catch (error) {
//         console.error("Error fetching events:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const handleDelete = async (id) => {
//     if (confirm("Are you sure you want to delete this event?")) {
//       try {
//         await axios.delete(`/events/${id}`); // Delete the event by ID
//         setEvents(events.filter((event) => event._id !== id)); // Remove deleted event from state
//       } catch (error) {
//         console.error("Error deleting event:", error);
//       }
//     }
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <ProtectedRoute>
//       <div className="p-8">
//         <h1 className="text-4xl font-bold">Manage Your Events</h1>
//         <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {events.length === 0 ? (
//             <p>No events found. Add an event to get started.</p>
//           ) : (
//             events.map((event) => (
//               <div
//                 key={event._id}
//                 className="bg-white p-4 rounded-lg shadow-lg"
//               >
//                 <img
//                   src={event.image}
//                   alt={event.name}
//                   className="w-full h-48 object-cover rounded-md"
//                 />
//                 <h2 className="mt-4 text-xl font-semibold">{event.name}</h2>
//                 <p className="text-gray-600">{event.location}</p>
//                 <p className="text-gray-500">{event.date}</p>
//                 <div className="mt-4 space-x-4">
//                   <button
//                     onClick={() => router.push(`/events/${event._id}`)} // View event details
//                     className="bg-blue-600 text-white py-2 px-4 rounded-full"
//                   >
//                     View
//                   </button>
//                   <button
//                     onClick={() => handleDelete(event._id)} // Delete event
//                     className="bg-red-600 text-white py-2 px-4 rounded-full"
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </ProtectedRoute>
//   );
// };

// export default ManageEvents;
