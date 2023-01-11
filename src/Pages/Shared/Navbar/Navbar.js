import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { CartProvider } from '../../../Contexts/CartContext/CartContext';
import CartMenu from '../CartMenu/CartMenu';
import { AuthProvider } from '../../../Contexts/AuthContext/AuthContext';
// Icons
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { FaUserCircle, FaShoppingCart } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { GoSearch } from "react-icons/go";
// Logo
import logo from '../../../assets/images/logo.png';
import UserMenu from '../UserMenu/UserMenu';

const Navbar = () => {
    const { user } = useContext(AuthProvider);

    const { cart } = useContext(CartProvider);
    const [showUserMenu, setShowUserMenu] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);
    const [showCartMenu, setShowCartMenu] = useState(true)
    // Load All Categories
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch(`https://chetona-server-raihan512.vercel.app/categories`);
            const data = await res.json();
            return data;
        }
    })

    const menuItems = <>
        <li className='md:text-lg lg:text-xl text-[#333333] py-3 md:pb-2 md:border-transparent border-b md:px-2 mr-1 transition-all hover:border-[#40A4DC] hover:text-white md:hover:text-[#333333] hover:ml-2'><Link className='pl-3 pr-20 md:pl-0 md:pr-0' to='/'>হোম</Link></li>
        <li className='md:text-lg lg:text-xl text-[#333333] py-3 md:pb-2 md:border-transparent border-b md:px-1 lg:px-2 mx-1 transition-all hover:border-[#40A4DC] hover:text-white md:hover:text-[#333333] hover:ml-2'><Link className='pl-3 pr-20 md:pl-0 md:pr-0' to='/allbooks'>বই</Link></li>
        <li className='md:text-lg lg:text-xl text-[#333333] py-3 md:pb-2 md:border-transparent border-b md:px-1 lg:px-2 mx-1 transition-all hover:border-[#40A4DC] hover:text-white md:hover:text-[#333333] hover:ml-2'><Link className='pl-3 pr-20 md:pl-0 md:pr-0' to='/authors'>লেখক</Link></li>
        {/* Dropdown */}
        <li className='md:text-lg lg:text-xl text-[#333333] py-3 md:pb-2 md:border-transparent border-b md:px-1 lg:px-2 mx-1 transition-all hover:border-[#40A4DC] hover:text-white md:hover:text-[#333333] hover:ml-2 relative'>
            <p className='flex items-center pl-3 pr-20 md:pl-0 md:pr-0 cursor-pointer' onClick={() => setDropdown(!dropdown)}>ক্যাটাগরি <BiChevronDown /></p>
            {/* Dropdown Menu */}
            <ul className={`absolute z-40 top-9 left-40 md:left-10 bg-[#40A4DC] rounded-sm py-1 ${dropdown ? 'block' : 'hidden'}`}>
                <li className='md:text-lg lg:text-xl text-white hover:bg-white hover:text-black'><Link className='pl-6 pr-20' to='/categories' onClick={() => setDropdown(!dropdown)}>সকল</Link></li>
                {
                    categories.map((category) => <li
                        key={category._id}
                        className='md:text-lg lg:text-xl text-white hover:bg-white hover:text-black'>
                        <Link className='pl-6 pr-20' to={`/category/${category._id}`} onClick={() => setDropdown(!dropdown)}>{category.name}</Link>
                    </li>)
                }
            </ul>
        </li>
        {/* Dropdown */}
        <li className='md:text-lg lg:text-xl text-[#333333] py-3 md:pb-2 md:border-transparent border-b md:px-1 lg:px-2 mx-1 transition-all hover:border-[#40A4DC] hover:text-white md:hover:text-[#333333] hover:ml-2'><Link className='pl-3 pr-20 md:pl-0 md:pr-0' to=''>ম্যাগাজিন</Link></li>
        <li className='md:text-lg lg:text-xl text-[#333333] py-3 md:pb-2 md:border-transparent border-b md:px-1 lg:px-2 mx-1 transition-all hover:border-[#40A4DC] hover:text-white md:hover:text-[#333333] hover:ml-2'><Link className='pl-3 pr-20 md:pl-0 md:pr-0' to=''>প্যাকেজ</Link></li>
        <li className='md:text-lg lg:text-xl text-[#333333] py-3 md:pb-2 md:border-transparent border-b md:px-1 lg:px-2 mx-1 transition-all hover:border-[#40A4DC] hover:text-white md:hover:text-[#333333] hover:ml-2'><Link className='pl-3 pr-20 md:pl-0 md:pr-0' to=''>ভিডিও</Link></li>
        <li className='md:text-lg lg:text-xl text-[#333333] py-3 md:pb-2 md:border-transparent border-b md:px-1 lg:px-2 mx-1 transition-all hover:border-[#40A4DC] hover:text-white md:hover:text-[#333333] hover:ml-2'><Link className='pl-3 pr-20 md:pl-0 md:pr-0' to=''>ব্লগ</Link></li>
    </>
    return (
        <nav className='sticky top-0 left-0 z-40 bg-[#F6F6F6]'>
            <div className="max-width">
                <div className='mx-1.5 md:mx-2.5'>
                    <div className='flex justify-between items-center h-[60px] md:h-[65px] lg:h-[93px]'>
                        <Link to='/'>
                            <img src={logo} className="h-[40px] md:h-[45px] lg:h-[73px]" alt="" />
                        </Link>
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
                        <div className='flex items-center'>
                            {/* Search Icon */}
                            <button><GoSearch className='text-xl ml-1' /></button>
                            {/* Cart Icon */}
                            <button className='relative' onClick={() => setShowCartMenu(!showCartMenu)}>
                                <div className='absolute h-4 w-4 bg-[#40A4DC] rounded-full left-4 -top-2 flex justify-center items-center'>
                                    <p className='text-white text-xs'>{cart.length}</p>
                                </div>
                                <FaShoppingCart className='text-xl ml-1' />
                                {/* Cart Menu */}
                                {showCartMenu &&
                                    <div className='absolute top-4 right-0'>
                                        {
                                            cart.length > 0 && <CartMenu></CartMenu>
                                        }

                                    </div>
                                }
                            </button>
                            {/* User Avtar icon */}

                            <div className='ml-5 text-xl relative flex items-center'>
                                {
                                    user ?
                                        <button onClick={() => setShowUserMenu(!showUserMenu)}>{user.photoUrl ? <img src="" alt="" /> : <p className='text-white font-bold bg-[#40A4DC] py-0.5 px-2.5 rounded-full'>{user.displayName && user.displayName[0]}</p>}</button >
                                        : <button><Link to='signin'><FaUserCircle className='text-2xl' /></Link></button>
                                }
                                {/* Show Cart menu */}
                                {
                                    showUserMenu &&
                                    <div className='absolute top-8 right-0'>
                                        <UserMenu setShowUserMenu={setShowUserMenu}></UserMenu>
                                    </div>
                                }
                            </div>
                            <button className='md:hidden' onClick={() => setMobileNav(!mobileNav)}>
                                {
                                    mobileNav ?
                                        < HiOutlineX className='text-2xl text-[#40A4DC] ml-5' /> :
                                        <HiMenuAlt3 className='text-2xl text-[#40A4DC] ml-5' />
                                }
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav >

    );
};

export default Navbar;