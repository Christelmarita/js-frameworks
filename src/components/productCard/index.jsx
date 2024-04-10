import React from 'react';
import PlaceholderImg from '../../img/placeholder.png';
import { Link } from 'react-router-dom';
import ReadMoreBtn from '../buttons/readMoreBtn';

const ProductCard = ({ data }) => {
    const productData = data || {};
    const { id, imageUrl, title, price, discount } = productData;

    return (
        <Link to={`product/${id}`}>
            <div
                id={id}
                className="product-card"
            >
                <div className="product-top">
                    <img src={imageUrl || PlaceholderImg} alt={title || "Product Image"} />
                </div>
                <div className="product-body">
                    <div className="product-bottom">
                        <div className="product-information">
                            <h2>{title}</h2>
                        </div>
                        <div className="product-price">
                            {discount && <b>{discount},-</b>}
                            {price !== discount && <p className="price-before">{price},-</p>}
                        </div>
                        <div className="read-more-container">
                            <ReadMoreBtn />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
