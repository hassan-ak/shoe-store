// React Import
import React, { createContext, useReducer } from 'react';
// Reducer Imports
import { CartReducer } from './CartReducer';

// Initial State
const initialState = {
    cart: [],
}

// Create Context
export const CartContext = createContext(initialState);

// Cart Context Provider
const CartContextProvider = ({children}) => {
    // Define State using cart Reducer
    const [ state, dispatch ] = useReducer(CartReducer, initialState);
    return(
        <CartContext.Provider 
            value={{
                cart: state.cart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;