import React, { createContext, useState } from 'react';
import { toast } from 'react-hot-toast';
export const CartProvider = createContext();
const CartContext = ({ children }) => {
    const [cart, setCart] = useState([{
        "_id": "63ae7b4f320aca0554473681",
        "title": "মুরিদপুরের পীর",
        "img": "https://i.ibb.co/Tr810WG/muridpurer-pir.jpg",
        "summary": "- মুরিদপুরে সবাই পীর, সবাই মুরিদ। মুরিদপুরে যা ঘটে তা আপাত হাস্যরসের যোগান দেয় কিন্তু আড়ালে তুলে ধরে সমাজে বিদ্যমান বাস্তবতা। মুরিদপুরে তাই পীর, মুরিদ সবাইকে ছাড়িয়ে সময়ই হয়ে উঠে সবচেয়ে বড় নায়ক। আমাদের সময়ের এক রম্যচিত্র ফুতে উঠেছে এই বইয়ে।",
        "authorId": "63ae7e34320aca05544ba6f0",
        "price": 300,
        "categories": [
            "63ae7d11320aca055449d670",
            "63ae7d11320aca055449d673"
        ],
        "addedToCart": 4,
        "totalPrice": 1200
    },
    {
        "_id": "63ae7b4f320aca0554473682",
        "title": "শাকহাব প্রান্তরে",
        "img": "https://i.ibb.co/NrzPrbp/shakhab-prantor.jpg",
        "summary": "- মুরিদপুরে সবাই পীর, সবাই মুরিদ। মুরিদপুরে যা ঘটে তা আপাত হাস্যরসের যোগান দেয় কিন্তু আড়ালে তুলে ধরে সমাজে বিদ্যমান বাস্তবতা। মুরিদপুরে তাই পীর, মুরিদ সবাইকে ছাড়িয়ে সময়ই হয়ে উঠে সবচেয়ে বড় নায়ক। আমাদের সময়ের এক রম্যচিত্র ফুতে উঠেছে এই বইয়ে।",
        "authorId": "63ae7e34320aca05544ba6f0",
        "price": 400,
        "categories": [
            "63ae7d11320aca055449d671",
            "63ae7d11320aca055449d674"
        ],
        "addedToCart": 3,
        "totalPrice": 1200
    },
    {
        "_id": "63ae7b4f320aca0554473685",
        "title": "আকিদার মর্মকথা",
        "img": "https://i.ibb.co/Yft1j64/akidar-mormokotha.jpg",
        "summary": "- মুরিদপুরে সবাই পীর, সবাই মুরিদ। মুরিদপুরে যা ঘটে তা আপাত হাস্যরসের যোগান দেয় কিন্তু আড়ালে তুলে ধরে সমাজে বিদ্যমান বাস্তবতা। মুরিদপুরে তাই পীর, মুরিদ সবাইকে ছাড়িয়ে সময়ই হয়ে উঠে সবচেয়ে বড় নায়ক। আমাদের সময়ের এক রম্যচিত্র ফুতে উঠেছে এই বইয়ে।",
        "authorId": "63ae7e34320aca05544ba6f3",
        "price": 600,
        "categories": [
            "63ae7d11320aca055449d676"
        ],
        "addedToCart": 4,
        "totalPrice": 2400
    }]);
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
            toast.success("এই বইটি আপনার কার্টে আবারও যুক্ত করা হয়েছে!")
        } else {
            setCart([...cart, { ...book, addedToCart: 1, totalPrice: book.price }])
            toast.success("এই বইটি আপনার কার্টে যুক্ত করা হয়েছে!")
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
