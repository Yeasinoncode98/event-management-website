// vercel --->

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import axiosInstance from "../lib/axios.js";
import { toast } from "react-hot-toast";
import { Calendar, Edit, Trash2, X, Save } from "lucide-react";

export default function ManageEvents() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingEvent, setEditingEvent] = useState(null);
  const [editFormData, setEditFormData] = useState({});
  const [updating, setUpdating] = useState(false);
  const [deleting, setDeleting] = useState(null);

  useEffect(() => {
    if (!authLoading && !user) {
      toast.error("Please login to manage events", {
        position: "top-center",
        style: {
          marginTop: "90px",
          padding: "16px",
          borderRadius: "10px",
          background: "#F44336",
          color: "white",
        },
      });
      router.push("/login");
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    if (user) {
      fetchEvents();
    }
  }, [user]);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get("/api/events");
      if (response.data.success) {
        const userEvents = response.data.events.filter(
          (event) => event.organizerId === user.uid
        );
        setEvents(userEvents);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
      toast.error("Failed to fetch events", {
        position: "top-center",
        style: {
          marginTop: "90px",
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

  const handleEdit = (event) => {
    setEditingEvent(event._id);
    setEditFormData({
      title: event.title,
      type: event.type,
      short_description: event.short_description,
      full_description: event.full_description,
      image: event.image || "",
      date: event.date ? new Date(event.date).toISOString().slice(0, 16) : "",
    });
  };

  const handleCancelEdit = () => {
    setEditingEvent(null);
    setEditFormData({});
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (eventId) => {
    if (
      !editFormData.title ||
      !editFormData.type ||
      !editFormData.short_description ||
      !editFormData.full_description ||
      !editFormData.date
    ) {
      toast.error("Please fill all required fields", {
        position: "top-center",
        style: {
          marginTop: "90px",
          padding: "16px",
          borderRadius: "10px",
          background: "#F44336",
          color: "white",
        },
      });
      return;
    }

    setUpdating(true);
    try {
      const response = await axiosInstance.put(`/api/events/${eventId}`, {
        ...editFormData,
        date: new Date(editFormData.date).toISOString(),
      });

      if (response.data.success) {
        setEvents((prev) =>
          prev.map((event) =>
            event._id === eventId
              ? { ...event, ...editFormData, date: new Date(editFormData.date) }
              : event
          )
        );
        setEditingEvent(null);
        setEditFormData({});
        toast.success("Event updated successfully!", {
          position: "top-center",
          style: {
            marginTop: "90px",
            padding: "16px",
            borderRadius: "10px",
            background: "#4CAF50",
            color: "white",
          },
        });
      }
    } catch (error) {
      console.error("Error updating event:", error);
      toast.error(error.response?.data?.error || "Failed to update event", {
        position: "top-center",
        style: {
          marginTop: "90px",
          padding: "16px",
          borderRadius: "10px",
          background: "#F44336",
          color: "white",
        },
      });
    } finally {
      setUpdating(false);
    }
  };

  const handleDelete = async (eventId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this event? This action cannot be undone."
    );

    if (!confirmDelete) return;

    setDeleting(eventId);
    try {
      const response = await axiosInstance.delete(`/api/events/${eventId}`);

      if (response.data.success) {
        setEvents((prev) => prev.filter((event) => event._id !== eventId));
        toast.success("🗑️ Event deleted successfully!", {
          position: "top-center",
          style: {
            marginTop: "90px",
            padding: "16px",
            borderRadius: "10px",
            background: "#4CAF50",
            color: "white",
          },
        });
      }
    } catch (error) {
      console.error("Error deleting event:", error);
      toast.error(error.response?.data?.error || "Failed to delete event", {
        position: "top-center",
        style: {
          marginTop: "90px",
          padding: "16px",
          borderRadius: "10px",
          background: "#F44336",
          color: "white",
        },
      });
    } finally {
      setDeleting(null);
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (authLoading || loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-800 rounded-2xl shadow-xl p-8 mb-8 border border-gray-700">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
            Manage Your Events
          </h1>
          <p className="text-gray-400">Edit or delete your created events</p>
        </div>

        {events.length === 0 ? (
          <div className="bg-gray-800 rounded-2xl shadow-xl p-12 text-center border border-gray-700">
            <p className="text-gray-400 text-lg mb-4">No events found</p>
            <button
              onClick={() => router.push("/add-event")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              Create Your First Event
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {events.map((event) => (
              <div
                key={event._id}
                className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden hover:border-gray-600 transition-all"
              >
                {editingEvent === event._id ? (
                  <div className="p-6 space-y-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-white">
                        Edit Event
                      </h3>
                      <button
                        onClick={handleCancelEdit}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        <X size={24} />
                      </button>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">
                        Title *
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={editFormData.title}
                        onChange={handleEditChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">
                        Type *
                      </label>
                      <select
                        name="type"
                        value={editFormData.type}
                        onChange={handleEditChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Select type</option>
                        <option value="Donation">Donation</option>
                        <option value="Volunteer">Volunteer</option>
                        <option value="Fundraising">Fundraising</option>
                        <option value="Workshop">Workshop</option>
                        <option value="Campaign">Campaign</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">
                        Short Description *
                      </label>
                      <textarea
                        name="short_description"
                        value={editFormData.short_description}
                        onChange={handleEditChange}
                        rows="2"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">
                        Full Description *
                      </label>
                      <textarea
                        name="full_description"
                        value={editFormData.full_description}
                        onChange={handleEditChange}
                        rows="4"
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">
                        Date *
                      </label>
                      <input
                        type="datetime-local"
                        name="date"
                        value={editFormData.date}
                        onChange={handleEditChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-medium">
                        Image URL
                      </label>
                      <input
                        type="url"
                        name="image"
                        value={editFormData.image}
                        onChange={handleEditChange}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button
                        onClick={() => handleUpdate(event._id)}
                        disabled={updating}
                        className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-lg font-bold transition-all disabled:opacity-50"
                      >
                        {updating ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            Updating...
                          </>
                        ) : (
                          <>
                            <Save size={20} />
                            Update Event
                          </>
                        )}
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="px-6 py-3 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 transition-all font-medium"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row">
                    {event.image && (
                      <div className="md:w-64 h-48 md:h-auto flex-shrink-0">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <div className="flex-1 p-6">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm font-medium">
                              {event.type}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2">
                            {event.title}
                          </h3>
                          <p className="text-gray-400 mb-4">
                            {event.short_description}
                          </p>
                          <div className="flex items-center gap-2 text-gray-500">
                            <Calendar size={16} />
                            <span>{formatDate(event.date)}</span>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <button
                            onClick={() => handleEdit(event)}
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all font-medium"
                          >
                            <Edit size={18} />
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(event._id)}
                            disabled={deleting === event._id}
                            className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all font-medium disabled:opacity-50"
                          >
                            {deleting === event._id ? (
                              <>
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                Deleting...
                              </>
                            ) : (
                              <>
                                <Trash2 size={18} />
                                Delete
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
