import React from 'react';
import photo from '../../assets/744896f967cc8505a9c424c0b00692d72932b53b_1656422331.jpg';
import styled from 'styled-components';
const Card = styled.div`
width: 300px;
img{
    width:100%;
}
border: 1px solid #e0e0e0;
border-top:none;
p{
    font-size:14px;
}

`
const Product = ({title , rating , image , price}) => {
    return (
        <Card className="pt-3 px-3 pb-1">
            <img className="mt-4" src={photo} />
            <p className="text-start mt-3">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
            <div className="d-flex justify-content-start align-items-center">
            <i className="bi bi-star-fill text-warning"></i>
            <p className="mb-0 ms-1">4.3</p>
            </div>
            <p className="my-3 fw-bold">price $</p>
        </Card>
    );
};

export default Product;