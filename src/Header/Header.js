import React from 'react';
import './Header.scss';
import png1 from '../images/icons/1.png';
import {Link} from 'react-router-dom';

export function Header() {
    return (
        <div className="header__content">
            <Link to="/">
                <img src={png1} alt="" />
            </Link>
            <div className="header__links">
                <Link to="/features/tab">Features</Link>
                <Link to="/about">About</Link>
                <Link to="/pricing">Pricing</Link>
                <Link to="/reviews">Reviews</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
}