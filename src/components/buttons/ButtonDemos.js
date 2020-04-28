import React, { Component } from 'react';
import MiddleOutButtonDemo from './MiddleOutButtonDemo';
import CodeWindow from '../codewindows/CodeWindow';
import "./buttons.css";
import ShootingBorderButtonDemo from './ShootingBorderButtonDemo';
import AnimatedOutlineButtonDemo from './AnimatedOutlineButtonDemo';
import OscillatingSolidButtonDemo from './OscillatingSolidButtonDemo';
import ThreeDimensionalButtonDemo from './ThreeDimensionalButtonDemo';
import NeonReflectiveButtonDemo from './NeonReflectiveButtonDemo';
import LiquidWaveButtonDemo from './LiquidWaveButtonDemo';

export default class ButtonDemos extends Component {
    state = {}
    
    render(){
        return (
            <div className="button-demos-body">
                <LiquidWaveButtonDemo />
                <NeonReflectiveButtonDemo />
                <ThreeDimensionalButtonDemo />
                <OscillatingSolidButtonDemo />
                <AnimatedOutlineButtonDemo />
                <ShootingBorderButtonDemo />
                <MiddleOutButtonDemo />
            </div>
        )
    }
}