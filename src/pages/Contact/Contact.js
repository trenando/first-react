import React from 'react';
import './Contact.scss';

export function Contact() {
    return (
        <div className="standart standart--white">
            <div className="container">
                <div className="contact__title">
                    Contact us
                </div>
                <div className="contact__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className="contact__inputs">
                    <div className="contact__input">
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Email" />
                        <input type="text" placeholder="Subject" />
                    </div>
                    <div className="contact__input">
                        <textarea type="text" placeholder="Message" />
                    </div>
                </div>
                <button className="contact__btn">Send Message</button>
            </div>
        </div>
    );
}