import React from 'react';
import { Link } from 'react-router-dom';
import notfoundlogo from '../assets/error-404-4721383-3927964.webp'
const NotFound = () => {
    return (
        <div className="w-100 align-items-center d-flex flex-column mt-4">
            <p className="text-danger fw-bold fs-2" >!صفحه مورد نظر یافت نشد</p>
            <Link to="/products">بازگشت به فروشگاه</Link>
            <img src={notfoundlogo} />
        </div>
    );
};

export default NotFound;