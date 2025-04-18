import React from "react";
import { Link } from "react-router";

const Book = ({ b }) => {
  const { bookName, author, category, bookId, image, tags } = b;

  return (
    
      <div className="bg-base-100 hover:bg-base-300 border-2 rounded-lg p-4 mb-4">
  <div className="flex gap-4">
    <figure className="shrink-0">
      <img
        className="w-[120px] h-[150px] object-cover rounded-md transform transition-transform duration-300 hover:scale-105"
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
          <span>📅 Year: 1924</span>
          <span>🏢 Publisher: Scribner</span>
          <span>📄 Page: 192</span>
        </div>
      </div>

      {/* Rating + Button */}
      <div className="flex items-center mt-4 flex-wrap gap-4">
        <div className="rating rating-sm">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <input
              key={i}
              type="radio"
              name={`rating-${bookId}`}
              className="mask mask-star-2 bg-orange-400"
              aria-label={`${i + 1} star`}
              defaultChecked={i === 1}
            />
          ))}
        </div>
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
