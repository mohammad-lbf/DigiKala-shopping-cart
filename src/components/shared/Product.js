import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useSelector , useDispatch } from 'react-redux';
import {cartIncrease, cartDecrease , cartAdd , cartRemove , checkout , clear } from '../../redux/cart/cartAction';
import { isInCart , quantityCounter } from '../helpers/cartChecker';
const Card = styled.div`
width: 300px;
height: 550px;
.title-con{
    height:70px;
}
img{
    width:calc(100% - 3rem);
    margin: auto;
    height: 250px;
}
border: 1px solid #e0e0e0;
p{
    font-size:14px;
}
transition: all 0.3s;
&:hover{
    box-shadow: 5px 5px 10px #e0e0e0,
                -5px -5px 10px #e0e0e0
    ;
}
a{
    text-decoration : none;
    font-size:15px;
}

`
const Product = ({id,title , rating , image , price , productDetailes}) => {
    const cartState = useSelector(state => state.cartState);
    const dispatch = useDispatch();
    const currentProduct = cartState.selectedItems.find(item => item.id == id)

    return (
        <Card className="pt-3 px-3 pb-1 mx-1 rounded mb-2 d-flex flex-column align-items-center">
            <Link className="w-100" to={`/products/${id}`}>
              <img className="mt-4 mb-2" src={image} />
            </Link>
            <div className="title-con d-flex justify-content-start w-100 mb-3">
               <p className="text-start mt-3">{title}</p>
            </div>
            <div className="d-flex justify-content-start align-items-center w-100">
                <i className="bi bi-star-fill text-warning"></i>
                <p className="mb-0 ms-1 w-100 text-start">{rating.rate}</p>
            </div>
                <p className="w-100 text-start mt-3 mb-2 fw-bold text-start">{price} $</p>
                <Link className="w-100 text-start mb-2" to={`/products/${id}`}><i className="bi bi-chevron-left"></i>مشاهده جزئیات </Link>
                <div className="d-flex align-items-center mt-2" >
                { isInCart(cartState , id) ?
                    <button className="btn btn-danger mx-2" onClick={() => dispatch(cartIncrease(currentProduct))}>+</button>
                    : <button className="btn btn-danger" onClick={() => dispatch(cartAdd(productDetailes))}>افزودن به سبد خرید</button>

                }
                {quantityCounter(cartState , id) > 0 && <p className="mb-0 text-danger fw-bold">{quantityCounter(cartState , id)} :تعداد </p>}
               
                
                    {quantityCounter(cartState , id) === 1 && 
                    <button className="btn btn-danger mx-2" onClick={() => dispatch(cartRemove(currentProduct))}><i className="bi bi-trash text-white"></i></button>}
                    {quantityCounter(cartState , id) > 1 &&
                    <button className="btn btn-danger mx-2" onClick={() => dispatch(cartDecrease(productDetailes))}>_</button>}
                      
                </div>
        </Card>
    );
};

export default Product;