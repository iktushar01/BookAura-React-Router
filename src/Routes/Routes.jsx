import React from 'react';
import {
  createHashRouter,
} from 'react-router-dom'; // Changed from 'react-router'

import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';
import ReadList from '../Pages/ReadList/ReadList';
import NoData from '../Pages/NoData/NoData';

export const router = createHashRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch('/data/booksData.json'), // ✅ Fixed path
        Component: Home,
      },
      {
        path: '/about',
        Component: About,
      },
      {
        path: '/readList',
        loader: () => fetch('/data/booksData.json'), // ✅ Fixed path
        Component: ReadList,
      },
      {
        path: '/nodata',
        Component: NoData,
      },
      {
        path: '/bookDetails/:id',
        loader: () => fetch('/data/booksData.json'), // ✅ Fixed path
        Component: BookDetails,
      },
    ],
  },
]);
