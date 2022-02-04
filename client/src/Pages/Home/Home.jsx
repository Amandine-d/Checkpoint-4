import React from 'react';
import HeaderHome from '../../components/Home/HeaderHome/HeaderHome';
import './Home.css';

function Home() {
    return (
        <div className="home__container">
            <HeaderHome />

            <div
                className="home__container"
                style={{ backgroundColor: 'hsl(78,25%,80%)' }}
            >
                <h1 className="title__services">
                    Horizon Eco Builders is a home renovation company. Backed by
                    experience and innovation, we have the know-how you need to
                    make your next home renovation a{' '}
                    <span className="green__text">sustainable</span> one.
                </h1>
                <h1>What we do</h1>
                <div className="arrow_down">
                    <svg
                        preserveAspectRatio="none"
                        viewBox="24 33 152.001 134"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M159.621 121.057L109.217 38.8c-4.726-7.737-16.025-7.732-20.745.009L26.236 140.885c-7.475 12.26 5.093 26.906 18.453 21.504l100.386-40.592c9.257-3.675 14.546-.74 14.546-.74z" />
                        <path d="M173.822 144.873l-4.835-7.931c-3.723-6.107-11.357-8.624-18.015-5.94l-43.744 17.637 49.153 17.467c12.971 4.609 24.58-9.524 17.441-21.233z" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Home;
