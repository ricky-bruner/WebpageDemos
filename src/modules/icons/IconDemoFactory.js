import React from 'react';
import IconNames from "../helpers/icons/IconNames";
import AnimatedMovementIcons from "../../components/icons/animatedMovement/AnimatedMovementIcons";
import HoverRiseLayeredSocialMediaIcons from '../../components/icons/hoverRiseLayeredSocialMedia/HoverRiseLayeredSocialMediaIcons';
import IsometricSocialMediaIcons from '../../components/icons/isometricSocialMedia/IsometricSocialMediaIcons';
import IsometricHoverRiseSocialMediaIcons from '../../components/icons/isometricHoverRiseSocialMedia/IsometricHoverRiseSocialMediaIcons';
import IsometricCubeSocialMediaIcons from '../../components/icons/isometricCubeSocialMedia/IsometricCubeSocialMediaIcons';
import MagicLineSocialMediaIcons from '../../components/icons/magicLineSocialMedia/MagicLineSocialMediaIcons';
import AnimatedSnakeSocialMediaIcons from '../../components/icons/animatedSnakeSocialMedia/AnimatedSnakeSocialMediaIcons';
import FlipCubeSocialMediaIcons from '../../components/icons/flipCubeSocialMedia/FlipCubeSocialMediaIcons';

export default function IconDemoFactory(demoName, settings){
    switch(demoName){
        case IconNames.FlipCubeSocialMediaIcons:
            return <FlipCubeSocialMediaIcons settings={settings} />

        case IconNames.AnimatedSnakeSocialMediaIcons:
            return <AnimatedSnakeSocialMediaIcons settings={settings} />

        case IconNames.MagicLineSocialMediaIcons:
            return <MagicLineSocialMediaIcons settings={settings} />
        
        case IconNames.IsometricCubeSocialMediaIcons:
            return <IsometricCubeSocialMediaIcons settings={settings} />
        
        case IconNames.IsometricHoverRiseSocialMediaIcons:
            return <IsometricHoverRiseSocialMediaIcons settings={settings} />

        case IconNames.IsometricSocialMediaIcons:
            return <IsometricSocialMediaIcons settings={settings} />
        
        case IconNames.HoverRiseLayeredSocialMediaIcons:
            return <HoverRiseLayeredSocialMediaIcons settings={settings} />
        
        case IconNames.AnimatedMovementIcons:
            return <AnimatedMovementIcons settings={settings} />

        default:
            return null;
    }
} 