import React from 'react';
import { Link } from 'react-router-dom';
import cha from '../../../assets/images/icons/cha.png'

const HomeOurDetails = () => {
    return (
        <section className='bg-[#F5F8FE] py-10'>
            <div className="max-width">
                <div className='mx-1.5 md:mx-2.5 mb-14'>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 place-items-center">
                        <div className='bg-white w-[150px] pt-8 pb-3 rounded-md border border-transparent shadow-md transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-[#40A4DC]'>
                            <Link to='' className='flex flex-col justify-between items-center'>
                                <img src={cha} className='mb-5 w-auto' alt="" />
                                <p className='text-base text-[#666666]'>পরিবেশক ও প্রাপ্তিস্থান  </p>
                            </Link>
                        </div>
                        <div className='bg-white w-[150px] pt-8 pb-3 rounded-md border border-transparent shadow-md transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-[#40A4DC]'>
                            <Link to='' className='flex flex-col justify-between items-center'>
                                <img src={cha} className='mb-5 w-auto' alt="" />
                                <p className='text-base text-[#666666]'>অনলাইন পরিবেশন </p>
                            </Link>
                        </div>
                        <div className='bg-white w-[150px] pt-8 pb-3 rounded-md border border-transparent shadow-md transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-[#40A4DC]'>
                            <Link to='' className='flex flex-col justify-between items-center'>
                                <img src={cha} className='mb-5 w-auto' alt="" />
                                <p className='text-base text-[#666666]'>কুরিয়ার লোকেশন </p>
                            </Link>
                        </div>
                        <div className='bg-white w-[150px] pt-8 pb-3 rounded-md border border-transparent shadow-md transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-[#40A4DC]'>
                            <Link to='' className='flex flex-col justify-between items-center'>
                                <img src={cha} className='mb-5 w-auto' alt="" />
                                <p className='text-base text-[#666666]'>পরিবেশিত  </p>
                            </Link>
                        </div>
                        <div className='bg-white w-[150px] pt-8 pb-3 rounded-md border border-transparent shadow-md transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-[#40A4DC]'>
                            <Link to='' className='flex flex-col justify-between items-center'>
                                <img src={cha} className='mb-5 w-auto' alt="" />
                                <p className='text-base text-[#666666]'>FAQ </p>
                            </Link>
                        </div>
                        <div className='bg-white w-[150px] pt-8 pb-3 rounded-md border border-transparent shadow-md transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-[#40A4DC]'>
                            <Link to='' className='flex flex-col justify-between items-center'>
                                <img src={cha} className='mb-5 w-auto' alt="" />
                                <p className='text-base text-[#666666]'>অর্ডারের পদ্ধতি </p>
                            </Link>
                        </div>
                        <div className='bg-white w-[150px] pt-8 pb-3 rounded-md border border-transparent shadow-md transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-[#40A4DC]'>
                            <Link to='' className='flex flex-col justify-between items-center'>
                                <img src={cha} className='mb-5 w-auto' alt="" />
                                <p className='text-base text-[#666666]'>ডাউনলোড </p>
                            </Link>
                        </div>
                        <div className='bg-white w-[150px] pt-8 pb-3 rounded-md border border-transparent shadow-md transition-all hover:-translate-y-1 hover:shadow-2xl hover:border-[#40A4DC]'>
                            <Link to='' className='flex flex-col justify-between items-center'>
                                <img src={cha} className='mb-5 w-auto' alt="" />
                                <p className='text-base text-[#666666]'>আমাদের অন্যান্য মাধ্যম  </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeOurDetails;