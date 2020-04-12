import React, { Component } from 'react';
import MiddleOutButtonDemo from './MiddleOutButtonDemo';
import CodeWindow from '../codewindows/CodeWindow';
import "./buttons.css";
import ShootingBorderButtonDemo from './ShootingBorderButtonDemo';
import AnimatedOutlineButtonDemo from './AnimatedOutlineButtonDemo';
import OscillatingSolidButtonDemo from './OscillatingSolidButtonDemo';
import ThreeDimensionalButtonDemo from './ThreeDimensionalButtonDemo';
import NeonReflectiveButtonDemo from './NeonReflectiveButtonDemo';

export default class ButtonDemos extends Component {
    state = {}
    
    render(){
        return (
            <div className="button-demos-body">
                <NeonReflectiveButtonDemo />
                <CodeWindow html=".neon-reflective-button-demo" />
                <ThreeDimensionalButtonDemo />
                <CodeWindow html=".three-dimensional-button-demo" />
                <OscillatingSolidButtonDemo />
                <CodeWindow html=".oscillating-solid-button-demo" />
                <AnimatedOutlineButtonDemo />
                <CodeWindow html=".animated-outline-button-demo" />
                <ShootingBorderButtonDemo />
                <CodeWindow html=".shooting-border-button-demo" />
                <MiddleOutButtonDemo />
                <CodeWindow html=".middle-out-button-demo" />
            </div>
        )
    }
}