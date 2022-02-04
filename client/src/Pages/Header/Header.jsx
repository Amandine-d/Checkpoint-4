import React from 'react';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import logo from '../../assets/horizon-logo.jpg';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="logo" className="main__logo" />
            <BurgerMenu />
        </div>
    );
}

export default Header;
