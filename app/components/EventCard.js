// app/components/EventCard.js
"use client";

import { useRouter } from "next/navigation";
import { Calendar, MapPin, Tag } from "lucide-react";

const EventCard = ({ event }) => {
  const router = useRouter();

  // Format date to readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Get type color
  const getTypeColor = (type) => {
    const colors = {
      Donation: "from-blue-500 to-cyan-500",
      Volunteer: "from-green-500 to-emerald-500",
      Fundraising: "from-purple-500 to-pink-500",
      Workshop: "from-orange-500 to-red-500",
      Campaign: "from-indigo-500 to-blue-500",
    };
    return colors[type] || "from-gray-500 to-gray-700";
  };

  const handleViewDetails = () => {
    router.push(`/events/${event._id}`);
  };

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/10 group-hover:to-blue-600/10 transition-all duration-500 z-10 pointer-events-none"></div>

      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={event.image || "https://via.placeholder.com/400x300"}
          alt={event.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />

        {/* Type Badge */}
        <div className="absolute top-4 right-4 z-20">
          <div
            className={`bg-gradient-to-r ${getTypeColor(
              event.type
            )} px-4 py-1.5 rounded-full shadow-lg backdrop-blur-sm`}
          >
            <span className="text-white text-sm font-semibold flex items-center gap-1">
              <Tag size={14} />
              {event.type}
            </span>
          </div>
        </div>

        {/* Gradient Overlay at bottom of image */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      {/* Content Section */}
      <div className="p-6 relative z-20">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
          {event.title}
        </h2>

        {/* Date */}
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <Calendar size={18} className="text-blue-500" />
          <span className="text-sm font-medium">{formatDate(event.date)}</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-600 mb-5">
          <MapPin size={18} className="text-red-500" />
          <span className="text-sm font-medium line-clamp-1">
            {event.location || "Dhaka, Bangladesh"}
          </span>
        </div>

        {/* View Details Button */}
        <button
          onClick={handleViewDetails}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
        >
          View Details
          <svg
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>

      {/* Decorative corner gradient */}
      <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
    </div>
  );
};

export default EventCard;
