import React from "react";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";


function Footer() {
    return (
        <footer>
            <div className="footer-container">
              <Link to="/"><img src={Logo} alt="logo" /></Link>  
                <div className="footer-copyright">
                    <p>Christel M. Østerbøe</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;