import React, { Component } from 'react';
// import SkewedBorderDemo from './SkewedBorderDemo';
import './cards.css';
// import GlowingCardDemo from './GlowingCardDemo';
// import FlipHoverCardDemo from './FlipHoverCardDemo';
// import IconGrowthCard from './IconGrowthCard';
// import CircleGrowthIconCard from './CircleGrowthIconCard';
// import CodeWindow from '../codewindows/CodeWindow';
// import HoverSwitchCardDemo from './HoverSwitchCardDemo';
// import NeumorphismCardDemo from './NeumorphismCardDemo';
// import ImageSlideLeftCardDemo from './ImageSlideLeftCardDemo';
// import CircleGrowthServiceCard from './CircleGrowthServiceCard';
// import IsometricCardHoverDemo from './IsometricCardHoverDemo';
// import FlipUpHoverCardDemo from './FlipUpHoverCardDemo';
// import SwivelRotationCardDemo from './SwivelRotationCardDemo';
// import CircleReductionServiceCard from './CircleReductionServiceCard';
// import GameStyleCardsDemo from './GameStyleCardsDemo';
// import DirectionAwareCardDemo from './DirectionAwareCardDemo';
// import DepthOfFieldCardDemo from './DepthOfFieldCardDemo';
// import ImageClipHoverCardDemo from './ImageClipHoverCardDemo';
import CardDemoHeader from './CardDemoHeader';
// import CardDemo from './CardDemo';
import CardDemoOptionsFactory from '../../modules/cards/CardDemoOptionsFactory';
// import CardDemoEnums from '../../modules/enums/CardDemoEnums';
import GenericDemo from '../app/demos/GenericDemo';
import CardDemos from '../../modules/cards/CardDemos';

export default class CardDemosBody extends Component {
    state = {

    }
    
    render(){
        return (
            <div className="card-demos-body">
                <CardDemoHeader />
                {
                    CardDemos().map(demo => {
                        if(this.props.selectedDemo === demo.friendlyName || this.props.selectedDemo === "All"){
                            return <GenericDemo demoType="card" options={CardDemoOptionsFactory(demo.demoName)} demoName={demo.demoName} demoClass={demo.demoClass} title={demo.demoTitle} />
                        }
                    })
                }
                {/* {
                    (this.props.selectedDemo === "Game Style" || this.props.selectedDemo === "All") &&
                    <GenericDemo demoType="card" options={CardDemoOptionsFactory("GameStyleCards")} demoName="GameStyleCards" demoClass="game-style-cards" />
                } */}
                {/* {
                    (this.props.selectedDemo === "Image Clip Hover" || this.props.selectedDemo === "All") &&
                    <ImageClipHoverCardDemo />
                }
                {
                    (this.props.selectedDemo === "Depth Of Field" || this.props.selectedDemo === "All") &&
                    <DepthOfFieldCardDemo />
                }
                {
                    (this.props.selectedDemo === "Direction Aware" || this.props.selectedDemo === "All") &&
                    <DirectionAwareCardDemo />
                }
                {
                    (this.props.selectedDemo === "Game Style" || this.props.selectedDemo === "All") &&
                    <GenericDemo options={CardDemoOptionsFactory("GameStyleCardsDemo")} demoName="GameStyleCardsDemo" demoClass="game-style-cards" />
                    // <GameStyleCardsDemo />
                }
                {
                    (this.props.selectedDemo === "Circle Reduction" || this.props.selectedDemo === "All") &&
                    <CircleReductionServiceCard />
                }
                {
                    (this.props.selectedDemo === "Swivel Rotation" || this.props.selectedDemo === "All") &&
                    <SwivelRotationCardDemo />
                }
                {
                    (this.props.selectedDemo === "Flip Up Hover" || this.props.selectedDemo === "All") &&
                    <FlipUpHoverCardDemo />
                }
                {
                    (this.props.selectedDemo === "Isometric" || this.props.selectedDemo === "All") &&
                    <IsometricCardHoverDemo />
                }
                {
                    (this.props.selectedDemo === "Circle Growth" || this.props.selectedDemo === "All") &&
                    <CircleGrowthServiceCard />
                }
                {
                    (this.props.selectedDemo === "Image Slide Left" || this.props.selectedDemo === "All") &&
                    <ImageSlideLeftCardDemo />
                }
                {
                    (this.props.selectedDemo === "Neumorphism" || this.props.selectedDemo === "All") &&
                    <NeumorphismCardDemo />
                }
                {
                    (this.props.selectedDemo === "Skewed Border" || this.props.selectedDemo === "All") &&
                    <SkewedBorderDemo />
                }
                {
                    (this.props.selectedDemo === "Glowing" || this.props.selectedDemo === "All") &&
                    <GlowingCardDemo />
                }
                {
                    (this.props.selectedDemo === "Flip Hover" || this.props.selectedDemo === "All") &&
                    <FlipHoverCardDemo />
                }
                {
                    (this.props.selectedDemo === "Icon Growth" || this.props.selectedDemo === "All") &&
                    <IconGrowthCard />
                }
                {
                    (this.props.selectedDemo === "Circle Growth Icon" || this.props.selectedDemo === "All") &&
                    <CircleGrowthIconCard />
                }
                {
                    (this.props.selectedDemo === "Hover Switch" || this.props.selectedDemo === "All") &&
                    <HoverSwitchCardDemo />
                } */}
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