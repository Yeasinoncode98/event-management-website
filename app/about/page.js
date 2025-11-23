"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Zap,
  Users,
  Ticket,
  BarChart3,
  Globe,
  PlusSquare,
  Settings,
  Clock, // Used in the final section
} from "lucide-react";

// Tailwind CSS is assumed to be available. We'll use a specific style block
// to define the glowing animation effects.

const customStyles = (
  <style jsx global>{`
    @keyframes pulse-mission-glow {
      0%,
      100% {
        box-shadow: 0 0 10px rgba(0, 150, 255, 0.4),
          0 0 20px rgba(0, 150, 255, 0.2);
      }
      50% {
        box-shadow: 0 0 15px rgba(0, 150, 255, 0.8),
          0 0 30px rgba(0, 150, 255, 0.5);
      }
    }
    /* Pulsing glow for the main mission statement */
    .glow-animation {
      animation: pulse-mission-glow 3s infinite ease-in-out;
    }

    /* Partner Card Continuous Glow Effect (BLUE + GREEN MIX) */
    @keyframes pulse-partner-glow {
      0%,
      100% {
        border-color: rgba(59, 130, 246, 0.5); /* Blue start/end */
        box-shadow: 0 0 12px rgba(59, 130, 246, 0.3);
      }
      50% {
        /* Border shifts slightly greenish */
        border-color: rgba(16, 185, 129, 0.8); /* Green peak */
        /* Shadow mixes blue and green for an aqua/cyan feel */
        box-shadow: 0 0 15px rgba(59, 130, 246, 0.6),
          0 0 25px rgba(16, 185, 129, 0.5);
      }
    }

    /* 1. Service Card Hover Effect: Stronger Blue Emphasis (Kept this class structure but card component is removed) */
    .service-card-hover:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6),
        0 0 25px rgba(59, 130, 246, 0.7); /* Deep blue glow */
      border-color: #3b82f6;
    }

    /* 2. Review Card Hover Effect: Gold/Yellow Emphasis for Trust */
    .review-card-hover:hover {
      transform: translateY(-4px) scale(1.01);
      box-shadow: 0 15px 30px -8px rgba(0, 0, 0, 0.4),
        0 0 15px rgba(255, 193, 7, 0.6); /* Gold/Yellow shadow */
      border-color: rgba(255, 193, 7, 0.5);
    }

    /* Continuous glow applied to partner cards */
    .partner-card-glow {
      animation: pulse-partner-glow 2.5s infinite ease-in-out;
    }

    /* Feature Card Background Pulse (Subtle, independent from border/shadow glow) */
    @keyframes feature-bg-pulse {
      0%,
      100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }
    .feature-card-bg-animation {
      /* Adjusted gradient for a slightly more dynamic look */
      background: linear-gradient(
        135deg,
        rgba(30, 30, 40, 0.9),
        rgba(45, 45, 60, 0.9),
        rgba(30, 30, 40, 0.9)
      );
      background-size: 200% 200%;
      animation: feature-bg-pulse 8s ease infinite;
    }
  `}</style>
);

// --- Custom Hook for Animate On Scroll (AOS) functionality ---
const useAnimateOnScroll = (threshold = 0.15) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Trigger only once when it becomes visible
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [isVisible, domRef];
};

