import React, { Component } from 'react';
import './shootingBorderButtons.css';

export default class ShootingBorderButtons extends Component {
    state = {
    };

    render(){
        return (
            <div className={"shooting-border-buttons " + this.props.settings.theme}>
                {
                    this.props.settings.showAllSizes &&
                    !this.props.settings.showAllColors &&
                    this.props.settings.sizes.map(s => {
                        return (
                            <div className={"button-container " + this.props.settings.theme} data-text={s}>
                                <button className={"shooting-border-button " + s + " " + this.props.settings.color + " " + this.props.settings.theme}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"shooting-border-button " + s + " " + this.props.settings.color + " " + this.props.settings.theme}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"shooting-border-button " + s + " " + this.props.settings.color + " " + this.props.settings.theme}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                {
                                    (s === "sm" || s === "xs") &&
                                    <button className={"shooting-border-button " + s + " " + this.props.settings.color + " " + this.props.settings.theme}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Button
                                    </button>
                                }
                                {
                                    s === "xs" &&
                                    <button className={"shooting-border-button " + s + " " + this.props.settings.color + " " + this.props.settings.theme}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Button
                                    </button>
                                }
                            </div>
                        );
                    })
                }
                {
                    !this.props.settings.showAllSizes &&
                    !this.props.settings.showAllColors &&
                    <div className={"button-container " + this.props.settings.theme} data-text={this.props.settings.size}>
                        <button className={"shooting-border-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.theme}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Button
                        </button>
                        <button className={"shooting-border-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.theme}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Button
                        </button>
                        <button className={"shooting-border-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.theme}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Button
                        </button>
                        {
                            (this.props.settings.size === "sm" || this.props.settings.size === "xs") &&
                            <button className={"shooting-border-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.theme}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Button
                            </button>
                        }
                        {
                            this.props.settings.size === "xs" &&
                            <button className={"shooting-border-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.theme}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Button
                            </button>
                        }
                    </div>
                }
                {
                    !this.props.settings.showAllSizes &&
                    this.props.settings.showAllColors &&
                    <div className={"button-container " + this.props.settings.theme} data-text="Colors">
                        {
                            this.props.settings.colors.map(c => {
                                return (
                                    <button className={"shooting-border-button " + this.props.settings.size + " " + c + " " + this.props.settings.theme}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Button
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