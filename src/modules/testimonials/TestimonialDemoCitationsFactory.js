import React from 'react';
import TestimonialNames from "../helpers/testimonials/TestimonialNames";
import CitationSection from "../../components/app/demos/CitationSection";

export default function TestimonialDemoCitationsFactory(demoName){
    switch(demoName){
        case TestimonialNames.QuoteMovementTestimonials:
            return <CitationSection externalLink="" embeddedLink="" />

        case TestimonialNames.ColorfulHoverQuoteBoxTestimonials:
            return <CitationSection externalLink="" embeddedLink="" />

        case TestimonialNames.BottomColorRiseTestimonials:
            return <CitationSection externalLink="" embeddedLink="" />

        default:
            return null;
    }
} 