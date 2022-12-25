import React, { createContext, useState } from 'react';
import { toast } from 'react-hot-toast';
export const CartProvider = createContext();
const CartContext = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (book) => {
        const newCart = [...cart, book];
        setCart(newCart)
        toast.success("এই বইটি আপনার কার্টে যুক্ত করা হয়েছে!")
    }
    const cartInfo = { addToCart, cart }
    return (
        <div>
            <CartProvider.Provider value={cartInfo}>
                {children}
            </CartProvider.Provider>
        </div>
    );
};

export default CartContext;