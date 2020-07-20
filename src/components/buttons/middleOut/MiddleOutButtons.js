import React, { Component } from 'react';
import './middleOutButtons.css';

export default class MiddleOutButtons extends Component {
    state = {
    };

    render(){
        return (
            <div id="middle-out-button-demo" className="middle-out-buttons">
                {
                    this.props.settings.showAllSizes &&
                    !this.props.settings.showAllColors &&
                    this.props.settings.sizes.map(s => {
                        return (
                            <div className={"button-container " + this.props.settings.theme} data-text={s}>
                                <button className={"middle-out-button " + s + " " + this.props.settings.color + " " + this.props.settings.theme}>Button</button>
                                <button className={"middle-out-button " + s + " " + this.props.settings.color + " " + this.props.settings.theme}>Button</button><button className={"middle-out-button " + s + " " + this.props.settings.color + " " + this.props.settings.theme}>Button</button>
                                {
                                    (s === "sm" || s === "xs") &&
                                    <button className={"middle-out-button " + s + " " + this.props.settings.color + " " + this.props.settings.theme}>Button</button>
                                }
                                {
                                    s === "xs" &&
                                    <button className={"middle-out-button " + s + " " + this.props.settings.color + " " + this.props.settings.theme}>Button</button>
                                }
                            </div>
                        );
                    })
                }
                {
                    !this.props.settings.showAllSizes &&
                    !this.props.settings.showAllColors &&
                    <div className={"button-container " + this.props.settings.theme} data-text={this.props.settings.size}>
                        <button className={"middle-out-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.theme}>Button</button>
                        <button className={"middle-out-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.theme}>Button</button>
                        <button className={"middle-out-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.theme}>Button</button>
                        {
                            (this.props.settings.size === "sm" || this.props.settings.size === "xs") &&
                            <button className={"middle-out-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.theme}>Button</button>
                        }
                        {
                            this.props.settings.size === "xs" &&
                            <button className={"middle-out-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.theme}>Button</button>
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
                                    <button className={"middle-out-button " + this.props.settings.size + " " + c + " " + this.props.settings.theme}>Button</button>
                                );
                            })
                        }
                    </div>
                }
            </div>
        );
    }
}