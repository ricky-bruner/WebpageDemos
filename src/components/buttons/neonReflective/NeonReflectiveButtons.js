import React, { Component } from 'react';
import './neonReflectiveButtons.css';

export default class NeonReflectiveButtons extends Component {
    state = {
    };

    render(){
        return (
            <div id="neon-reflective-button-demo" className={"neon-reflective-buttons " + this.props.settings.theme}>
                {
                    !this.props.settings.showAllColors &&
                    !this.props.settings.showAllBorders &&
                    this.props.settings.showAllSizes &&
                    this.props.settings.sizes.map(s => {
                        return (
                            <div className={"button-container " + this.props.settings.theme} data-text={s}>
                                <button className={"neon-reflective-button " + s + " " + this.props.settings.color + " " + this.props.settings.border + " " + this.props.settings.reflective}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button " + s + " " + this.props.settings.color + " " + this.props.settings.border + " " + this.props.settings.reflective}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button " + s + " " + this.props.settings.color + " " + this.props.settings.border + " " + this.props.settings.reflective}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                {
                                    (s === "sm" || s === "xs") && 
                                    <button className={"neon-reflective-button " + s + " " + this.props.settings.color + " " + this.props.settings.border + " " + this.props.settings.reflective}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Button
                                    </button>
                                }
                                {
                                    s === "xs" &&
                                    <button className={"neon-reflective-button " + s + " " + this.props.settings.color + " " + this.props.settings.border + " " + this.props.settings.reflective}>
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
                    !this.props.settings.showAllColors &&
                    !this.props.settings.showAllSizes &&
                    !this.props.settings.showAllBorders &&
                    <div className={"button-container " + this.props.settings.theme} data-text={this.props.settings.size}>
                        <button className={"neon-reflective-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.border + " " + this.props.settings.reflective}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Button
                        </button>
                        <button className={"neon-reflective-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.border + " " + this.props.settings.reflective}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Button
                        </button>
                        <button className={"neon-reflective-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.border + " " + this.props.settings.reflective}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Button
                        </button>
                        {
                            (this.props.settings.size === "sm" || this.props.settings.size === "xs") && 
                            <button className={"neon-reflective-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.border + " " + this.props.settings.reflective}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Button
                            </button>
                        }
                        {
                            this.props.settings.size === "xs" &&
                            <button className={"neon-reflective-button " + this.props.settings.size + " " + this.props.settings.color + " " + this.props.settings.border + " " + this.props.settings.reflective}>
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
                    this.props.settings.showAllColors &&
                    !this.props.settings.showAllBorders &&
                    <div className={"button-container " + this.props.settings.theme} data-text="Colors">
                        {
                            this.props.settings.colors.map(c => {
                                return (
                                    <button className={"neon-reflective-button xs " + c + " " + this.props.settings.border + " " + this.props.settings.reflective}>
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
                {
                    !this.props.settings.showAllColors &&
                    this.props.settings.showAllBorders &&
                    <div className={"button-container " + this.props.settings.theme} data-text="Borders">
                        {
                            this.props.settings.borders.map(b => {
                                return (
                                    <button className={"neon-reflective-button " + this.props.settings.size + " " + this.props.settings.color + " " + b + " " + this.props.settings.reflective}>
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