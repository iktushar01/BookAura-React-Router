import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredBook } from "../../Utilities/addToUtilities";
import BookTwo from "../BookTwo/BookTwo";

const ReadList = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setSort] = useState('');
  const data = useLoaderData();

  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);

  const handleSort = (type) => {
    setSort(type);

    if (type === "pages") {
      const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages);
      setReadList(sortedByPage);
    }

    if (type === "rating") {
      const sortedByRating = [...readList].sort((a, b) => b.rating - a.rating);
      setReadList(sortedByRating);
    }
  };

  return (
    <div className="border-2 p-4 sm:p-6 md:p-8 lg:p-10">
      {/* Sort Dropdown */}
      <div className="flex justify-center items-center mb-6">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 px-4 sm:px-6 md:px-8 bg-green-600 text-white"
          >
            Sort By {sort ? `(${sort})` : ""}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-10 w-40 sm:w-52 p-2 shadow-md"
          >
            <li>
              <a onClick={() => handleSort("pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("rating")}>Rating</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-lifted text-sm sm:text-base">
        <input
          type="radio"
          name="unique_tabs_group"
          className="tab"
          aria-label="Read Books"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border border-gray-300 rounded-box p-4 sm:p-6">
          <h1 className="text-xl sm:text-2xl font-bold text-center pb-4">
            You’ve read {readList.length}{" "}
            {readList.length === 1 ? "book" : "books"}
          </h1>
          <div className="space-y-4">
            {readList.map((b) => (
              <BookTwo key={b.bookId} b={b}></BookTwo>
            ))}
          </div>
        </div>

        <input
          type="radio"
          name="unique_tabs_group"
          className="tab"
          aria-label="Wishlist Books"
        />
        <div className="tab-content bg-base-100 border border-gray-300 rounded-box p-4 sm:p-6">
          <figure className="diff aspect-[16/9]" tabIndex={0}>
            <div className="diff-item-1" role="img" tabIndex={0}>
              <div className="bg-amber-400 text-primary-content grid place-content-center text-4xl sm:text-5xl md:text-6xl font-black h-full">
                COMING SOON!
              </div>
            </div>
            <div className="diff-item-2" role="img">
              <div className="bg-base-200 grid place-content-center text-4xl sm:text-5xl md:text-6xl font-black h-full">
                COMING SOON!
              </div>
            </div>
            <div className="diff-resizer"></div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default ReadList;
