import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { id, name, price, description,image } = product;
    const navigate = useNavigate();

    const ProductDetail = id =>{
        navigate(`/product/${id}`);
    }

    return (
        <div className='col-sm-12 col-md-6 col-lg-4'>
            <div className="card m-5">
                <div class="card-body">
                <img className='w-100' src={image} alt="" />
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">Price: {price} Tk.</p>
                    <p class="card-text">{description}</p>
                    <button onClick={() => ProductDetail(id)} className='btn btn-dark'>Product: {name}</button>
                </div>
            </div>
        </div>
    );
};

export default Product;