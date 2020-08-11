import React from 'react';
import IconNames from '../helpers/icons/IconNames';
import CitationSection from '../../components/app/demos/CitationSection';

export default function IconDemoCitationsFactory(demoName){
    switch(demoName){
        case IconNames.FlipCubeSocialMediaIcons:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=2P8jtNcZk80" embeddedLink="https://www.youtube.com/embed/2P8jtNcZk80" />

        case IconNames.AnimatedSnakeSocialMediaIcons:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=Vm_te-D25D4" embeddedLink="https://www.youtube.com/embed/Vm_te-D25D4" />

        case IconNames.MagicLineSocialMediaIcons:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=zB07dcKX9FA" embeddedLink="https://www.youtube.com/embed/zB07dcKX9FA" />
        
        case IconNames.IsometricCubeSocialMediaIcons:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=b57zlucCslw" embeddedLink="https://www.youtube.com/embed/b57zlucCslw" />
        
        case IconNames.IsometricHoverRiseSocialMediaIcons:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=C8wSNZqktOM" embeddedLink="https://www.youtube.com/embed/C8wSNZqktOM" />

        case IconNames.IsometricSocialMediaIcons:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=YRp8kSUZiss" embeddedLink="https://www.youtube.com/embed/YRp8kSUZiss" />
        
        case IconNames.HoverRiseLayeredSocialMediaIcons:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=AEb_NhCHo9E" embeddedLink="https://www.youtube.com/embed/AEb_NhCHo9E" />
        
        case IconNames.AnimatedMovementIcons:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=0cYdA4MBwhk" embeddedLink="https://www.youtube.com/embed/0cYdA4MBwhk" />

        default:
            return null;
    }
}