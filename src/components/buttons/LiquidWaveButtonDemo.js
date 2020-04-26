import React, { Component } from 'react';
import CodeWindow from '../codewindows/CodeWindow';

export default class LiquidWaveButtonDemo extends Component {
    state = {
        html: ".liquid-wave-button-demo",
        theme: "dark",
        size: "",
        speed: "wave-nm",
        color: "blue",
        colors: [ "blue", "carribean", "mint", "lightgreen", "green", "purple", "pink", "hotpink", "red", "redorange", "orange", "yellow", "white", "black" ],
        speeds: [ "wave-fs", "wave-nm", "wave-sl" ],
        sizes: [ "xlg", "lg", "md", "sm", "xs", ],
        themes: [ "light", "dark" ],
        showAllSizes: true,
        showAllColors: false,
        showAllSpeeds: false
    };

    switchColor = (color) => {
        this.setState({ color: color, showAllColors: false }, () => {
            this.refs.CodeWindow.renderHTML();
        });
    }

    toggleSpeed = (speed) => {
        this.setState({ speed: speed, showAllSpeeds: false }, () => {
            this.refs.CodeWindow.renderHTML()
        });
    }

    toggleSize = (size) => {
        let color = this.state.color === "" ? "blue" : this.state.color;
        this.setState({ size: size, showAllSizes: false, showAllColors: false, color: color }, () => {
            this.refs.CodeWindow.renderHTML()
        });
    }

    toggleTheme = (theme) => {
        this.setState({ theme: theme }, () => {
            this.refs.CodeWindow.renderHTML()
        });
    }

    toggleAllColors = () => {
        let color = !this.state.showAllColors ? "" : "blue";
        let size = !this.state.showAllColors ? "xs" : "lg";
        
        this.setState({ showAllColors: !this.state.showAllColors, color: color, size: size, showAllSpeeds: false, showAllSizes: false }, () => {
            this.refs.CodeWindow.renderHTML()
        });
    }   

    toggleAllSpeeds = () => {
        let color = this.state.color === "" ? "blue" : this.state.color;
        let size = this.state.size === "" ? "lg" : this.state.size;
        let speed = !this.state.showAllSpeeds ? "" : "wave-nm";

        this.setState({ showAllSpeeds: !this.state.showAllSpeeds, showAllColors: false, showAllSizes: false, color: color, size: size, speed: speed }, () => {
            this.refs.CodeWindow.renderHTML()
        });
    }

    toggleAllSizes = () => {
        let size = !this.state.showAllSizes ? "" : "lg";
        let color = this.state.color === "" ? "blue" : this.state.color;
        let speed = this.state.speed === "" ? "wave-nm" : this.state.speed
        
        this.setState({ showAllSizes: !this.state.showAllSizes, size: size, color: color, speed: speed, showAllColors: false, showAllSpeeds: false }, () => {
            this.refs.CodeWindow.renderHTML()
        });
    }

