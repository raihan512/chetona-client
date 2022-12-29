import React, { createContext, useState } from 'react';
import { toast } from 'react-hot-toast';
export const CartProvider = createContext();
const CartContext = ({ children }) => {
    const [cart, setCart] = useState([
        {
            "_id": "14",
            "title": "বিবাহভাবনা",
            "thumb": "https://i.ibb.co/7YBwbT7/IMG-1062.jpg",
            "img": "https://i.ibb.co/5jD6BH8/IMG-1613.jpg",
            "summary": "- মুরিদপুরে সবাই পীর, সবাই মুরিদ। মুরিদপুরে যা ঘটে তা আপাত হাস্যরসের যোগান দেয় কিন্তু আড়ালে তুলে ধরে সমাজে বিদ্যমান বাস্তবতা। মুরিদপুরে তাই পীর, মুরিদ সবাইকে ছাড়িয়ে সময়ই হয়ে উঠে সবচেয়ে বড় নায়ক। আমাদের সময়ের এক রম্যচিত্র ফুতে উঠেছে এই বইয়ে।",
            "authorId": "10",
            "price": "100",
            "categories": [
                4
            ],
            "addedToCart": 1,
            "totalPrice": "100"
        },
        {
            "_id": "15",
            "title": "দ্রোহের তপ্ত লাভা",
            "thumb": "https://i.ibb.co/c86KzVg/IMG-1613.jpg",
            "img": "https://i.ibb.co/5jD6BH8/IMG-1613.jpg",
            "summary": "- মুরিদপুরে সবাই পীর, সবাই মুরিদ। মুরিদপুরে যা ঘটে তা আপাত হাস্যরসের যোগান দেয় কিন্তু আড়ালে তুলে ধরে সমাজে বিদ্যমান বাস্তবতা। মুরিদপুরে তাই পীর, মুরিদ সবাইকে ছাড়িয়ে সময়ই হয়ে উঠে সবচেয়ে বড় নায়ক। আমাদের সময়ের এক রম্যচিত্র ফুতে উঠেছে এই বইয়ে।",
            "authorId": "11",
            "price": "100",
            "categories": [
                3,
                4,
                5
            ],
            "addedToCart": 1,
            "totalPrice": "100"
        },
        {
            "_id": "4",
            "title": "মাওয়ায়েজে সাহাবা",
            "thumb": "https://i.ibb.co/6b2JrW8/IMG-3454.jpg",
            "img": "https://i.ibb.co/5jD6BH8/IMG-1613.jpg",
            "summary": "- মুরিদপুরে সবাই পীর, সবাই মুরিদ। মুরিদপুরে যা ঘটে তা আপাত হাস্যরসের যোগান দেয় কিন্তু আড়ালে তুলে ধরে সমাজে বিদ্যমান বাস্তবতা। মুরিদপুরে তাই পীর, মুরিদ সবাইকে ছাড়িয়ে সময়ই হয়ে উঠে সবচেয়ে বড় নায়ক। আমাদের সময়ের এক রম্যচিত্র ফুতে উঠেছে এই বইয়ে।",
            "authorId": "2",
            "price": "500",
            "categories": [
                7
            ],
            "addedToCart": 1,
            "totalPrice": "500"
        },
        {
            "_id": "3",
            "title": "শাকহাব প্রান্তরে",
            "thumb": "https://i.ibb.co/m6WfT9d/IMG-2501.jpg",
            "img": "https://i.ibb.co/5jD6BH8/IMG-1613.jpg",
            "summary": "- মুরিদপুরে সবাই পীর, সবাই মুরিদ। মুরিদপুরে যা ঘটে তা আপাত হাস্যরসের যোগান দেয় কিন্তু আড়ালে তুলে ধরে সমাজে বিদ্যমান বাস্তবতা। মুরিদপুরে তাই পীর, মুরিদ সবাইকে ছাড়িয়ে সময়ই হয়ে উঠে সবচেয়ে বড় নায়ক। আমাদের সময়ের এক রম্যচিত্র ফুতে উঠেছে এই বইয়ে।",
            "authorId": "1",
            "price": "400",
            "categories": [
                2,
                6
            ],
            "addedToCart": 2,
            "totalPrice": 800
        },
        {
            "_id": "2",
            "title": "মুরিদপুরের পীর",
            "thumb": "https://i.ibb.co/vdCszqg/IMG-2500.jpg",
            "img": "https://i.ibb.co/5jD6BH8/IMG-1613.jpg",
            "summary": "- মুরিদপুরে সবাই পীর, সবাই মুরিদ। মুরিদপুরে যা ঘটে তা আপাত হাস্যরসের যোগান দেয় কিন্তু আড়ালে তুলে ধরে সমাজে বিদ্যমান বাস্তবতা। মুরিদপুরে তাই পীর, মুরিদ সবাইকে ছাড়িয়ে সময়ই হয়ে উঠে সবচেয়ে বড় নায়ক। আমাদের সময়ের এক রম্যচিত্র ফুতে উঠেছে এই বইয়ে।",
            "authorId": "1",
            "price": "300",
            "categories": [
                1,
                4
            ],
            "addedToCart": 1,
            "totalPrice": "300"
        }
    ]);
    const addToCart = (book) => {
        const bookExist = cart.find((item) => item._id === book._id)
        if (bookExist) {
            setCart(cart.map((item) => (item._id === book._id ?
                {
                    ...bookExist,
                    addedToCart: bookExist.addedToCart + 1,
                    totalPrice: parseInt(bookExist.totalPrice) + parseInt(book.price)
                } : item)))
            toast.success("এই বইটি আপনার কার্টে আবারও যুক্ত করা হয়েছে!")
        } else {
            setCart([...cart, { ...book, addedToCart: 1, totalPrice: book.price }])
            toast.success("এই বইটি আপনার কার্টে যুক্ত করা হয়েছে!")
        }
    }
    const cartInfo = { addToCart, setCart, cart }
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