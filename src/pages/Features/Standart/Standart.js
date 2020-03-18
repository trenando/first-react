import React from 'react';
import './Standart.scss';
import features3 from '../../../images/features/3.jpg';

export function Standart() {
    return (
        <div className="standart">
            <div className="standart__content">
                <div className="standart__size">
                    <div className="standart__title">
                        Standard Picture Section
                    </div>
                    <div className="standart__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                        euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
                        et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis
                        natoque penatibus et magnis dis parturient montes.

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
                        bibendum laoreet.
                    </div>
                </div>
                <img src={features3} alt='' />
            </div>
        </div>
    );
}