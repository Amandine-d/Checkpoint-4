import React from 'react';
import AdvertHome from '../../components/Home/ProjectHome/AdvertHome';
import ProjectHome from '../../components/Home/ProjectHome/ProjectHome';
import Testimonials from '../../components/Home/Testimonials/Testimonials';
import './Services.css';

function Services() {
    return (
        <div
            className="services__container"
            style={{ backgroundColor: 'hsl(78,25%,80%)' }}
        >
            <div className="services">
                <div className="div__img__services">
                    <img
                        src="https://static.wixstatic.com/media/d82e78_bb1d5187d02b4fb5aae178a20bdcb1d1~mv2.png/v1/fill/w_195,h_194,al_c,q_85,usm_0.66_1.00_0.01/Reno%20Hammer.webp"
                        alt="Hammer"
                        className="img__services"
                    />
                </div>
                <h2 className="title__services">Renovations</h2>
                <h4 className="text__services">
                    Whether you&apos;re looking to move structural walls in your
                    house for a more open concept living space, redo your
                    kitchen or bathroom, or add the finishing touches with some
                    reclaimed shelving or a feature wall, Horizon Eco Builders
                    has the experience to make it happen in a sustainable,
                    cost-effective and timely manner.{' '}
                </h4>
            </div>
            <div className="services">
                <div className="div__img__services">
                    <img
                        src="https://static.wixstatic.com/media/d82e78_b7053525ff3b430ab05a56e776c7a6a6~mv2.png/v1/fill/w_244,h_243,al_c,q_85,usm_0.66_1.00_0.01/Design.webp"
                        alt="House"
                        className="img__services"
                    />
                </div>
                <h2 className="title__services">Design</h2>
                <h4 className="text__services">
                    The design phase of any project can be time consuming and
                    stressful. Horizon Eco Builders have developed a proprietary
                    design process geared towards efficiency, concise
                    communication and maximum clarity for you, ensuring that you
                    get to watch your dream materialize without having to sweat
                    the small details. Start the process today.{' '}
                </h4>
            </div>
            <div className="services">
                <div className="div__img__services">
                    <img
                        src="https://static.wixstatic.com/media/d82e78_724f31148b2042f9a522da353511481f~mv2.png/v1/fill/w_244,h_243,al_c,q_85,usm_0.66_1.00_0.01/Permitting.webp"
                        alt="Board"
                        className="img__services"
                    />
                </div>
                <h2 className="title__services">Permitting</h2>
                <h4 className="text__services">
                    Did you know that most renovation projects require a
                    building permit? This can be a tiresome, bureaucratic
                    headache and is a barrier for many projects getting off the
                    ground. Horizon Eco Builders will manage the process of
                    acquiring the required building permit from the city or
                    township where you reside.{' '}
                </h4>
            </div>
            <button className="renovation__button" type="button">
                START MY RENO
            </button>
            <ProjectHome />
            <AdvertHome />
            <Testimonials />
        </div>
    );
}

export default Services;
