// React Imports
import React from 'react';
// Routers Imports
import { Outlet } from 'react-router-dom';
// Component Imports
import Header from '../header/Header';
import Footer from '../footer/Footer';

// Products Catagory
export const ProductsCatagory = () => {
    return (
        <div>
            <Header/>
            <Outlet />
            <Footer></Footer>
        </div>
    )
}
