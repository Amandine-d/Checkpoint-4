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
                        to="/gallery"
                        className="navlink__burger"
                        onClick={handleClick}
                    >
                        Gallery{' '}
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className="navlink__burger"
                        onClick={handleClick}
                    >
                        Contact us{' '}
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default BurgerContent;
