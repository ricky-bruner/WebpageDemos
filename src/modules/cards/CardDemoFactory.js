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
import CardNames from '../helpers/cards/CardNames';

export default function CardDemoFactory(demoName, settings){
    switch(demoName){
        case CardNames.GameStyleCards:
            return <GameStyleCards settings={settings} />

        case CardNames.ImageClipHoverCards:
            return <ImageClipHoverCards settings={settings} />

        case CardNames.DepthOfFieldCards:
            return <DepthOfFieldCards settings={settings} />

        case CardNames.DirectionAwareCards:
            return <DirectionAwareCards settings={settings} />

        case CardNames.CircleReductionServiceCards:
            return <CircleReductionServiceCards settings={settings} />

        case CardNames.SwivelRotationCards:
            return <SwivelRotationCards settings={settings} />

        case CardNames.FlipUpHoverCards:
            return <FlipUpHoverCards settings={settings} />

        case CardNames.IsometricHoverCards:
            return <IsometricHoverCards settings={settings} />

        case CardNames.CircleGrowthServiceCards:
            return <CircleGrowthServiceCards settings={settings} />

        case CardNames.ImageSlideLeftCards:
            return <ImageSlideLeftCards settings={settings} />

        case CardNames.NeumorphismCards:
            return <NeumorphismCards settings={settings} />

        case CardNames.SkewedBorderCards:
            return <SkewedBorderCards settings={settings} />

        case CardNames.GlowingCards:
            return <GlowingCards settings={settings} />

        case CardNames.GreetingCardStyleCards:
            return <GreetingCardStyleCards settings={settings} />

        case CardNames.CircleGrowthIconCards:
            return <CircleGrowthIconCards settings={settings} /> 

        case CardNames.IconGrowthCards:
            return <IconGrowthCards settings={settings} />

        case CardNames.HoverSwitchCards:
            return <HoverSwitchCards settings={settings} />

        default:
            return null;
    }
} 