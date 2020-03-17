import React from 'react';
import './Buttons.scss';
import { Link } from 'react-router-dom';

export function Buttons() {
    return (
        <div className="buttons">
            <Link to="/features/tab">
                <button>tab 1</button>
            </Link>
            <Link to="/features/sublist">
                <button>tab 2</button>
            </Link>
            <Link to="/features/standart">
                <button>tab 3</button>
            </Link>
        </div>
    );
}