import React, { createContext, useState } from 'react';
import { toast } from 'react-hot-toast';
export const CartProvider = createContext();
const CartContext = ({ children }) => {
    const [cart, setCart] = useState([]);
    // Remove cart item from cartitem page
    const removeFromCart = (selectedBook) => {
        const itemExist = cart.find((item) => item._id === selectedBook._id);
        if (itemExist) {
            setCart(cart.filter((item) => item._id !== selectedBook._id));
            toast.success(`আপনার কার্ট থেকে ${selectedBook.title} বইটি ডিলিট করা হয়েছে!`)
        }
    }
    // Add book to the cart on click from book card
    const addToCart = (book) => {
        const bookExist = cart.find((item) => item._id === book._id)
        if (bookExist) {
            setCart(cart.map((item) => (item._id === book._id ?
                {
                    ...bookExist,
                    addedToCart: bookExist.addedToCart + 1,
                    totalPrice: (bookExist.totalPrice) + (book.price)
                } : item)))
            toast.success(`${book.title} বইটি আপনার কার্টে আবারও যুক্ত করা হয়েছে!`)
        } else {
            setCart([...cart, { ...book, addedToCart: 1, totalPrice: book.price }])
            toast.success(`${book.title} বইটি আপনার কার্টে যুক্ত করা হয়েছে!`)
        }
    }
    const cartInfo = { addToCart, setCart, cart, removeFromCart }
    return (
        <div>
            <CartProvider.Provider value={cartInfo}>
                {children}
            </CartProvider.Provider>
        </div>
    );
};

export default CartContext;
