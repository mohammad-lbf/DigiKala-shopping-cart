import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/header.css';

const Header = () => {
    return (
        <>
        <header className="my-container start-0 bg-white w-100">
    {/* <!-- ******************نوبار شماره 1 موبایل ******************************* --> */}
    <nav className="mobile-header align-items-center flex-row-reverse justify-content-between d-lg-none d-flex w-100">
        <i data-bs-toggle="offcanvas" href="#header-humbergur-menu-offcanvas" role="button" className="icon bi bi-list"></i>
        <img src={logo} className="main-icon" alt="" />
        <i className=" icon bi bi-question-circle"></i>
    </nav>
    {/* <!-- *********************نوبار شماره 1 کامپیوتر***************************** --> */}
    <nav className="lg-header px-3 flex-row-reverse justify-content-between d-none border-bottom d-lg-flex w-100 ">
        <div className="d-flex w-50 justify-content-end">
            <div className="search-bar w-75 me-2 justify-content-end rounded align-items-center p-2 d-flex bg-mycolor1">
                <input type="search" className="search-input text-end" placeholder=" جستجو در دیجی کالا" />
                <i className="icon bi bi-search me-2"></i>
            </div>
            <img src={logo} className="main-icon" alt="" />
        </div>
        <div className="d-flex align-items-center">
            <i className="icon bi bi-cart me-2"></i>
            <div className="d-flex border rounded px-2 py-2 flex-row-reverse align-items-center" role="button" data-bs-toggle="modal" data-bs-target="#login-modal"> 
                <i className="icon bi bi-box-arrow-in-left lh-0 me-1"></i>
                <p className="mb-1 me-2">ورود|ثبت نام</p>
            </div>
        </div>
    </nav>
</header>
</>
    );
};

export default Header;