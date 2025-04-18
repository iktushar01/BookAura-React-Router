import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center border-2 justify-center px-4 sm:px-8 md:px-12 py-12 bg-gradient-to-br from-white to-[#adbede]">
      <div className="w-full max-w-4xl text-center space-y-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">
          Welcome to <span className="text-indigo-600">BookAura</span> ✨
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-600">
          At BookAura, we believe every story carries a unique aura — a spark
          that lingers long after the last page is turned. Our mission is to
          help readers explore the literary universe, one magical book at a
          time.
        </p>

        <p className="text-base sm:text-lg md:text-xl text-gray-500">
          Whether you're diving into fantasy realms, uncovering mysteries, or
          learning from powerful nonfiction, BookAura is your cozy corner of the
          internet to discover, connect, and share the love of reading.
        </p>

        <p className="text-lg md:text-2xl font-bold text-gray-400 italic">
          Made with ☕, code, and a deep love for stories.
        </p>

        <div className="stats stats-vertical sm:stats-horizontal shadow mt-8 justify-center w-full overflow-x-auto">
          <div className="stat">
            <div className="stat-title">Total Books</div>
            <div className="stat-value text-primary">12.4K</div>
            <div className="stat-desc">Across all categories</div>
          </div>

          <div className="stat">
            <div className="stat-title">Active Readers</div>
            <div className="stat-value text-secondary">3,200</div>
            <div className="stat-desc">↗︎ 180 this week</div>
          </div>

          <div className="stat">
            <div className="stat-title">Books Reviewed</div>
            <div className="stat-value">845</div>
            <div className="stat-desc">↘︎ 30 from last month</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
