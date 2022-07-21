import React from 'react';

const MobileNavbar2 = () => {
    return (
            <nav className="my-container py-2 justify-content-between  mobile-nav-2 d-flex d-lg-none flex-row-reverse">
    <div className="search-bar justify-content-end rounded align-items-center d-flex bg-mycolor1 p-2">
        <input type="search" className="search-input w-100 text-end" placeholder="جستجو" />
        <i className="icon bi bi-search me-2"></i>
    </div>
    <div className="d-flex align-items-center">
    <i className="icon bi bi-cart me-3"></i>
        <div className="d-flex flex-row-reverse align-items-center" role="button" data-bs-toggle="modal" data-bs-target="#login-modal"> 
            <i className="icon bi bi-box-arrow-in-left lh-0 me-2"></i>
            <p className="mb-1 me-1">ورود</p>
        </div>
    </div>
   </nav>
    );
};

export default MobileNavbar2;