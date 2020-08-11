import React from 'react';
import NavbarNames from '../helpers/navbars/NavbarNames';
import CitationSection from '../../components/app/demos/CitationSection';

export default function NavbarDemoCitationsFactory(demoName){
    switch(demoName){
        case NavbarNames.TargetedHoverNavbars:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=sFuhHt4BXng" embeddedLink="https://www.youtube.com/embed/sFuhHt4BXng" />

        case NavbarNames.RovingBorderNavbars:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=MQX7C9EkhBU" embeddedLink="https://www.youtube.com/embed/MQX7C9EkhBU" />

        case NavbarNames.SwingingBorderNavbars:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=Ae5-88k96aY" embeddedLink="https://www.youtube.com/embed/Ae5-88k96aY" />
        
        case NavbarNames.CornerBracketsHoverNavbars:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=lJX-MlO_1GE" embeddedLink="https://www.youtube.com/embed/lJX-MlO_1GE" />

        case NavbarNames.RemoteControlNavbars:
            return <CitationSection externalLink="" embeddedLink="" />

        default:
            return null;
    }
}