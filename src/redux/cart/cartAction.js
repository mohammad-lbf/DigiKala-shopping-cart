const cartIncrease = product =>{
    return {
        type: "INCREASE",
        payload: product
    }
}
const cartDecrease = product =>{
    return {
        type: "DECREASE",
        payload: product
    }
}
const cartAdd = product =>{
    return{
        type: "ADD_ITEM",
        payload: product
    }
}
const cartRemove = product =>{
    return{
        type: "REMOVE_ITEM",
        payload: product
    }
}
const checkout = ()=>{
    return{
        type: "CHECKOUT",
    }
}
const clear = ()=>{
    return {
        type: "CLEAR"
    }
}
export {cartIncrease, cartDecrease , cartAdd , cartRemove , checkout , clear }