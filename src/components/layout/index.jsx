import React from "react";
import Header from "../header/index.jsx";
import Footer from "../footer/index.jsx";

function Layout({ children }) {
    return (
        <>
        <Header />
        {children}
        <Footer />
        </>
    );
}

export default Layout;