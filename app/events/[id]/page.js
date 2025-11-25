// ................vercel..............

"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import axiosInstance from "../../lib/axios.js";
import {
  Calendar,
  MapPin,
  Tag,
  ArrowLeft,
  Clock,
  Sparkles,
} from "lucide-react";
import { auth } from "../../lib/firebase.js";
import { onAuthStateChanged } from "firebase/auth";

function EventDetails() {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const params = useParams();
  const id = params?.id;

  useEffect(() => {
    setMounted(true);

    // Check if the user is authenticated using Firebase Authentication
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    // Cleanup on unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!id || !mounted) return;

    const fetchEventDetails = async () => {
      try {
        const response = await axiosInstance.get(`/api/events/${id}`);

        if (response.data.success && response.data.event) {
          setEvent(response.data.event);
        } else {
          setError("Event not found");
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching event details:", error);
        setError("Failed to load event details");
        setLoading(false);
      }
    };

    fetchEventDetails();
  }, [id, mounted]);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const formatFullDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const getTypeGradient = (type) => {
    const colors = {
      Donation: "from-blue-500 to-cyan-400",
      Volunteer: "from-green-500 to-emerald-400",
      Fundraising: "from-purple-500 to-pink-400",
      Workshop: "from-orange-500 to-red-400",
      Campaign: "from-indigo-500 to-blue-400",
    };
    return colors[type] || "from-gray-500 to-gray-600";
  };

  const InfoCard = ({ icon: Icon, label, value, gradient }) => (
    <div className="group relative">
      <div
        className="absolute -inset-0.5 opacity-0 group-hover:opacity-100 blur-lg transition duration-300 rounded-2xl"
        style={{ background: gradient }}
      ></div>
      <div className="relative flex items-center gap-4 p-4 rounded-2xl backdrop-blur-2xl bg-white/50 border-2 border-white/60 hover:scale-105 transition-all duration-300 shadow-lg">
        <div
          className="p-3 rounded-xl bg-gradient-to-br shadow-xl"
          style={{ background: gradient }}
        >
          <Icon className="w-6 h-6 text-white drop-shadow-lg" />
        </div>
        <div>
          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">
            {label}
          </p>
          <p className="text-sm font-bold text-slate-800">{value}</p>
        </div>
      </div>
    </div>
  );

  if (!mounted || loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-3"></div>
          <p className="text-sm text-gray-600">Loading event...</p>
        </div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100">
        <div className="text-center p-8 backdrop-blur-3xl bg-white/40 rounded-3xl border-2 border-white/60 shadow-2xl">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            {error || "Event not found"}
          </h2>
          <button
            onClick={() => router.push("/events")}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full hover:shadow-xl transition-all hover:scale-105 font-semibold"
          >
            Back to Events
          </button>
        </div>
      </div>
    );
  }

  const handleRegisterOrLogin = () => {
    router.push("/login?redirect=/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 py-8 px-4">
      <div className="fixed top-0 left-0 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="fixed top-1/2 left-1/2 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative">
        <button
          onClick={() => router.push("/events")}
          className="mb-6 flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-2xl bg-white/40 border border-white/40 hover:scale-105 transition-all shadow-xl"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-semibold text-slate-700">Back</span>
        </button>

        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

          <div className="relative backdrop-blur-3xl bg-white/30 rounded-3xl border-2 border-white/60 shadow-2xl overflow-hidden">
            <div className="relative h-96 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-blue-900/30 to-transparent z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-200/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20"></div>

              <img
                src={
                  event.image ||
                  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=800&fit=crop"
                }
                alt={event.title || "Event"}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute top-6 left-6 z-30">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-2xl bg-white/30 border-2 border-white/50 shadow-2xl">
                  <Sparkles className="w-4 h-4 text-cyan-300" />
                  <span className="text-white font-bold text-sm drop-shadow-lg">
                    {event.type}
                  </span>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
                <h1 className="text-4xl md:text-5xl font-black text-white mb-2 drop-shadow-2xl">
                  {event.title}
                </h1>
                <div className="flex items-center gap-2 text-white/90">
                  <Calendar className="w-5 h-5" />
                  <span className="font-semibold">
                    {formatDate(event.date)}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoCard
                  icon={Calendar}
                  label="Event Date"
                  value={formatFullDate(event.date)}
                  gradient="linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)"
                />
                <InfoCard
                  icon={MapPin}
                  label="Location"
                  value={event.location || "Dhaka, Bangladesh"}
                  gradient="linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)"
                />
                <InfoCard
                  icon={Clock}
                  label="Event Time"
                  value="10:00 AM - 5:00 PM"
                  gradient="linear-gradient(135deg, #f59e0b 0%, #d97706 100%)"
                />
                <InfoCard
                  icon={Tag}
                  label="Event Type"
                  value={event.type}
                  gradient="linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)"
                />
              </div>

              {/* Event Full Description */}
              <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Event Details
                </h2>
                <p className="text-gray-600 whitespace-pre-line">
                  {event.full_description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {!isAuthenticated && (
                  <button
                    className={`group/btn relative flex-1 overflow-hidden rounded-2xl p-[2px] transition-all hover:scale-105`}
                    onClick={handleRegisterOrLogin}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${getTypeGradient(
                        event.type
                      )}`}
                    ></div>
                    <div className="relative flex items-center justify-center gap-3 px-8 py-4 rounded-2xl backdrop-blur-2xl bg-white/80 group-hover/btn:bg-transparent transition-all">
                      <Sparkles className="w-5 h-5 text-blue-600 group-hover/btn:text-white" />
                      <span className="font-bold text-slate-800 group-hover/btn:text-white">
                        Register or Login to Create Events
                      </span>
                    </div>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventDetails;
