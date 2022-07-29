import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/header.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const Header = () => {
    const cartState = useSelector(state => state.cartState)
    return (
        <>
        <header className="my-container start-0 bg-white w-100">
    {/* <!-- ******************نوبار شماره 1 موبایل ******************************* --> */}
    <nav className="mobile-header align-items-center flex-row-reverse justify-content-between d-lg-none d-flex w-100">
        <i data-bs-toggle="offcanvas" href="#header-humbergur-menu-offcanvas" role="button" className="icon bi bi-list"></i>
        <Link to="/products"><img src={logo} className="main-icon" alt="" /></Link>
        <i className=" icon bi bi-question-circle"></i>
    </nav>
    {/* <!-- *********************نوبار شماره 1 کامپیوتر***************************** --> */}
    <nav className="lg-header px-3 flex-row-reverse justify-content-between d-none border-bottom d-lg-flex w-100 ">
        <div className="d-flex w-50 justify-content-end">
            <div className="search-bar w-75 me-2 justify-content-end rounded align-items-center p-2 d-flex bg-mycolor1">
                <input type="search" className="search-input text-end" placeholder=" جستجو در دیجی کالا" />
                <i className="icon bi bi-search me-2"></i>
            </div>
            <Link className="m-0 p-0 d-flex align-items-center" to="/products"><img src={logo} className="main-icon" alt="" /></Link>
        </div>
        <div className="d-flex align-items-center">
            <Link to= "/cart" className="text-decoration-none">
            <div className="d-flex me-2">
            <i className="icon bi bi-cart text-dark"></i>
             <p style={{width: "15px" , height: "15px" , fontSize: "10px" , paddingTop: "1px"}} className="text-center m-0 rounded-circle bg-danger text-white">
                {cartState.itemsCounter} </p>   
            </div>
            </Link>
            <div className="d-flex border rounded px-2 py-2 flex-row-reverse align-items-center" role="button" data-bs-toggle="modal" data-bs-target="#login-modal"> 
                <i className="icon bi bi-box-arrow-in-left lh-0 me-1"></i>
                <p className="mb-1 me-2 text-center">ورود|ثبت نام</p>
            </div>
        </div>
    </nav>
</header>
</>
    );
};

export default Header;