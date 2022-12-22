import React, { createContext, useEffect, useState } from 'react';

export const cartProvider = createContext();

const CartContext = ({ children }) => {
    const [cartItems, setCartItems] = useState(0);
    const cartInfo = { cartItems };
    return (
        <div>
            <cartProvider.Provider value={cartInfo}>
                {children}
            </cartProvider.Provider>
        </div>
    );
};

export default CartContext;