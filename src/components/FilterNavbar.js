import React from 'react';

const FilterNavbar = () => {
    return (
        <div className="w-100 container ">
            <div className="row text-center text-lg-end py-3 pe-0 pe-lg-5">
            <p type="button" className="text-danger mb-0 me-5 text-decoration-underline" data-bs-toggle="modal" data-bs-target="#filtermodal">
                فیلتر محصولات
            </p>
            </div>
        </div>
    );
};

export default FilterNavbar;