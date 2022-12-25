import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../Pages/Shared/Footer/Footer';
import Header from '../../Pages/Shared/Header/Header';
import Navbar from '../../Pages/Shared/Navbar/Navbar';
import Subscribe from '../../Pages/Shared/Subscribe/Subscribe';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Subscribe></Subscribe>
            <Footer></Footer>
        </div>
    );
};

export default Main;