import React from "react";
import PlaceholderImg from "../../img/placeholder.png";
import { Link } from "react-router-dom";
import Loader from "../loader";
import ReadMoreBtn from "../buttons/readMoreBtn";

function hero({ data, isLoading, isError }) {
    const { imageUrl, title, description, id } = data || {}; 
    const item = data;

    if (!item) {
        return isError ? null : <div className="lds-loader-container"><Loader/></div>;
    } if (isLoading) {
        return <div className="lds-loader-container"><Loader/></div>;
    } else {
        return (
            <div className="home-hero">
                <img src={imageUrl || PlaceholderImg} alt="" />
                <div className="hero-text-content">
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <Link to={`product/${id}`}>
                        <ReadMoreBtn />
                    </Link>
                </div>
            </div>
        );
    }

}

export default hero;