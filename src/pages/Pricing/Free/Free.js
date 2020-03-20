import React, { useState } from 'react';
import '../Pricing.scss';

export function Free() {
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
            <button className="pricing__btn" onClick={opener}>Basic</button>
            {open && (
                <React.Fragment>
                    <div className="pricing__cost">
                        <div className="pricing__flex">
                            <div className="pricing__dollar">$</div>
                            <div className="pricing__number">0</div>
                        </div>
                        <div className="pricing__footer">Free for life</div>
                    </div>
                    <ul className="pricing__list">
                        <li className="pricing__item">1 gb of space</li>
                        <li className="pricing__item">10 gb of bandwidth</li>
                        <li className="pricing__item">3 websites</li>
                        <li className="pricing__item">Basic Customization</li>
                        <li className="pricing__item">wordpress integration</li>
                        <li className="pricing__item">email support</li>
                    </ul>
                </React.Fragment>
            )}
        </div>
    )
}