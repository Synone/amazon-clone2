
export const initState = {
    basket: [],
    seeBasket:[],
    user: null,
    searchQuery: ''
};


// SELECTOR
// export const getBasketTotal = (basket) =>{
//     basket?.reduce((total, currentValue) => currentValue.price + total,0)
// }
const reducer = (state,action) =>{

    switch (action.type) {
        case 'ADD_TO_BASKET':
            
            return {
                ...state,
                basket: [...state.basket, action.item]
                
            };
        case 'SEE_BASKET':
            return {
                ...state,
                seeBasket: [action.item]
            }
        case 'DELETE_FROM_BASKET':
            // The findIndex() method returns the index (position) of the first element that passes a test.
            const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
            )
            let newBasket = [...state.basket]
            if(index >= 0){
                newBasket.splice(index,1)
            } else{
                console.warn('Cannot delete product as it is not in the basket!')
            }
            return  {
                ...state,
                basket: newBasket
            };
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket:[]
            }    
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'CHANGE_INPUT':
            return {
                ...state,
                searchQuery: action.input
            }
        default:
            return state
    }
}

export default reducer;