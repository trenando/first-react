import React from 'react';
import '../../Pricing.scss';

export function PricingItems({items}) {
    return (
        <ul className="pricing__list">
            <li className="pricing__item">{items.space}</li>
            <li className="pricing__item">{items.bandwidth}</li>
            <li className="pricing__item">{items.web}</li>
            <li className="pricing__item">{items.custom}</li>
            <li className="pricing__item">{items.integration}</li>
            <li className="pricing__item">{items.sup}</li>
        </ul>
    );
}