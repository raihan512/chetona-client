import React from 'react';
import { AiFillMinusSquare } from "react-icons/ai";
import { TbSquareMinus, TbSquarePlus } from "react-icons/tb";
import { RiDeleteBin6Fill } from "react-icons/ri";

const CartItem = ({ item, handleIncreaseItem, handleDecreaseItem, handleDeleteItem }) => {
    const { _id, thumb, title, authorId, price, totalPrice, addedToCart } = item
    return (
        <div className=' flex justify-between items-center p-2 border border-[#40A4DC] border-b-0 last:border-b'>
            <div>
                <img src={thumb} className="h-24 md:h-40 mr-1" alt="" />
            </div>
            <div className='sm:flex justify-between items-center w-9/12'>
                {/* title */}
                <div className='sm:w-6/12'>
                    <h5 className='text-lg md:text-xl lg:text-2xl text-[#40A4DC] font-semibold'>{title}</h5>
                    <h6 className='text-sm md:text-base lg:text-lg text-[#40A4DC] font-semibold'>লেখকঃ {authorId}</h6>
                </div>
                {/* Action */}
                <div className='sm:w-6/12 flex justify-between items-center'>
                    {/* Quantity */}
                    <div className='flex items-center'>
                        <strong className='text-base md:text-lg lg:text-xl text-[#40A4DC] mr-2'>{addedToCart}</strong>
                        <strong className='text-base md:text-lg lg:text-xl text-[#40A4DC] mr-2'>x</strong>
                        <strong className='text-base md:text-lg lg:text-xl text-[#40A4DC] mr-2'>{price}</strong>
                        <strong className='text-base md:text-lg lg:text-xl text-[#40A4DC] mr-2'>=</strong>
                        <strong className='text-base md:text-lg lg:text-xl text-[#40A4DC] mr-2'>{totalPrice}&#2547;</strong>
                    </div>
                    <div className="flex items-center">
                        <button onClick={() => handleIncreaseItem({ price: parseInt(totalPrice) + parseInt(price), id: _id })}><TbSquarePlus className='text-xl md:text-2xl text-[#40A4DC]' /></button>
                        <button onClick={() => handleDecreaseItem({ price: parseInt(totalPrice) - parseInt(price), id: _id })}><TbSquareMinus className='text-xl md:text-2xl text-[#40A4DC]' /></button>
                        <button onClick={() => handleDeleteItem(_id)}><RiDeleteBin6Fill className='text-xl md:text-2xl text-red-600 ml-2' /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;