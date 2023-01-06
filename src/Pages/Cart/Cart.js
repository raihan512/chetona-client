import React, { useContext, useEffect } from 'react';
import { CartProvider } from '../../Contexts/CartContext/CartContext';
import CartItem from './CartItem/CartItem';

const Cart = () => {
    const { cart, setCart } = useContext(CartProvider);
    let totalPrice = 0;
    const discount = 200;
    const deliveryCharge = 50;
    for (let i in cart) {
        totalPrice = totalPrice + (cart[i].totalPrice);
    }

    const finalTotal = (deliveryCharge + totalPrice) - discount;

    const handleIncreaseItem = ({ price, id }) => {
        const selectedItem = cart.find(item => item._id === id);
        setCart(cart.map((item) => (item._id === id ?
            {
                ...selectedItem,
                addedToCart: selectedItem.addedToCart + 1,
                totalPrice: price
            } : item)))

    }
    const handleDecreaseItem = ({ price, id }) => {
        const selectedItem = cart.find(item => item._id === id);
        setCart(cart.map((item) => (item._id === id ?
            {
                ...selectedItem,
                addedToCart: selectedItem.addedToCart - 1,
                totalPrice: price
            } : item)))
    }
    return (
        <section className='max-width'>
            <div className='mx-1.5 md:mx-2.5 mb-14'>
                <h3 className='text-2xl md:text-4xl lg:text-6xl font-black text-[#40A4DC] text-center mt-5 mb-10'>আপনার কার্ট</h3>
                {/* cart container */}
                <div>
                    {
                        cart.map((item) => <CartItem
                            key={item._id}
                            item={item}
                            handleIncreaseItem={handleIncreaseItem}
                            handleDecreaseItem={handleDecreaseItem}
                        ></CartItem>)
                    }
                </div>
                <div className='pt-5 pr-5 ml-auto sm:w-96'>
                    <div className='flex justify-between items-center'>
                        <p className='text-lg text-[#40A4DC]'>মোট </p>
                        <p className='text-lg text-[#40A4DC]'><strong>{totalPrice} &#2547;</strong></p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-lg text-[#40A4DC]'>ডেলিভারি চার্জ</p>
                        <p className='text-lg text-[#40A4DC]'><strong>{deliveryCharge} &#2547;</strong></p>
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='text-lg text-[#40A4DC]'>ডিসকাউন্ট</p>
                        <p className='text-lg text-[#40A4DC]'><strong>{discount} &#2547;</strong></p>
                    </div>
                    <div className='flex justify-between items-center border-t-2 border-[#40A4DC] mt-2'>
                        <p className='text-lg text-[#40A4DC]'>সর্বমোট </p>
                        <p className='text-lg text-[#40A4DC]'><strong>{finalTotal} &#2547;</strong></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;