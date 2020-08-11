import React from 'react';
import CitationSection from "../../components/app/demos/CitationSection";

export default function ScrollbarDemoCitationsFactory(demoName){
    switch(demoName){
        case "":
            return <CitationSection externalLink="" embeddedLink="" />

        default:
            return null;
    }
} 