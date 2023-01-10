import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BookDetailsTab from './BookDetailsTab/BookDetailsTab';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { CartProvider } from '../../Contexts/CartContext/CartContext';
import BookDetailsModal from './BookDetailsModal/BookDetailsModal';


const BookDetails = () => {
    const [bookModal, setBookModal] = useState(false)
    const bookDetails = useLoaderData();
    const { img, title, categories, authorId, price, bookSample } = bookDetails;
    const { addToCart } = useContext(CartProvider)

    // Load Author By their id
    const { data: authorInfo = [] } = useQuery({
        queryKey: ['authorInfo', authorId],
        queryFn: async () => {
            const res = await fetch(`https://chetona-server-raihan512.vercel.app/author/${authorId}`);
            const data = await res.json();
            return data;
        }
    })
    // Destructuring Author Details
    const { author } = authorInfo;
    // Load Categories 
    const { data: allCategories = [] } = useQuery({
        queryKey: ['allCategories'],
        queryFn: async () => {
            const res = await fetch(`https://chetona-server-raihan512.vercel.app/categories`);
            const data = await res.json();
            return data;
        }
    })
    let thisBookCategories = [];
    for (let i in allCategories) {
        if (categories.includes(allCategories[i]._id)) {
            thisBookCategories.push(allCategories[i]);
        }
    }

    return (
        <section className='max-width'>
            <div className='mx-1.5 md:mx-2.5 mb-14'>
                <div>
                    {/* Image and Summary */}
                    <div className='sm:flex justify-between items-center'>
                        {/* Book Image */}
                        <div className='w-6/12 mx-auto sm:mx-0 sm:w-4/12'>
                            <button onClick={() => setBookModal(true)}>
                                <img src={img} alt={title} />
                            </button>
                        </div>
                        <div className='sm:w-7/12'>
                            {/* Book Name */}
                            <h4 className='text-2xl md:text-3xl lg:text-4xl text-[#000000] font-bold mt-5'>{title}</h4>
                            {/* Author */}
                            <h5 className='text-base md:text-lg lg:text-xl font-semibold hover:text-[#40A4DC]'><Link to={`/author/${authorId}`}>{author}</Link></h5>
                            {/* Rating */}
                            <div className='flex pt-2 pb-5 md:pb-8 lg:pb-14 border-b-2'>
                                <BsStarFill className='mr-2 text-[#40A4DC] text-xl' />
                                <BsStarFill className='mr-2 text-[#40A4DC] text-xl' />
                                <BsStarFill className='mr-2 text-[#40A4DC] text-xl' />
                                <BsStarHalf className='mr-2 text-[#40A4DC] text-xl' />
                                <BsStar className='mr-2 text-[#40A4DC] text-xl' />
                            </div>
                            <p className='flex items-center text-xl md:text-2xl lg:text-3xl py-2 lg:py-5'>
                                <strong><span className='mr-1'>{price}</span>&#2547;</strong>
                            </p>
                            {/* Buttons */}
                            <div className='pt-2 lg:pt-5 pb-4 md:pb-6 lg:pb-10 border-b-2'>
                                <div className='text-sm md:text-base lg:text-lg font-semibold'>
                                    <button
                                        onClick={() => addToCart(bookDetails)}
                                        className='text-white pt-2 pb-1.5 w-20 md:w-28 lg:w-36 rounded-[3px] bg-[#40A4DC] mr-2 border border-transparent hover:bg-white hover:border-[#40A4Dc] hover:text-[#40A4Dc] transition-all hover:-translate-y-1 hover:shadow-lg'>
                                        কিনুন</button>
                                    <button
                                        onClick={() => setBookModal(true)}
                                        className='text-[#40A4DC] pt-2 pb-1.5 w-20 md:w-28 lg:w-36 rounded-[3px] bg-white mr-2 border border-[#40A4DC] hover:bg-[#40A4Dc] hover:text-white transition-all hover:-translate-y-1 hover:shadow-lg'>
                                        পড়ে দেখুন</button>
                                </div>
                            </div>
                            {/* Tags */}
                            <p className='mt-3 text-lg lg:text-xl font-bold'>ট্যাগ</p>
                            <div className='flex'>
                                {
                                    thisBookCategories.map((category) => <Link
                                        key={category._id}
                                        className='font-semibold mr-1 text-base md:text-lg bg-slate-300 pt-0.5 pb-0 px-1.5 rounded-sm'
                                        to={`/category/${category._id}`}
                                    >#{category.name}</Link>)
                                }
                            </div>
                        </div>
                    </div>
                    {/* Modal */}
                    {bookModal && <BookDetailsModal title={title} bookSample={bookSample} setBookModal={setBookModal}></BookDetailsModal>}
                    {/* Tab */}
                    <BookDetailsTab bookDetails={bookDetails} authorInfo={authorInfo}></BookDetailsTab>
                </div>
            </div>
        </section >
    );
};

export default BookDetails;