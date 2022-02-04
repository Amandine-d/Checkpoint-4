import React from 'react';
import bg from '../../../assets/top-image.jpg';

function HeaderHome() {
    return (
        <img
            src={bg}
            className="bg__home__header"
            alt="hamok plants zen blabla"
            style={{ backgroundColor: 'hsl(78,25%,80%)' }}
        />
    );
}

export default HeaderHome;
