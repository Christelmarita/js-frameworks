import React from "react";
import { TotalCounterContainer, TotalItem, TotalPrice } from "./index.styles";
import { useFetch } from "../../hooks/useFetch";

function TotalCounter() {
  const { data, isLoading, isError } = useFetch(
    "https://v2.api.noroff.dev/online-shop/"
  );
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const itemsInCart = data.filter((item) =>
    cartItems.some((cartItem) => cartItem.id === item.id)
  );

  const findTotal = itemsInCart.reduce((acc, item) => acc + item.discount, 0);
  const totalPrice = findTotal.toFixed(2);

  const totalSaved = itemsInCart.reduce(
    (acc, item) => acc + (item.price - item.discount),
    0
  );
  const savedPrice = totalSaved.toFixed(2);

  if (isError || !data) {
    return <div className="lds-loader-container"><p>Error</p></div>;
  }
  if (isLoading) {
    return <div className="lds-loader-container"></div>;
  }

  return (
    <TotalCounterContainer className="total-counter">
      <div className="total-list">
        <TotalItem>
          <p>Amount</p>
          <p>
            {itemsInCart
              .reduce((acc, item) => acc + item.price, 0)
              .toFixed(2)},-
          </p>
        </TotalItem>
        <TotalItem>
          <p>Discount</p>
          <p>- {savedPrice},-</p>
        </TotalItem>
        <TotalPrice>
          <p>Total</p>
          <p>{totalPrice},-</p>
        </TotalPrice>
      </div>
    </TotalCounterContainer>
  );
}

export default TotalCounter;
