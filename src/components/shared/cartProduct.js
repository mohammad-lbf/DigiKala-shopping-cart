import React , {useContext} from 'react';
import { quantityCounter } from '../helpers/cartChecker';
import '../../styles/cartProduct.css';
import { useSelector ,useDispatch } from 'react-redux';
import {cartIncrease, cartDecrease , cartRemove} from '../../redux/cart/cartAction';
import { Link } from 'react-router-dom';

// component

const CartProduct = ({price , title , image , quantity , id}) => {
    const state = useSelector(state => state.cartState)
    const currentProduct = state.selectedItems.find(item => item.id === id);
    const dispatch = useDispatch();

    return (
        <div className="cart-product mb-3 d-flex flex-column flex-lg-row align-items-center justify-content-between">
            <img src={image} alt="" className="me-lg-3 mb-3 mb-lg-0 me-0" />
            <div className="d-flex flex-column align-items-center align-items-lg-end">
            <span className="text-danger fw-bold mb-2">: عنوان کالا</span>    
            <p className="text-center text-lg-start" style={{fontSize:"15px"}}>{title}</p>
            <p className="mb-3" style={{fontSize:"15px"}}>{price} $ <span className="text-danger fw-bold">: قیمت کالا</span></p>
            <Link className="text-decoration-none mb-2" to={`/products/${id}`}><i class="bi bi-chevron-left"></i>مشاهده جزئیات</Link>
            <div className="d-flex align-items-center">
            {
                quantityCounter(state , id) === 1 && 
                <button onClick={()=> dispatch(cartRemove(currentProduct))} style={{width: "40px" , height: "40px"}} className="btn btn-danger m-1 text-center"><i className="bi bi-trash text-white"></i></button>
            }
            {
                quantityCounter(state , id) > 1 && 
                <button onClick={()=> dispatch(cartDecrease(currentProduct)) } style={{width: "40px" , height: "40px"}} className="btn btn-danger m-1 text-center">-</button>
            }
            <p className="mb-0 text-danger fw-bold" style={{fontSize:"15px"}}>{quantity} : تعداد</p>
            {
                quantityCounter(state , id) > 0 && 
                <button onClick={()=> dispatch(cartIncrease(currentProduct)) } style={{width: "40px" , height: "40px"}} className="btn btn-danger m-1 text-center">+</button>
            }
            </div>
            </div>
            
        </div>
        
    );
};

export default CartProduct;