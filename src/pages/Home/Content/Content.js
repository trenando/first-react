import React from 'react';
import './Content.scss';
import png2 from '../../../images/icons/2.png';

export function Content() {
    return (
        <div className="content__flex">
            <div className="content__block">
                <div className="content__img">
                    <img src={png2} alt="" />
                </div>
                <div className="content__title">
                    MODERN AXURE TEMPLATE
                    FOR BEAUTIFUL PROTOTYPES
                </div>
                <div className="content__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                    euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                    accumsan et viverra justo commodo.
                </div>
                <a className="content__btn" href="/">
                    Download
                </a>
            </div>
            <div className="content__block">
                <div className="content__started">
                    <div className="content__size">
                        <div className="content__msg">
                            Try Your&nbsp;<b>Free</b>&nbsp;Trial Today
                        </div>
                        <div className="content__input">
                            <input type='text' placeholder='Name' />
                        </div>
                        <div className="content__input">
                            <input type='text' placeholder='Email' />
                        </div>
                        <div className="content__input">
                            <input type='text' placeholder='Password' />
                        </div>
                        <div className="content__submit">
                            <input type="submit" value="Get Started"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}