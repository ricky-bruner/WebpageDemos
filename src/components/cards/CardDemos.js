import React, { Component } from 'react';
import SkewedBorderDemo from './SkewedBorderDemo';
import './cards.css';
import GlowingCardDemo from './GlowingCardDemo';
import FlipHoverCardDemo from './FlipHoverCardDemo';
import IconGrowthCard from './IconGrowthCard';
import CircleGrowthIconCard from './CircleGrowthIconCard';
import CodeWindow from '../codewindows/CodeWindow';
import HoverSwitchCardDemo from './HoverSwitchCardDemo';
import NeumorphismCardDemo from './NeumorphismCardDemo';
import ImageSlideLeftCardDemo from './ImageSlideLeftCardDemo';
import CircleGrowthServiceCard from './CircleGrowthServiceCard';
import IsometricCardHoverDemo from './IsometricCardHoverDemo';
import FlipUpHoverCardDemo from './FlipUpHoverCardDemo';
import SwivelRotationCardDemo from './SwivelRotationCardDemo';
import CircleReductionServiceCard from './CircleReductionServiceCard';
import GameStyleCardsDemo from './GameStyleCardsDemo';
import DirectionAwareCardDemo from './DirectionAwareCardDemo';
import DepthOfFieldCardDemo from './DepthOfFieldCardDemo';
import ImageClipHoverCardDemo from './ImageClipHoverCardDemo';
import CardDemoHeader from './CardDemoHeader';

export default class CardDemos extends Component {
    state = {

    }
    
