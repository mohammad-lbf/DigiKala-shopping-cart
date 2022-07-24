import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import styled from 'styled-components';
import { isInCart , quantityCounter } from '../components/helpers/cartChecker';
import {cartIncrease, cartDecrease , cartAdd , cartRemove , checkout , clear } from '../redux/cart/cartAction';
const DetailesPage = () => {
    const params = useParams();
    const productsState = useSelector(state => state.productsState);
    const cartState = useSelector(state => state.cartState);
    const currentProduct = productsState.products.find(product => product.id == params.id);
    const currentCartProduct = cartState.selectedItems.find(item => item.id == params.id);
    const dispatch = useDispatch();
    const Detailes = styled.div`
    img{
        width: 300px;
        height: 300px;
    }
    button , a{
        width:200px
    }
    
    `
    return (
        <Detailes className="container mt-2 mt-lg-5 rounded py-5">
            <div className="row align-items-center justify-content-center">
                <div className="col-12 col-lg-6 text-center">
                    <img className="mt-1 mt-lg-3 border-bottom pb-1" src={currentProduct.image} />
                </div>
                <div className="col-12 col-lg-6 p-2 rounded text-center text-lg-start">
                    <p className="fw-bold text-danger">product name :</p>
                    <p>{currentProduct.title}</p>
                    <p className="fw-bold text-danger">description: </p>
                    <p>{currentProduct.description}</p>
                    <p className="fw-bold text-danger">price: </p>
                    <p>{currentProduct.price} $</p>
                    <div className="d-flex flex-column align-items-center">
                    <div className="d-flex align-items-center mt-2" >
                { isInCart(cartState , currentProduct.id) ?
                    <button  style={{width:"40px" , height: "40px" , fontSize:"15px"}} className="text-center btn btn-danger mx-2" onClick={() => dispatch(cartIncrease(currentCartProduct))}>+</button>
                    : <button className="btn btn-danger" onClick={() => dispatch(cartAdd(currentProduct))}>افزودن به سبد خرید</button>

                }
                {quantityCounter(cartState , currentProduct.id) > 0 && <p className="mb-0 text-danger fw-bold">{quantityCounter(cartState , currentProduct.id)} :تعداد</p>}
               
                
                    {quantityCounter(cartState , currentProduct.id) === 1 && 
                    <button style={{width:"40px" , height: "40px" , fontSize:"15px"}} className="text-center btn btn-danger mx-2" onClick={() => dispatch(cartRemove(currentCartProduct))}><i className="bi bi-trash text-white"></i></button>}
                    {quantityCounter(cartState , currentProduct.id) > 1 &&
                    <button  style={{width:"40px" , height: "40px" , fontSize:"15px"}} className="text-center btn btn-danger mx-2" onClick={() => dispatch(cartDecrease(currentProduct))}>_</button>}
                      
                </div>
                        <Link className="btn btn-primary ms-0 mt-2" to="/products">بازگشت به فروشگاه </Link>
                    </div>


                </div>

            </div>
        </Detailes>
    );
};

export default DetailesPage;