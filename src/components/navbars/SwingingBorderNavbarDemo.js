import React, { Component } from 'react';
import CodeWindow from '../codewindows/CodeWindow';

export default class SwingingBorderNavbarDemo extends Component {
    state = {
        html: ".swinging-border-navbar-demo",
        theme: "dark",
        themes: [ "light", "dark" ],
        color: "yellow",
        colors: [ "blue", "mint", "lightgreen", "green", "purple", "pink", "hotpink", "red", "redorange", "orange", "yellow", "white", "black" ],
        border: "bd-nm",
        borders: [ "bd-thin", "bd-nm", "bd-thicc" ],
        showAllColors: false
    };

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

    toggleBorder = (border) => {
        this.setState({ border: border }, () => {
            this.refs.CodeWindow.renderHTML()
        });
    }

    toggleAllColors = () => {
        let color = !this.state.showAllColors ? "" : "yellow";
        
        this.setState({ showAllColors: !this.state.showAllColors, color: color }, () => {
            this.refs.CodeWindow.renderHTML()
        });
    } 
    
    render(){
        return (
            <div className="demo-section">
                <div id="home" className="swinging-border-navbar-demo">
                    <h2>Swinging Border Navbar Demo</h2>
                    <div className="options-container">
                        <h3>Options</h3>
                        <div className="options-box">
                            <div className="option-section">
                                <h4>Theme:</h4>
                                <button className={(this.state.theme === "dark") ? "active" : ""} onClick={() => this.toggleTheme("dark")}>Dark</button>
                                <button className={(this.state.theme === "light") ? "active" : ""} onClick={() => this.toggleTheme("light")}>Light</button>
                            </div>
                            <div className="option-section">
                                <h4>Border:</h4>
                                <button className={(this.state.border === "bd-nm") ? "active" : ""} onClick={() => this.toggleBorder("bd-nm")}>Normal</button>
                                <button className={(this.state.border === "bd-thin") ? "active" : ""} onClick={() => this.toggleBorder("bd-thin")}>Thin</button>
                                <button className={(this.state.border === "bd-thicc") ? "active" : ""} onClick={() => this.toggleBorder("bd-thicc")}>Thicc</button>
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
                        <div className="navbar-container" data-text="Navbar">
                            {
                                !this.state.showAllColors &&
                                <ul className={"swinging-border-navbar " + this.state.theme + " " + this.state.color + " " + this.state.border}>
                                    <li><a href="home">Home</a></li>
                                    <li><a href="home">About</a></li>
                                    <li><a href="home">Services</a></li>
                                    <li><a href="home">Portfolio</a></li>
                                    <li><a href="home">Contact</a></li>
                                </ul>
                            }
                            {
                                this.state.showAllColors &&
                                this.state.colors.map(c => {
                                    return (
                                        <ul className={"swinging-border-navbar " + this.state.theme + " " + c + " " + this.state.border}>
                                            <li><a href="home">Home</a></li>
                                            <li><a href="home">About</a></li>
                                            <li><a href="home">Services</a></li>
                                            <li><a href="home">Portfolio</a></li>
                                            <li><a href="home">Contact</a></li>
                                        </ul>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <CodeWindow html={this.state.html} ref="CodeWindow" />
            </div>
        );
    }
}