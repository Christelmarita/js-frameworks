import React, { useState } from "react";
import CartItemCard from "../../components/cartItemCard";
import TotalCounter from "../../components/totalCounter";
import { Link } from "react-router-dom";
import { PrimaryBtn } from "../../components/buttons/index.styles";
import { useFetch } from "../../hooks/useFetch";
import Loader from "../../components/loader";
import ErrorMessage from "../../components/error";
import { CartProvider } from "../../components/cartContext/index";

function Cart() {
    const { data, isLoading, isError } = useFetch("https://v2.api.noroff.dev/online-shop/");
    const [redirect, setRedirect] = useState(false);

    const handleCheckoutBtnClick = () => {
        if (localStorage.getItem('cart') === null) {
            alert('No items in cart');
        } else {
            localStorage.removeItem('cart');
            CartProvider();
            setRedirect(true);
        }
    };

    if (isLoading) {
        return <div className="lds-loader-container"><Loader /></div>;
    }

    if (isError || !data) {
        return <div className="lds-loader-container"><ErrorMessage /></div>;
    }

    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const itemsInCart = data.filter(item => cartItems.some(cartItem => cartItem.id === item.id));

    if (itemsInCart.length === 0) {
        return <div className="lds-loader-container"><p>Cart is empty</p></div>;
    }

    return (
        <div className="cart-page-container">
            <div className="cart-container">
                <div className="cart-head">
                    <h2>Cart</h2>
                </div>
                <div className="cart-items-container">
                    <CartItemCard />
                </div>
                <div className="cart-total-container">
                    <h2>Total</h2>
                    <TotalCounter />
                </div>
                <div className="checkout-btn-container">
                    {redirect && window.location.replace('/checkoutSuccess')}
                    <div className="success-bottom">
                        <Link to="/checkoutSuccess" onClick={handleCheckoutBtnClick}>
                            <PrimaryBtn>
                                <p>Checkout</p>
                            </PrimaryBtn>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
