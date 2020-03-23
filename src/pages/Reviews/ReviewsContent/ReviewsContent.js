import React from 'react';
import '../Reviews.scss';

export function ReviewsContent({ message, png, name, prof }) {
    return (
        <div className="reviews__message">
            <div className="reviews__subtext">
                <p>
                    {message}
                </p>
            </div>
            <div className="reviews__one">
                <img src={png} alt="" />
                <div className="reviews__person">
                    <div className="reviews__name">{name}</div>
                    <div className="reviews__prof">{prof}</div>
                </div>
            </div>
        </div>
    )
}