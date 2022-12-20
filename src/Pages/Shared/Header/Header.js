import React from 'react';
import HeaderTop from './HeaderTop/HeaderTop';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <header className='max-width'>
            <div className='mx-1.5 md:mx-2.5'>
                <HeaderTop></HeaderTop>
                <Navbar></Navbar>
            </div>
        </header>
    );
};

export default Header;