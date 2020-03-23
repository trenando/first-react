import React from 'react';
import './Pricing.scss';
import { PricingContent } from './PricingContent/PricingContent';

export function Pricing() {
    const content = [
        {
            type: "Basic",
            cost: "0",
            msg: "Free for life",
            items: {
                space: "1 gb of space",
                bandwidth: "10 gb of bandwidth",
                web: "3 websites",
                custom: "Basic Customization",
                integration: "wordpress integration",
                sup: "email support"
            }
        },
        {
            type: "Professional",
            cost: "19",
            msg: "Monthly Payment",
            items: {
                space: "5 gb of space",
                bandwidth: "50 gb of bandwidth",
                web: "12 websites",
                custom: "Advanced Customization",
                integration: "wordpress integration",
                sup: "email support"
            }
        },
        {
            type: "Enterprice",
            cost: "70",
            msg: "Monthly Payment",
            items: {
                space: "unlimited space",
                bandwidth: "unlimited bandwidth",
                web: "100 websites",
                custom: "Advanced Customization",
                integration: "wordpress integration",
                sup: "24/7 customer support"
            }
        }
    ]
    return (
        <div className="standart standart--pricing">
            <div className="container">
                <div className="pricing__title">
                    Pricing option
                </div>
                <div className="pricing__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className="pricing__block">
                    {content.map((data,index) => <PricingContent key={index} {...data} />)}
                </div>
            </div>
        </div>
    );
}