    render(){
        return (
            <div className="demo-section">
                <div className="liquid-wave-button-demo">
                    <h2>Liquid Wave Buttons</h2>
                    <div className="options-container">
                        <h3>Options</h3>
                        <div className="options-box">
                            <div className="option-section">
                                <h4>Theme:</h4>
                                <button className={(this.state.theme === "dark") ? "active" : ""} onClick={() => this.toggleTheme("dark")}>Dark</button>
                                <button className={(this.state.theme === "light") ? "active" : ""} onClick={() => this.toggleTheme("light")}>Light</button>
                            </div>
                            <div className="option-section">
                                <h4>Sizes:</h4>
                                <button className={(this.state.showAllSizes === true) ? "active" : ""} onClick={() => this.toggleAllSizes()}>ALL</button>
                                {
                                    this.state.sizes.map(s => <button className={(this.state.size === s) ? "active" : ""} onClick={() => this.toggleSize(s)}>{s.toUpperCase()}</button>)
                                } 
                            </div>
                            <div className="option-section">
                                <h4>Speeds:</h4>
                                <button className={(this.state.showAllSpeeds === true) ? "active" : ""} onClick={() => this.toggleAllSpeeds()}>Show All</button>
                                <button className={(this.state.speed === "wave-nm") ? "active" : ""} onClick={() => this.toggleSpeed("wave-nm")}>Normal Wave</button>
                                <button className={(this.state.speed === "wave-fs") ? "active" : ""} onClick={() => this.toggleSpeed("wave-fs")}>Fast Wave</button>                       
                                <button className={(this.state.speed === "wave-sl") ? "active" : ""} onClick={() => this.toggleSpeed("wave-sl")}>Slow Wave</button>
                            </div>
                        </div>
                        <div className="options-box">
                            <div className="option-section">
                                <h4>Colors:</h4>
                                <button className={(this.state.showAllColors === true) ? "active" : ""} onClick={() => this.toggleAllColors()}>Show All</button>
                                {
                                    this.state.colors.map(c => <button className={(this.state.color === c) ? "active" : ""} onClick={() => this.switchColor(c)}>{c.charAt(0).toUpperCase() + c.slice(1)}</button>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className={"demo-container " + this.state.theme}>
                        {
                            !this.state.showAllColors &&
                            !this.state.showAllSpeeds &&
                            this.state.showAllSizes &&
                            this.state.sizes.map(s => {
                                return (
                                    <div className={"button-container " + this.state.theme} data-text={s}>
                                        <button className={"liquid-wave-button " + s + " " + this.state.color + " " + this.state.speed}>
                                            <span>Button</span>
                                            <div className={"liquid " + this.state.theme}></div>
                                        </button>
                                        <button className={"liquid-wave-button " + s + " " + this.state.color + " " + this.state.speed}>
                                            <span>Button</span>
                                            <div className={"liquid " + this.state.theme}></div>
                                        </button>
                                        <button className={"liquid-wave-button " + s + " " + this.state.color + " " + this.state.speed}>
                                            <span>Button</span>
                                            <div className={"liquid " + this.state.theme}></div>
                                        </button>
                                        {
                                            (s === "sm" || s === "xs") && 
                                            <button className={"liquid-wave-button " + s + " " + this.state.color + " " + this.state.speed}>
                                                <span>Button</span>
                                                <div className={"liquid " + this.state.theme}></div>
                                            </button>
                                        }
                                        {
                                            s === "xs" &&
                                            <button className={"liquid-wave-button " + s + " " + this.state.color + " " + this.state.speed}>
                                                <span>Button</span>
                                                <div className={"liquid " + this.state.theme}></div>
                                            </button>
                                        }
                                    </div>
                                );
                            })
                        }
                        {
                            !this.state.showAllColors &&
                            !this.state.showAllSizes &&
                            !this.state.showAllSpeeds &&
                            <div className={"button-container " + this.state.theme} data-text={this.state.size}>
                                <button className={"liquid-wave-button " + this.state.size + " " + this.state.color + " " + this.state.speed}>
                                    <span>Button</span>
                                    <div className={"liquid " + this.state.theme}></div>
                                </button>
                                <button className={"liquid-wave-button " + this.state.size + " " + this.state.color + " " + this.state.speed}>
                                    <span>Button</span>
                                    <div className={"liquid " + this.state.theme}></div>
                                </button>
                                <button className={"liquid-wave-button " + this.state.size + " " + this.state.color + " " + this.state.speed}>
                                    <span>Button</span>
                                    <div className={"liquid " + this.state.theme}></div>
                                </button>
                                {
                                    (this.state.size === "sm" || this.state.size === "xs") && 
                                    <button className={"liquid-wave-button " + this.state.size + " " + this.state.color + " " + this.state.speed}>
                                        <span>Button</span>
                                        <div className={"liquid " + this.state.theme}></div>
                                    </button>
                                }
                                {
                                    this.state.size === "xs" &&
                                    <button className={"liquid-wave-button " + this.state.size + " " + this.state.color + " " + this.state.speed}>
                                        <span>Button</span>
                                        <div className={"liquid " + this.state.theme}></div>
                                    </button>
                                }
                            </div>
                        }
                        {
                            this.state.showAllColors &&
                            !this.state.showAllSpeeds &&
                            <div className={"button-container " + this.state.theme} data-text="Colors">
                                {
                                    this.state.colors.map(c => {
                                        return (
                                            <button className={"liquid-wave-button xs " + c + " " + this.state.speed}>
                                                <span>Button</span>
                                                <div className={"liquid " + this.state.theme}></div>
                                            </button>
                                        );
                                    })
                                }
                            </div>
                        }
                        {
                            !this.state.showAllColors &&
                            this.state.showAllSpeeds &&
                            <div className={"button-container " + this.state.theme} data-text="Speeds">
                                {
                                    this.state.speeds.map(sp => {
                                        return (
                                            <button className={"liquid-wave-button " + this.state.size + " " + this.state.color + " " + sp}>
                                                <span>Button</span>
                                                <div className={"liquid " + this.state.theme}></div>
                                            </button>
                                        );
                                    })
                                }
                            </div>
                        }
                    </div>
                </div>
                <CodeWindow html={this.state.html} ref="CodeWindow"/>
            </div>
        );
    }
}