import React from 'react';
import LiquidWaveButtons from '../../components/buttons/liquidWave/LiquidWaveButtons';
import NeonReflectiveButtons from '../../components/buttons/neonReflective/NeonReflectiveButtons';
import ThreeDimensionalButtons from '../../components/buttons/threeDimensional/ThreeDimensionalButtons';
import OscillatingSolidButtons from '../../components/buttons/oscillatingSolid/OscillatingSolidButtons';
import AnimatedOutlineButtons from '../../components/buttons/animatedOutline/AnimatedOutlineButtons';
import ShootingBorderButtons from '../../components/buttons/shootingBorder/ShootingBorderButtons';
import MiddleOutButtons from '../../components/buttons/middleOut/MiddleOutButtons';

export default function ButtonDemoFactory(demoName, settings){
    switch(demoName){
        case "LiquidWaveButtons":
            return <LiquidWaveButtons settings={settings} />

        case "NeonReflectiveButtons":
            return <NeonReflectiveButtons settings={settings} />

        case "ThreeDimensionalButtons":
            return <ThreeDimensionalButtons settings={settings} />

        case "OscillatingSolidButtons":
            return <OscillatingSolidButtons settings={settings} />

        case "AnimatedOutlineButtons":
            return <AnimatedOutlineButtons settings={settings} />

        case "ShootingBorderButtons":
            return <ShootingBorderButtons settings={settings} />

        case "MiddleOutButtons":
            return <MiddleOutButtons settings={settings} />

        default:
            return null;
    }
} 