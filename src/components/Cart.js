import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartProduct from './shared/cartProduct';
import { checkout , clear } from '../redux/cart/cartAction';
const Cart = () => {
    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();

    return (
        <div className="container cart">
           <div className="row justify-content-lg-between">
                <div className="col-12 col-xl-8">
                {
                    state.selectedItems.map(item => <CartProduct key={item.id} id={item.id} quantity={item.quantity} image={item.image} price={item.price} title={item.title} />)
                }
                </div>

                {
                    state.checkout && 
                    <div className="col-12 col-xl-3 d-flex border flex-column align-items-center align-items-lg-start p-3 rounded">
                        <p>
                            you have checked out successfully
                        </p>
                        <Link onClick={()=> dispatch({type: "CLEAR"})} to="/products" className="btn btn-primary">buy more</Link>
                    </div>
                }
                {
                    state.itemsCounter > 0 &&
                    <div className="col-12 col-xl-3">
                    <div className="total p-2">
                        <p className="text-danger fw-bold">total items: {state.itemsCounter}</p>
                        <p className="text-primary fw-bold">total cost: {state.total} $</p>
                        <div className="d-flex justify-content-between mt-4">
                            <button onClick={() => dispatch(clear())} className="btn btn-outline-danger">پاک کردن</button>
                            <button onClick={() => dispatch(checkout())} className="btn btn-success">تسویه حساب</button>
                        </div>
                    </div>
                </div>
                }
                {
                    !state.checkout && state.itemsCounter === 0 &&
                    <div className="col-12 col-xl-3 d-flex border flex-column align-items-center align-items-xl-start p-3 rounded">
                        <p>
                            want to buy ?
                        </p>
                        <Link to="/products" className="btn btn-primary">go to shop</Link>
                    </div>
                }

           </div>
        </div>
    );
};

export default Cart;