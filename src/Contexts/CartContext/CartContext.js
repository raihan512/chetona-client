import React, { createContext, useState } from 'react';
import { toast } from 'react-hot-toast';
export const CartProvider = createContext();
const CartContext = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartDelItem, setCartDelItem] = useState({});
    const addToCart = (book) => {
        const bookExist = cart.find((item) => item._id === book._id)
        if (bookExist) {
            setCart(cart.map((item) => (item._id === book._id ?
                {
                    ...bookExist,
                    addedToCart: bookExist.addedToCart + 1,
                    totalPrice: (bookExist.totalPrice) + (book.price)
                } : item)))
            toast.success("এই বইটি আপনার কার্টে আবারও যুক্ত করা হয়েছে!")
        } else {
            setCart([...cart, { ...book, addedToCart: 1, totalPrice: book.price }])
            toast.success("এই বইটি আপনার কার্টে যুক্ত করা হয়েছে!")
        }
    }
    console.log(cartDelItem);
    const cartInfo = { addToCart, setCart, cart, cartDelItem, setCartDelItem }
    return (
        <div>
            <CartProvider.Provider value={cartInfo}>
                {children}
            </CartProvider.Provider>
        </div>
    );
};

export default CartContext;
