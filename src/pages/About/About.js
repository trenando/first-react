import React from 'react';
import './About.scss';
import png4 from "../../images/icons/4.png";
import png5 from "../../images/icons/5.png";
import png6 from "../../images/icons/6.png";
import { AboutContent } from './AboutContent/AboutContent';

export function About() {
    const content = [
        {
            png: png4,
            title: "Thoughtful Design",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra."
        },
        {
            png: png5,
            title: "Well Crafted",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra."
        },
        {
            png: png6,
            title: "Easy to Customize",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra."
        }
    ]

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
                    {content.map(data => <AboutContent {...data} />)}
                </div>
            </div>
        </div>
    );
}