import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { CartProvider } from '../../../Contexts/CartContext/CartContext';

const BookCard = ({ book }) => {
    const { addToCart } = useContext(CartProvider)
    const { _id, img, title, authorId, price } = book;
    // Load Author By their id
    const { data: authorInfo = [] } = useQuery({
        queryKey: ['authorInfo', authorId],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/${authorId}`);
            const data = await res.json();
            return data;
        }
    })
    // Destructuring Author Details
    const { author, authorImg } = authorInfo;

    return (
        <div className='w-[310px] sm:w-[350px] h-[150px] sm:h-[180px] rounded-sm border border-[#40A4DC] box-border flex justify-between items-center  mb-10'>
            <div className='w-5/12 h-[155px] sm:h-[175px] -mt-12 ml-2'>
                <div className='h-[155px] sm:h-[175px] relative'>
                    <img src={img} className="h-full min-w-[100px] p-1 border-2 border-[#40A4DC] bg-[#F6F6F6]" alt={`${title}`} />
                    <img src={`${authorImg ? authorImg : 'https://i.ibb.co/cJSy10s/user-50-X50.png'}`} className='absolute -bottom-3 sm:-bottom-5 left-1/4 h-[35px] sm:h-[50px] w-[35px] sm:w-[50px] bg-slate-300 rounded-full border-2 border-[#40A4DC]' alt={`${author}`} />
                </div>
            </div>
            <div className='w-6/12 pr-1'>
                <h4 className='text-lg text-[#000000] pl-1 truncate ...'><strong>{title}</strong></h4>
                <p className='text-sm md:text-base text-[#565656] pl-1 truncate ...'><strong>{`${author ? author : 'প্রযোজ্য নয়'}`}</strong></p>
                <div className='flex mb-2'>
                    <BsStarFill className='mr-0.5 text-[#40A4DC]' />
                    <BsStarFill className='mr-0.5 text-[#40A4DC]' />
                    <BsStarFill className='mr-0.5 text-[#40A4DC]' />
                    <BsStarHalf className='mr-0.5 text-[#40A4DC]' />
                    <BsStar className='mr-0.5 text-[#40A4DC]' />
                </div>
                <p className='flex items-center mb-1 text-sm md:text-base'><strong>{price}&#2547;</strong></p>
                <div className='flex'>
                    <button
                        className='bg-[#40A4DC] py-1 px-5 mr-2 text-white rounded-sm text-sm border border-transparent hover:bg-white hover:text-[#40A4DC] hover:border-[#40A4DC]'>
                        <Link to={`/bookdetails/${_id}`}>দেখুন</Link>
                    </button>
                    <button
                        onClick={() => addToCart(book)}
                        className='bg-white py-1 px-5 mr-2 text-[#40A4DC] rounded-sm text-sm border border-transparent hover:bg-[#40A4DC] hover:text-white
                     hover:border-[#40A4DC]'>
                        কিনুন
                    </button>
                </div>
            </div>
        </div >
    );
};

export default BookCard;