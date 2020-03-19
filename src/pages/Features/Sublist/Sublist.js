import React from 'react';
import './Sublist.scss';
import features2 from '../../../images/features/2.jpg';
import png3 from '../../../images/icons/3.png';

export function Sublist() {
    return (
        <div className="standart standart--white">
            <div className="sublist__content">
                <img src={features2} alt='' />
                <div className="sublist__size">
                    <div className="sublist__title">
                        Tabs with soft transitioning effect.
                    </div>
                    <div className="sublist__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                        euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                        accumsan et viverra justo commodo.
                    </div>
                    <div className="sublist__block">
                        <img className="sublist__img" src={png3} alt='' />
                        <div>
                            <div className="list__title">Title</div>
                            <div className="list__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aenean euismod bibendum laoreet.
                            </div>
                        </div>
                    </div>
                    <div className="sublist__block">
                        <img className="sublist__img" src={png3} alt='' />
                        <div>
                            <div className="list__title">Title</div>
                            <div className="list__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aenean euismod bibendum laoreet. Proin gravida dolor
                                sit amet lacus accumsan et viverra justo commodo.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}