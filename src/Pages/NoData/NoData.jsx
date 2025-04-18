import React from 'react';
import { Link } from 'react-router';

const NoData = () => {
    return (
        <div className="flex border-2 flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-4xl font-bold text-gray-700 mb-4">🚫 No Data Available</h1>
      <p className="text-lg text-gray-500 mb-6">We're working on it — updates coming soon!</p>
      <Link to="/">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
          ⬅ Back to Home
        </button>
      </Link>
    </div>
    );
};

export default NoData;