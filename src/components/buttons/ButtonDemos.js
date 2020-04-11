import React, { Component } from 'react';
import MiddleOutButtonDemo from './MiddleOutButtonDemo';
import CodeWindow from '../codewindows/CodeWindow';
import "./buttons.css";
import ShootingBorderButtonDemo from './ShootingBorderButtonDemo';
import AnimatedOutlineButtonDemo from './AnimatedOutlineButtonDemo';
import OscillatingSolidButtonDemo from './OscillatingSolidButtonDemo';

export default class ButtonDemos extends Component {
    state = {}
    
    render(){
        return (
            <div className="button-demos-body">
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