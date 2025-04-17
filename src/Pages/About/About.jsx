import React from 'react';

const About = () => {
    return (
        <div className="max-h-screen flex items-center justify-center px-6 py-36 border-2 bg-gradient-to-br from-white to-[#adbede]">
            <div className="max-w-3xl text-center">
                <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
                    Welcome to <span className="text-indigo-600">BookAura</span> ✨
                </h1>
                <p className="text-xl text-gray-600 mb-4">
                    At BookAura, we believe every story carries a unique aura — a spark that lingers long after the last page is turned. Our mission is to help readers explore the literary universe, one magical book at a time.
                </p>
                <p className="text-xl text-gray-500 mb-6">
                    Whether you're diving into fantasy realms, uncovering mysteries, or learning from powerful nonfiction, BookAura is your cozy corner of the internet to discover, connect, and share the love of reading.
                </p>
                <p className="text-2xl font-bold text-gray-400 italic">
                    Made with ☕, code, and a deep love for stories.
                </p>
            </div>
        </div>
    );
};

export default About;
