import React, { useEffect, useState } from 'react';
import BookCard from '../Shared/BookCard/BookCard';

const AllBooks = () => {
    const [allBooks, setAllBooks] = useState([]);
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setAllBooks(data))
    }, [])
    return (
        <section className='max-width'>
            <div className='mx-1.5 md:mx-2.5 mb-14'>
                <h3 className='text-2xl md:text-4xl lg:text-6xl font-black text-[#40A4DC] text-center mb-10'>সকল বই</h3>
                {/* All Books Container */}
                <div className="flex justify-center md:justify-between flex-wrap mt-20">
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