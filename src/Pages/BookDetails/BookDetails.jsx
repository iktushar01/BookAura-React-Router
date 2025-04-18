import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB, showUpdateSoonToast } from "../../Utilities/addToUtilities";

const BookDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const bookId = parseInt(id);
  const singlebook = data.find((book) => book.bookId === bookId);
  console.log(singlebook);
  const { bookName, image, publisher,category, author, review, rating, tags ,yearOfPublishing, totalPages} = singlebook;

  const handleMarkAsRead = id =>{
    addToStoredDB(id);
  }
  return (
    <div className="bg-base-200 border-2 py-10 px-4">
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
      
      {/* Book Image */}
      <img
        src={image}
        alt={bookName}
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm xl:max-w-md rounded-2xl shadow-xl object-cover"
      />
  
      {/* Book Details */}
      <div className="flex-1 space-y-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">{bookName}</h1>
        <p className="text-base sm:text-lg text-gray-600">
          By: <span className="font-semibold">{author}</span>
        </p>
  
        <div className="border-t border-gray-300 pt-4 space-y-3 text-sm sm:text-base text-gray-700">
          <p><span className="font-semibold">Category:</span> {category}</p>
          <p><span className="font-semibold">Review:</span> {review}</p>
  
          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
  
          {/* Extra Info */}
          <div className="pt-2 space-y-1">
            <p><span className="font-semibold">Number of Pages:</span> {totalPages}</p>
            <p><span className="font-semibold">Publisher:</span> {publisher}</p>
            <p><span className="font-semibold">Year of Publishing:</span> {yearOfPublishing}</p>
            <p><span className="font-semibold">Rating:</span> {rating}</p>
          </div>
        </div>
  
        {/* Buttons */}
        <div className="flex justify-between">
        <div className="pt-6 flex flex-col sm:flex-row gap-4">
          <button onClick={() => handleMarkAsRead(id)} className="btn btn-primary bg-amber-400 text-gray-800 w-full sm:w-auto">Mark As Read</button>
          <button onClick={showUpdateSoonToast} className="btn btn-outline w-full sm:w-auto">Add To Wishlist</button>
        </div>
        <div className="animate-pulse">
        <a href="/" className="text-white bg-green-500 hover:bg-green-600 mt-6 py-2 px-4 rounded inline-block">
              Go to Home
            </a>
        </div>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default BookDetails;
