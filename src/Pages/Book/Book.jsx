import React from "react";
import { FaRegStar } from "react-icons/fa6";

const Book = ({ singlebook }) => {
  const { bookName, author, category, bookId, image, tags } = singlebook;

  return (
    <div>
      <div className="bg-base-100 border-2">
        <figure>
          <img className="w-4xl h-[600px]" src={image} alt={bookName} />
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
                {
                    tags.map(tag => <button className="bg-gray-100 p-2 mr-2 rounded-6xl text-amber-700 font-bold">{tag}</button>)
                }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
