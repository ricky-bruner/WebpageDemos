import React from 'react';
import ButtonNames from "../helpers/buttons/ButtonNames"
import CitationSection from '../../components/app/demos/CitationSection';

export default function ButtonDemoCitationsFactory(demoName){
    switch(demoName){
        case ButtonNames.LiquidWaveButtons:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=wjHTKLstbRg" embeddedLink="https://www.youtube.com/embed/wjHTKLstbRg" />

        case ButtonNames.NeonReflectiveButtons:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=3RRgVHd2TXQ" embeddedLink="https://www.youtube.com/embed/3RRgVHd2TXQ" />

        case ButtonNames.ThreeDimensionalButtons:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=nYHEmB6xalo" embeddedLink="https://www.youtube.com/embed/nYHEmB6xalo" />

        case ButtonNames.OscillatingSolidButtons:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=SaWuDZZCkw8" embeddedLink="https://www.youtube.com/embed/SaWuDZZCkw8" />

        case ButtonNames.AnimatedOutlineButtons:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=KT6YusE_7dk" embeddedLink="https://www.youtube.com/embed/KT6YusE_7dk" />

        case ButtonNames.ShootingBorderButtons:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=w0V4HAYYCbU" embeddedLink="https://www.youtube.com/embed/w0V4HAYYCbU" />

        case ButtonNames.MiddleOutButtons:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=CzedjonaEjc" embeddedLink="https://www.youtube.com/embed/CzedjonaEjc" />

        default:
            return null;
    }
} 