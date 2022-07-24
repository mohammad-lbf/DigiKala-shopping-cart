import React , {useContext} from 'react';
import { quantityCounter } from '../helpers/cartChecker';
import '../../styles/cartProduct.css';
import { useSelector ,useDispatch } from 'react-redux';
import {cartIncrease, cartDecrease , cartRemove} from '../../redux/cart/cartAction';

// component

const CartProduct = ({price , title , image , quantity , id}) => {
    const state = useSelector(state => state.cartState)
    const currentProduct = state.selectedItems.find(item => item.id === id);
    const dispatch = useDispatch();

    return (
        <div className="cart-product mb-3 d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-between">
            <img src={image} />
            <h3 className="fs-5 ">{title}</h3>
            <h3 className="fs-5">{price} $</h3>
            <div className="d-flex align-items-center">
            {
                quantityCounter(state , id) === 1 && 
                <button onClick={()=> dispatch(cartRemove(currentProduct))} style={{width: "40px" , height: "40px"}} className="btn btn-danger m-1 text-center"><i className="bi bi-trash text-white"></i></button>
            }
            {
                quantityCounter(state , id) > 1 && 
                <button onClick={()=> dispatch(cartDecrease(currentProduct)) } style={{width: "40px" , height: "40px"}} className="btn btn-danger m-1 text-center">-</button>
            }
            <h3 className="fs-5 m-0">{quantity}</h3>
            {
                quantityCounter(state , id) > 0 && 
                <button onClick={()=> dispatch(cartIncrease(currentProduct)) } style={{width: "40px" , height: "40px"}} className="btn btn-danger m-1 text-center">+</button>
            }
            </div>
        </div>
        
    );
};

export default CartProduct;