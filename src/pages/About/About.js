import React from 'react';
import './About.scss';
import png4 from "../../images/icons/4.png";
import png5 from "../../images/icons/5.png";
import png6 from "../../images/icons/6.png";

export function About() {
    return (
        <div className="standart standart--white">
            <div className="container">
                <div className="about__title">
                    Why this is awesome
                </div>
                <div className="about__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className="about__block">
                    <div className="about__content">
                        <div className="img__about">
                            <img src={png4} alt='' />
                        </div>
                        <div className="about_subtitle">
                            Thoughtful Design
                        </div>
                        <div className="about_subtext">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aenean euismod bibendum laoreet. Proin gravida
                            dolor sit amet lacus accumsan et viverra.
                        </div>
                    </div>
                    <div className="about__content">
                        <div className="img__about">
                            <img src={png5} alt='' />
                        </div>
                        <div className="about_subtitle">
                            Well Crafted
                        </div>
                        <div className="about_subtext">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aenean euismod bibendum laoreet. Proin gravida
                            dolor sit amet lacus accumsan et viverra.
                        </div>
                    </div>
                    <div className="about__content">
                        <div className="img__about">
                            <img src={png6} alt='' />
                        </div>
                        <div className="about_subtitle">
                            Easy to Customize
                        </div>
                        <div className="about_subtext">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Aenean euismod bibendum laoreet. Proin gravida
                            dolor sit amet lacus accumsan et viverra.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}