// // app/protected/add-event.js
// import { useState } from "react";
// import { useRouter } from "next/router";
// import ProtectedRoute from "../components/ProtectedRoute";
// import axios from "../../lib/axios";

// const AddEvent = () => {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [date, setDate] = useState("");
//   const [location, setLocation] = useState("");
//   const [image, setImage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const newEvent = { title, description, date, location, image };
//       await axios.post("/events", newEvent); // Send event data to backend
//       router.push("/events"); // Redirect to the events list page
//     } catch (error) {
//       console.error("Error adding event:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <ProtectedRoute>
//       <div className="p-8">
//         <h1 className="text-4xl font-bold">Add New Event</h1>
//         <form onSubmit={handleSubmit} className="mt-6 space-y-4">
//           <input
//             type="text"
//             placeholder="Event Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded-md"
//             required
//           />
//           <textarea
//             placeholder="Event Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded-md"
//             rows="4"
//             required
//           />
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded-md"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Event Location"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded-md"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Event Image URL"
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//             className="w-full p-3 border border-gray-300 rounded-md"
//           />
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-3 rounded-md"
//             disabled={loading}
//           >
//             {loading ? "Adding Event..." : "Add Event"}
//           </button>
//         </form>
//       </div>
//     </ProtectedRoute>
//   );
// };

// export default AddEvent;
