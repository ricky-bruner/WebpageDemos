import React, { Component } from 'react';
import ColorfulHoverQuoteBoxDemo from './ColorfulHoverQuoteBoxDemo';
import CodeWindow from '../codewindows/CodeWindow';
import BottomColorRiseTestimonialDemo from './BottomColorRiseTestimonialDemo';
import QuoteMovementTestimonialDemo from './QuoteMovementTestimonialDemo';
import "./testimonials.css";


export default class TestimonialDemos extends Component {
    state = {};

    render(){
        return (
            <div className="tesitmonials-demo-body">
                <QuoteMovementTestimonialDemo />
                <CodeWindow html=".quote-movement-testimonial-demo" />
                <ColorfulHoverQuoteBoxDemo />
                <CodeWindow html=".colorful-hover-quote-box-demo" />
                <BottomColorRiseTestimonialDemo />
                <CodeWindow html=".bottom-color-rise-testimonial-demo" />
            </div>
        );
    }
}