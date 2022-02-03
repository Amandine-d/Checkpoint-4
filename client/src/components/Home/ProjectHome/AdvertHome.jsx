import React from 'react';
import { useNavigate } from 'react-router';

const AdvertHome = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/contact');
    };

    return (
        <div className="advert__home__container">
            <h1 className="advert__title__home">
                Build for the future, in the present - it just makes sense.
            </h1>
            <span className="line__advert" />
            <p className="advert__title__home">
                Many people have already experienced the benefits of working
                with Horizon Eco Builders and now you can too. Take a step
                towards a greener healthier future. Get started today.{' '}
            </p>
            <button
                className="button__to__form"
                type="button"
                onClick={handleClick}
            >
                START PROCESS
            </button>
        </div>
    );
};

export default AdvertHome;
