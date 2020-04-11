import React from 'react';
import './Footer.scss';

export function Footer() {
    return (
        <footer className="footer">
            <div className='footer__content'>
                <div className="footer__icons">
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
                <div className="footer__end">
                    © 2015 Axure Themes
                </div>
            </div>
        </footer>
    );
}