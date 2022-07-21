import React from 'react';
import logo from '../assets/logo.svg';
const HambergurMenu = () => {
    return (
        <div>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="header-humbergur-menu-offcanvas" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header d-flex flex-row-reverse">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">
        <img src={logo} class="maim-logo" alt="" />
        </h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">  

        </div>
    </div>
        </div>
    );
};

export default HambergurMenu;