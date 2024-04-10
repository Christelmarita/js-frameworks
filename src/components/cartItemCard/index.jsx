import React from "react";
import PlaceholderImg from "../../img/placeholder.png";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../loader";
import ErrorMessage from "../error";

function CartItemCard() {
    const { data, isLoading, isError } = useFetch("https://v2.api.noroff.dev/online-shop/");
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const itemsInCart = data.filter(item => cartItems.some(cartItem => cartItem.id === item.id)); 

    if (isError || !data) {
        return <div className="lds-loader-container"><ErrorMessage /></div>;
    } if (isLoading) {
        return <div className="lds-loader-container"><Loader /></div>;
    } if (itemsInCart.length === 0) {
        return <div className="lds-loader-container"><p>No items in cart</p></div>;
    }
    
    return (
        <div>
            {itemsInCart.map(item => (
                <div id={item.id} key={item.id} className="cart-item">
                    <img src={item.imageUrl || PlaceholderImg} alt={item.title} />
                    <div className="cart-item-info">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <div className="cart-price">
                            <b>{item.discount}</b>
                            {item.discount !== item.price && (
                                <p>{item.price},-</p>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}




export default CartItemCard;