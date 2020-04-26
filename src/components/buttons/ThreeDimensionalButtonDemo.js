import React, { Component } from 'react';
import CodeWindow from '../codewindows/CodeWindow';

export default class ThreeDimensionalButtonDemo extends Component {
    state = {
        html: ".three-dimensional-button-demo",
        theme: "dark",
        size: "",
        sizes: [ "xlg", "lg", "md", "sm", "xs", ],
        themes: [ "light", "dark" ],
        showAllSizes: true
    };

    toggleSize = (size) => {
        this.setState({ size: size, showAllSizes: false }, () => {
            this.refs.CodeWindow.renderHTML()
        });
    }

    toggleTheme = (theme) => {
        this.setState({ theme: theme }, () => {
            this.refs.CodeWindow.renderHTML()
        });
    }

    toggleAllSizes = () => {
        let size = !this.state.showAllSizes ? "" : "lg";
        
        this.setState({ showAllSizes: !this.state.showAllSizes, size: size }, () => {
            this.refs.CodeWindow.renderHTML()
        });
    }

    render(){
        return (
            <div className="demo-section">
                <div id="three-dimensional-button-demo" className="three-dimensional-button-demo">
                    <h2>3D Buttons</h2>
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
                    </div>
                    <div className={"demo-container " + this.state.theme}>
                        {
                            this.state.showAllSizes &&
                            this.state.sizes.map(s => {
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
                            !this.state.showAllSizes &&
                            <div className="button-container" data-text={this.state.size}>
                                <button className={"three-dimensional-button " + this.state.size}>Button</button>
                                <button className={"three-dimensional-button " + this.state.size}>Button</button>
                                <button className={"three-dimensional-button " + this.state.size}>Button</button>
                                {
                                    (this.state.size === "sm" || this.state.size === "xs") && 
                                    <button className={"three-dimensional-button " + this.state.size}>Button</button>
                                }
                                {
                                    this.state.size === "xs" &&
                                    <button className={"three-dimensional-button " + this.state.size}>Button</button>
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