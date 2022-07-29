import React from 'react';

const AboutProject = () => {
    return (
        <div className="text-center">
            <div className="text-center mt-4 border-bottom">
            <p className="text-danger fw-bold fs-5 mb-4">: جزئیات پروژه <i className="bi bi-info-circle"></i></p>
            <p style={{fontSize: "14px"}}>نام پروژه : توسعه داینامیک سایت دیجی کالا</p>
            <p style={{fontSize: "14px"}}>طراح و توسعه دهنده : محمد لبافی</p>
            </div>
            <div style={{fontSize: "14px"}} className="py-3">
                <p className="fw-bold text-danger">:تکنولوژی های مورد استفاده در این پروژه</p>
                <p>
                    HTML & CSS
                    <br />
                    java Script
                    <br />
                    bootstrap 5
                    <br />
                    Git & Github
                    <br />
                    React js
                    <br />
                    react router dom (SPA site)
                    <br />
                    React hooks
                    <br />
                    Redux & Redux thunk
                    <br />
                    styled components
                    <br />
                    responsive design
                </p>
            </div>
        </div>
    );
};

export default AboutProject;