import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoredBook } from '../../Utilities/addToUtilities';
import BookTwo from '../BookTwo/BookTwo';
const ReadList = () => {
    const [readList, setReadList] = useState([])
    const data = useLoaderData();
    console.log(data);
    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBooks = storedBookData.map(id => parseInt (id));
        const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId));
        setReadList(myReadList)
    },[])
    return (
        <div className="border-2 p-4">
        {/* Ensure the tab group name is unique */}
        <div className="tabs tabs-lifted">
          <input type="radio" name="unique_tabs_group" className="tab" aria-label="Read Books" defaultChecked />
          <div className="tab-content bg-base-100 border border-gray-300 rounded-box p-4">
          <h1 className='text-2xl font-bold text-center pb-4'>You’ve read {readList.length} {readList.length === 1 ? 'book' : 'books'}</h1>
          <div>
            {
                readList.map(b => <BookTwo key={b.bookId} b = {b}></BookTwo>)
            }
           </div>
          </div>
      
          <input type="radio" name="unique_tabs_group" className="tab" aria-label="Wishlist Books"  />
          <div className="tab-content bg-base-100 border border-gray-300 rounded-box p-4">
            Tab content 2
          </div>

        </div>
      </div>
      
    );
};

export default ReadList;