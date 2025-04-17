import React from "react";
import bookimage from "../../assets/book1.png";
const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-12 rounded-3xl bg-amber-50">
      <div className="text-center md:text-left mb-10 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-semibold mb-6">
          Books to freshen up your bookshelf
        </h1>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
          View The List
        </button>
      </div>
      <div className="w-full md:w-auto flex justify-center">
        <img className="w-64 md:w-96" src={bookimage} alt="Books" />
      </div>
    </div>
  );
};

export default Banner;
