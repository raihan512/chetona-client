import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const BookDetails = () => {
    const bookDetails = useLoaderData();
    const { img, title, categories } = bookDetails;
    return (
        <section className='max-width'>
            <div className='mx-1.5 md:mx-2.5 mb-14'>
                <div>
                    <div className='sm:flex justify-between items-center'>
                        <div className='w-6/12 mx-auto sm:mx-0 sm:w-4/12'>
                            <img src={img} alt="" />
                        </div>
                        <div className='sm:w-7/12'>
                            <h4 className='text-2xl md:text-3xl lg:text-4xl text-[#000000] font-semibold mt-5'>{title}</h4>
                            <div className='flex pt-2 pb-5 md:pb-8 lg:pb-14 border-b-2'>
                                <img src="https://i.ibb.co/31spmfC/black-star.png" className='mr-1 h-[12px] md:h-[15px] lg:h-[17px]' alt="" />
                                <img src="https://i.ibb.co/31spmfC/black-star.png" className='mr-1 h-[12px] md:h-[15px] lg:h-[17px]' alt="" />
                                <img src="https://i.ibb.co/31spmfC/black-star.png" className='mr-1 h-[12px] md:h-[15px] lg:h-[17px]' alt="" />
                                <img src="https://i.ibb.co/31spmfC/black-star.png" className='mr-1 h-[12px] md:h-[15px] lg:h-[17px]' alt="" />
                                <img src="https://i.ibb.co/frVwnyC/white-star.png" className='mr-1 h-[12px] md:h-[15px] lg:h-[17px]' alt="" />
                            </div>
                            <p className='flex items-center text-xl md:text-2xl lg:text-3xl py-2 lg:py-5'>
                                <strong><span className='mr-1'>১০০</span>&#2547;</strong>
                            </p>
                            <div className='pt-2 lg:pt-5 pb-4 md:pb-6 lg:pb-10 border-b-2'>
                                <button
                                    className='text-sm md:text-base lg:text-lg font-semibold text-white pt-2 pb-1.5 w-20 md:w-28 lg:w-36 rounded-[3px] bg-[#40A4DC] mr-2 border border-transparent hover:bg-white hover:border-[#40A4Dc] hover:text-[#40A4Dc] transition-all hover:-translate-y-1 hover:shadow-lg'>
                                    কিনুন</button>
                                <button
                                    className='text-sm md:text-base lg:text-lg font-semibold text-[#40A4DC] pt-2 pb-1.5 w-20 md:w-28 lg:w-36 rounded-[3px] bg-white mr-2 border border-[#40A4DC] hover:bg-[#40A4Dc] hover:text-white transition-all hover:-translate-y-1 hover:shadow-lg'>
                                    পড়ে দেখুন</button>
                            </div>
                            <div className='flex'>
                                {
                                    categories.map((category, i) => <Link
                                        key={i}
                                        className='pt-1 pb-0.5 px-3 bg-gray-500 rounded-sm text-lg text-white mr-2 mt-3'
                                        to=''>{category}</Link>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookDetails;