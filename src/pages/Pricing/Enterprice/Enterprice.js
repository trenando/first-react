import React, { useState } from 'react';
import '../Pricing.scss';

export function Enterprice() {
    const [open, setOpen] = useState(false);
    const opener = () => {
        if (open === true) {
            setOpen(false);
        }
        if (open === false) {
            setOpen(true);
        }
    }
    return (
        <div className="pricing__content">
            <button className="pricing__btn" onClick={opener}>Enterprice</button>
            {open && (
                <React.Fragment>
                    <div className="pricing__cost">
                        <div className="pricing__flex">
                            <div className="pricing__dollar">$</div>
                            <div className="pricing__number">70</div>
                        </div>
                        <div className="pricing__footer">Monthly Payment</div>
                    </div>
                    <ul className="pricing__list">
                        <li className="pricing__item">unlimited space</li>
                        <li className="pricing__item">unlimited bandwidth</li>
                        <li className="pricing__item">100 websites</li>
                        <li className="pricing__item">Advanced Customization</li>
                        <li className="pricing__item">wordpress integration</li>
                        <li className="pricing__item">24/7 customer support</li>
                    </ul>
                </React.Fragment>
            )}
        </div>
    )
}