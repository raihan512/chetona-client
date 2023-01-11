import React, { useContext } from 'react';
import { AuthProvider } from '../../../Contexts/AuthContext/AuthContext';
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';


const UserMenu = ({ setShowUserMenu }) => {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthProvider);

    const handleLogout = () => {
        logout()
            .then((res) => {
                setShowUserMenu(false)
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div className='w-[250px] bg-[#40A4DC] rounded-md shadow-lg text-center overflow-hidden'>
            <div className='text-6xl flex justify-center text-white my-3'>
                {
                    user?.photoUrl ? <img src="" alt="" /> : <FaUserCircle />
                }
            </div>
            <p className='capitalize text-xl font-semibold'>{user?.displayName}</p>

            <div className='flex flex-col'>
                <Link to='' className='hover:bg-white text-lg'>one</Link>
                <Link to='' className='hover:bg-white text-lg'>one</Link>
                <Link to='' className='hover:bg-white text-lg'>one</Link>
                <Link to='' className='hover:bg-white text-lg'>one</Link>
            </div>
            <button onClick={handleLogout} className='bg-red-300 w-full text-lg font-semibold py-1'>Logout</button>
        </div>
    );
};

export default UserMenu;