import React from "react";
import Hero from "../../components/hero";
import SearchBar from "../../components/searchBar";
import Loader from "../../components/loader";
import ProductCard from "../../components/productCard";
import { useFetch } from "../../hooks/useFetch";
import ErrorMessage from "../../components/error";

function HomePage() {
    const { data, isLoading, isError } = useFetch("https://v2.api.noroff.dev/online-shop");
    let content;
    if (isError) {
        content = <div className="lds-loader-container"><ErrorMessage/></div>;
    } else if (isLoading) {
        content = <div className="lds-loader-container"><Loader/></div>;
    } else {
        content = data.map((product) => {
            return <ProductCard data={product} key={product.id} />;
        });
    }

    let heroContent;
    if (isError) {
        heroContent = <div className="lds-loader-container"><ErrorMessage/></div>;
    } else if (isLoading) {
        heroContent = <div className="lds-loader-container"><Loader/></div>;
    } else {
        heroContent = <Hero data={data[0]} />;
    }

    return (
        <div className="home-page-container">
            <SearchBar />
            <div className="home-hero-container">
                {heroContent}
            </div>
        <div className="product-card-container">
            {content}
        </div>
        </div>
    );
}

export default HomePage;