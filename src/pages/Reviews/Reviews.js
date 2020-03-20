import React from 'react';
import './Reviews.scss';
import png7 from '../../images/icons/7.png';

export function Reviews() {
    return (
        <div className="standart standart--white">
            <div className="container">
                <div className="reviews__title">
                    What our customers are saying
                </div>
                <div className="reviews__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className="reviews__block">
                    <div className="reviews__message">
                        <div className="reviews__subtext">
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Doloribus
                                accusamus expedita repellat similique
                                odio aspernatur ex, architecto eaque
                                quo suscipit.
                            </p>
                        </div>
                        <div className="reviews__one">
                            <img src={png7} alt="" />
                            <div className="reviews__person">
                                <div className="reviews__name">Jeremy H.</div>
                                <div className="reviews__prof">Manager</div>
                            </div>
                        </div>
                    </div>
                    <div className="reviews__message">
                        <div className="reviews__subtext">
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Doloribus
                                accusamus expedita repellat similique
                                odio aspernatur ex, architecto eaque
                                quo suscipit.
                            </p>
                        </div>
                        <div className="reviews__one">
                            <img src={png7} alt="" />
                            <div className="reviews__person">
                                <div className="reviews__name">John S.</div>
                                <div className="reviews__prof">Freelancer</div>
                            </div>
                        </div>
                    </div>
                    <div className="reviews__message">
                        <div className="reviews__subtext">
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit. Doloribus
                                accusamus expedita repellat similique
                                odio aspernatur ex, architecto eaque
                                quo suscipit.
                            </p>
                        </div>
                        <div className="reviews__one">
                            <img src={png7} alt="" />
                            <div className="reviews__person">
                                <div className="reviews__name">Susan W.</div>
                                <div className="reviews__prof">Photographer</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}