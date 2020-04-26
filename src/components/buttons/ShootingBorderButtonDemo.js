import React, { Component } from 'react';
import CodeWindow from '../codewindows/CodeWindow';

export default class ShootingBorderButtonDemo extends Component {
    state = {
        html: ".shooting-border-button-demo",
        theme: "dark",
        size: "",
        color: "blue",
        colors: [ "blue", "mint", "lightgreen", "green", "purple", "pink", "hotpink", "red", "redorange", "orange", "yellow", "white", "black" ],
        sizes: [ "xlg", "lg", "md", "sm", "xs", ],
        themes: [ "light", "dark" ],
        showAllSizes: true
    };

    toggleSize = (size) => {
        this.setState({ size: size, showAllSizes: false }, () => {
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
                <div className="shooting-border-button-demo">
                    <h2>Shooting Border Buttons</h2>
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
                        <div className="button-container" data-text="X-Large">
                            <a href="shooting-border-button-demo" className={"shooting-border-button xlg " + this.state.color}>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Button
                            </a>
                            <a href="shooting-border-button-demo" className="shooting-border-button xlg">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Button
                            </a>
                            <a href="shooting-border-button-demo" className="shooting-border-button xlg">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Button
                            </a>
                        </div>
                        <div className="button-container" data-text="Large">
                            <a href="shooting-border-button-demo" className="shooting-border-button lg">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Button
                            </a>
                            <a href="shooting-border-button-demo" className="shooting-border-button lg">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Button
                            </a>
                            <a href="shooting-border-button-demo" className="shooting-border-button lg">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Button
                            </a>
                        </div>
                        <div className="button-container" data-text="Medium">
                            <a href="shooting-border-button-demo" className="shooting-border-button md">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Button
                            </a>
                            <a href="shooting-border-button-demo" className="shooting-border-button md">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Button
                            </a>
                            <a href="shooting-border-button-demo" className="shooting-border-button md">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Button
                            </a>
                        </div>
                        <div className="button-container" data-text="Small">
                            <a href="shooting-border-button-demo" className="shooting-border-button sm">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Button
                            </a>
                            <a href="shooting-border-button-demo" className="shooting-border-button sm">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Button
                            </a>
                            <a href="shooting-border-button-demo" className="shooting-border-button sm">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Button
                            </a>
                            <a href="shooting-border-button-demo" className="shooting-border-button sm">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Button
                            </a>
                        </div>
                        <div className="button-container" data-text="X-Small">
                            <a href="shooting-border-button-demo" className="shooting-border-button xs">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Button
                            </a>
                            <a href="shooting-border-button-demo" className="shooting-border-button xs">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Button
                            </a>
                            <a href="shooting-border-button-demo" className="shooting-border-button xs">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Button
                            </a>
                            <a href="shooting-border-button-demo" className="shooting-border-button xs">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Button
                            </a>
                            <a href="shooting-border-button-demo" className="shooting-border-button xs">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                Button
                            </a>
                        </div>
                    </div>
                </div>
                <CodeWindow html={this.state.html} ref="CodeWindow" />
            </div>
        );
    }
}