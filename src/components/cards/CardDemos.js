import React, { Component } from 'react';
import SkewedBorderDemo from './SkewedBorderDemo';
import './cards.css';
import GlowingCardDemo from './GlowingCardDemo';
import FlipHoverCardDemo from './FlipHoverCardDemo';
import IconGrowthCard from './IconGrowthCard';
import CircleGrowthIconCard from './CircleGrowthIconCard';
import CodeWindow from '../codewindows/CodeWindow';
import HoverSwitchCardDemo from './HoverSwitchCardDemo';

export default class CardDemos extends Component {
    state = {

    }
    
    render(){
        return (
            <div className="card-demos-body">
                <SkewedBorderDemo />
                <CodeWindow html=".skewed-border-demo" />
                <GlowingCardDemo />
                <CodeWindow html=".glowing-card-demo" />
                <FlipHoverCardDemo />
                <CodeWindow html=".flip-hover-card-demo" />
                <IconGrowthCard />
                <CodeWindow html=".icon-growth-card-demo" />
                <CircleGrowthIconCard />
                <CodeWindow html=".circle-growth-icon-card-demo" />
                <HoverSwitchCardDemo />
                <CodeWindow html=".hover-switch-card-demo" />
            </div>
        )
    }
}