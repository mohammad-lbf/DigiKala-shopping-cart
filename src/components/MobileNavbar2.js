import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MobileNavbar2 = () => {
    const cartState = useSelector(state => state.cartState)
    return (
            <nav style={{paddingTop: "57px"}} className="my-container pb-2 justify-content-between  mobile-nav-2 d-flex d-lg-none flex-row-reverse">
    <div className="search-bar justify-content-end rounded align-items-center d-flex bg-mycolor1 p-2">
        <input type="search" className="search-input w-100 text-end" placeholder="جستجو" />
        <i className="icon bi bi-search me-2"></i>
    </div>
    <div className="d-flex align-items-center">
    <Link to= "/cart" className="text-decoration-none">
            <div className="d-flex me-2">
            <i className="icon bi bi-cart text-dark"></i>
             <p style={{width: "15px" , height: "15px" , fontSize: "10px" , paddingTop: "1px"}} className="text-center m-0 rounded-circle bg-danger text-white">
                {cartState.itemsCounter} </p>   
            </div>
            </Link>
        <div className="d-flex flex-row-reverse align-items-center" role="button" data-bs-toggle="modal" data-bs-target="#login-modal"> 
            <i className="icon bi bi-box-arrow-in-left lh-0 me-2"></i>
            <p className="mb-1 me-1">ورود</p>
        </div>
    </div>
   </nav>
    );
};

export default MobileNavbar2;