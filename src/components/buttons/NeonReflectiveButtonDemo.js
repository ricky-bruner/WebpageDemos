import React, { Component } from 'react';
import CodeWindow from '../codewindows/CodeWindow';

export default class NeonReflectiveButtonDemo extends Component {
    state = {
        html: ".neon-reflective-button-demo",
        theme: "dark",
        size: "",
        border: "bd-nm",
        color: "blue",
        colors: [ "green", "mint", "cyan", "blue", "purple", "magenta", "pink", "hotpink", "red", "orange", "yellow", "white" ],
        borders: [ "bd-nm", "bd-f", "bd-no" ],
        sizes: [ "xlg", "lg", "md", "sm", "xs" ],
        themes: [ "light", "dark" ],
        showAllSizes: true,
        showAllColors: false,
        showAllBorders: false,
        reflective: "reflective"
    };

    switchColor = (color) => {
        this.setState({ color: color, showAllColors: false }, () => {
            this.refs.CodeWindow.renderHTML();
        });
    }

    toggleBorder = (border) => {
        this.setState({ border: border, showAllBorders: false }, () => {
            this.refs.CodeWindow.renderHTML()
        });
    }

    toggleReflective = () => {
        let reflective = this.state.reflective === "reflective" ? "" : "reflective";
        
        this.setState({ reflective: reflective }, () => {
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
        
        this.setState({ showAllColors: !this.state.showAllColors, color: color, size: size, showAllBorders: false, showAllSizes: false }, () => {
            this.refs.CodeWindow.renderHTML()
        });
    }   

    toggleAllBorders = () => {
        let color = this.state.color === "" ? "blue" : this.state.color;
        let size = this.state.size === "" ? "lg" : this.state.size;
        let border = !this.state.showAllBorders ? "" : "bd-nm";

        this.setState({ showAllBorders: !this.state.showAllBorders, showAllColors: false, showAllSizes: false, color: color, size: size, border: border }, () => {
            this.refs.CodeWindow.renderHTML()
        });
    }

    toggleAllSizes = () => {
        let size = !this.state.showAllSizes ? "" : "lg";
        let color = this.state.color === "" ? "blue" : this.state.color;
        let border = this.state.border === "" ? "bd-nm" : this.state.border
        
        this.setState({ showAllSizes: !this.state.showAllSizes, size: size, color: color, border: border, showAllColors: false, showAllBorders: false }, () => {
            this.refs.CodeWindow.renderHTML()
        });
    }

    render(){
        return (
            <div className="demo-section">
                <div id="neon-reflective-button-demo" className="neon-reflective-button-demo">
                    <h2>Neon Buttons</h2>
                    <div className="options-container">
                        <h3>Options</h3>
                        <div className="options-box">
                            <div className="option-section">
                                <h4>Theme:</h4>
                                <button className={(this.state.theme === "dark") ? "active" : ""} onClick={() => this.toggleTheme("dark")}>Dark</button>
                                <button className={(this.state.theme === "light") ? "active" : ""} onClick={() => this.toggleTheme("light")}>Light</button>
                            </div>
                            <div className="option-section">
                                <h4>Borders:</h4>
                                <button className={(this.state.showAllBorders === true) ? "active" : ""} onClick={() => this.toggleAllBorders()}>Show All</button>
                                <button className={(this.state.border === "bd-nm") ? "active" : ""} onClick={() => this.toggleBorder("bd-nm")}>Normal</button>                       
                                <button className={(this.state.border === "bd-f") ? "active" : ""} onClick={() => this.toggleBorder("bd-f")}>Fast</button>
                                <button className={(this.state.border === "bd-no") ? "active" : ""} onClick={() => this.toggleBorder("bd-no")}>None</button>
                            </div>
                            <div className="option-section">
                                <h4>Sizes:</h4>
                                <button className={(this.state.showAllSizes === true) ? "active" : ""} onClick={() => this.toggleAllSizes()}>ALL</button>                       
                                {
                                    this.state.sizes.map(s => <button className={(this.state.size === s) ? "active" : ""} onClick={() => this.toggleSize(s)}>{s.toUpperCase()}</button>)
                                } 
                            </div>
                            <div className="option-section">
                                <h4>Reflective:</h4>
                                <button className={this.state.reflective ? "active" : ""} onClick={() => this.toggleReflective()}>Toggle Reflection</button>
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
                            !this.state.showAllBorders &&
                            this.state.showAllSizes &&
                            this.state.sizes.map(s => {
                                return (
                                    <div className={"button-container " + this.state.theme} data-text={s}>
                                        <button className={"neon-reflective-button " + s + " " + this.state.color + " " + this.state.border + " " + this.state.reflective}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            Button
                                        </button>
                                        <button className={"neon-reflective-button " + s + " " + this.state.color + " " + this.state.border + " " + this.state.reflective}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            Button
                                        </button>
                                        <button className={"neon-reflective-button " + s + " " + this.state.color + " " + this.state.border + " " + this.state.reflective}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            Button
                                        </button>
                                        {
                                            (s === "sm" || s === "xs") && 
                                            <button className={"neon-reflective-button " + s + " " + this.state.color + " " + this.state.border + " " + this.state.reflective}>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                Button
                                            </button>
                                        }
                                        {
                                            s === "xs" &&
                                            <button className={"neon-reflective-button " + s + " " + this.state.color + " " + this.state.border + " " + this.state.reflective}>
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
                            !this.state.showAllColors &&
                            !this.state.showAllSizes &&
                            !this.state.showAllBorders &&
                            <div className={"button-container " + this.state.theme} data-text={this.state.size}>
                                <button className={"neon-reflective-button " + this.state.size + " " + this.state.color + " " + this.state.border + " " + this.state.reflective}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button " + this.state.size + " " + this.state.color + " " + this.state.border + " " + this.state.reflective}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button " + this.state.size + " " + this.state.color + " " + this.state.border + " " + this.state.reflective}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                {
                                    (this.state.size === "sm" || this.state.size === "xs") && 
                                    <button className={"neon-reflective-button " + this.state.size + " " + this.state.color + " " + this.state.border + " " + this.state.reflective}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Button
                                    </button>
                                }
                                {
                                    this.state.size === "xs" &&
                                    <button className={"neon-reflective-button " + this.state.size + " " + this.state.color + " " + this.state.border + " " + this.state.reflective}>
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
                            this.state.showAllColors &&
                            !this.state.showAllBorders &&
                            <div className={"button-container " + this.state.theme} data-text="Colors">
                                {
                                    this.state.colors.map(c => {
                                        return (
                                            <button className={"neon-reflective-button xs " + c + " " + this.state.border + " " + this.state.reflective}>
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
                            !this.state.showAllColors &&
                            this.state.showAllBorders &&
                            <div className={"button-container " + this.state.theme} data-text="Borders">
                                {
                                    this.state.borders.map(b => {
                                        return (
                                            <button className={"neon-reflective-button " + this.state.size + " " + this.state.color + " " + b + " " + this.state.reflective}>
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
                </div>
                <CodeWindow html={this.state.html} ref="CodeWindow"/>
            </div>          
        );
    }
}