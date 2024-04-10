import React, { useState, useEffect } from "react";
import SearchIcon from "../../img/search.png";
import { useFetch } from "../../hooks/useFetch";
import { SearchForm, Suggested, SearchContainer,Results } from "./index.styles";
import { Link } from "react-router-dom";

function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const { data: products } = useFetch("https://v2.api.noroff.dev/online-shop/");

    useEffect(() => {
        if (searchQuery.trim() === "") {
            setSearchResults([]);
            return;
        }

        const results = products.filter((product) => {
            return product.title.toLowerCase().includes(searchQuery.toLowerCase());
        });
        setSearchResults(results);
    }, [products, searchQuery]);

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchQuery(e.target.value);
    }

    return (
        <SearchContainer>
            <SearchForm onSubmit={(e) => e.preventDefault()} action="search">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={handleSearch}
                />
                <button><img src={SearchIcon} alt="Search" /></button>
            </SearchForm>
            <Suggested>
                {searchResults.length === 0 && searchQuery.trim() !== "" ? (
                    <p>No results</p>
                ) : (
                    searchResults.map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id}>
                            <Results>{product.title}</Results>
                        </Link>
                    ))
                )}
            </Suggested>
        </SearchContainer>
    );  
}

export default SearchBar;