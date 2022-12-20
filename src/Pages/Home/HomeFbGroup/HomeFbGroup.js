import React from 'react';
import fbgroup from '../../../assets/images/fbgroup.jpg';

const HomeFbGroup = () => {
    return (
        <section className='pt-5 md:pt-10 lg:pt-24 pb-3 md:pb-8 lg:pb-14 bg-[#F6F6F6]'>
            <div className="max-width ">
                <div className='mx-1.5 md:mx-2.5'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <div className='md:w-6/12'>
                            <img src={fbgroup} alt="" />
                        </div>
                        <div className='md:w-6/12 pt-5 md:pt-0 md:px-10'>
                            <h3 className='text-lg md:text-xl lg:text-2xl text-[#333333]'>জয়েন করুন আমাদের ফেসবুক গ্রুপে</h3>
                            <p className='text-base md:text-lg lg:text-xl text-[#707070] pt-1 lg:pt-3 pb-3 lg:pb-6'>
                                লরেম ইপ্সাম ডলর সিট আমেত, কনসেক্টেচুর অ্যাডিপিস্কিং এলিট। নানসি আল্ট্রিচিস ভ্যারিয়াস আউগিউ ইউ ফ্যাউসিবাস। ইন প্যালেনটেস্কিউ আউগিউ নন নিকিউ টেম্পর ট্রিস্টিক।
                            </p>
                            <button className='bg-white py-1 px-3 text-black rounded-sm text-xs md:text-sm hover:bg-[#40A4DC] hover:text-white shadow-xl'>জয়েন করুন</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeFbGroup;