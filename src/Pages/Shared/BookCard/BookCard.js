import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { AiOutlinePlus } from 'react-icons/ai';
import { CartProvider } from '../../../Contexts/CartContext/CartContext';

const BookCard = ({ book }) => {
    const { _id, img, title, authorId, price } = book;
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

    return (
        <div className='w-[150px] sm:w-[180px] px-4 py-2 rounded-md border-2 hover:border-[#40A4DC] transition-all hover:shadow-2xl relative'>
            {/* Book Img */}
            <Link to={`/bookdetails/${_id}`}>
                <img src={img} className='w-[150px] sm:w-[180px] overflow-hidden' alt="" />
            </Link>
            {/* Book Content */}
            <div className='pt-1'>
                <Link to={`/bookdetails/${_id}`}>
                    <h3 className='text-xl font-semibold truncate mt-2 hover:text-[#40A4DC] hover:underline'>{title}</h3>
                </Link>
                <Link to={`/author/${authorInfo._id}`}>
                    <h5 className='text-lg truncate hover:text-[#40A4DC] hover:underline'>{authorInfo.author}</h5>
                </Link>
                {/* <div className='flex'>
                        <BsStarFill className='text-base mr-0.5 text-[#40A4DC]' />
                        <BsStarFill className='text-base mr-0.5 text-[#40A4DC]' />
                        <BsStarFill className='text-base mr-0.5 text-[#40A4DC]' />
                        <BsStarHalf className='text-base mr-0.5 text-[#40A4DC]' />
                        <BsStar className='text-base mr-0.5 text-[#40A4DC]' />
                    </div> */}
                <p className='text-lg text-rose-600 mt-1'><strong>{price}&#2547;</strong></p>
            </div>
            {/* add book to cart icon */}
            <button
                onClick={() => addToCart(book)}
                className='absolute bottom-0 right-0 p-2 hover:bg-[#40A4DC] hover:text-white rounded-tl'><AiOutlinePlus className=' ' /></button>
        </div>
    );
};

export default BookCard;

{/* <div className='w-6/12 pr-1'>
<h4 className='text-lg text-[#000000] pl-1 truncate ...'><strong>{title}</strong></h4>
<p className='text-sm md:text-base text-[#565656] pl-1 truncate ...'><strong>{`${author ? author : 'প্রযোজ্য নয়'}`}</strong></p>
</div> */}