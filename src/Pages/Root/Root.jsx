import React from 'react';
import { Outlet } from 'react-router';
import { Toaster } from 'react-hot-toast';

import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';

const Root = () => {
    return (
        <div className="container mx-auto">
                  <Toaster position="top-center" />
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;