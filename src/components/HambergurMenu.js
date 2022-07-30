import React from 'react';
import logo from '../assets/digi.svg';
import { Link } from 'react-router-dom';

const HambergurMenu = () => {
    return (
        <div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="header-humbergur-menu-offcanvas" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header d-flex flex-row-reverse border-bottom">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
        <img src={logo} width="100px" alt="" />
        </h5>
    <button type="button" className="btn-close text-reset" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body p-4">  
            <div className="border-bottom">
            <Link to="/products" className="text-decoration-none">
            <div className="d-flex flex-row-reverse align-items-center mb-4">
            <i className="bi bi-bag  text-secondary"></i>
            <p className="mb-0 me-3 text-dark">سوپر مارکت</p>
            </div>
            </Link>
            <Link to="/products" className="text-decoration-none">
            <div className="d-flex flex-row-reverse align-items-center mb-4">
            <i className="bi bi-fire text-secondary"></i>
            <p className="mb-0 me-3 text-dark">پر فروش ترین ها</p>
            </div>
            </Link>
            <div className="d-flex flex-row-reverse align-items-center mb-4">
            <i class="bi bi-ticket-perforated text-secondary"></i>
            <p className="mb-0 me-3 ">تخفیف ها و پیشنهاد ها</p>
            </div>
            <div className="d-flex flex-row-reverse align-items-center mb-4">
            <i className="bi bi-percent text-secondary"></i>
            <p className="mb-0 me-3 ">شگفت انگیز ها</p>
            </div>
            <div className="d-flex flex-row-reverse align-items-center mb-4">
            <p className="text-secondary mb-0 border rounded-circle px-1 ">?</p>
            <p className="mb-0 me-3 ">سوالی دارید؟</p>
            </div>
            <div className="d-flex flex-row-reverse align-items-center mb-4">
            <i className="bi bi-shop text-secondary"></i>
            <p className="mb-0 me-3 ">فروشنده شوید</p>
            </div>
            </div>
            <div className="text-center mt-3 text-secondary">
                <p>: توسعه داده شده توسط </p>
                <p>محمد لبافی</p>
                <Link to="/aboutproject" className="text-white text-decoration-none">
                <button className="btn btn-danger"  data-bs-dismiss="offcanvas">
                جزئیات پروژه
                </button>
                </Link>
            </div>
            
        </div>
    </div>
        </div>
    );
};

export default HambergurMenu;