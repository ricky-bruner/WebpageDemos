import React from 'react';
import GameStyleCards from "../../components/cards/GameStyleCards";
import ImageClipHoverCards from '../../components/cards/ImageClipHoverCards';
import DepthOfFieldCards from '../../components/cards/DepthOfFieldCards';
import DirectionAwareCards from '../../components/cards/DirectionAwareCards';
import CircleReductionServiceCards from '../../components/cards/CircleReductionServiceCards';
import SwivelRotationCards from '../../components/cards/SwivelRotationCards';
import FlipUpHoverCards from '../../components/cards/FlipUpHoverCards';
import IsometricHoverCards from '../../components/cards/IsometricHoverCards';
import CircleGrowthServiceCards from '../../components/cards/CircleGrowthServiceCards';
import ImageSlideLeftCards from '../../components/cards/ImageSlideLeftCards';
import NeumorphismCards from '../../components/cards/NeumorphismCards';
import SkewedBorderCards from '../../components/cards/SkewedBorderCards';
import GlowingCards from '../../components/cards/GlowingCards';
import FlipHoverCards from '../../components/cards/FlipHoverCards';
import CircleGrowthIconCards from '../../components/cards/CircleGrowthIconCards';
import IconGrowthCards from '../../components/cards/IconGrowthCards';
import HoverSwitchCards from '../../components/cards/HoverSwitchCards';

export default function CardDemoFactory(demoName, settings){
    switch(demoName){
        case "GameStyleCards":
            return <GameStyleCards settings={settings} />

        case "ImageClipHoverCards":
            return <ImageClipHoverCards settings={settings} />

        case "DepthOfFieldCards":
            return <DepthOfFieldCards settings={settings} />

        case "DirectionAwareCards":
            return <DirectionAwareCards settings={settings} />

        case "CircleReductionServiceCards":
            return <CircleReductionServiceCards settings={settings} />

        case "SwivelRotationCards":
            return <SwivelRotationCards settings={settings} />

        case "FlipUpHoverCards":
            return <FlipUpHoverCards settings={settings} />

        case "IsometricHoverCards":
            return <IsometricHoverCards settings={settings} />

        case "CircleGrowthServiceCards":
            return <CircleGrowthServiceCards settings={settings} />

        case "ImageSlideLeftCards":
            return <ImageSlideLeftCards settings={settings} />

        case "NeumorphismCards":
            return <NeumorphismCards settings={settings} />

        case "SkewedBorderCards":
            return <SkewedBorderCards settings={settings} />

        case "GlowingCards":
            return <GlowingCards settings={settings} />

        case "FlipHoverCards":
            return <FlipHoverCards settings={settings} />

        case "CircleGrowthIconCards":
            return <CircleGrowthIconCards settings={settings} /> 

        case "IconGrowthCards":
            return <IconGrowthCards settings={settings} />

        case "HoverSwitchCards":
            return <HoverSwitchCards settings={settings} />

        default:
            return null;
    }
} 