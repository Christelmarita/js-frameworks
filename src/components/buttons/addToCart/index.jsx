import React, { useState, useEffect } from "react";
import { PrimaryBtn } from "../index.styles";
import { useParams } from "react-router-dom";
import { useCart } from "../../cartContext/index.jsx";

function AddCart() {
    const { id } = useParams();
    const { updateCartCount } = useCart();
    const [added, setAdded] = useState(false);

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const item = cartItems.find((item) => item.id === id);
        setAdded(!!item); 
    }, [id]); 

    const handleAddToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const item = cartItems.find((item) => item.id === id);

        if (item) {
            alert('Already in cart');
            return;
        }

        cartItems.push({ id });
        localStorage.setItem("cart", JSON.stringify(cartItems));
        updateCartCount();
        setAdded(true);
    };

    return (
        <PrimaryBtn onClick={handleAddToCart}>
            <p>{added ? "Added!" : "Add to cart"}</p>
        </PrimaryBtn>
    );
}

export default AddCart;