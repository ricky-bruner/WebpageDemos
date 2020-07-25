import React from 'react';
import TargetedHoverNavbars from "../../components/navbars/targetedHover/TargetedHoverNavbars";
import NavbarNames from '../helpers/navbars/NavbarNames';
import RovingBorderNavbars from '../../components/navbars/rovingBorder/RovingBorderNavbars';
import SwingingBorderNavbars from '../../components/navbars/swingingBorder/SwingingBorderNavbars';
import RemoteCnntrolNavbars from '../../components/navbars/remoteControl/RemoteControlNavbars';
import CornerBracketsHoverNavbars from '../../components/navbars/cornerBracketsHover/CornerBracketsHoverNavbars';

export default function NavbarDemoFactory(demoName, settings){
    switch(demoName){
        case NavbarNames.TargetedHoverNavbars:
            return <TargetedHoverNavbars settings={settings} />

        case NavbarNames.RovingBorderNavbars:
            return <RovingBorderNavbars settings={settings} />

        case NavbarNames.SwingingBorderNavbars:
            return <SwingingBorderNavbars settings={settings} />
        
        case NavbarNames.CornerBracketsHoverNavbars:
            return <CornerBracketsHoverNavbars settings={settings} />   

        case NavbarNames.RemoteControlNavbars:
            return <RemoteCnntrolNavbars settings={settings} />

        default:
            return null;
    }
} 