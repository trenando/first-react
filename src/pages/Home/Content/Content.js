import React from 'react';
import './Content.scss';
import png2 from '../../../images/icons/2.png';
import ContentForm from './ContentForm/ContentForm';

export function Content(props) {
    const onSubmit = (values) => {
        props.addTrial(values)
    }
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
                <a className="content__btn" href={process.env.PUBLIC_URL}>
                    Download
                </a>        
            </div>
            <div className="content__block">
                <div className="content__started">
                    <ContentForm onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    );
}