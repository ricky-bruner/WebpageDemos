import React, { Component } from 'react';
import './liquidWaveButtons.css';

export default class LiquidWaveButtons extends Component {
    state = {
    };

    render(){
        return (
            <div className={"liquid-wave-buttons " + this.props.settings.theme}>
                {
                    !this.props.settings.showAllColors &&
                    !this.props.settings.showAllSpeeds &&
                    this.props.settings.showAllSizes &&
                    this.props.settings.sizes.map(s => {
                        return (
                            <div className={"button-container " + this.props.settings.theme} data-text={s}>
                                <button className={"liquid-wave-button " + s + " " + this.props.settings.color + " " + this.props.settings.speed}>
                                    <span>Button</span>
                                    <div className={"liquid " + this.props.settings.theme}></div>
                                </button>
                                <button className={"liquid-wave-button " + s + " " + this.props.settings.color + " " + this.props.settings.speed}>
                                    <span>Button</span>
                                    <div className={"liquid " + this.props.settings.theme}></div>
                                </button>
                                <button className={"liquid-wave-button " + s + " " + this.props.settings.color + " " + this.props.settings.speed}>
                                    <span>Button</span>
                                    <div className={"liquid " + this.props.settings.theme}></div>
                                </button>
                                {
                                    (s === "sm" || s === "xs") && 
                                    <button className={"liquid-wave-button " + s + " " + this.props.settings.color + " " + this.props.settings.speed}>
                                        <span>Button</span>
                                        <div className={"liquid " + this.props.settings.theme}></div>
                                    </button>
                                }
                                {
                                    s === "xs" &&
                                    <button className={"liquid-wave-button " + s + " " + this.props.settings.color + " " + this.props.settings.speed}>
                                        <span>Button</span>
                                        <div className={"liquid " + this.props.settings.theme}></div>
                                    </button>
                                }
                            </div>
                        );
                    })
                }
                {
                    !this.props.settings.showAllColors &&
                    !this.props.settings.showAllSizes &&
                    !this.props.settings.showAllSpeeds &&
                    <div className={"button-container " + this.props.settings.theme} data-text={this.props.settings.size}>
                        <button className={"liquid-wave-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.speed}>
                            <span>Button</span>
                            <div className={"liquid " + this.props.settings.theme}></div>
                        </button>
                        <button className={"liquid-wave-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.speed}>
                            <span>Button</span>
                            <div className={"liquid " + this.props.settings.theme}></div>
                        </button>
                        <button className={"liquid-wave-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.speed}>
                            <span>Button</span>
                            <div className={"liquid " + this.props.settings.theme}></div>
                        </button>
                        {
                            (this.props.settings.size === "sm" || this.props.settings.size === "xs") && 
                            <button className={"liquid-wave-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.speed}>
                                <span>Button</span>
                                <div className={"liquid " + this.props.settings.theme}></div>
                            </button>
                        }
                        {
                            this.props.settings.size === "xs" &&
                            <button className={"liquid-wave-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.speed}>
                                <span>Button</span>
                                <div className={"liquid " + this.props.settings.theme}></div>
                            </button>
                        }
                    </div>
                }
                {
                    this.props.settings.showAllColors &&
                    !this.props.settings.showAllSpeeds &&
                    <div className={"button-container " + this.props.settings.theme} data-text="Colors">
                        {
                            this.props.settings.colors.map(c => {
                                return (
                                    <button className={"liquid-wave-button xs " + c + " " + this.props.settings.speed}>
                                        <span>Button</span>
                                        <div className={"liquid " + this.props.settings.theme}></div>
                                    </button>
                                );
                            })
                        }
                    </div>
                }
                {
                    !this.props.settings.showAllColors &&
                    this.props.settings.showAllSpeeds &&
                    <div className={"button-container " + this.props.settings.theme} data-text="Speeds">
                        {
                            this.props.settings.speeds.map(sp => {
                                return (
                                    <button className={"liquid-wave-button " + this.props.settings.size + " " + this.props.settings.color + " " + sp}>
                                        <span>Button</span>
                                        <div className={"liquid " + this.props.settings.theme}></div>
                                    </button>
                                );
                            })
                        }
                    </div>
                }
            </div>
        );
    }
}