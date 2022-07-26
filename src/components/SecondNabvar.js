import React from 'react';
import { Link } from 'react-router-dom';

const SecondNabvar = () => {
    return (
        <>
        <nav style={{paddingTop: "70px"}} className="my-container border-bottom flex-row-reverse lg-nav-2 d-none d-lg-flex justify-content-between align-items-center">
    <div className="lg-nav-2-menu py-2">
        <ul className="m-0 p-1 d-flex flex-row-reverse">
            <li className="d-flex align-items-center flex-row-reverse border-end me-2 pe-2 justify-content-start">
            <i className="bi bi-list icon"></i>
                <Link to="/products" className="text-decoration-none">
                <p className="my-0 ms-1 text-dark fw-bold">دسته بندی کالاها</p>
                </Link>
            </li>
            <li className="d-flex align-items-center flex-row-reverse me-2 pe-2 justify-content-start">
                <Link to="/products" className="text-decoration-none">
                <p className="my-0 ms-1 text-dark">پر فروش ترین ها</p>
                </Link>
            </li>
            <li className="d-flex align-items-center flex-row-reverse me-2 pe-2 justify-content-start">
                <Link to="/products" className="text-decoration-none">
                <p className="my-0 ms-1 text-dark">تخفیف ها و پیشنهاد ها</p>
                </Link>
            </li>
            <li className="d-flex align-items-center flex-row-reverse border-end me-2 pe-2 justify-content-start">
                <p className="my-0 ms-1 text-dark">شگفت انگیز ها</p>
            </li>
            <li className="d-flex align-items-center flex-row-reverse me-2 pe-2 justify-content-start">
                <p className="my-0 ms-1 text-dark">سوالی دارید؟</p>
            </li>
            <li className="d-flex align-items-center flex-row-reverse me-2 pe-2 justify-content-start">
                <p className="my-0 ms-1 text-dark">!فروشنده شوید</p>
            </li>
        </ul>
    </div>
    <div className="d-flex choose-city align-items-center">
        <p className="p-0 m-0">شهر خود را انتخاب کنید</p>
        <i className="bi bi-geo-alt icon"></i>
    </div>
   </nav>
    
   <nav className="mobile-nav-3 my-container flex-row-reverse py-2 d-lg-none justify-content-between align-items-center">
    <div className="d-flex choose-city">
        <p className="p-0 mt-1">شهر خود را انتخاب کنید</p>
        <i className="bi bi-geo-alt icon text-warning"></i>
    </div>
    <i className="bi bi-chevron-left icon"></i>
   </nav>
   </>
    );
};

export default SecondNabvar;