import React from 'react';
import logo from '../assets/logo.svg';

const LoginFormModal = () => {
    return (
 <>       
<div className="modal fade" id="login-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header d-flex justify-content-between flex-row-reverse">
        <img src={logo} className="main-logo" alt="" />
        <button type="button" className="btn-close m-0" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body text-start">
       <p className="fs-5 text-end ">ورود | ثبت نام</p>
       <p style={{fontSize: "0.8rem;"}} className="text-end text-secondary">!سلام</p>
       <p style={{fontSize: "0.8rem;"}} className="text-end text-secondary">:لطفا شماره موبایل خود را وارد کنید</p>
       <input type="text" className="rounded w-100 border py-2" />
       <div className="btn btn-danger w-100 py-2 mt-3">ورود</div>
       <p style={{fontSize: "0.8rem;"}} className="text-center text-muted mt-3 mb-2">با ورود به دیجی‌کالا،شرایط دیجی‌کالا و قوانین حریم‌خصوصی را می‌پذیرم</p>
      </div>
    </div>
  </div>
</div>
</>
    );
};

export default LoginFormModal;