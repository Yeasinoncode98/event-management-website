import React from "react";
import {
  Sparkles,
  Users,
  Clock,
  Check,
  Mail,
  Phone,
  Award,
} from "lucide-react";

// JSON Data with updated prices
const packagesData = {
  pageTitle: "Our Event Packages",
  pageSubtitle: "Choose the perfect package for your special occasion",

  packages: {
    gold: {
      categoryName: "Gold Packages",
      categoryDescription:
        "Budget-friendly packages perfect for intimate gatherings and celebrations",
      tier: "gold",
      packages: [
        {
          id: "gold-1",
          title: "Birthday Party",
          // Price increased from $400 to $500
          price: 500,
          currency: "$",
          description:
            "A perfect package for a birthday celebration with catering and basic entertainment.",
          image:
            "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
          included: [
            "Catering for 30 people",
            "Basic decorations",
            "DJ music",
            "Event coordinator",
          ],
          duration: "4 hours",
          guestCapacity: "30 people",
        },
        {
          id: "gold-2",
          title: "Small Wedding",
          // Price increased from $450 to $550
          price: 550,
          currency: "$",
          description:
            "A cozy package for small weddings, including simple decor and sound system.",
          image:
            "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
          included: [
            "Catering for 40 people",
            "Basic wedding decor",
            "Sound system",
            "Wedding coordinator",
          ],
          duration: "6 hours",
          guestCapacity: "40 people",
        },
        {
          id: "gold-3",
          title: "Graduation Ceremony",
          // Price increased from $380 to $480
          price: 480,
          currency: "$",
          description:
            "Ideal for small graduation parties, offering essential services at a budget-friendly price.",
          image:
            "https://i.postimg.cc/Jn70tmJ3/pexels-emily-ranquist-493228-1205651.jpg",
          included: [
            "Catering for 50 people",
            "Graduation theme decor",
            "Microphones and speakers",
            "Photography (2 hours)",
          ],
          duration: "5 hours",
          guestCapacity: "50 people",
        },
        {
          id: "gold-4",
          title: "Baby Shower",
          // Price increased from $420 to $520
          price: 520,
          currency: "$",
          description:
            "A warm and welcoming package for baby showers with family-friendly catering and soft decor.",
          image:
            "https://i.postimg.cc/wBrxxJ6S/pexels-foden-nguyen-81016607-34889323.jpg",
          included: [
            "Catering for 50 people",
            "Themed decorations",
            "Sound system",
            "Games & activities setup",
          ],
          duration: "4 hours",
          guestCapacity: "50 people",
        },
        {
          id: "gold-5",
          title: "Anniversary Dinner",
          // Price increased from $350 to $450
          price: 450,
          currency: "$",
          description:
            "A special package for intimate anniversary dinners with fine dining and ambient lighting.",
          image:
            "https://i.postimg.cc/mDM4b5pr/pexels-nadin-sh-78971847-34874927.jpg",
          included: [
            "Catering for 20 people",
            "Ambient lighting",
            "Wait staff",
            "Custom playlist",
          ],
          duration: "3 hours",
          guestCapacity: "20 people",
        },
        {
          id: "gold-6",
          title: "Product Launch",
          // Price increased from $500 to $600
          price: 600,
          currency: "$",
          description:
            "Essential setup for a small-scale product or book launch event.",
          image:
            "https://i.postimg.cc/TYQ6Ym0C/pexels-pavel-danilyuk-8000659.jpg",
          included: [
            "Catering for 30 people",
            "Projector and screen",
            "Microphone setup",
            "Basic lighting",
          ],
          duration: "4 hours",
          guestCapacity: "30 people",
        },
      ],
    },

    diamond: {
      categoryName: "Diamond Packages",
      categoryDescription:
        "Premium packages for memorable medium-scale events with enhanced features",
      tier: "diamond",
      packages: [
        {
          id: "diamond-1",
          title: "Wedding Celebration",
          // Price increased from $900 to $1100
          price: 1100,
          currency: "$",
          description:
            "Perfect for medium-sized weddings, offering extra luxury with full event coverage.",
          image:
            "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
          included: [
            "Catering for 100 people",
            "Elegant decor",
            "Photographer & videographer",
            "Sound system",
            "Wedding planner",
          ],
          duration: "8 hours",
          guestCapacity: "100 people",
        },
        {
          id: "diamond-2",
          title: "Corporate Conference",
          // Price increased from $950 to $1150
          price: 1150,
          currency: "$",
          description:
            "For high-level corporate conferences, including a projector, microphones, and full catering.",
          image:
            "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
          included: [
            "Catering for 120 people",
            "Conference decor",
            "Sound system & microphones",
            "Projector setup",
            "Registration desk",
          ],
          duration: "8 hours",
          guestCapacity: "120 people",
        },
        {
          id: "diamond-3",
          title: "Luxury Birthday Party",
          // Price increased from $870 to $1070
          price: 1070,
          currency: "$",
          description:
            "For an upscale birthday celebration, including full catering and professional entertainment.",
          image:
            "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&q=80",
          included: [
            "Catering for 100 people",
            "Luxury decor",
            "DJ setup and music",
            "Photographer",
            "Custom cake",
          ],
          duration: "6 hours",
          guestCapacity: "100 people",
        },
        {
          id: "diamond-4",
          title: "Fashion Show",
          // Price increased from $1100 to $1300
          price: 1300,
          currency: "$",
          description:
            "Perfect for a fashion show, with professional lighting and a custom stage.",
          image:
            "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
          included: [
            "Catering for 150 people",
            "Fashion show decor",
            "Lighting & sound system",
            "Photographer & videographer",
            "Runway setup",
          ],
          duration: "6 hours",
          guestCapacity: "150 people",
        },
        {
          id: "diamond-5",
          title: "Gala Dinner",
          // Price increased from $1050 to $1250
          price: 1250,
          currency: "$",
          description:
            "An elegant package for charity or corporate gala dinners, including formal seating and premium bar service.",
          image:
            "https://i.postimg.cc/kG907XtY/pexels-yelenaodintsova-28129752.jpg",
          included: [
            "Catering for 120 people",
            "Formal decor & table settings",
            "Live entertainment (Band/Performer)",
            "Professional security",
            "Premium bar service (limited)",
          ],
          duration: "7 hours",
          guestCapacity: "120 people",
        },
        {
          id: "diamond-6",
          title: "Festival Stand Setup",
          // Price increased from $850 to $1050
          price: 1050,
          currency: "$",
          description:
            "Full service setup for a festival or trade show booth, maximizing brand visibility.",
          image:
            "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
          included: [
            "Custom booth design & construction",
            "Branding materials (Banners, Flyers)",
            "Lighting & power supply",
            "Lead generation system",
            "Event staff (2 people)",
          ],
          duration: "2 days",
          guestCapacity: "N/A", // Trade show/Festival
        },
      ],
    },

    platinum: {
      categoryName: "Platinum Packages",
      categoryDescription:
        "Ultra-premium packages for grand-scale events with exclusive, all-inclusive services",
      tier: "platinum",
      packages: [
        {
          id: "platinum-1",
          title: "Ultimate Wedding Experience",
          // Price increased from $2500 to $3000
          price: 3000,
          currency: "$",
          description:
            "The most luxurious wedding package with everything you need for a dream wedding.",
          image:
            "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
          included: [
            "Catering for 200 people",
            "Custom event design & decor",
            "Sound system & lighting",
            "Photographer, videographer, live streaming",
            "Luxury transport",
            "Bridal suite",
          ],
          duration: "12 hours",
          guestCapacity: "200 people",
        },
        {
          id: "platinum-2",
          title: "VIP Corporate Event",
          // Price increased from $2200 to $2700
          price: 2700,
          currency: "$",
          description:
            "For exclusive corporate events, with personalized service and all-inclusive features.",
          image: "https://i.postimg.cc/g08trbdW/pexels-icsa-833425-1709003.jpg",
          included: [
            "Catering for 250 people",
            "Luxury decor",
            "Sound system, lighting, & projectors",
            "Live streaming",
            "VIP lounge setup",
            "Valet parking",
          ],
          duration: "10 hours",
          guestCapacity: "250 people",
        },
        {
          id: "platinum-3",
          title: "Exclusive Gala",
          // Price increased from $2300 to $2800
          price: 2800,
          currency: "$",
          description:
            "For a grand gala, this package includes everything from catering to entertainment.",
          image:
            "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
          included: [
            "Catering for 300 people",
            "Luxury decor",
            "Live music & DJ",
            "Photographer & videographer",
            "Red carpet setup",
            "Premium bar service",
          ],
          duration: "10 hours",
          guestCapacity: "300 people",
        },
        {
          id: "platinum-4",
          title: "High-End Fashion Show",
          // Price increased from $2800 to $3300
          price: 3300,
          currency: "$",
          description:
            "The ultimate fashion show experience with high-end stage setups and live streaming.",
          image: "https://i.postimg.cc/QMGS2Y7f/pexels-myatezhny39-1636376.jpg",
          included: [
            "Catering for 300 people",
            "Custom stage design",
            "Sound system & lighting",
            "Photographer & videographer",
            "Backstage setup",
            "VIP seating area",
          ],
          duration: "8 hours",
          guestCapacity: "300 people",
        },
        {
          id: "platinum-5",
          title: "Concert Production",
          // Price increased from $3500 to $4000
          price: 4000,
          currency: "$",
          description:
            "Full-scale production for concerts or large performances, including professional sound engineering and security.",
          image:
            "https://i.postimg.cc/PrC4PnzM/pexels-dawn-lio-1140724-2177813.jpg",
          included: [
            "Catering for 500+ staff/crew",
            "Custom stage & trussing",
            "Line array sound system",
            "Intelligent lighting rig",
            "Full event security team",
            "Backstage dressing rooms",
          ],
          duration: "1 day setup + 1 day event",
          guestCapacity: "1000+ attendees",
        },
        {
          id: "platinum-6",
          title: "Luxury Destination Retreat",
          // Price increased from $4000 to $4500
          price: 4500,
          currency: "$",
          description:
            "An all-inclusive package for an exclusive, multi-day retreat at a chosen luxury destination.",
          image:
            "https://i.postimg.cc/wMZDh3cV/pexels-thorsten-technoman-109353-338504.jpg",
          included: [
            "Transport & accommodation for 50 people",
            "All meals and private dining",
            "Activity coordination (e.g., tours, spa)",
            "Dedicated on-site event manager",
            "Photography & social media package",
            "Welcome gift bags",
          ],
          duration: "3 days / 2 nights",
          guestCapacity: "50 people",
        },
      ],
    },
  },

  contactSection: {
    title: "Want to Hire Us?",
    subtitle: "Get in touch with our expert event handlers",
    description:
      "Our experienced team is ready to make your event unforgettable. Contact us today for a personalized quote!",
    team: [
      {
        id: 1,
        name: "Sarah Johnson",
        role: "Head - Event Planner",
        image: "https://i.postimg.cc/qB5S7TCc/pexels-olly-3756679.jpg",
        experience: "15+ years",
        specialization: "Weddings & Corporate Events",
        email: "sarah@events.com",
        phone: "+1 (555) 123-4567",
      },
      {
        id: 2,
        name: "Michael Chen",
        role: "Lead - Event Director",
        image:
          "https://i.postimg.cc/NMgqRkgG/pexels-marta-klement-636760-1438081.jpg",
        experience: "12+ years",
        specialization: "Luxury Events & Fashion Shows",
        email: "michael@events.com",
        phone: "+1 (555) 234-5678",
      },
      {
        id: 3,
        name: "Emily Rodriguez",
        role: "Operations Manager",
        image:
          "https://i.postimg.cc/v8CyN9XQ/pexels-ogproductionz-17243573.jpg",
        experience: "7+ years",
        specialization: "Large-scale Events & Conferences",
        email: "emily@events.com",
        phone: "+1 (555) 345-6789",
      },
    ],
  },
};

