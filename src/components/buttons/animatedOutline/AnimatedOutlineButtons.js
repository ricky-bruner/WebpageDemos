import React, { Component } from 'react';
import "./animatedOutlineButtons.css";

export default class AnimatedOutlineButtons extends Component {
    state = {
    };

    render(){
        return (
            <div className={"animated-outline-buttons " + this.props.settings.theme}>
                {
                    this.props.settings.showAllSizes &&
                    !this.props.settings.showAllColors &&
                    this.props.settings.sizes.map(s => {
                        return (
                            <div className={"button-container " + this.props.settings.theme} data-text={s}>
                                <button className={"animated-outline-button " + s + " " + this.props.settings.color + " " + this.props.settings.theme}>
                                    <svg>
                                        <rect></rect>
                                    </svg>
                                    Button
                                </button>
                                <button className={"animated-outline-button " + s + " " + this.props.settings.color + " " + this.props.settings.theme}>
                                    <svg>
                                        <rect></rect>
                                    </svg>
                                    Button
                                </button>
                                <button className={"animated-outline-button " + s + " " + this.props.settings.color + " " + this.props.settings.theme}>
                                    <svg>
                                        <rect></rect>
                                    </svg>
                                    Button
                                </button>
                                {
                                    (s === "sm" || s === "xs") &&
                                    <button className={"animated-outline-button " + s + " " + this.props.settings.color + " " + this.props.settings.theme}>
                                        <svg>
                                            <rect></rect>
                                        </svg>
                                        Button
                                    </button>
                                }
                                {
                                    s === "xs" &&
                                    <button className={"animated-outline-button " + s + " " + this.props.settings.color + " " + this.props.settings.theme}>
                                        <svg>
                                            <rect></rect>
                                        </svg>
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
                        <button className={"animated-outline-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.theme}>
                            <svg>
                                <rect></rect>
                            </svg>
                            Button
                        </button>
                        <button className={"animated-outline-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.theme}>
                            <svg>
                                <rect></rect>
                            </svg>
                            Button
                        </button>
                        <button className={"animated-outline-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.theme}>
                            <svg>
                                <rect></rect>
                            </svg>
                            Button
                        </button>
                        {
                            (this.props.settings.size === "sm" || this.props.settings.size === "xs") &&
                            <button className={"animated-outline-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.theme}>
                                <svg>
                                    <rect></rect>
                                </svg>
                                Button
                            </button>
                        }
                        {
                            this.props.settings.size === "xs" &&
                            <button className={"animated-outline-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.theme}>
                                <svg>
                                    <rect></rect>
                                </svg>
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
                                    <button className={"animated-outline-button " + this.props.settings.size + " " + c + " " + this.props.settings.theme}>
                                        <svg>
                                            <rect></rect>
                                        </svg>
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