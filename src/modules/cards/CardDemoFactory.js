import React from 'react';
import GameStyleCards from "../../components/cards/GameStyleCards";
import ImageClipHoverCards from '../../components/cards/ImageClipHoverCards';
import DepthOfFieldCards from '../../components/cards/DepthOfFieldCards';
import DirectionAwareCards from '../../components/cards/DirectionAwareCards';
import CircleReductionServiceCards from '../../components/cards/CircleReductionServiceCards';
import SwivelRotationCards from '../../components/cards/SwivelRotationCards';
import FlipUpHoverCards from '../../components/cards/FlipUpHoverCards';
import IsometricHoverCards from '../../components/cards/IsometricHoverCards';

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

        default:
            return null;
    }
} 