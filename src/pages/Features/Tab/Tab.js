import React from 'react';
import './Tab.scss';
import features1 from '../../../images/features/1.png';

export function Tab() {
    return (
        <div className="standart standart--gray">
            <div className="tab__content">
                <div className="tab__size">
                    <div className="tab__title">
                        Tabs with soft transitioning effect.
                    </div>
                    <div className="tab__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
                        bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
                        justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque
                        penatibus et magnis dis parturient montes.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
                        bibendum laoreet.
                    </div>
                    <a className="tab__btn" href={process.env.PUBLIC_URL}>
                        Download
                    </a>
                </div>
                <img src={features1} alt='' />
            </div>
        </div>
    );
}