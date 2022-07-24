import React from 'react';
import logo from '../assets/logo.svg';
const HambergurMenu = () => {
    return (
        <div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="header-humbergur-menu-offcanvas" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header d-flex flex-row-reverse">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">
        <img src={logo} className="maim-logo" alt="" />
        </h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">  

        </div>
    </div>
        </div>
    );
};

export default HambergurMenu;