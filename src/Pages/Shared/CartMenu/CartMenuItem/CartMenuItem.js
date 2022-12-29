import React from 'react';

const CartMenuItem = ({ cartItem }) => {
    const { thumb, title, totalPrice, addedToCart } = cartItem;
    return (
        <div className='flex justify-between items-center border rounded-sm mb-2 p-2'>
            <img src={thumb} className="h-[70px]" alt="" />
            <div>
                <p className='text-white text-lg'>{title}</p>
                <p className='text-right text-white text-base'>পরিমাণঃ {addedToCart}</p>
                <p className='text-right text-white text-base'>মোটঃ {totalPrice} &#2547;</p>
            </div>
        </div>
    );
};

export default CartMenuItem;