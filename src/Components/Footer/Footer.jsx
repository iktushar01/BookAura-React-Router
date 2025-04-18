import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo + About */}
        <div>
          <Link to="/" className="text-2xl font-bold text-white">
            <span className="text-green-500">Book</span>
            <span className="text-blue-400">Aura</span>
          </Link>
          <p className="mt-4 text-sm text-gray-400">
            Discover, read, and share your favorite books in one magical place.
            Welcome to your next reading adventure.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/nodata" className="hover:text-white">Genres</Link></li>
            <li><Link to="/nodata" className="hover:text-white">Top Rated</Link></li>
            <li><Link to="/nodata" className="hover:text-white">New Arrivals</Link></li>
            <li><Link to="/nodata" className="hover:text-white">Recommendations</Link></li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3">Community</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/nodata" className="hover:text-white">Submit a Book</Link></li>
            <li><Link to="/nodata" className="hover:text-white">Reader Reviews</Link></li>
            <li><Link to="/nodata" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/nodata" className="hover:text-white">Help Center</Link></li>
            <li><Link to="/nodata" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/nodata" className="hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} BookAura. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
