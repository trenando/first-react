import React from 'react';
import './Home.scss';
import intro from '../../images/intro.jpg';
import { Content } from './Content/Content';
import { Hfooter } from "./Hfooter/Hfooter";

export function Home() {
    return (
        <div className="home">
            <img src={intro} alt='' />
            <div className="content">
                <Content />
            </div>
            <Hfooter />
        </div>
    );
} 