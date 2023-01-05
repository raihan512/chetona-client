import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BookCard from '../Shared/BookCard/BookCard';

const Category = () => {
    const category = useLoaderData();
    const { data: allBooks = [] } = useQuery({
        queryKey: ['allBooks'],
        queryFn: async () => {
            const res = await fetch(`https://chetona-server-raihan512.vercel.app/books`);
            const data = await res.json();
            return data;
        }
    })

    const bookCategories = [];
    for (let i in allBooks) {
        if (allBooks[i].categories.includes(category._id)) {
            bookCategories.push(allBooks[i]);
        }
    }
    return (
        <section className='max-width'>
            <div className='mx-1.5 md:mx-2.5 my-14'>
                <h3 className='text-2xl md:text-4xl lg:text-6xl font-black text-[#40A4DC] text-center mb-10'>{category.name}</h3>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 justify-items-center">
                    {
                        bookCategories.map(book => <BookCard
                            key={book._id}
                            book={book}
                        ></BookCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Category;
