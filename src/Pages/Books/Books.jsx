import React, { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
  // const [allBooks, setAllBooks] = useState([]);
  // useEffect(()=>{
  //     fetch("/public/data/booksData.json")
  //     .then(res => res.json())
  //     .then(data =>{
  //         setAllBooks(data)
  //     })
  // },[])

  // const bookPromise = fetch('/public/data/booksData.json')
  // .then(res => res.json())
  return (
    <div>
      <h1 className="text-2xl font-semibold text-center p-6 bg-amber-400 border-2">
        All Books
      </h1>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-screen">
            <span className="loading loading-infinity loading-xl"></span>
          </div>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((singlebook) => (
            <Book key={singlebook.bookId} singlebook={singlebook} />
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
