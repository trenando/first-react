import React from 'react';
import './Pricing.scss';
import { Free } from './Free/Free';
import { Professional } from './Professional/Professional';
import { Enterprice } from './Enterprice/Enterprice';

export function Pricing() {
    return (
        <div className="standart standart--gray">
            <div className="container">
                <div className="pricing__title">
                    Pricing option
                </div>
                <div className="pricing__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className="pricing__block">
                    <Free />
                    <Professional />
                    <Enterprice />
                </div>
            </div>
        </div>
    );
}