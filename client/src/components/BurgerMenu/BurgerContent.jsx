import React from 'react';
import { NavLink } from 'react-router-dom';

function BurgerContent({ handleClick }) {
    return (
        <div className="nav__container">
            <ul className="nav">
                <li>
                    <NavLink
                        to="/"
                        className="navlink__burger"
                        onClick={handleClick}
                    >
                        Home{' '}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/"
                        className="navlink__burger"
                        onClick={handleClick}
                    >
                        Services{' '}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className="navlink__burger"
                        onClick={handleClick}
                    >
                        About us{' '}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/admin"
                        className="navlink__burger"
                        onClick={handleClick}
                    >
                        Admin{' '}
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default BurgerContent;
