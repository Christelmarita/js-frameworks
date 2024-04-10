import React from 'react';
import '../../css/main.css';
import logo from '../../img/logo.png';
import contactIcon from '../../img/contact.png';
import CartIconNav from '../cartIconNav/index.jsx';
import { Link } from 'react-router-dom';


function Header() {
    return (

            <header className='header-container'>
            <nav className='header'>
            <div className='header-content'>
                <Link to="/"><img src={logo} alt='logo' /></Link>
                <div className='header-content-right'>
                    <Link to="/cart"><CartIconNav /></Link>
                    <Link to="/contact"><img src={contactIcon} alt='Contact'></img></Link>
                </div>
            </div>
        </nav>
 </header>
    
    )

}
export default Header;