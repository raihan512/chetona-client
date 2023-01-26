import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCard from '../Shared/BookCard/BookCard';

const AllBooks = () => {
    const allBooks = useLoaderData()
    return (
        <section className='max-width'>
            <div className='mx-1.5 md:mx-2.5 mb-14'>
                <h3 className='text-2xl md:text-4xl lg:text-6xl font-black text-[#40A4DC] text-center mt-5 mb-10'>সকল বই</h3>
                {/* All Books Container */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 justify-items-center">
                    {
                        allBooks.map(book => <BookCard
                            key={book._id}
                            book={book}
                        ></BookCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default AllBooks;