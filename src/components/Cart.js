import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartProduct from './shared/cartProduct';
import { checkout , clear } from '../redux/cart/cartAction';
import EmptyLogo from '../assets/empty-cart.svg'
const Cart = () => {
    const state = useSelector(state => state.cartState);
    const dispatch = useDispatch();

    return (
        <div className="container cart mt-4">
           <div className="row justify-content-lg-between">
                <div className="col-12 col-xl-8">
                {
                    state.selectedItems.map(item => <CartProduct key={item.id} id={item.id} quantity={item.quantity} image={item.image} price={item.price} title={item.title} />)
                }
                {
                    state.itemsCounter == 0 && 
                    <div className="w-100 mb-3 mb-xl-0 text-center border rounded p-3 d-flex align-items-center flex-column">
                        <p className="text-danger fs-2">سبد خرید شما خالی است</p>
                        <img width="300px" height="300px" src={EmptyLogo} />
                    </div>
                }
                </div>

                {
                    state.checkout && 
                    <div className="col-12 col-xl-3 d-flex border flex-column align-items-center  p-3 rounded">
                        <p className="fw-bold text-success mb-4">
                            تسویه حساب با موفقیت انجام شد
                        </p>
                        <Link onClick={()=> dispatch({type: "CLEAR"})} to="/products" className="btn btn-danger">بازگشت به فروشگاه</Link>
                    </div>
                }
                {
                    state.itemsCounter > 0 &&
                    <div className="col-12 col-xl-3">
                    <div className="total p-2 text-end">
                        <p className="text-danger fw-bold">تعداد کالاها: {state.itemsCounter}</p>
                        <p className="text-primary fw-bold text-end">{state.total}$ : مجموع قیمت</p>
                        <p className="fw-bold text-muted"> %0 : تخفیف</p>
                        <div className="d-flex justify-content-between mt-4">
                            <button onClick={() => dispatch(clear())} className="btn btn-outline-danger">پاک کردن</button>
                            <button onClick={() => dispatch(checkout())} className="btn btn-success">تسویه حساب</button>
                        </div>
                    </div>
                </div>
                }
                {
                    !state.checkout && state.itemsCounter === 0 &&
                    <div className="col-12 col-xl-3 d-flex border flex-column align-items-center p-3 rounded">
                        <p>
                            قصد خرید دارید؟
                        </p>
                        <Link to="/products" className="btn btn-danger">رفتن به فروشگاه</Link>
                    </div>
                }

           </div>
        </div>
    );
};

export default Cart;