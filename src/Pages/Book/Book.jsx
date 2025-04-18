import React from "react";
import { Link } from "react-router";

const Book = ({ singlebook }) => {
  const { bookName, author, category, bookId, image, tags } = singlebook;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div>
        <div className="bg-base-100 hover:bg-base-300 border-2">
          <figure className="overflow-hidden">
            <img
              className="w-4xl h-[600px] transform transition-transform duration-300 hover:scale-135"
              src={image}
              alt={bookName}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">
              {bookName}
              <div className="badge badge-secondary">{category}</div>
            </h2>
            <p className="text-xl font-normal">{author}</p>

            {/* Unique rating group per card using bookId */}
            <div className="rating rating-sm">
              <input
                type="radio"
                name={`rating-${bookId}`}
                className="mask mask-star-2 bg-orange-400"
                aria-label="1 star"
              />
              <input
                type="radio"
                name={`rating-${bookId}`}
                className="mask mask-star-2 bg-orange-400"
                aria-label="2 stars"
                defaultChecked
              />
              <input
                type="radio"
                name={`rating-${bookId}`}
                className="mask mask-star-2 bg-orange-400"
                aria-label="3 stars"
              />
              <input
                type="radio"
                name={`rating-${bookId}`}
                className="mask mask-star-2 bg-orange-400"
                aria-label="4 stars"
              />
              <input
                type="radio"
                name={`rating-${bookId}`}
                className="mask mask-star-2 bg-orange-400"
                aria-label="5 stars"
              />
            </div>

            <div className="card-actions justify-end">
              <div>
                {tags.map((tag , index) => (
                  <button key={index} className="bg-gray-100 p-2 mr-2 rounded-6xl text-amber-700 font-bold">
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
