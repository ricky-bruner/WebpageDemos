import React from 'react';
import TestimonialNames from "../helpers/testimonials/TestimonialNames";
import QuoteMovementTestimonials from "../../components/testimonials/quoteMovement/QuoteMovementTestimonials";
import ColorfulHoverQuoteBoxTestimonials from "../../components/testimonials/colorfulHoverQuoteBox/ColorfulHoverQuoteBoxTestimonials";
import BottomColorRiseTestimonials from "../../components/testimonials/bottomColorRise/BottomColorRiseTestimonials";

export default function TestimonialDemoFactory(demoName, settings){
    switch(demoName){
        case TestimonialNames.QuoteMovementTestimonials:
            return <QuoteMovementTestimonials settings={settings} />

        case TestimonialNames.ColorfulHoverQuoteBoxTestimonials:
            return <ColorfulHoverQuoteBoxTestimonials settings={settings} />

        case TestimonialNames.BottomColorRiseTestimonials:
            return <BottomColorRiseTestimonials settings={settings} />

        default:
            return null;
    }
} 