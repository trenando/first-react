import React, { useState } from 'react';
import '../Pricing.scss';

export function Professional() {
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
            <button className="pricing__btn" onClick={opener}>Professional</button>
            {open && (
                <React.Fragment>
                    <div className="pricing__cost">
                        <div className="pricing__flex">
                            <div className="pricing__dollar">$</div>
                            <div className="pricing__number">19</div>
                        </div>
                        <div className="pricing__footer">Monthly Payment</div>
                    </div>
                    <ul className="pricing__list">
                        <li className="pricing__item">5 gb of space</li>
                        <li className="pricing__item">50 gb of bandwidth</li>
                        <li className="pricing__item">12 websites</li>
                        <li className="pricing__item">Advanced Customization</li>
                        <li className="pricing__item">wordpress integration</li>
                        <li className="pricing__item">email support</li>
                    </ul>
                </React.Fragment>
            )}
        </div>
    )
}