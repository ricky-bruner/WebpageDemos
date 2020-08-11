import React from 'react';
import TestimonialNames from "../helpers/testimonials/TestimonialNames";
import CitationSection from "../../components/app/demos/CitationSection";

export default function TestimonialDemoCitationsFactory(demoName){
    switch(demoName){
        case TestimonialNames.QuoteMovementTestimonials:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=b4sG5h_Coa4" embeddedLink="https://www.youtube.com/embed/b4sG5h_Coa4" />

        case TestimonialNames.ColorfulHoverQuoteBoxTestimonials:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=aK7RQEY30lo" embeddedLink="https://www.youtube.com/embed/aK7RQEY30lo" />

        case TestimonialNames.BottomColorRiseTestimonials:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=pGEcBBjvRlU" embeddedLink="https://www.youtube.com/embed/pGEcBBjvRlU" />

        default:
            return null;
    }
} 