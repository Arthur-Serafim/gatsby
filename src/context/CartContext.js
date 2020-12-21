import React from 'react';

const CartContext = React.createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = React.useState([])

    return (
        <CartContext.Provider
            value={{
              cart, setCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = React.useContext(CartContext);

    if (!context)
        throw new Error('useCart must be within CartContext');

    const { cart, setCart } = context;
    return { cart, setCart };
}
