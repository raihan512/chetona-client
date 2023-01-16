import React from 'react';

const Subscribe = () => {
    return (
        <section className='bg-[#40A4DC] py-10'>
            <div className="max-width">
                <div className='mx-1.5 md:mx-2.5'>
                    <div className="flex flex-col sm:flex-row justify-between md:items-center">
                        <div>
                            <h4 className='text-xl md:text-2xl lg:text-4xl text-white'>সাবস্ক্রাইব করুন</h4>
                            <p className='text-lg md:text-xl lg:text-2xl text-white'>আমাদের পরবর্তী আপডেটের জন্য</p>
                        </div>
                        <div>
                            <form action="" className='bg-white rounded-md flex justify-between max-w-[280px] md:w-auto overflow-hidden'>
                                <input type="search" className='w-8/12 text-lg bg-transparent text-[#AAA9A9] py-1.5 pl-3 focus:outline-0' placeholder='আপনার ইমেইল দিন' name="" id="" />
                                <button className='w-4/12 bg-[#2D2D2D] text-white py-2 px-5 rounded-md'>সাবস্ক্রাইব</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;