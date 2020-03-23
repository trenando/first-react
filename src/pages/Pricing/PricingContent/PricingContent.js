import React, { useState } from 'react';
import '../Pricing.scss';
import { PricingItems } from './PricingItems/PricingItems';

export function PricingContent({ type, cost, msg, items }) {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => {
        setOpen(!open);
    }
    return (
        <div className="pricing__content">
            <button className="pricing__btn" onClick={toggleOpen}>{type}</button>
            {
                open && (
                    <div className="pricing__cost">
                        <div className="pricing__flex">
                            <div className="pricing__dollar">$</div>
                            <div className="pricing__number">{cost}</div>
                        </div>
                        <div className="pricing__footer">{msg}</div>
                        <PricingItems items={items} />
                    </div>
                )
            }
        </div>
    );
}