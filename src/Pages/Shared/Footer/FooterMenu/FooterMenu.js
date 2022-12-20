import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/logo.png';
import phone from '../../../../assets/images/icons/Headertop/phone.png';
import envelope from '../../../../assets/images/icons/Headertop/envelope.png';

const FooterMenu = () => {
    return (
        <div className='max-width'>
            <div className='mx-1.5 md:mx-2.5 mt-14 mb-10'>
                <div className='flex flex-wrap justify-between'>
                    {/* Menu Item */}
                    <div className='w-full md:w-3/12'>
                        <img src={logo} className='mb-8' alt="" />
                        <p className='text-xs text-[#7E7E7E] leading-3 mb-5 mr-3'>
                            লরেম ইপ্সাম ডলর সিট আমেত, কনসেক্টেচুর অ্যাডিপিস্কিং এলিট। নানসি আল্ট্রিচিস ভ্যারিয়াস আউগিউ ইউ ফ্যাউসিবাস। ইন প্যালেনটেস্কিউ আউগিউ নন নিকিউ টেম্পর ট্রিস্টিক। নিউলা এ পিউরাস অরনারে, ম্যাটুস এনিম স্যাড, ম্যাক্সিমাস মি। ডোনেক পোর্টা রিউট্রাম ডিগনিসসিম। ডোনেক ভাইটা ইরস এলিকুয়াম, রিউট্রাম রাইসাস এট, পরতিটর লরেম। আয়েনান স্যাড এনিম লুকাস। সেড ইয়াকিউলাস এরাট আইডি ম্যাক্সিমাস হেন্ড্রেরিট। নিউলাম এ এফিকিটার ইরস। আয়েনান স্যাড এনিম লুকাস। সেড ইয়াকিউলাস এরাট আইডি ম্যাক্সিমাস হেন্ড্রেরিট। নিউলাম এ এফিকিটার ইরস।
                        </p>
                        <a href='mailto:chetonaprokashon@gmail.com' className='flex items-center text-xs lg:text-sm font-mont'>
                            <img src={envelope} className='h-[10px] mr-1' alt="" />
                            chetonaprokashon@gmail.com
                        </a>
                        <a href='tel:+8801798947657' className='flex items-center text-xs lg:text-sm font-mont'>
                            <img src={phone} className='h-[14px] mr-1' alt="" />
                            01798-947657</a></div>
                    {/* Menu Item */}
                    <div className='w-full sm:w-4/12 md:w-3/12'>
                        <h5 className='text-2xl text-[#40A4DC] mt-8'>সাইট ভিউ</h5>
                        <ul>
                            <li><Link className='text-base lg:text-lg text-[#000000]' to=''>হোম</Link></li>
                            <li><Link className='text-base lg:text-lg text-[#000000]' to=''>বই</Link></li>
                            <li><Link className='text-base lg:text-lg text-[#000000]' to=''>লেখক</Link></li>
                            <li><Link className='text-base lg:text-lg text-[#000000]' to=''>ক্যাটাগরি</Link></li>
                            <li><Link className='text-base lg:text-lg text-[#000000]' to=''>ম্যাগাজিন</Link></li>
                            <li><Link className='text-base lg:text-lg text-[#000000]' to=''>ইবুক</Link></li>
                            <li><Link className='text-base lg:text-lg text-[#000000]' to=''>প্যাকেজ</Link></li>
                            <li><Link className='text-base lg:text-lg text-[#000000]' to=''>পরিবেশিত</Link></li>
                            <li><Link className='text-base lg:text-lg text-[#000000]' to=''>ভিডিও</Link></li>
                        </ul>
                    </div>
                    {/* Menu Item */}
                    <div className='w-full sm:w-4/12 md:w-3/12'>
                        <h5 className='text-2xl text-[#40A4DC] mt-8'>কাস্টোমার</h5>
                        <ul>
                            <li><Link className='text-base lg:text-lg text-[#000000]' to=''>একাউন্ট</Link></li>
                            <li><Link className='text-base lg:text-lg text-[#000000]' to=''>ডাউনলোড</Link></li>
                            <li><Link className='text-base lg:text-lg text-[#000000]' to=''>পাঠক ফ্রম</Link></li>
                            <li><Link className='text-base lg:text-lg text-[#000000]' to=''>কাস্টমার হেল্প</Link></li>
                            <li><Link className='text-base lg:text-lg text-[#000000]' to=''>অর্ডারের পদ্ধতি</Link></li>
                            <li><Link className='text-base lg:text-lg text-[#000000]' to=''>কুরিয়ার সিস্টেম</Link></li>
                            <li><Link className='text-base lg:text-lg text-[#000000]' to=''>কুরিয়ার লোকেশন</Link></li>
                            <li><Link className='text-base lg:text-lg text-[#000000]' to=''>FAQ</Link></li>
                            <li><Link className='text-base lg:text-lg text-[#000000]' to=''>গ্রুপে জয়েন করুন</Link></li>
                            <li><Link className='text-base lg:text-lg text-[#000000]' to=''>যোগাযোগ</Link></li>
                        </ul>
                    </div>
                    {/* Menu Item */}
                    <div className='w-full sm:w-4/12 md:w-3/12'>
                        <h5 className='text-2xl text-[#40A4DC] mt-8'>অন্যান্য লিঙ্ক</h5>
                        <ul>
                            <li><Link className='text-base lg:text-lg text-[#000000]' to=''>পরিচিতি</Link></li>
                            <li><Link className='text-base lg:text-lg text-[#000000]' to=''>সোশাল পেজ</Link></li>
                            <li><Link className='text-base lg:text-lg text-[#000000]' to=''>গোপনীয়তার নীতিমালা</Link></li>
                            <li><Link className='text-base lg:text-lg text-[#000000]' to=''>নীতিমালা</Link></li>
                            <li><Link className='text-base lg:text-lg text-[#000000]' to=''>শর্তাবলি</Link></li>
                            <li><Link className='text-base lg:text-lg text-[#000000]' to=''>বিবৃতি </Link></li>
                            <li><Link className='text-base lg:text-lg text-[#000000]' to=''>পেমেন্ট ও রিফান্ড পলিসি</Link></li>
                            <li><Link className='text-base lg:text-lg text-[#000000]' to=''>অনলাইন পরিবেশন</Link></li>
                            <li><Link className='text-base lg:text-lg text-[#000000]' to=''>ক্যাম্পেইন</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterMenu;