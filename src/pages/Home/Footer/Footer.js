import React from 'react';
import './Footer.scss';

export function Footer(){
    return(
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
    );
}