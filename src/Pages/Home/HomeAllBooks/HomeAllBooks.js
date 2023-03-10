import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import BookCard from '../../Shared/BookCard/BookCard';

const HomeAllBooks = () => {
    // Load all Books
    const { data: allBooks = [] } = useQuery({
        queryKey: ['allBooks'],
        queryFn: async () => {
            const res = await fetch(`https://chetona-server-raihan512.vercel.app/books`);
            const data = await res.json();
            return data;
        }
    })
    const slicedBooks = allBooks.slice(0, 5);
    return (
        <section className='max-width'>
            <div className='mx-1.5 md:mx-2.5 my-14'>
                {/* Sectiontitle */}
                <div className='flex justify-between items-center mb-14'>
                    <h3 className='text-xl md:text-2xl lg:text-4xl text-black'>সকল বই</h3>
                    <button className='text-lg md:text-xl lg:text-2xl text-[#666666] underline transition-all hover:text-[#40A4DC] hover:-translate-x-1'><Link to='/allbooks'>ঘুরে দেখুন</Link></button>
                </div>
                {/* Sectiontitle */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 justify-items-center">

                    {/* Book Item */}
                    {
                        slicedBooks.map(book => <BookCard
                            key={book._id}
                            book={book}
                        ></BookCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default HomeAllBooks;