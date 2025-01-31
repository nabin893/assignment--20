import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';

const Home1 = () => {
    return (
        <div> 
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home1;