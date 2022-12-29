import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartProvider } from '../../../Contexts/CartContext/CartContext';
import CartMenuItem from './CartMenuItem/CartMenuItem';

const CartMenu = () => {
    const { cart } = useContext(CartProvider);
    let totalPrice = 0;
    for (let i in cart) {
        totalPrice = totalPrice + parseInt(cart[i].totalPrice);
    }
    return (
        <div className='bg-[#40A4DC] p-2'>
            <div className='w-[250px] max-h-[200px] overflow-y-auto'>
                {
                    cart.map((cartItem, i) => <CartMenuItem
                        key={i}
                        cartItem={cartItem}
                    ></CartMenuItem>)
                }
            </div>
            <p className=' text-white text-lg text-right border-t'>সর্বমোটঃ {totalPrice} &#2547;</p>
            <p className=' text-white text-base text-right'><Link to='/cart'>বিস্তারিত দেখুন</Link></p>
        </div>
    );
};

export default CartMenu;