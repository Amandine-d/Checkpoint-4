import React, { useState } from 'react';
import BurgerContent from './BurgerContent';

const BurgerMenu = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className={`${open ? 'menu__open' : ''}`}>
            <div className="container__burger">
                <button
                    className="burger__menu"
                    type="button"
                    onClick={handleClick}
                >
                    <span />
                    <span />
                    <span />
                    {open ? <BurgerContent handleClick={handleClick} /> : null}
                </button>
            </div>
        </div>
    );
};

export default BurgerMenu;
