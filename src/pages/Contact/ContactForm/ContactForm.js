import React from 'react'
import '../Contact.scss';
import { Field, reduxForm } from 'redux-form';

let ContactForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="contact__inputs">
                <div className="contact__input">
                    <Field type="text" placeholder="Name" name="name" component="input" />
                    <Field type="text" placeholder="Email" name="email" component="input" />
                    <Field type="text" placeholder="Subject" name="subject" component="input" />
                </div>
                <div className="contact__input">
                    <Field type="text" placeholder="Message" name="message" component="textarea"/>
                </div>
            </div>
            <button className="contact__btn">Send Message</button>
        </form>
    )
}

ContactForm = reduxForm({ form: 'contact' })(ContactForm)

export default ContactForm