import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { } from "./AllAuthor.css";
import { TfiUser } from "react-icons/tfi";
const AllAuthor = () => {
    const authors = useLoaderData();
    console.log(authors);
    return (
        <section className='max-width'>
            <div className='mx-1.5 md:mx-2.5 mb-14'>
                <h3 className='text-2xl md:text-4xl lg:text-6xl font-black text-[#40A4DC] text-center mb-10'>আমাদের লেখকবৃন্দ</h3>
                <div className='grid grid-cols-4 gap-5'>
                    {
                        authors.map(author => <div
                            key={author._id}
                            className="single-author border border-[#40A4DC] flex flex-col justify-center items-center p-5 pt-8"
                        >
                            {author.authorImg ? <img src={author.authorImg} className="h-[130px]" alt="" /> : <TfiUser className='text-9xl' />}
                            <h5 className='w-11/12 text-xl font-bold text-center mt-2 truncate ...'>{author.author}</h5>
                            <div className='overlay'>
                                <button>
                                    <Link
                                        to={`/author/${author._id}`}
                                        className='text-sm md:text-base lg:text-lg font-semibold text-white pt-2 pb-1.5 w-20 md:w-28 lg:w-36'
                                    >দেখুন</Link>
                                </button>
                            </div>
                        </div>)
                    }

                </div>
            </div>
        </section >
    );
};

export default AllAuthor;