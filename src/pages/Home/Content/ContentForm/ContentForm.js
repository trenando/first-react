import React from 'react';
import '../Content.scss';
import { reduxForm, Field } from 'redux-form';

let ContentForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className="content__size">
            <div className="content__msg">
                Try Your&nbsp;<b>Free</b>&nbsp;Trial Today
            </div>
            <div className="content__input">
                <Field type='text' placeholder='Name' name="name" component='input'/>
            </div>
            <div className="content__input">
                <Field type='text' placeholder='Email' name="email" component='input' />
            </div>
            <div className="content__input">
                <Field type='password' placeholder='Password' name="password" component='input' />
            </div>
            <div className="content__submit">
                <button type="submit">Get Started</button>
            </div>
        </form>
    )
}

ContentForm = reduxForm({ form: 'trial' })(ContentForm)

export default ContentForm