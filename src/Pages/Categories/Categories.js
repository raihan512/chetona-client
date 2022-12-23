import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Categories = () => {
    const categories = useLoaderData();
    return (
        <section className='max-width'>
            <div className='mx-1.5 md:mx-2.5 my-14'>
                <h3 className='text-2xl md:text-4xl lg:text-6xl font-black text-[#40A4DC] text-center mb-10'>সকল ক্যাটাগরি</h3>
                {/* All Categories Container */}
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5'>
                    {
                        categories.map((category) =>
                            <button
                                key={category._id}
                                className='text-lg md:text-xl lg:text-2xl text-[#000000] px-5 md:px-10 py-2 bg-white rounded-md shadow-md border border-transparent transition-all hover:border-[#40A4DC] hover:-translate-y-1 hover:shadow-xl'>
                                <Link to={`/category/${category._id}`}>{category.name}</Link>
                            </button>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Categories;


// {
//     categories.map((category) =>
//         <button
//             key={category}
//             className='text-lg md:text-xl lg:text-2xl text-[#000000] px-5 md:px-10 py-2 bg-white rounded-md shadow-md border border-transparent transition-all hover:border-[#40A4DC] hover:-translate-y-1 hover:shadow-xl'>
//             <Link to={`/category/${category.name}`}>{category.name}</Link>
//         </button>
//     )
// }