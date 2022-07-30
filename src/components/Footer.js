import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/digi.svg'
const Footer = () => {
    return (
        <div className="w-100 border-top py-3 mt-1 text-center bg-secondary">
            <div>
            <img className="mb-3 bg-white p-2 rounded" width="100px" src={logo} />
            <p style={{fontSize:"14px"}} className="text-white mt-2">نمونه توسعه داینامیک سایت دیجی کالا</p>
            <p style={{fontSize:"14px"}} className="text-white mb-4">طراح و توسعه دهنده : محمد لبافی</p>
            <Link to="/aboutproject" className="text-white bg-danger text-decoration-none p-2 rounded">جزئیات پروژه</Link>
            </div>
        </div>
    );
};

export default Footer;