import React from "react";
import {
  Twitter,
  Facebook,
  Linkedin,
  Zap,
  Github,
  Globe,
  Phone,
} from "lucide-react";

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" }, // Kept blank as requested
  {
    icon: Facebook,
    href: "https://www.facebook.com/share/1BYMyWDbeb/?mibextid=wwXIfr",
    label: "Facebook",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/yeasin-arafat-2b73a4392/",
    label: "LinkedIn",
  },
  { icon: Github, href: "https://github.com/Yeasinoncode98", label: "GitHub" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-blue-900/50 text-white pt-12 pb-8 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Area */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          {/* Group 1: Logo/Branding and Quick Links (Now side-by-side on desktop) */}
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16 items-center md:items-start">
            {/* Logo/Branding */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <Zap className="w-8 h-8 text-blue-400" />
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                EventHub
              </span>
            </div>

            {/* Quick Links (Moved beside branding) */}
            <div className="text-center md:text-left space-y-2">
              <h4 className="text-lg font-semibold text-gray-200 mb-4">
                Quick Links
              </h4>
              <ul className="text-sm space-y-3 text-gray-400">
                {" "}
                {/* Ensured strong li structure and spacing */}
                <li className="flex justify-center md:justify-start">
                  <a
                    href="/events"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Events
                  </a>
                </li>
                <li className="flex justify-center md:justify-start">
                  {/* Contact Us Phone Number */}
                  <a
                    href="tel:01627800198"
                    className="hover:text-blue-400 transition-colors flex items-center space-x-1"
                  >
                    <Phone className="w-4 h-4 mr-1 text-green-400" />
                    <span className="truncate">Contact us: 01627800198</span>
                  </a>
                </li>
                <li className="flex justify-center md:justify-start">
                  {/* Website Link - Now links to your specified website text */}
                  <a
                    href="#" // Replace this '#' with your actual website URL
                    className="hover:text-blue-400 transition-colors flex items-center space-x-1"
                  >
                    <Globe className="w-4 h-4 mr-1 text-yellow-400" />
                    <span className="truncate">
                      Copy of Light Beige Sleek and Simple Blogger Personal
                      Website
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Group 2: Social Icons and Newsletter Text */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            {/* Newsletter Text */}
            <p className="text-gray-400 text-sm italic">Keep updated with us</p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 border-2 border-transparent text-gray-400 transition-all duration-300 transform hover:scale-110 hover:border-blue-500 hover:text-blue-400 shadow-lg hover:shadow-blue-500/50"
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Claim */}
        <div className="mt-12 pt-4 border-t border-gray-700/50 text-center text-sm text-gray-500">
          <p>&copy; 2025 EventHub Management System. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
