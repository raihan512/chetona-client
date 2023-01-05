import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { TfiUser } from "react-icons/tfi";

const Author = () => {
    const author = useLoaderData();
    return (
        <section className='max-width'>
            <div className='mx-1.5 md:mx-2.5 mb-14'>
                <h3 className='text-2xl md:text-4xl lg:text-6xl font-black text-[#40A4DC] text-center mt-5 mb-10'>পরিচিতি</h3>
                <div className='flex items-center justify-between'>
                    <div className='w-4/12'>
                        {
                            author.authorImg ? <img src={author.authorImg} alt="" /> : <TfiUser className='text-9xl float-left mt-40' />
                        }
                    </div>
                    <div className='w-8/12'>
                        <h4 className='text-2xl font-semibold mb-3'>{author.author}</h4>
                        <p className='text-justify text-xl'>{author.aboutAuthor}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Author;