// --- Wrapper Component to apply AOS (for non-card sections) ---
const AnimatedSection = ({ children, className = "" }) => {
  const [isVisible, domRef] = useAnimateOnScroll(0.15); // Trigger when 15% visible
  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

// --- Data for Global Reviews ---
const globalReviews = [
  {
    flag: "🇦🇺",
    name: "Anya Sharma",
    location: "Sydney, Australia",
    review:
      "Perfectly managed our massive New Year's Eve party! The mood monitoring feature helped us keep the energy high all night.",
    stars: 5,
  },
  {
    flag: "🇩🇪",
    name: "Klaus Richter",
    location: "Berlin, Germany",
    review:
      "We used it for a large corporate anniversary gala. The vendor management and budgeting tools were indispensable.",
    stars: 5,
  },
  {
    flag: "🇧🇷",
    name: "Leticia Souza",
    location: "São Paulo, Brazil",
    review:
      "The themed layouts were a game-changer for my wedding reception. Everything flowed beautifully, just as planned.",
    stars: 5,
  },
  {
    flag: "🇯🇵",
    name: "Kenji Tanaka",
    location: "Tokyo, Japan",
    review:
      "From formal banquets to casual launch parties, this system handles every type of occasion flawlessly. A true controller.",
    stars: 5,
  },
];

// --- Data for Partner Companies ---
const partnerCompanies = [
  {
    name: "VenueVista Global",
    details:
      "Exclusive venue network partner, streamlining location booking and capacity planning.",
    years: 5,
    icon: Globe,
    logoColor: "text-indigo-400",
  },
  {
    name: "SyncSound Audio Group",
    details:
      "Official A/V and production partner for all large-scale music and entertainment events.",
    years: 8,
    icon: Zap,
    logoColor: "text-red-500",
  },
  {
    name: "Catering Cloud Alpha",
    details:
      "Premier food and beverage logistics provider, handling complex dietary and volume requirements.",
    years: 3,
    icon: Users,
    logoColor: "text-yellow-500",
  },
  {
    name: "FutureFest Media",
    details:
      "Media and promotional partner, driving ticket sales and maximizing digital visibility for events.",
    years: 6,
    icon: BarChart3,
    logoColor: "text-green-400",
  },
];

// --- Data for Core Features ---
const coreFeatures = [
  {
    icon: PlusSquare,
    title: "Create & Customize Events",
    description:
      "Design every detail, from guest lists and themes to schedules and real-time updates for any party or occasion.",
    color: "text-cyan-400",
  },
  {
    icon: Settings,
    title: "Effortless Event Management",
    description:
      "Streamline operations, coordinate vendors, track RSVPs, and manage budgets with intuitive, powerful tools.",
    color: "text-orange-400",
  },
  {
    icon: Ticket,
    title: "Guest Experience Control",
    description:
      "Deliver personalized invitations, interactive agendas, and instant communication to keep guests engaged.",
    color: "text-pink-400",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics & Feedback",
    description:
      "Gain insights into event performance, guest satisfaction, and operational efficiency with smart dashboards.",
    color: "text-blue-400",
  },
];

// --- Helper Component for Star Rating ---
const StarRating = ({ count }) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span
        key={i}
        className={i < count ? "text-yellow-400" : "text-gray-600"}
        aria-hidden="true" // Hide from screen readers, stars are decorative
      >
        ★
      </span>
    );
  }
  return (
    <div
      className="flex text-2xl"
      role="img"
      aria-label={`${count} out of 5 stars`}
    >
      {stars}
    </div>
  );
};

// --- Review Card Component (UPDATED LOOK) ---
const ReviewCard = ({
  flag,
  name,
  location,
  review,
  stars,
  isVisible,
  animationDelay,
}) => {
  return (
    <div
      // Changed background to bg-gray-700 and applied review-card-hover class
      className={`review-card-hover bg-gray-700 p-8 rounded-xl shadow-2xl transition-all duration-500 border border-gray-600 hover:border-yellow-400/50 cursor-pointer flex flex-col justify-between min-h-72
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{ transitionDelay: isVisible ? `${animationDelay}ms` : "0ms" }}
    >
      <Globe className="w-8 h-8 text-green-400 mb-4 opacity-70" />

      <p className="text-lg italic text-gray-300 mb-6 flex-grow">"{review}"</p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-600">
        <div>
          <StarRating count={stars} />
          <p className="text-xl font-semibold text-white mt-2">{name}</p>
          <div className="flex items-center text-gray-400 text-sm mt-1">
            <span className="mr-2 text-xl">{flag}</span>
            {location}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Partner Card Component (UPDATED HOVER) ---
const PartnerCard = ({
  icon: Icon,
  name,
  details,
  years,
  logoColor,
  isVisible,
  animationDelay,
}) => {
  return (
    <div
      // Increased hover scale for more impact
      className={`partner-card-glow bg-gray-900 p-8 rounded-xl transition-all duration-300 border border-blue-600/20 transform hover:scale-[1.08] cursor-pointer shadow-xl flex flex-col justify-between min-h-80
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{ transitionDelay: isVisible ? `${animationDelay}ms` : "0ms" }}
    >
      {/* Logo/Image Section */}
      <div className="flex flex-col items-center justify-center mb-6">
        {/* This serves as the "company image" placeholder */}
        <div
          className={`p-4 rounded-full bg-gray-800 shadow-lg mb-4 ring-2 ring-blue-500/50`}
        >
          <Icon className={`w-14 h-14 ${logoColor}`} />
        </div>
        <h3 className="text-3xl font-extrabold text-white text-center">
          {name}
        </h3>
      </div>

      <p className="text-sm font-bold text-blue-400 mb-4 uppercase tracking-widest text-center">
        <span className="text-4xl font-extrabold block leading-none">
          {years}+
        </span>{" "}
        Years Partnered
      </p>

      <p className="text-gray-300 text-base text-center flex-grow">{details}</p>
    </div>
  );
};

