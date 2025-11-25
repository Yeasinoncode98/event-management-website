// vercel ---->

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import axiosInstance from "../lib/axios.js"; // Using your axios instance
import { toast } from "react-hot-toast";
import { Calendar, Tag, Image, FileText } from "lucide-react";

export default function AddEvent() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [eventData, setEventData] = useState({
    title: "",
    type: "",
    short_description: "",
    full_description: "",
    image: "",
    date: "",
  });

  // Redirect if not logged in
  useEffect(() => {
    if (!authLoading && !user) {
      toast.error("Please login to add an event");
      router.push("/login");
    }
  }, [user, authLoading, router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (!eventData.title.trim()) {
      toast.error("📝 Please enter event title");
      return false;
    }
    if (!eventData.type) {
      toast.error("🏷️ Please select event type");
      return false;
    }
    if (!eventData.short_description.trim()) {
      toast.error("📄 Please enter short description");
      return false;
    }
    if (!eventData.full_description.trim()) {
      toast.error("📋 Please enter full description");
      return false;
    }
    if (!eventData.date) {
      toast.error("📅 Please select event date");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await axiosInstance.post("/api/add-event", {
        title: eventData.title,
        type: eventData.type,
        short_description: eventData.short_description,
        full_description: eventData.full_description,
        image: eventData.image || "",
        date: new Date(eventData.date).toISOString(),
        organizerId: user.uid,
        organizerEmail: user.email,
        organizerName: user.displayName || user.email,
      });

      if (response.data.success) {
        toast.success("🎉 Event created successfully!", {
          position: "top-center",
          style: {
            marginTop: "90px",
            padding: "16px",
            borderRadius: "10px",
            background: "#4CAF50",
            color: "white",
          },
        });
        setTimeout(() => {
          router.push("/events");
        }, 1500);
      }
    } catch (error) {
      console.error("Error adding event:", error);
      toast.error(error.response?.data?.error || "Failed to create event", {
        position: "bottom-center",
        style: {
          marginBottom: "30px",
          padding: "16px",
          borderRadius: "10px",
          background: "#F44336",
          color: "white",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-gray-800 rounded-2xl shadow-xl p-8 mb-6 border border-gray-700">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
            Create New Event
          </h1>
          <p className="text-gray-400">
            Fill in the details to create an amazing event
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Event Title */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
            <label className="flex items-center gap-2 text-gray-300 mb-3 font-semibold text-lg">
              <FileText className="text-blue-400" size={22} />
              Event Title *
            </label>
            <input
              type="text"
              name="title"
              value={eventData.title}
              onChange={handleChange}
              placeholder="Enter event title"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-blue-500 focus:outline-none transition-colors"
              disabled={loading}
            />
          </div>

          {/* Event Type */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
            <label className="flex items-center gap-2 text-gray-300 mb-3 font-semibold text-lg">
              <Tag className="text-purple-400" size={22} />
              Event Type *
            </label>
            <select
              name="type"
              value={eventData.type}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-purple-500 focus:outline-none transition-colors"
              disabled={loading}
            >
              <option value="">Select event type</option>
              <option value="Donation">Donation</option>
              <option value="Volunteer">Volunteer</option>
              <option value="Fundraising">Fundraising</option>
              <option value="Workshop">Workshop</option>
              <option value="Campaign">Campaign</option>
            </select>
          </div>

          {/* Short Description */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
            <label className="flex items-center gap-2 text-gray-300 mb-3 font-semibold text-lg">
              <FileText className="text-green-400" size={22} />
              Short Description *
            </label>
            <textarea
              name="short_description"
              value={eventData.short_description}
              onChange={handleChange}
              placeholder="Brief description (displayed on event cards)"
              rows="3"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-green-500 focus:outline-none transition-colors resize-none"
              disabled={loading}
            />
          </div>

          {/* Full Description */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
            <label className="flex items-center gap-2 text-gray-300 mb-3 font-semibold text-lg">
              <FileText className="text-orange-400" size={22} />
              Full Description *
            </label>
            <textarea
              name="full_description"
              value={eventData.full_description}
              onChange={handleChange}
              placeholder="Detailed description of your event"
              rows="6"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-orange-500 focus:outline-none transition-colors resize-none"
              disabled={loading}
            />
          </div>

          {/* Date */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
            <label className="flex items-center gap-2 text-gray-300 mb-3 font-semibold text-lg">
              <Calendar className="text-red-400" size={22} />
              Event Date *
            </label>
            <input
              type="datetime-local"
              name="date"
              value={eventData.date}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-red-500 focus:outline-none transition-colors"
              disabled={loading}
            />
          </div>

          {/* Image URL */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
            <label className="flex items-center gap-2 text-gray-300 mb-3 font-semibold text-lg">
              <Image className="text-pink-400" size={22} />
              Image URL (Optional)
            </label>
            <input
              type="url"
              name="image"
              value={eventData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-pink-500 focus:outline-none transition-colors"
              disabled={loading}
            />
            {eventData.image && (
              <div className="mt-4">
                <img
                  src={eventData.image}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-lg"
                  onError={(e) => {
                    e.target.style.display = "none";
                  }}
                />
              </div>
            )}
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Creating Event...
                </span>
              ) : (
                "Create Event"
              )}
            </button>
            <button
              type="button"
              onClick={() => router.push("/events")}
              disabled={loading}
              className="px-8 py-4 rounded-xl border border-gray-600 text-gray-300 hover:bg-gray-700 transition-all duration-300 font-bold text-lg disabled:opacity-50"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
