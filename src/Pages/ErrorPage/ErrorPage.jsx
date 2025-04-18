import React from 'react';

const ErrorPage = () => {
  return (
    <section className="min-h-screen bg-white py-10 px-4 sm:px-8 font-serif flex items-center justify-center">
      <div className="w-full max-w-4xl text-center">
        {/* Background Image */}
        <div
          className="bg-cover bg-center rounded-lg h-64 sm:h-80 md:h-[400px] mb-8"
          style={{
            backgroundImage:
              "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
          }}
        ></div>

        {/* Error Code */}
        <h1 className="text-6xl sm:text-7xl md:text-9xl font-extrabold text-blue-300 animate-pulse mb-4">
          404
        </h1>

        {/* Message */}
        <div className="space-y-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700">
            Looks like you're lost
          </h3>
          <p className="text-base sm:text-lg text-gray-500">
            The page you are looking for is not available!
          </p>

          {/* Button */}
          <a
            href="/"
            className="inline-block mt-4 px-6 py-2 text-white bg-green-500 hover:bg-green-600 rounded transition duration-300"
          >
            Go to Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
