export const initialState = {
    cart: [],
    user: null,
}

export const getCartTotal = (cart) => cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) =>{
    console.log(action);
    switch(action.type){
        case 'ADD_TO_CART':
            // add items to cart
            return { 
                ...state,
                cart: [...state.cart, action.item]
            }
        case 'REMOVE_FROM_CART':
            // create a cart clone
            let newCart = [...state.cart];

            // checking for product existance
            const index = state.cart.findIndex((cart) => cart.id === action.id);

            if(index >= 0)
            {
                // remove items from cart if it exists
                newCart.splice(index, 1);
            }
            else {
                console.warn(`Cannot remove (id: ${action.id}) as its not in cart`);
            }

            return { ...state, cart: newCart };
        default:
            return state;
    }
}

export default reducer;