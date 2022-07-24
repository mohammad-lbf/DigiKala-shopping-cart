import React from 'react';
import logo from '../../assets/logo.svg'
const Spinner = () => {
    return (
        <div className="d-flex justify-content-center">
        <div style={{width: "fit-content"}} className="rounded d-flex flex-column align-items-center bg-light border px-5 py-3">
        <img className="mb-4" src={logo} />
        <div style={{width: "3rem" , height: "3rem"}} className="spinner-border text-danger mb-3" role="status">
        </div>
        <span className="text-danger">در حال بارگذاری</span>
        </div>
        </div>
    );
};

export default Spinner;