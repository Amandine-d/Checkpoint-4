import React from 'react';
import logoFooter from '../../assets/round-logo.svg';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer__container">
            <div className="footer__image__container">
                <img
                    src={logoFooter}
                    alt="logo horizon"
                    className="footer__img"
                />
            </div>
            <address className="address__footer">
                <h2 className="name__cie">Horizon Eco Builders</h2>
                3377 West 19th Ave, Vancouver
                <br />
                <a href="mailto:webmaster@somedomain.com">
                    contact@horizonecobuilders.com
                </a>
                .
                <br />
            </address>
        </div>
    );
};

export default Footer;
