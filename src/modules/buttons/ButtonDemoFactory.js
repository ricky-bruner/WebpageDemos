import React from 'react';
import LiquidWaveButtons from '../../components/buttons/liquidWave/LiquidWaveButtons';
import NeonReflectiveButtons from '../../components/buttons/neonReflective/NeonReflectiveButtons';
import ThreeDimensionalButtons from '../../components/buttons/threeDimensional/ThreeDimensionalButtons';
import OscillatingSolidButtons from '../../components/buttons/oscillatingSolid/OscillatingSolidButtons';
import AnimatedOutlineButtons from '../../components/buttons/animatedOutline/AnimatedOutlineButtons';
import ShootingBorderButtons from '../../components/buttons/shootingBorder/ShootingBorderButtons';
import MiddleOutButtons from '../../components/buttons/middleOut/MiddleOutButtons';
import ButtonNames from '../helpers/buttons/ButtonNames';

export default function ButtonDemoFactory(demoName, settings){
    switch(demoName){
        case ButtonNames.LiquidWaveButtons:
            return <LiquidWaveButtons settings={settings} />

        case ButtonNames.NeonReflectiveButtons:
            return <NeonReflectiveButtons settings={settings} />

        case ButtonNames.ThreeDimensionalButtons:
            return <ThreeDimensionalButtons settings={settings} />

        case ButtonNames.OscillatingSolidButtons:
            return <OscillatingSolidButtons settings={settings} />

        case ButtonNames.AnimatedOutlineButtons:
            return <AnimatedOutlineButtons settings={settings} />

        case ButtonNames.ShootingBorderButtons:
            return <ShootingBorderButtons settings={settings} />

        case ButtonNames.MiddleOutButtons:
            return <MiddleOutButtons settings={settings} />

        default:
            return null;
    }
} 