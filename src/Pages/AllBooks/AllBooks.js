import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCard from '../Shared/BookCard/BookCard';

const AllBooks = () => {
    const allBooks = useLoaderData()
    return (
        <section className='max-width'>
            <div className='mx-1.5 md:mx-2.5 mb-14'>
                <h3 className='text-2xl md:text-4xl lg:text-6xl font-black text-[#40A4DC] text-center mb-10'>সকল বই</h3>
                {/* All Books Container */}
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 justify-items-center">
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