    render(){
        return (
            <div className="card-demos-body">
                <CardDemoHeader />
                {
                    (this.props.selectedDemo === "Image Clip Hover" || this.props.selectedDemo === "All") &&
                    <div>
                        <ImageClipHoverCardDemo />
                        <CodeWindow html=".image-clip-hover-card-demo" />
                    </div>
                }
                {
                    (this.props.selectedDemo === "Depth Of Field" || this.props.selectedDemo === "All") &&
                    <div>
                        <DepthOfFieldCardDemo />
                        <CodeWindow html=".depth-of-field-card-demo" />
                    </div>
                }
                {
                    (this.props.selectedDemo === "Direction Aware" || this.props.selectedDemo === "All") &&
                    <div>
                        <DirectionAwareCardDemo />
                        <CodeWindow html=".direction-aware-card-demo" />
                    </div>
                }
                {
                    (this.props.selectedDemo === "Game Style" || this.props.selectedDemo === "All") &&
                    <div>
                        <GameStyleCardsDemo />
                        <CodeWindow html=".game-style-cards-demo" />
                    </div>
                }
                {
                    (this.props.selectedDemo === "Circle Reduction" || this.props.selectedDemo === "All") &&
                    <div>
                        <CircleReductionServiceCard />
                        <CodeWindow html=".circle-reduction-service-card-demo" />
                    </div>
                }
                {
                    (this.props.selectedDemo === "Swivel Rotation" || this.props.selectedDemo === "All") &&
                    <div>
                        <SwivelRotationCardDemo />
                        <CodeWindow html=".swivel-rotation-card-demo" />
                    </div>
                }
                {
                    (this.props.selectedDemo === "Flip Up Hover" || this.props.selectedDemo === "All") &&
                    <div>
                        <FlipUpHoverCardDemo />
                        <CodeWindow html=".flip-up-hover-card-demo" />
                    </div>
                }
                {
                    (this.props.selectedDemo === "Isometric" || this.props.selectedDemo === "All") &&
                    <div>
                        <IsometricCardHoverDemo />
                        <CodeWindow html=".isometric-card-hover-demo" />
                    </div>
                }
                {
                    (this.props.selectedDemo === "Circle Growth" || this.props.selectedDemo === "All") &&
                    <div>
                        <CircleGrowthServiceCard />
                        <CodeWindow html=".circle-growth-service-card-demo" />
                    </div>
                }
                {
                    (this.props.selectedDemo === "Image Slide Left" || this.props.selectedDemo === "All") &&
                    <div>
                        <ImageSlideLeftCardDemo />
                        <CodeWindow html=".image-slide-left-card-demo" />
                    </div>
                }
                {
                    (this.props.selectedDemo === "Neumorphism" || this.props.selectedDemo === "All") &&
                    <div>
                        <NeumorphismCardDemo />
                        <CodeWindow html=".neumorphism-card-demo" />
                    </div>
                }
                {
                    (this.props.selectedDemo === "Skewed Border" || this.props.selectedDemo === "All") &&
                    <div>
                        <SkewedBorderDemo />
                        <CodeWindow html=".skewed-border-demo" />
                    </div>
                }
                {
                    (this.props.selectedDemo === "Glowing" || this.props.selectedDemo === "All") &&
                    <div>
                        <GlowingCardDemo />
                        <CodeWindow html=".glowing-card-demo" />
                    </div>
                }
                {
                    (this.props.selectedDemo === "Flip Hover" || this.props.selectedDemo === "All") &&
                    <div>
                        <FlipHoverCardDemo />
                        <CodeWindow html=".flip-hover-card-demo" />
                    </div>
                }
                {
                    (this.props.selectedDemo === "Icon Growth" || this.props.selectedDemo === "All") &&
                    <div>
                        <IconGrowthCard />
                        <CodeWindow html=".icon-growth-card-demo" />
                    </div>
                }
                {
                    (this.props.selectedDemo === "Circle Growth Icon" || this.props.selectedDemo === "All") &&
                    <div>
                        <CircleGrowthIconCard />
                        <CodeWindow html=".circle-growth-icon-card-demo" />
                    </div>
                }
                {
                    (this.props.selectedDemo === "Hover Switch" || this.props.selectedDemo === "All") &&
                    <div>
                        <HoverSwitchCardDemo />
                        <CodeWindow html=".hover-switch-card-demo" />
                    </div>
                }

                {/* <ImageClipHoverCardDemo />
                <CodeWindow html=".image-clip-hover-card-demo" /> */}
                {/* <DepthOfFieldCardDemo />
                <CodeWindow html=".depth-of-field-card-demo" /> */}
                {/* <DirectionAwareCardDemo />
                <CodeWindow html=".direction-aware-card-demo" /> */}
                {/* <GameStyleCardsDemo />
                <CodeWindow html=".game-style-cards-demo" /> */}
                {/* <CircleReductionServiceCard />
                <CodeWindow html=".circle-reduction-service-card-demo" /> */}
                {/* <SwivelRotationCardDemo />
                <CodeWindow html=".swivel-rotation-card-demo" /> */}
                {/* <FlipUpHoverCardDemo />
                <CodeWindow html=".flip-up-hover-card-demo" /> */}
                {/* <IsometricCardHoverDemo />
                <CodeWindow html=".isometric-card-hover-demo" /> */}
                {/* <CircleGrowthServiceCard />
                <CodeWindow html=".circle-growth-service-card-demo" /> */}
                {/* <ImageSlideLeftCardDemo />
                <CodeWindow html=".image-slide-left-card-demo" /> */}
                {/* <NeumorphismCardDemo />
                <CodeWindow html=".neumorphism-card-demo" /> */}
                {/* <SkewedBorderDemo />
                <CodeWindow html=".skewed-border-demo" /> */}
                {/* <GlowingCardDemo />
                <CodeWindow html=".glowing-card-demo" /> */}
                {/* <FlipHoverCardDemo />
                <CodeWindow html=".flip-hover-card-demo" /> */}
                {/* <IconGrowthCard />
                <CodeWindow html=".icon-growth-card-demo" /> */}
                {/* <CircleGrowthIconCard />
                <CodeWindow html=".circle-growth-icon-card-demo" /> */}
                {/* <HoverSwitchCardDemo />
                <CodeWindow html=".hover-switch-card-demo" /> */}
            </div>
        )
    }
}