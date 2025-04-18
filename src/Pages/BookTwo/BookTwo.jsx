import React from "react";
import { Link } from "react-router";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Book = ({ b }) => {
  const {
    bookName,
    author,
    category,
    yearOfPublishing,
    publisher,
    bookId,
    rating,
    image,
    tags,
    totalPages,
  } = b;

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.25 && rating % 1 < 0.75;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex text-orange-400 text-sm">
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} />
        ))}
        {hasHalfStar && <FaStarHalfAlt />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} />
        ))}
      </div>
    );
  };

  return (
    <div className="bg-base-100 hover:bg-base-300 border-2 rounded-lg p-4 mb-4 sm:p-6 sm:mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <figure className="shrink-0">
          <img
            className="w-[120px] h-[150px] object-cover rounded-md transform transition-transform duration-300 hover:scale-105 sm:w-[160px] sm:h-[200px]"
            src={image}
            alt={bookName}
          />
        </figure>

        <div className="flex flex-col justify-between w-full">
          <div>
            <h2 className="text-xl font-bold flex items-center gap-2">
              {bookName}
              <span className="badge badge-secondary">{category}</span>
            </h2>
            <p className="text-md text-gray-700 mb-2">By: {author}</p>

            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-100 px-2 py-1 rounded-full text-amber-700 font-medium text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-600 flex-wrap">
              <span>📅 Year: {yearOfPublishing}</span>
              <span>🏢 Publisher: {publisher}</span>
              <span>📄 Page: {totalPages}</span>
            </div>
          </div>

          {/* Rating + Button */}
          <div className="flex items-center mt-4 flex-wrap gap-4">
            {renderStars(rating)}

            <Link to={`/bookDetails/${bookId}`}>
              <button className="bg-green-500 text-white px-4 py-1 rounded-md text-sm hover:bg-green-600 transition">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
