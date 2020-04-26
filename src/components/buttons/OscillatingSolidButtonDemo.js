import React, { Component } from 'react';
import CodeWindow from '../codewindows/CodeWindow';

export default class OscillatingSolidButtonDemo extends Component {
    state = {
        html: ".oscillating-solid-button-demo",
        theme: "dark",
        size: "",
        color: "blue",
        colors: [ "blue", "mint", "lightgreen", "green", "purple", "pink", "hotpink", "red", "redorange", "orange", "yellow", "white", "black" ],
        sizes: [ "xlg", "lg", "md", "sm", "xs", ],
        themes: [ "light", "dark" ],
        showAllSizes: true
    };

    toggleSize = (size) => {
        this.setState({ size: size, showAllSizes: false, showAllColors: false }, () => {
            this.refs.CodeWindow.renderHTML()
        });
    }

    switchColor = (color) => {
        this.setState({ color: color, showAllColors: false }, () => {
            this.refs.CodeWindow.renderHTML();
        });
    }

    toggleTheme = (theme) => {
        this.setState({ theme: theme }, () => {
            this.refs.CodeWindow.renderHTML()
        });
    }

    toggleAllSizes = () => {
        let size = !this.state.showAllSizes ? "" : "lg";
        
        this.setState({ showAllSizes: !this.state.showAllSizes, size: size, showAllColors: false }, () => {
            this.refs.CodeWindow.renderHTML()
        });
    }

    toggleAllColors = () => {
        let color = !this.state.showAllColors ? "" : "blue";
        let size = !this.state.showAllColors ? "xs" : "lg";
        
        this.setState({ showAllColors: !this.state.showAllColors, color: color, size: size, showAllSizes: false }, () => {
            this.refs.CodeWindow.renderHTML()
        });
    } 

    render(){
        return (
            <div className="demo-section">
                <div className="oscillating-solid-button-demo">
                    <h2>Oscillating Solid Buttons</h2>
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
                            this.state.showAllSizes &&
                            !this.state.showAllColors &&
                            this.state.sizes.map(s => {
                                return (
                                    <div className="button-container" data-text={s}>
                                        <button className={"oscillating-solid-button " + s + " " + this.state.color + " " + this.state.theme}>Button</button>
                                        <button className={"oscillating-solid-button " + s + " " + this.state.color + " " + this.state.theme}>Button</button>
                                        <button className={"oscillating-solid-button " + s + " " + this.state.color + " " + this.state.theme}>Button</button>
                                        {
                                            (s === "sm" || s === "xs") &&
                                            <button className={"oscillating-solid-button " + s + " " + this.state.color + " " + this.state.theme}>Button</button>
                                        }
                                        {
                                            s === "xs" &&
                                            <button className={"oscillating-solid-button " + s + " " + this.state.color + " " + this.state.theme}>Button</button>
                                        }
                                    </div>
                                );
                            })
                        }
                        {
                            !this.state.showAllSizes &&
                            !this.state.showAllColors &&
                            <div className="button-container" data-text={this.state.size}>
                                <button className={"oscillating-solid-button " + this.state.size + " " + this.state.color + " " + this.state.theme}>Button</button>
                                <button className={"oscillating-solid-button " + this.state.size + " " + this.state.color + " " + this.state.theme}>Button</button>
                                <button className={"oscillating-solid-button " + this.state.size + " " + this.state.color + " " + this.state.theme}>Button</button>
                                {
                                    (this.state.size === "sm" || this.state.size === "xs") &&
                                    <button className={"oscillating-solid-button " + this.state.size + " " + this.state.color + " " + this.state.theme}>Button</button>
                                }
                                {
                                    this.state.size === "xs" &&
                                    <button className={"oscillating-solid-button " + this.state.size + " " + this.state.color + " " + this.state.theme}>Button</button>
                                }
                            </div>
                        }
                        {
                            !this.state.showAllSizes &&
                            this.state.showAllColors &&
                            <div className="button-container" data-text="Colors">
                                {
                                    this.state.colors.map(c => {
                                        return (
                                            <button className={"oscillating-solid-button " + this.state.size + " " + c + " " + this.state.theme}>Button</button>
                                        );
                                    })
                                }
                            </div>
                        }
                    </div>
                </div>
                <CodeWindow html={this.state.html} ref="CodeWindow" />
            </div>
        );
    }
}