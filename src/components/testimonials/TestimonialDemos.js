import React, { Component } from 'react';
import ColorfulHoverQuoteBoxDemo from './ColorfulHoverQuoteBoxDemo';
import CodeWindow from '../codewindows/CodeWindow';
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
                        <CodeWindow html=".quote-movement-testimonial-demo" />
                    </div>
                }
                {
                    (this.props.selectedDemo === "Colorful Hover Quote Box" || this.props.selectedDemo === "All") &&
                    <div>
                        <ColorfulHoverQuoteBoxDemo />
                        <CodeWindow html=".colorful-hover-quote-box-demo" />
                    </div>
                }
                {
                    (this.props.selectedDemo === "Bottom Color Rise" || this.props.selectedDemo === "All") &&
                    <div>
                        <BottomColorRiseTestimonialDemo />
                        <CodeWindow html=".bottom-color-rise-testimonial-demo" />
                    </div>
                }
            </div>
        );
    }
}