import React from 'react';
import './Contact.scss';
import ContactForm  from './ContactForm/ContactForm'

export function Contact(props) {
    const onSubmit = (values) =>{
        props.addContact(values)
    }
    return (
        <div className="standart standart--white">
            <div className="container">
                <div className="contact__title">
                    Contact us
                </div>
                <div className="contact__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <ContactForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
}