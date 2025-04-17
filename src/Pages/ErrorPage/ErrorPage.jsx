import React from 'react';

const ErrorPage = () => {
  return (
    <section className="page_404 bg-white py-10 font-serif">
      <div className="container mx-auto text-center">
        <div className="w-full sm:w-10/12 mx-auto">
          <div 
            className="four_zero_four_bg bg-cover bg-center h-96 sm:h-[400px] md:h-[500px]"
            style={{ backgroundImage: "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')" }}>
            {/* 404 text over the background */}
          </div>
          <h1 className="text-9xl font-bold animate-pulse text-blue-200 text-center mb-8">404</h1>

          <div className="contant_box_404">
            <h3 className="text-4xl font-semibold text-gray-600">Looks like you're lost</h3>
            <p className="text-gray-500 mt-4">The page you are looking for is not available!</p>
            <a href="/" className="text-white bg-green-500 hover:bg-green-600 mt-6 py-2 px-4 rounded inline-block">
              Go to Home
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
