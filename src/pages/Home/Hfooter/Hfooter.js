import React from 'react';
import './Hfooter.scss';

export function Hfooter() {
    return (
        <footer className="home__hfooter">
            <div className="hfooter__content">
                <div className="footer__block">
                    <div className="hfooter__title">Social Media</div>
                    <div className="hfooter__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenean euismod bibendum laoreet.
                    </div>
                </div>
                <div className="hfooter__icons">
                    <a href={process.env.PUBLIC_URL}>
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href={process.env.PUBLIC_URL}>
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={process.env.PUBLIC_URL}>
                        <i className="fab fa-google-plus-g"></i>
                    </a>
                    <a href={process.env.PUBLIC_URL}>
                        <i className="fab fa-pinterest"></i>
                    </a>
                    <a href={process.env.PUBLIC_URL}>
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href={process.env.PUBLIC_URL}>
                        <i className="fas fa-wifi"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}