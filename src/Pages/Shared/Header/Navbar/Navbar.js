import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import logo from '../../../../assets/images/logo.png';
import dropdownicon from '../../../../assets/images/icons/navbar/dropdown.png';
import search from '../../../../assets/images/icons/navbar/search.png';
import user from '../../../../assets/images/icons/navbar/user.png';
import cart from '../../../../assets/images/icons/navbar/cart.png';

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);
    const menuItems = <>
        <li className='md:text-lg lg:text-xl text-[#333333] py-3 md:pb-2 md:border-transparent border-b md:px-2 mr-1 transition-all hover:border-[#40A4DC] hover:text-white md:hover:text-[#333333] hover:ml-2'><Link className='pl-3 pr-20 md:pl-0 md:pr-0' to=''>হোম</Link></li>
        <li className='md:text-lg lg:text-xl text-[#333333] py-3 md:pb-2 md:border-transparent border-b md:px-1 lg:px-2 mx-1 transition-all hover:border-[#40A4DC] hover:text-white md:hover:text-[#333333] hover:ml-2'><Link className='pl-3 pr-20 md:pl-0 md:pr-0' to=''>বই</Link></li>
        <li className='md:text-lg lg:text-xl text-[#333333] py-3 md:pb-2 md:border-transparent border-b md:px-1 lg:px-2 mx-1 transition-all hover:border-[#40A4DC] hover:text-white md:hover:text-[#333333] hover:ml-2'><Link className='pl-3 pr-20 md:pl-0 md:pr-0' to=''>লেখক</Link></li>
        {/* Dropdown */}
        <li className='md:text-lg lg:text-xl text-[#333333] py-3 md:pb-2 md:border-transparent border-b md:px-1 lg:px-2 mx-1 transition-all hover:border-[#40A4DC] hover:text-white md:hover:text-[#333333] hover:ml-2 relative'>
            <Link to='' className='flex items-center pl-3 pr-20 md:pl-0 md:pr-0' onClick={() => setDropdown(!dropdown)}>ক্যাটাগরি <img src={dropdownicon} className="h-[7px] ml-2" alt="" /></Link>
            {/* Dropdown Menu */}
            <ul className={`absolute z-30 top-9 left-40 md:left-10 bg-[#40A4DC] rounded-sm py-1 ${dropdown ? 'block' : 'hidden'}`}>
                <li className='md:text-lg lg:text-xl text-white hover:bg-white hover:text-black'><Link className=' pl-6 pr-20' to=''>সিরাত</Link></li>
                <li className='md:text-lg lg:text-xl text-white hover:bg-white hover:text-black'><Link className=' pl-6 pr-20' to=''>জীবনী</Link></li>
                <li className='md:text-lg lg:text-xl text-white hover:bg-white hover:text-black'><Link className=' pl-6 pr-20' to=''>ধর্মতত্ত্ব</Link></li>
                <li className='md:text-lg lg:text-xl text-white hover:bg-white hover:text-black'><Link className=' pl-6 pr-20' to=''>প্রবন্ধ</Link></li>
            </ul>
        </li>
        {/* Dropdown */}
        <li className='md:text-lg lg:text-xl text-[#333333] py-3 md:pb-2 md:border-transparent border-b md:px-1 lg:px-2 mx-1 transition-all hover:border-[#40A4DC] hover:text-white md:hover:text-[#333333] hover:ml-2'><Link className='pl-3 pr-20 md:pl-0 md:pr-0' to=''>ম্যাগাজিন</Link></li>
        <li className='md:text-lg lg:text-xl text-[#333333] py-3 md:pb-2 md:border-transparent border-b md:px-1 lg:px-2 mx-1 transition-all hover:border-[#40A4DC] hover:text-white md:hover:text-[#333333] hover:ml-2'><Link className='pl-3 pr-20 md:pl-0 md:pr-0' to=''>প্যাকেজ</Link></li>
        <li className='md:text-lg lg:text-xl text-[#333333] py-3 md:pb-2 md:border-transparent border-b md:px-1 lg:px-2 mx-1 transition-all hover:border-[#40A4DC] hover:text-white md:hover:text-[#333333] hover:ml-2'><Link className='pl-3 pr-20 md:pl-0 md:pr-0' to=''>ভিডিও</Link></li>
        <li className='md:text-lg lg:text-xl text-[#333333] py-3 md:pb-2 md:border-transparent border-b md:px-1 lg:px-2 mx-1 transition-all hover:border-[#40A4DC] hover:text-white md:hover:text-[#333333] hover:ml-2'><Link className='pl-3 pr-20 md:pl-0 md:pr-0' to=''>ব্লগ</Link></li>
        <li className='md:text-lg lg:text-xl text-[#333333] py-3 md:pb-2 md:border-transparent border-b md:px-2 ml-1 transition-all hover:border-[#40A4DC] hover:text-white md:hover:text-[#333333] hover:ml-2'><Link className='pl-3 pr-20 md:pl-0 md:pr-0' to=''>ক্যাম্পেইন</Link></li>
    </>
    return (
        <nav className='flex justify-between items-center mt-7 mb-6'>
            <img src={logo} className="h-[40px] md:h-[45px] lg:h-[73px]" alt="" />
            {/* Menubar */}
            <div>
                {/* DeskTop Menubar */}
                <ul className='hidden md:flex'>
                    {menuItems}
                </ul>
                {/* mobile Menu Bar */}
                <ul className={`flex flex-col md:hidden z-30 absolute top-0 h-screen bg-[#40A4DC] ${mobileNav ? 'left-0' : '-left-[500px]'}`}>
                    {menuItems}
                </ul>
            </div>
            {/* User Info */}
            <div className='flex'>
                {/* Search Icon */}
                <button>
                    <img src={search} className="h-[17.8px] " alt="" />
                </button>
                {/* User Avtar icon */}
                <button>
                    <img src={user} className="h-[18px] ml-2" alt="" />
                </button>
                {/* Cart Icon */}
                <button className='relative'>
                    <div className='absolute h-4 w-4 bg-[#40A4DC] rounded-full left-4 -top-1.5 flex justify-center items-center'>
                        <p className='text-white text-xs'>০</p>
                    </div>
                    <img src={cart} className="h-[18.9px] ml-2" alt="" />
                </button>
                {/* Mobile Menu Button */}
                <button className='md:hidden' onClick={() => setMobileNav(!mobileNav)}>
                    {
                        mobileNav ?
                            < HiOutlineX className='text-2xl text-[#40A4DC] ml-5' /> :
                            <HiMenuAlt3 className='text-2xl text-[#40A4DC] ml-5' />
                    }
                </button>
            </div>
        </nav>
    );
};

export default Navbar;