export const CartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return{
                ...state,
                cart: [action.payload, ...state.cart]
            };
        default:
            return state
    }
}