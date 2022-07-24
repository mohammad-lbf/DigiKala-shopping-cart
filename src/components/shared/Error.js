import React from 'react';

const Error = () => {
    return (
        <div className="d-flex justify-content-center mt-5">
            <div style={{width: "fit-content"}} className="text-center bg-dark mt-2 px-5 py-3 rounded border fs-4">
                <span className="text-white">خطا در برقراری ارتباط</span>
            </div>
        </div>
    );
};

export default Error;