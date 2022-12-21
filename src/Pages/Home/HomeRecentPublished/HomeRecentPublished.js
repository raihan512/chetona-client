import React from 'react';
import book from '../../../assets/images/book.JPG'
import bdt from '../../../assets/images/icons/bdt.png'
import author from '../../../assets/images/writter/author.jpeg'
import whitestar from '../../../assets/images/icons/white-star.png'
import blackstar from '../../../assets/images/icons/black-star.png'

const HomeRecentPublished = () => {
    return (
        <section className='max-width'>
            <div className='mx-1.5 md:mx-2.5 mb-14'>
                {/* Sectiontitle */}
                <div className='flex justify-between items-center mb-14'>
                    <h3 className='text-xl md:text-2xl lg:text-4xl text-black'>সদ্য প্রকাশিত</h3>
                    <button className='text-lg md:text-xl lg:text-2xl text-[#666666] underline transition-all hover:text-[#40A4DC] hover:-translate-x-1'>ঘুরে দেখুন</button>
                </div>
                {/* Sectiontitle */}
                {/* Content */}
                <div className='flex justify-center lg:justify-between flex-wrap'>
                    {/* Book Item */}
                    <div className='flex justify-between items-center w-[290px] md:w-[350px] mx-5 lg:mx-0 mb-10 rounded-sm border-2 hover:shadow-xl border-[#40A4DC] pl-2 md:pl-5 pr-3 md:pr-12 transition-all hover:-translate-y-1'>
                        <div className="relative -mt-5 mb-4 md:mb-8 border-2 p-1 border-[#40A4DC] bg-white rounded-sm">
                            <img src={book} className='rounded-sm w-[90px] md:w-[120px]' alt="" />
                            <img src={author} className='absolute h-[30px] md:h-[50px] w-[30px] md:w-[50px] rounded-full -bottom-4 md:-bottom-6 left-8 md:left-9 border-2 border-[#40A4DC]' alt="" />
                        </div>
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
                            <button className='bg-[#40A4DC] py-1 px-3 text-white rounded-sm text-xs md:text-sm border border-transparent hover:bg-white hover:text-[#40A4DC] hover:border-[#40A4DC]'>দেখুন</button>
                        </div>
                    </div>
                    {/* Book Item */}
                    <div className='flex justify-between items-center w-[290px] md:w-[350px] mx-5 lg:mx-0 mb-10 rounded-sm border-2 hover:shadow-xl border-[#40A4DC] pl-2 md:pl-5 pr-3 md:pr-12 transition-all hover:-translate-y-1'>
                        <div className="relative -mt-5 mb-4 md:mb-8 border-2 p-1 border-[#40A4DC] bg-white rounded-sm">
                            <img src={book} className='rounded-sm w-[90px] md:w-[120px]' alt="" />
                            <img src={author} className='absolute h-[30px] md:h-[50px] w-[30px] md:w-[50px] rounded-full -bottom-4 md:-bottom-6 left-8 md:left-9 border-2 border-[#40A4DC]' alt="" />
                        </div>
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
                            <button className='bg-[#40A4DC] py-1 px-3 text-white rounded-sm text-xs md:text-sm border border-transparent hover:bg-white hover:text-[#40A4DC] hover:border-[#40A4DC]'>দেখুন</button>
                        </div>
                    </div>
                    {/* Book Item */}
                    <div className='flex justify-between items-center w-[290px] md:w-[350px] mx-5 lg:mx-0 mb-10 rounded-sm border-2 hover:shadow-xl border-[#40A4DC] pl-2 md:pl-5 pr-3 md:pr-12 transition-all hover:-translate-y-1'>
                        <div className="relative -mt-5 mb-4 md:mb-8 border-2 p-1 border-[#40A4DC] bg-white rounded-sm">
                            <img src={book} className='rounded-sm w-[90px] md:w-[120px]' alt="" />
                            <img src={author} className='absolute h-[30px] md:h-[50px] w-[30px] md:w-[50px] rounded-full -bottom-4 md:-bottom-6 left-8 md:left-9 border-2 border-[#40A4DC]' alt="" />
                        </div>
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
                            <button className='bg-[#40A4DC] py-1 px-3 text-white rounded-sm text-xs md:text-sm border border-transparent hover:bg-white hover:text-[#40A4DC] hover:border-[#40A4DC]'>দেখুন</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeRecentPublished;