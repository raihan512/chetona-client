import React, { createContext, useState } from 'react';
import { toast } from 'react-hot-toast';
export const CartProvider = createContext();
const CartContext = ({ children }) => {
    const [cart, setCart] = useState([]);
    const addToCart = (book) => {
        const bookExist = cart.find((item) => item._id === book._id)
        if (bookExist) {
            setCart(cart.map((item) => (item._id === book._id ? { ...bookExist, addedToCart: bookExist.addedToCart + 1, price: bookExist.price = parseInt(bookExist.price) + parseInt(book.price) } : item)))
            toast.success("এই বইটি আপনার কার্টে আবারও যুক্ত করা হয়েছে!")
        } else {
            setCart([...cart, { ...book, addedToCart: 1 }])
            toast.success("এই বইটি আপনার কার্টে যুক্ত করা হয়েছে!")
        }
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


// const productExit = cart.find((item) => item.id === book.id)
// if (productExit) {
//     setcart(cart.map((item) => (item.id === book.id ? { ...productExit, qty: productExit.qty + 1 } : item)))
// } else {
//     setcart([...cart, { ...book, qty: 1 }])
// }