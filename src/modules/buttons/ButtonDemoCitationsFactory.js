import React from 'react';
import ButtonNames from "../helpers/buttons/ButtonNames"
import CitationSection from '../../components/app/demos/CitationSection';

export default function ButtonDemoCitationsFactory(demoName){
    switch(demoName){
        case ButtonNames.LiquidWaveButtons:
            return <CitationSection externalLink="" embeddedLink="" />

        case ButtonNames.NeonReflectiveButtons:
            return <CitationSection externalLink="" embeddedLink="" />

        case ButtonNames.ThreeDimensionalButtons:
            return <CitationSection externalLink="" embeddedLink="" />

        case ButtonNames.OscillatingSolidButtons:
            return <CitationSection externalLink="" embeddedLink="" />

        case ButtonNames.AnimatedOutlineButtons:
            return <CitationSection externalLink="" embeddedLink="" />

        case ButtonNames.ShootingBorderButtons:
            return <CitationSection externalLink="" embeddedLink="" />

        case ButtonNames.MiddleOutButtons:
            return <CitationSection externalLink="" embeddedLink="" />

        default:
            return null;
    }
} 