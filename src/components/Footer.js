import React from 'react';
import logo from '../assets/digi.svg'
const Footer = () => {
    return (
        <div className="w-100 border-top py-3 mt-1 text-center bg-secondary">
            <div>
            <img className="mb-3 bg-white p-2 rounded" width="100px" src={logo} />
            <p style={{fontSize:"14px"}} className="text-white mt-2">نمونه توسعه داینامیک سایت دیجی کالا</p>
            <p style={{fontSize:"14px"}} className="text-white">طراح و توسعه دهنده : محمد لبافی</p>
            </div>
        </div>
    );
};

export default Footer;