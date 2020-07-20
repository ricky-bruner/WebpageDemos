import React, { Component } from 'react';
import './oscillatingSolidButtons.css';

export default class OscillatingSolidButtons extends Component {
    state = {
    };

    render(){
        return (
            <div className={"oscillating-solid-buttons " + this.props.settings.theme}>
                {
                    this.props.settings.showAllSizes &&
                    !this.props.settings.showAllColors &&
                    this.props.settings.sizes.map(s => {
                        return (
                            <div className={"button-container " + this.props.settings.theme} data-text={s}>
                                <button className={"oscillating-solid-button " + s + " " + this.props.settings.color + " " + this.props.settings.theme}>Button</button>
                                <button className={"oscillating-solid-button " + s + " " + this.props.settings.color + " " + this.props.settings.theme}>Button</button>
                                <button className={"oscillating-solid-button " + s + " " + this.props.settings.color + " " + this.props.settings.theme}>Button</button>
                                {
                                    (s === "sm" || s === "xs") &&
                                    <button className={"oscillating-solid-button " + s + " " + this.props.settings.color + " " + this.props.settings.theme}>Button</button>
                                }
                                {
                                    s === "xs" &&
                                    <button className={"oscillating-solid-button " + s + " " + this.props.settings.color + " " + this.props.settings.theme}>Button</button>
                                }
                            </div>
                        );
                    })
                }
                {
                    !this.props.settings.showAllSizes &&
                    !this.props.settings.showAllColors &&
                    <div className={"button-container " + this.props.settings.theme} data-text={this.props.settings.size}>
                        <button className={"oscillating-solid-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.theme}>Button</button>
                        <button className={"oscillating-solid-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.theme}>Button</button>
                        <button className={"oscillating-solid-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.theme}>Button</button>
                        {
                            (this.props.settings.size === "sm" || this.props.settings.size === "xs") &&
                            <button className={"oscillating-solid-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.theme}>Button</button>
                        }
                        {
                            this.props.settings.size === "xs" &&
                            <button className={"oscillating-solid-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.theme}>Button</button>
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
                                    <button className={"oscillating-solid-button " + this.props.settings.size + " " + c + " " + this.props.settings.theme}>Button</button>
                                );
                            })
                        }
                    </div>
                }
            </div>
        );
    }
}