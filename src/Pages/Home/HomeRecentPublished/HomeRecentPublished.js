import React from 'react';
import book from '../../../assets/images/book.jpg'
import bdt from '../../../assets/images/icons/bdt.png'
import whitestar from '../../../assets/images/icons/white-star.png'
import blackstar from '../../../assets/images/icons/black-star.png'

const HomeRecentPublished = () => {
    return (
        <section className='max-width'>
            <div className='mx-1.5 md:mx-2.5'>
                {/* Sectiontitle */}
                <div className='flex justify-between items-center mb-14'>
                    <h3 className='text-xl md:text-2xl lg:text-4xl text-black'>সদ্য প্রকাশিত</h3>
                    <button className='text-lg md:text-xl lg:text-2xl text-[#666666] underline'>ঘুরে দেখুন</button>
                </div>
                {/* Sectiontitle */}
                {/* Content */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 place-items-center'>
                    {/* Book Item */}
                    <div className='flex justify-between items-center w-[290px] md:w-[350px] rounded-md border hover:shadow-xl border-[#40A4DC] pl-2 md:pl-5 pr-5 md:pr-12 transition-all hover:-translate-y-1'>
                        <img src={book} className="-mt-4 mb-3 md:mb-8" alt="" />
                        <div>
                            <h4 className='text-base md:text-lg text-[#000000] leading-4 mb-1'>বাংলায় লরেম ইপ্সাম</h4>
                            <p className='text-sm md:text-base text-[#565656] mb-1'>বাংলায় লরেম ইপ্সাম</p>
                            <div className='flex mb-2'>
                                <img src={blackstar} className='mr-1 h-[12px] md:h-[17px]' alt="" />
                                <img src={blackstar} className='mr-1 h-[12px] md:h-[17px]' alt="" />
                                <img src={blackstar} className='mr-1 h-[12px] md:h-[17px]' alt="" />
                                <img src={blackstar} className='mr-1 h-[12px] md:h-[17px]' alt="" />
                                <img src={whitestar} className='mr-1 h-[12px] md:h-[17px]' alt="" />
                            </div>
                            <p className='flex items-center mb-1 text-sm md:text-base'><strong>১০০</strong><img src={bdt} className="ml-1 h-[12px]" alt="" /></p>
                            <button className='bg-[#40A4DC] py-1 px-3 text-white rounded-sm text-xs md:text-sm border border-transparent hover:bg-white hover:text-[#40A4DC] hover:border-[#40A4DC]'>কার্টে যুক্ত করুন</button>
                        </div>
                    </div>
                    {/* Book Item */}
                    <div className='flex justify-between items-center w-[290px] md:w-[350px] rounded-md border hover:shadow-xl border-[#40A4DC] pl-2 md:pl-5 pr-5 md:pr-12 transition-all hover:-translate-y-1'>
                        <img src={book} className="-mt-4 mb-3 md:mb-8" alt="" />
                        <div>
                            <h4 className='text-base md:text-lg text-[#000000] leading-4 mb-1'>বাংলায় লরেম ইপ্সাম</h4>
                            <p className='text-sm md:text-base text-[#565656] mb-1'>বাংলায় লরেম ইপ্সাম</p>
                            <div className='flex mb-2'>
                                <img src={blackstar} className='mr-1 h-[12px] md:h-[17px]' alt="" />
                                <img src={blackstar} className='mr-1 h-[12px] md:h-[17px]' alt="" />
                                <img src={blackstar} className='mr-1 h-[12px] md:h-[17px]' alt="" />
                                <img src={blackstar} className='mr-1 h-[12px] md:h-[17px]' alt="" />
                                <img src={whitestar} className='mr-1 h-[12px] md:h-[17px]' alt="" />
                            </div>
                            <p className='flex items-center mb-1 text-sm md:text-base'><strong>১০০</strong><img src={bdt} className="ml-1 h-[12px]" alt="" /></p>
                            <button className='bg-[#40A4DC] py-1 px-3 text-white rounded-sm text-xs md:text-sm border border-transparent hover:bg-white hover:text-[#40A4DC] hover:border-[#40A4DC]'>কার্টে যুক্ত করুন</button>
                        </div>
                    </div>
                    {/* Book Item */}
                    <div className='flex justify-between items-center w-[290px] md:w-[350px] rounded-md border hover:shadow-xl border-[#40A4DC] pl-2 md:pl-5 pr-5 md:pr-12 transition-all hover:-translate-y-1'>
                        <img src={book} className="-mt-4 mb-3 md:mb-8" alt="" />
                        <div>
                            <h4 className='text-base md:text-lg text-[#000000] leading-4 mb-1'>বাংলায় লরেম ইপ্সাম</h4>
                            <p className='text-sm md:text-base text-[#565656] mb-1'>বাংলায় লরেম ইপ্সাম</p>
                            <div className='flex mb-2'>
                                <img src={blackstar} className='mr-1 h-[12px] md:h-[17px]' alt="" />
                                <img src={blackstar} className='mr-1 h-[12px] md:h-[17px]' alt="" />
                                <img src={blackstar} className='mr-1 h-[12px] md:h-[17px]' alt="" />
                                <img src={blackstar} className='mr-1 h-[12px] md:h-[17px]' alt="" />
                                <img src={whitestar} className='mr-1 h-[12px] md:h-[17px]' alt="" />
                            </div>
                            <p className='flex items-center mb-1 text-sm md:text-base'><strong>১০০</strong><img src={bdt} className="ml-1 h-[12px]" alt="" /></p>
                            <button className='bg-[#40A4DC] py-1 px-3 text-white rounded-sm text-xs md:text-sm border border-transparent hover:bg-white hover:text-[#40A4DC] hover:border-[#40A4DC]'>কার্টে যুক্ত করুন</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeRecentPublished;