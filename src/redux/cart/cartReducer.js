const initialState = {
    selectedItems:[],
    itemsCounter: 0,
    checkout: false,
    clear: false,
    total: 0
}

const sumItems = items => {
    const itemsCounter = items.reduce((total, product) => total + product.quantity, 0);
    let total = items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return {itemsCounter, total}
}

export const cartReducer = (state=initialState , action) => {
    console.log(state)
    switch(action.type){
        case "INCREASE":
           const increasedProductI =  state.selectedItems.findIndex(item => item.id == action.payload.id);
           state.selectedItems[increasedProductI].quantity++;
           return {...state , ...sumItems(state.selectedItems)}
           
        case "DECREASE":
            const decreasedProductI = state.selectedItems.findIndex(item => item.id == action.payload.id);
            state.selectedItems[decreasedProductI].quantity--;
            return{...state , ...sumItems(state.selectedItems)}
        case "ADD_ITEM":
            const addedItem = state.selectedItems.find(item => item.id == action.payload.id);
            if(!addedItem){
                state.selectedItems.push({...action.payload , quantity:1})
            }
            return{
                ...state,
                selectedItems: [...state.selectedItems],
                 ...sumItems(state.selectedItems)
            } 
            console.log(state)
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id != action.payload.id);
            return{
                ...state,
                selectedItems: newSelectedItems,
                 ...sumItems(newSelectedItems)
            }  
        case "CHECKOUT":
            return{
                selectedItems:[],
                itemsCounter: 0,
                checkout: true,
                clear: false,
                total:0
            } 
        case "CLEAR":
            return{
                selectedItems:[],
                itemsCounter: 0,
                checkout: false,
                clear: false,
                total: 0
            }
        default : return state;              
    }
}