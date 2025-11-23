import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Providers } from "./components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Event Management System",
  description: "Manage your events efficiently with our system.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          {/* Navbar at the top */}
          <Navbar />

          {/* Main content */}
          <main>{children}</main>

          {/* Footer at the bottom */}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
