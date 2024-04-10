import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PlaceholderImg from "../../img/placeholder.png";
import { ProductReview } from "./index.styles";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../../components/loader";
import ErrorMessage from "../../components/error";
import AddCart from "../../components/buttons/addToCart";

function ProductPage() {
    const [productData, setProductData] = useState();

    const { id } = useParams();
    const { data, isLoading, isError } = useFetch(`https://v2.api.noroff.dev/online-shop/${id}`, true);

    useEffect(() => {
        if (data) {
            setProductData(data);
        }
    }, [data]);

    if (isError || !productData) {
        return <div className="lds-loader-container"><ErrorMessage/></div>;
    }

    if (isLoading) {
        return <div className="lds-loader-container"><Loader/></div>;
    }

    let price = productData.price;
    let discount = productData.discountedPrice;
    let reviews = productData.reviews.map((review) => (
        <ProductReview key={review.id}>
            <div className="product-item-review">
                <h3>{review.username} - {review.rating}/5</h3>
                <p>{review.description}</p>
            </div>
        </ProductReview>
    ));

    if (reviews.length === 0) {
        reviews = <p>No reviews yet</p>;   
    }

    return (
        <div className="product-page-container">
            <div className="product-item-content">
            <img src={productData.image.url || PlaceholderImg} alt={ productData.title } />
                <div className="product-item-text">
                    <div className="product-item-description">
                        <h1>{ productData.title }</h1>
                        <p>{ productData.description }</p>
                    </div>
                    <div className="product-item-price">
                        <b>{ discount }</b>
                         {price !== discount && <p>{price},-</p>}
                    </div>
                    <div className="product-item-add">
                        <AddCart />
                    </div>
                </div>
            </div>
         <div className="product-item-review-container">
             <h2>Reviews</h2>
             {reviews}
         </div>
        </div>
    );
}

export default ProductPage;