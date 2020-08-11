import React from 'react';
import IconNames from '../helpers/icons/IconNames';
import CitationSection from '../../components/app/demos/CitationSection';

export default function IconDemoCitationsFactory(demoName){
    switch(demoName){
        case IconNames.FlipCubeSocialMediaIcons:
            return <CitationSection externalLink="" embeddedLink="" />

        case IconNames.AnimatedSnakeSocialMediaIcons:
            return <CitationSection externalLink="" embeddedLink="" />

        case IconNames.MagicLineSocialMediaIcons:
            return <CitationSection externalLink="" embeddedLink="" />
        
        case IconNames.IsometricCubeSocialMediaIcons:
            return <CitationSection externalLink="" embeddedLink="" />
        
        case IconNames.IsometricHoverRiseSocialMediaIcons:
            return <CitationSection externalLink="" embeddedLink="" />

        case IconNames.IsometricSocialMediaIcons:
            return <CitationSection externalLink="" embeddedLink="" />
        
        case IconNames.HoverRiseLayeredSocialMediaIcons:
            return <CitationSection externalLink="" embeddedLink="" />
        
        case IconNames.AnimatedMovementIcons:
            return <CitationSection externalLink="" embeddedLink="" />

        default:
            return null;
    }
}