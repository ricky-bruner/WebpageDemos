import React from 'react';
import CardNames from "../helpers/cards/CardNames"
import CitationSection from '../../components/app/demos/CitationSection';

export default function CardDemoCitationsFactory(demoName){
    switch(demoName){
        case CardNames.GameStyleCards:
            return <CitationSection externalLink="" embeddedLink="" />

        case CardNames.ImageClipHoverCards:
            return <CitationSection externalLink="" embeddedLink="" />

        case CardNames.DepthOfFieldCards:
            return <CitationSection externalLink="" embeddedLink="" />

        case CardNames.DirectionAwareCards:
            return <CitationSection externalLink="" embeddedLink="" />

        case CardNames.CircleReductionServiceCards:
            return <CitationSection externalLink="" embeddedLink="" />

        case CardNames.SwivelRotationCards:
            return <CitationSection externalLink="" embeddedLink="" />

        case CardNames.FlipUpHoverCards:
            return <CitationSection externalLink="" embeddedLink="" />

        case CardNames.IsometricHoverCards:
            return <CitationSection externalLink="" embeddedLink="" />

        case CardNames.CircleGrowthServiceCards:
            return <CitationSection externalLink="" embeddedLink="" />

        case CardNames.ImageSlideLeftCards:
            return <CitationSection externalLink="" embeddedLink="" />

        case CardNames.NeumorphismCards:
            return <CitationSection externalLink="" embeddedLink="" />

        case CardNames.SkewedBorderCards:
            return <CitationSection externalLink="" embeddedLink="" />

        case CardNames.GlowingCards:
            return <CitationSection externalLink="" embeddedLink="" />

        case CardNames.GreetingCardStyleCards:
            return <CitationSection externalLink="" embeddedLink="" />

        case CardNames.CircleGrowthIconCards:
            return <CitationSection externalLink="" embeddedLink="" />

        case CardNames.IconGrowthCards:
            return <CitationSection externalLink="" embeddedLink="" />

        case CardNames.HoverSwitchCards:
            return <CitationSection externalLink="" embeddedLink="" />

        default:
            return null;
    }
} 