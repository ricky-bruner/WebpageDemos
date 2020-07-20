import React from 'react';
import GameStyleCards from "../../components/cards/gameStyle/GameStyleCards";
import ImageClipHoverCards from '../../components/cards/imageClipHover/ImageClipHoverCards';
import DepthOfFieldCards from '../../components/cards/depthOfField/DepthOfFieldCards';
import DirectionAwareCards from '../../components/cards/directionAware/DirectionAwareCards';
import CircleReductionServiceCards from '../../components/cards/circleReductionService/CircleReductionServiceCards';
import SwivelRotationCards from '../../components/cards/swivelRotation/SwivelRotationCards';
import FlipUpHoverCards from '../../components/cards/flipUpHover/FlipUpHoverCards';
import IsometricHoverCards from '../../components/cards/isometricHover/IsometricHoverCards';
import CircleGrowthServiceCards from '../../components/cards/circleGrowthService/CircleGrowthServiceCards';
import ImageSlideLeftCards from '../../components/cards/imageSlideLeft/ImageSlideLeftCards';
import NeumorphismCards from '../../components/cards/neumorphism/NeumorphismCards';
import SkewedBorderCards from '../../components/cards/skewedBorder/SkewedBorderCards';
import GlowingCards from '../../components/cards/glowing/GlowingCards';
import CircleGrowthIconCards from '../../components/cards/circleGrowthIcon/CircleGrowthIconCards';
import IconGrowthCards from '../../components/cards/iconGrowth/IconGrowthCards';
import HoverSwitchCards from '../../components/cards/hoverSwitch/HoverSwitchCards';
import GreetingCardStyleCards from '../../components/cards/greetingCardStyle/GreetingCardStyleCards';

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

        case "GreetingCardStyleCards":
            return <GreetingCardStyleCards settings={settings} />

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