import React from 'react';
import './Header.scss';
import png1 from '../images/icons/1.png';

export function Header() {
    return (
        <div className="header__content">
            <a href="/">
                <img src={png1} alt="" />
            </a>
            <div className="header__links">
                <a href="/features">Features</a>
                <a href="/about">About</a>
                <a href="/pricing">Pricing</a>
                <a href="/reviews">Reviews</a>
                <a href="/contact">Contact</a>
            </div>
        </div>
    );
}