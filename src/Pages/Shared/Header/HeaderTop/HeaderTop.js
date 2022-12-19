import React from 'react';
import { Link } from 'react-router-dom';
import phone from '../../../../assets/images/icons/Headertop/phone.png';
import envelope from '../../../../assets/images/icons/Headertop/envelope.png';

const HeaderTop = () => {
    return (
        <div className='md:flex justify-between py-2 border-b-2'>
            {/* Headertop Contact */}
            <div className='flex mb-1 md:mb-0'>
                {/* Phone */}
                <div className='flex items-center mr-1 md:mr-3'>
                    <img src={phone} className="h-[13.5px]" alt="" />
                    <a href='tel:+8801798947657' className='text-xs md:text-sm font-mont ml-1 md:ml-2'>01798947657</a>
                </div>
                {/* Email */}
                <div className='flex items-center pl-1 md:pl-3 border-l-2'>
                    <img src={envelope} className="h-[9.6px]" alt="" />
                    <a href='mailto:chetonaprokashon@gmail.com' className='text-xs md:text-sm font-mont ml-1 md:ml-2'>chetonaprokashon@gmail.com</a>
                </div>
            </div>
            {/* Headertop Menu */}
            <div>
                <ul className='flex items-center'>
                    <li className='text-sm md:text-base text-[#414141] px-1'><Link to=''>পরিচিতি</Link></li>
                    <li className='text-sm md:text-base text-[#414141] px-1 border-l-2 hidden md:hidden lg:block'><Link to=''>নীতিমালা</Link></li>
                    <li className='text-sm md:text-base text-[#414141] px-1 border-l-2 hidden md:hidden lg:block'><Link to=''>পরিবেশক</Link></li>
                    <li className='text-sm md:text-base text-[#414141] px-1 border-l-2 hidden md:hidden lg:block'><Link to=''>অন্যান্য</Link></li>
                    <li className='text-sm md:text-base text-[#414141] px-1 border-l-2'><Link to=''>যোগাযোগ</Link></li>
                    <li className='text-sm md:text-base text-[#414141] px-1 border-l-2'><Link to=''>একাউন্ট</Link></li>
                    <li><button className='bg-[#40A4DC] text-sm md:text-base leading-3 md:leading-4 text-white rounded-sm py-1 px-2'>সাবস্ক্রাইব করুন</button></li>
                </ul>
            </div>
        </div>
    );
};

export default HeaderTop;