import React from 'react';
import CardNames from "../helpers/cards/CardNames"
import CitationSection from '../../components/app/demos/CitationSection';

export default function CardDemoCitationsFactory(demoName){
    switch(demoName){
        case CardNames.GameStyleCards:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=H-ScHKhXZVM" embeddedLink="https://www.youtube.com/embed/H-ScHKhXZVM" />

        case CardNames.ImageClipHoverCards:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=tEu_zIU8BA8" embeddedLink="https://www.youtube.com/embed/tEu_zIU8BA8" />

        case CardNames.DepthOfFieldCards:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=kBUvJoU1lDo" embeddedLink="https://www.youtube.com/embed/kBUvJoU1lDo" />

        case CardNames.DirectionAwareCards:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=DLTY01YVb2M" embeddedLink="https://www.youtube.com/embed/DLTY01YVb2M" />

        case CardNames.CircleReductionServiceCards:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=uXHTMLc6lqI" embeddedLink="https://www.youtube.com/embed/uXHTMLc6lqI" />

        case CardNames.SwivelRotationCards:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=aDmRB3V_RdE" embeddedLink="https://www.youtube.com/embed/aDmRB3V_RdE" />

        case CardNames.FlipUpHoverCards:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=M7Dae-7nfow" embeddedLink="https://www.youtube.com/embed/M7Dae-7nfow" />

        case CardNames.IsometricHoverCards:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=FYpsf0ACkmI" embeddedLink="https://www.youtube.com/embed/FYpsf0ACkmI" />

        case CardNames.CircleGrowthServiceCards:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=JJkuGvfFKOw" embeddedLink="https://www.youtube.com/embed/JJkuGvfFKOw" />

        case CardNames.ImageSlideLeftCards:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=Vcay_PG2-DM" embeddedLink="https://www.youtube.com/embed/Vcay_PG2-DM" />

        case CardNames.NeumorphismCards:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=d071ZRyZlyM" embeddedLink="https://www.youtube.com/embed/d071ZRyZlyM" />

        case CardNames.SkewedBorderCards:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=-1U62fdmCk4" embeddedLink="https://www.youtube.com/embed/-1U62fdmCk4" />

        case CardNames.GlowingCards:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=LYWLE45byXc" embeddedLink="https://www.youtube.com/embed/LYWLE45byXc" />

        case CardNames.GreetingCardStyleCards:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=7glClI-rj74" embeddedLink="https://www.youtube.com/embed/7glClI-rj74" />

        case CardNames.CircleGrowthIconCards:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=KFmEjQCyfMw" embeddedLink="https://www.youtube.com/embed/KFmEjQCyfMw" />

        case CardNames.IconGrowthCards:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=EZqhWu8GJ6U" embeddedLink="https://www.youtube.com/embed/EZqhWu8GJ6U" />

        case CardNames.HoverSwitchCards:
            return <CitationSection externalLink="https://www.youtube.com/watch?v=avdjKAN9P-o" embeddedLink="https://www.youtube.com/embed/avdjKAN9P-o" />

        default:
            return null;
    }
} 