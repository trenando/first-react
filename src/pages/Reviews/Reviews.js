import React from 'react';
import './Reviews.scss';
import png7 from '../../images/icons/7.png';
import { ReviewsContent } from './ReviewsContent/ReviewsContent';

export function Reviews() {
    const content = [
        {
            message: `Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Doloribus
            accusamus expedita repellat similique
            odio aspernatur ex, architecto eaque
            quo suscipit.`,
            png: png7,
            name: "Jeremy H.",
            prof: "Manager"
        },
        {
            message: `Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Doloribus
            accusamus expedita repellat similique
            odio aspernatur ex, architecto eaque
            quo suscipit.`,
            png: png7,
            name: "John S.",
            prof: "Freelancer"
        },
        {
            message: `Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Doloribus
            accusamus expedita repellat similique
            odio aspernatur ex, architecto eaque
            quo suscipit.`,
            png: png7,
            name: "Susan W.",
            prof: "Photographer"
        }
    ]

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
                    {content.map(data => <ReviewsContent {...data} />)}
                </div>
            </div>
        </div>
    );
}