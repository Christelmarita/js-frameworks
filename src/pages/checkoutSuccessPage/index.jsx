import React from "react";
import { SuccessContainer, ButtonContainer } from "./index.styles";
import { Link } from "react-router-dom";
import { PrimaryBtn } from "../../components/buttons/index.styles";

function CheckoutSuccessPage() {
    return (
        <div className="checkout-success-page-container">
            <SuccessContainer>
                <h2>Success!</h2>
                <p>Thank you for ordering with us</p>
            </SuccessContainer>
            <ButtonContainer>
                <Link to="/">
                    <PrimaryBtn>
                        <p>Continue shopping</p>
                    </PrimaryBtn>
                </Link>
            </ButtonContainer>
        </div>
    );
}

export default CheckoutSuccessPage;