// --- Feature Card Component (UPDATED HOVER COLORS) ---
const FeatureCard = ({
  icon: Icon,
  title,
  description,
  color,
  isVisible,
  animationDelay,
}) => {
  return (
    <div
      className={`
        feature-card-bg-animation relative overflow-hidden p-8 rounded-xl border border-gray-700 shadow-2xl
        flex flex-col justify-start min-h-64 text-center cursor-pointer
        transform transition-all duration-500 ease-in-out
        /* Updated hover colors for a strong cyan/teal emphasis */
        hover:scale-[1.03] hover:border-teal-400 hover:shadow-teal-500/40
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{ transitionDelay: isVisible ? `${animationDelay}ms` : "0ms" }}
    >
      <div className="relative z-10 flex flex-col items-center">
        <Icon className={`w-14 h-14 mb-4 ${color}`} />
        <h3 className="text-3xl font-extrabold text-white mb-3">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
      {/* Subtle radial gradient as an overlay for gloss effect */}
      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          background:
            "radial-gradient(circle at top left, rgba(255,255,255,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      ></div>
    </div>
  );
};

// --- Main About Component ---
const About = () => {
  // Since the Innovative Features section uses tabs, let's make sure the state points to one of the tabs.
  const innovativeFeatures = [
    {
      title: "Themed Venue Layouts",
      detail:
        "Optimize table placement and flow based on occasion type, from formal seating to open dance floors.",
      icon: Zap,
    },
    {
      title: "Smart Invitation Tracking",
      detail:
        "Contactless digital invites and personalized guest communication based on RSVP status and preferences.",
      icon: Ticket,
    },
    {
      title: "Dynamic Budget Forecasting",
      detail:
        "Machine learning models predict final costs for complex vendor and staffing requirements.",
      icon: BarChart3,
    },
  ];
  const [activeTab, setActiveTab] = useState(innovativeFeatures[0].title);

  // AOS hooks for the sections
  const [partnersVisible, partnersRef] = useAnimateOnScroll(0.15);
  const [reviewsVisible, reviewsRef] = useAnimateOnScroll(0.15);
  const [coreFeaturesVisible, coreFeaturesRef] = useAnimateOnScroll(0.15);

  return (
    <div className="min-h-screen bg-gray-900 text-white pt-16 pb-16 px-4 sm:px-8 space-y-24">
      {customStyles}{" "}
      {/* Inject custom styles for glowing effect and AOS animations */}
      {/* 1. Header and Mission Statement (Static, since it's at the top) */}
      <section className="text-center max-w-4xl mx-auto space-y-8">
        <h1 className="text-6xl font-extrabold tracking-tight text-blue-400">
          Mastering the Art of Every Occasion
        </h1>
        <div className="p-8 md:p-12 rounded-3xl bg-gray-800 border-2 border-blue-500/50 glow-animation">
          <p className="text-2xl font-light text-gray-200">
            Our mission is simple: to transform chaotic party and occasion
            planning into a{" "}
            <span className="font-bold text-blue-300">
              seamless, intelligent, and highly engaging celebration
            </span>{" "}
            for hosts and guests. We leverage cutting-edge technology to make
            every moment unforgettable.
          </p>
        </div>
      </section>
      ---
      {/* 2. Core Features (Animated Section - Staggered - Cyan/Teal Emphasis) */}
      <section className="max-w-7xl mx-auto" ref={coreFeaturesRef}>
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-100">
          Core Features: Mastering Every Step
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {coreFeatures.map((feature, index) => (
            <FeatureCard
              key={index}
              {...feature}
              isVisible={coreFeaturesVisible}
              animationDelay={(index + 1) * 150} // Staggered delay
            />
          ))}
        </div>
      </section>
      ---
      {/* 3. Innovative Technology Section (Animated Section - Tabs) */}
      <AnimatedSection className="max-w-7xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700">
        <h2 className="text-5xl font-bold text-center mb-12 text-blue-400">
          Innovation at Our Core
        </h2>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side: Animated Feature Tabs */}
          <div className="w-full lg:w-1/3 space-y-4">
            {innovativeFeatures.map((feature) => (
              <button
                key={feature.title}
                onClick={() => setActiveTab(feature.title)}
                className={`w-full p-6 text-left rounded-xl transition-all duration-300 transform
                  ${
                    activeTab === feature.title
                      ? "bg-blue-600 shadow-xl shadow-blue-500/30 ring-4 ring-blue-500/50"
                      : "bg-gray-700 hover:bg-gray-600 hover:scale-[1.02]"
                  }`}
              >
                <div className="flex items-center space-x-4">
                  <feature.icon
                    className={`w-6 h-6 ${
                      activeTab === feature.title
                        ? "text-white"
                        : "text-blue-400"
                    }`}
                  />
                  <span className="text-xl font-semibold">{feature.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Right Side: Tab Content with Animation */}
          <div className="w-full lg:w-2/3 p-8 bg-gray-700 rounded-xl border border-gray-600 flex flex-col justify-center min-h-[300px]">
            {innovativeFeatures.map((feature) => (
              <div
                key={feature.title}
                className={`transition-opacity duration-500 ease-in-out ${
                  activeTab === feature.title
                    ? "opacity-100"
                    : "opacity-0 h-0 overflow-hidden"
                }`}
              >
                {activeTab === feature.title && (
                  <>
                    <h3 className="text-4xl font-bold text-blue-300 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-200 text-lg mb-6">
                      {feature.detail}
                    </p>
                    <p className="text-gray-400 text-sm">
                      This system ensures you are always one step ahead in event
                      execution, turning reactive stress into proactive success.
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      ---
      {/* 4. Strategic Partnerships (Animated Section - Staggered - Continuous Glow with stronger scale) */}
      <section className="max-w-7xl mx-auto" ref={partnersRef}>
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-100">
          Strategic Partnerships That Deliver Excellence
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partnerCompanies.map((partner, index) => (
            <PartnerCard
              key={index}
              {...partner}
              isVisible={partnersVisible}
              animationDelay={(index + 1) * 150} // Staggered delay
            />
          ))}
        </div>
      </section>
      ---
      {/* 5. Global Reviews and Testimonials (Animated Section - Staggered - Lighter Background, Gold Emphasis) */}
      <section className="max-w-7xl mx-auto" ref={reviewsRef}>
        <h2 className="text-5xl font-bold text-center mb-16 text-gray-100">
          Proven Success, <span className="text-green-400">Worldwide</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {globalReviews.map((review, index) => (
            <ReviewCard
              key={index}
              {...review}
              isVisible={reviewsVisible}
              animationDelay={(index + 1) * 150} // Staggered delay
            />
          ))}
        </div>
      </section>
      ---
      {/* 6. Impact and Commitment (Animated Section - Non-staggered wrapper used) */}
      <AnimatedSection className="max-w-4xl mx-auto text-center pt-16">
        <Clock className="w-16 h-16 text-green-400 mx-auto mb-4 animate-bounce" />
        <h2 className="text-5xl font-bold text-gray-100 mb-4">
          Your Dedicated Event Controller
        </h2>
        <p className="text-xl text-gray-400">
          Over 5,000 successful parties and occasions managed, connecting
          millions of happy guests. Our commitment is to provide a reliable,
          scalable, and delightful platform, managing every detail 24/7.
        </p>
      </AnimatedSection>
    </div>
  );
};

export default About;
