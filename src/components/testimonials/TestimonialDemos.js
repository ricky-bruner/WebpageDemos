import React, { Component } from 'react';
import ColorfulHoverQuoteBoxDemo from './ColorfulHoverQuoteBoxDemo';
import BottomColorRiseTestimonialDemo from './BottomColorRiseTestimonialDemo';
import QuoteMovementTestimonialDemo from './QuoteMovementTestimonialDemo';
import "./testimonials.css";
import TestimonialDemoHeader from './TestimonialDemoHeader';

export default class TestimonialDemos extends Component {
    state = {};

    render(){
        return (
            <div className="tesitmonials-demo-body">
                <TestimonialDemoHeader />
                {
                    (this.props.selectedDemo === "Quote Movement" || this.props.selectedDemo === "All") &&
                    <div>
                        <QuoteMovementTestimonialDemo />
                    </div>
                }
                {
                    (this.props.selectedDemo === "Colorful Hover Quote Box" || this.props.selectedDemo === "All") &&
                    <div>
                        <ColorfulHoverQuoteBoxDemo />
                    </div>
                }
                {
                    (this.props.selectedDemo === "Bottom Color Rise" || this.props.selectedDemo === "All") &&
                    <div>
                        <BottomColorRiseTestimonialDemo />
                    </div>
                }
            </div>
        );
    }
}