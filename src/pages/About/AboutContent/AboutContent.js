import React from 'react';
import '../About.scss';

export function AboutContent({png,title,text}) {
    return (
        <div className="about__content">
            <div className="img__about">
                <img src={png} alt='' />
            </div>
            <div className="about_subtitle">
                {title}
            </div>
            <div className="about_subtext">
                {text}
            </div>
        </div>
    )
}