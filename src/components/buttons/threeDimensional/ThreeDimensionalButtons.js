import React, { Component } from 'react';
import './threeDimensionalButtons.css';

export default class ThreeDimensionalButtons extends Component {
    state = {
    };

    render(){
        return (
            <div id="three-dimensional-button-demo" className={"three-dimensional-buttons " + this.props.settings.theme}>
                {
                    this.props.settings.showAllSizes &&
                    this.props.settings.sizes.map(s => {
                        return (
                            <div className="button-container" data-text={s}>
                                <button className={"three-dimensional-button " + s}>Button</button>
                                <button className={"three-dimensional-button " + s}>Button</button>
                                <button className={"three-dimensional-button " + s}>Button</button>
                                {
                                    (s === "sm" || s === "xs") && 
                                    <button className={"three-dimensional-button " + s}>Button</button>
                                }
                                {
                                    s === "xs" &&
                                    <button className={"three-dimensional-button " + s}>Button</button>
                                }
                            </div>
                        );
                    })
                }
                {
                    !this.props.settings.showAllSizes &&
                    <div className="button-container" data-text={this.props.settings.size}>
                        <button className={"three-dimensional-button " + this.props.settings.size}>Button</button>
                        <button className={"three-dimensional-button " + this.props.settings.size}>Button</button>
                        <button className={"three-dimensional-button " + this.props.settings.size}>Button</button>
                        {
                            (this.props.settings.size === "sm" || this.props.settings.size === "xs") && 
                            <button className={"three-dimensional-button " + this.props.settings.size}>Button</button>
                        }
                        {
                            this.props.settings.size === "xs" &&
                            <button className={"three-dimensional-button " + this.props.settings.size}>Button</button>
                        }
                    </div>
                }
            </div>
        );
    }
}