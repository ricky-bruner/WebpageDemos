import React, { Component } from 'react';
import MiddleOutButtonDemo from './MiddleOutButtonDemo';
import "./buttons.css";
import ShootingBorderButtonDemo from './ShootingBorderButtonDemo';
import AnimatedOutlineButtonDemo from './AnimatedOutlineButtonDemo';
import OscillatingSolidButtonDemo from './OscillatingSolidButtonDemo';
import ThreeDimensionalButtonDemo from './ThreeDimensionalButtonDemo';
import NeonReflectiveButtonDemo from './NeonReflectiveButtonDemo';
import LiquidWaveButtonDemo from './LiquidWaveButtonDemo';
import ButtonDemoHeader from './ButtonDemoHeader';

export default class ButtonDemos extends Component {
    state = {}
    
    render(){
        return (
            <div className="button-demos-body">
                <ButtonDemoHeader />
                {
                    (this.props.selectedDemo === "Liquid Wave" || this.props.selectedDemo === "All") &&
                    <LiquidWaveButtonDemo />
                }
                {
                    (this.props.selectedDemo === "Neon Reflective" || this.props.selectedDemo === "All") &&
                    <NeonReflectiveButtonDemo />
                }
                {
                    (this.props.selectedDemo === "3D" || this.props.selectedDemo === "All") &&
                    <ThreeDimensionalButtonDemo />
                }
                {
                    (this.props.selectedDemo === "Oscillating Solid" || this.props.selectedDemo === "All") &&
                    <OscillatingSolidButtonDemo />
                }
                {
                    (this.props.selectedDemo === "Animated Outline" || this.props.selectedDemo === "All") &&
                    <AnimatedOutlineButtonDemo />
                }
                {
                    (this.props.selectedDemo === "Shooting Border" || this.props.selectedDemo === "All") &&
                    <ShootingBorderButtonDemo />
                }
                {
                    (this.props.selectedDemo === "Middle Out" || this.props.selectedDemo === "All") &&
                    <MiddleOutButtonDemo />
                }
            </div>
        )
    }
}