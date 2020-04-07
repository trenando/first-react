import React from 'react';
import './Home.scss';
import intro from '../../images/intro.jpg';
import { ContentContainer } from './Content/ContentContainer';
import { Hfooter } from "./Hfooter/Hfooter";

export function Home() {
    return (
        <div className="home">
            <img src={intro} alt='' />
            <div className="content">
                <ContentContainer />
            </div>
            <Hfooter />
        </div>
    );
} 