// --- Package Card Component (Buttons Aligned, Shorter Height) ---
const PackageCard = ({ pkg, tier }) => {
  // Color mappings for the glossy/glowing effect
  const tierColors = {
    gold: "from-yellow-400 to-yellow-600",
    diamond: "from-cyan-400 to-blue-600",
    platinum: "from-purple-400 to-pink-600",
  };

  const tierGlowColors = {
    gold: "shadow-yellow-500/50",
    diamond: "shadow-cyan-500/50",
    platinum: "shadow-purple-500/50",
  };

  const tierBadgeColors = {
    gold: "bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 text-yellow-300 border border-yellow-500/50",
    diamond:
      "bg-gradient-to-r from-cyan-400/20 to-blue-600/20 text-cyan-300 border border-cyan-500/50",
    platinum:
      "bg-gradient-to-r from-purple-400/20 to-pink-600/20 text-purple-300 border border-purple-500/50",
  };

  return (
    // CARD: Added h-full, flex flex-col, and justify-between for perfect button alignment
    <div
      className={`
        relative group backdrop-blur-xl bg-white/5 rounded-2xl overflow-hidden
        border border-white/10 hover:border-white/30 transition-all duration-500
        hover:shadow-2xl ${tierGlowColors[tier]} hover:-translate-y-2
        flex flex-col h-full
      `}
    >
      {/* Glossy overlay effect (Glass-morphism) */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Image - Height reduced to h-48 */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-md ${tierBadgeColors[tier]} z-20`}
        >
          {tier.toUpperCase()}
        </div>
      </div>

      {/* Content Area - Uses flex-grow to take up all available space above the button */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Top Content (Title, Description, Price, Info) */}
        <div className="flex flex-col flex-grow">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
            {pkg.title}
          </h3>
          {/* flex-grow here ensures description space fills up if text is short */}
          <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-grow">
            {pkg.description}
          </p>

          {/* Price & Info block */}
          <div className="mt-auto pt-4 border-t border-white/10">
            <div
              className={`inline-flex items-center bg-gradient-to-r ${tierColors[tier]} text-white px-6 py-2.5 rounded-full mb-4 shadow-lg ${tierGlowColors[tier]} group-hover:shadow-2xl transition-shadow duration-300`}
            >
              <span className="text-3xl font-bold">
                {pkg.currency}
                {pkg.price}
              </span>
            </div>

            <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
              <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <Users className="w-4 h-4 text-cyan-400" />
                <span>{pkg.guestCapacity}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span>{pkg.duration}</span>
              </div>
            </div>
          </div>

          {/* Included Items */}
          <div className="space-y-2 mb-6">
            <p className="font-semibold text-white text-sm mb-3 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-gradient-to-r from-cyan-500 to-transparent"></span>
              Package Includes:
            </p>
            <div className="grid grid-cols-2 gap-y-2">
              {pkg.included.map((item, index) => (
                <div key={index} className="flex items-start gap-2 group/item">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                  <span className="text-xs text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>{" "}
        {/* End of Top Content */}
        {/* Book Now Button (Anchored to the bottom) */}
        <div className="mt-auto">
          <button
            className={`w-full relative bg-gradient-to-r ${tierColors[tier]} text-white py-3 rounded-xl font-bold overflow-hidden group/btn transition-all duration-300 hover:shadow-lg ${tierGlowColors[tier]}`}
          >
            <span className="relative z-10">Book Now</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Team Member Card Component (Buttons Aligned)
const TeamMemberCard = ({ member }) => {
  return (
    // CARD: Added flex-col h-full for alignment in the grid
    <div className="relative group backdrop-blur-xl bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/50 hover:-translate-y-2 flex flex-col h-full">
      {/* Glossy overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative h-72 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        {/* Top Content */}
        <div>
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all">
            {member.name}
          </h3>
          <p className="text-cyan-400 font-semibold mb-4">{member.role}</p>

          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <Award className="w-4 h-4 text-yellow-400" />
              <span>{member.experience}</span>
            </div>
            <p className="text-sm text-gray-400 flex-grow">
              {member.specialization}
            </p>
          </div>
        </div>

        {/* Contact links (Act as buttons/anchors) */}
        <div className="space-y-2 pt-4 border-t border-white/10 mt-auto">
          <a
            href={`mailto:${member.email}`}
            className="w-full block text-center bg-cyan-600/20 text-cyan-400 py-2 rounded-lg font-semibold hover:bg-cyan-600/40 transition-colors"
          >
            <span className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              Email
            </span>
          </a>
          <a
            href={`tel:${member.phone}`}
            className="w-full block text-center bg-purple-600/20 text-purple-400 py-2 rounded-lg font-semibold hover:bg-purple-600/40 transition-colors"
          >
            <span className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              Call
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

// Main Page Component
export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-blue-400" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {packagesData.pageTitle}
            </h1>
          </div>
          <p className="text-xl text-gray-300">{packagesData.pageSubtitle}</p>
        </div>
      </div>

      {/* --- Gold Packages Section --- */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <div className="inline-block backdrop-blur-md bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 border border-yellow-500/50 text-yellow-300 px-6 py-2.5 rounded-full font-semibold mb-4 shadow-lg shadow-yellow-500/20">
            {packagesData.packages.gold.categoryName}
          </div>
          <p className="text-gray-400 text-lg">
            {packagesData.packages.gold.categoryDescription}
          </p>
        </div>

        {/* Card Grid: lg:grid-cols-3 handles 6 cards perfectly in two rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packagesData.packages.gold.packages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} tier="gold" />
          ))}
        </div>
      </div>

      {/* --- Diamond Packages Section --- */}
      <div className="relative py-16">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-blue-500/10 to-cyan-500/5 blur-3xl" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block backdrop-blur-md bg-gradient-to-r from-cyan-400/20 to-blue-600/20 border border-cyan-500/50 text-cyan-300 px-6 py-2.5 rounded-full font-semibold mb-4 shadow-lg shadow-cyan-500/20">
              {packagesData.packages.diamond.categoryName}
            </div>
            <p className="text-gray-400 text-lg">
              {packagesData.packages.diamond.categoryDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packagesData.packages.diamond.packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} tier="diamond" />
            ))}
          </div>
        </div>
      </div>

      {/* --- Platinum Packages Section --- */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-block backdrop-blur-md bg-gradient-to-r from-purple-400/20 to-pink-600/20 border border-purple-500/50 text-purple-300 px-6 py-2.5 rounded-full font-semibold mb-4 shadow-lg shadow-purple-500/20">
              {packagesData.packages.platinum.categoryName}
            </div>
            <p className="text-gray-400 text-lg">
              {packagesData.packages.platinum.categoryDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packagesData.packages.platinum.packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} tier="platinum" />
            ))}
          </div>
        </div>
      </div>

      {/* --- Contact Section --- */}
      <div className="relative bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] py-20 px-4 overflow-hidden">
        {/* Animated glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {packagesData.contactSection.title}
            </h2>
            <p className="text-xl text-gray-300 mb-2">
              {packagesData.contactSection.subtitle}
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto">
              {packagesData.contactSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {packagesData.contactSection.team.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>

          <div className="text-center">
            {/* Get a Free Quote Button */}
            <button className="relative group bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white px-10 py-4 rounded-full font-bold text-lg overflow-hidden shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/80 transition-all duration-300 hover:scale-105">
              <span className="relative z-10">Get a Free Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>

            {/* UPDATED H2 TITLE WITH GLOW EFFECT */}
            <h2 className="mt-10 text-3xl font-extrabold text-center italic max-w-4xl mx-auto bg-gradient-to-r from-yellow-300 via-cyan-300 to-purple-300 text-transparent bg-clip-text shadow-lg shadow-cyan-500/50">
              "Work Hard Until You Get Your Victory Only The HardWorker Alives
              in the Race -Yeasin Arafat"
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
