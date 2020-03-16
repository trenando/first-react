import React from 'react';
import './Home.scss';
import intro from '../../images/intro.jpg';
import { Content } from './Content/Content';

export function Home() {
    return (
        <div className="home">
            <img src={intro} alt='' />
            <div className="content">
                <Content />
            </div>
            <footer className="home__footer">
                <div className="footer__content">
                    <div className="footer__block">
                        <div className="footer__title">Social Media</div>
                        <div className="footer__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Aenean euismod bibendum laoreet.</div>
                    </div>
                    <div className="footer__icons">
                        <a href="/">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="/">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="/">
                            <i className="fab fa-google-plus-g"></i>
                        </a>
                        <a href="/">
                            <i className="fab fa-pinterest"></i>
                        </a>
                        <a href="/">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="/">
                            <i className="fas fa-wifi"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
} 