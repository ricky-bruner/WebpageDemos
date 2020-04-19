import React, { Component } from 'react';
import CodeWindow from '../codewindows/CodeWindow';

export default class NeonReflectiveButtonDemo extends Component {
    state = {
        color: "blue",
        colors: [
            "green",
            "mint",
            "cyan",
            "blue",
            "purple",
            "magenta",
            "pink",
            "hotpink",
            "red",
            "orange",
            "yellow",
            "white",
        ],
        showAllColors: false,
        html: ".neon-reflective-button-demo",
        borderSpeed: "bd-nm",
        sizes: [
            "xlg",
            "lg",
            "md",
            "sm",
            "xs",
        ],
        size: "md",
        showAllSizes: true
    };

    switchColor = (color) => {
        this.setState({ color: color, showAllColors: false }, () => {
            this.refs.CodeWindow.renderHTML();
        });
    }

    toggleAllColors = () => {
        this.setState({ showAllColors: !this.state.showAllColors}, () => {
            this.refs.CodeWindow.renderHTML()
        });
    }

    toggleBorder = (border) => {
        this.setState({ borderSpeed: border }, () => {
            this.refs.CodeWindow.renderHTML()
        });
    }

    toggleSize = (size) => {
        this.setState({ size: size, showAllSizes: false }, () => {
            this.refs.CodeWindow.renderHTML()
        });
    }

    toggleAllSizes = () => {
        this.setState({ showAllSizes: !this.state.showAllSizes }, () => {
            this.refs.CodeWindow.renderHTML()
        });
    }

    render(){
        return (
            <div className="demo-section">
                <div id="neon-reflective-button-demo" className="neon-reflective-button-demo">
                    <h2>Neon Reflective Buttons</h2>
                    <h3>Color Options</h3>
                    <div className="options-box">
                        <button onClick={() => this.switchColor("green")}>Green</button>
                        <button onClick={() => this.switchColor("mint")}>Mint</button>
                        <button onClick={() => this.switchColor("cyan")}>Cyan</button>
                        <button onClick={() => this.switchColor("blue")}>Blue</button>
                        <button onClick={() => this.switchColor("purple")}>Purple</button>
                        <button onClick={() => this.switchColor("magenta")}>Magenta</button>
                        <button onClick={() => this.switchColor("pink")}>Pink</button>
                        <button onClick={() => this.switchColor("hotpink")}>Hot Pink</button>
                        <button onClick={() => this.switchColor("red")}>Red</button>
                        <button onClick={() => this.switchColor("orange")}>Orange</button>
                        <button onClick={() => this.switchColor("yellow")}>Yellow</button>
                        <button onClick={() => this.switchColor("white")}>White</button>
                        <button onClick={() => this.toggleAllColors()}>Show All</button>
                    </div>
                    <h3>Border Options</h3>
                    <div className="options-box">
                        <button onClick={() => this.toggleBorder("bd-nm")}>Normal Border</button>                       
                        <button onClick={() => this.toggleBorder("bd-f")}>Fast Border</button>
                        <button onClick={() => this.toggleBorder("bd-no")}>No Border</button>
                    </div>
                    <h3>Size Options</h3>
                    <div className="options-box">
                        <button onClick={() => this.toggleAllSizes()}>ALL</button>                       
                        <button onClick={() => this.toggleSize("xlg")}>XLG</button>                       
                        <button onClick={() => this.toggleSize("lg")}>LG</button>                       
                        <button onClick={() => this.toggleSize("md")}>MD</button>                       
                        <button onClick={() => this.toggleSize("sm")}>SM</button>                       
                        <button onClick={() => this.toggleSize("xs")}>XS</button>
                    </div>
                    <div className="container">
                        {
                            !this.state.showAllColors &&
                            this.state.showAllSizes &&
                            this.state.sizes.map(s => {
                                return (
                                    <div className="button-container" data-text={s}>
                                        <button className={"neon-reflective-button " + s + " " + this.state.color + " " + this.state.borderSpeed}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            Button
                                        </button>
                                        <button className={"neon-reflective-button " + s + " " + this.state.color + " " + this.state.borderSpeed}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            Button
                                        </button>
                                        <button className={"neon-reflective-button " + s + " " + this.state.color + " " + this.state.borderSpeed}>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            Button
                                        </button>
                                        {
                                            (this.state.size === "sm" || this.state.size === "xs") && 
                                            <button className={"neon-reflective-button " + s + " " + this.state.color + " " + this.state.borderSpeed}>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                Button
                                            </button>
                                        }
                                        {
                                            s === "xs" &&
                                            <button className={"neon-reflective-button " + s + " " + this.state.color + " " + this.state.borderSpeed}>
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
                            <div className="button-container" data-text={this.state.size}>
                                <button className={"neon-reflective-button " + this.state.size + " " + this.state.color + " " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button " + this.state.size + " " + this.state.color + " " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button " + this.state.size + " " + this.state.color + " " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                {
                                    (this.state.size === "sm" || this.state.size === "xs") && 
                                    <button className={"neon-reflective-button " + this.state.size + " " + this.state.color + " " + this.state.borderSpeed}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        Button
                                    </button>
                                }
                                {
                                    this.state.size === "xs" &&
                                    <button className={"neon-reflective-button " + this.state.size + " " + this.state.color + " " + this.state.borderSpeed}>
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
                            <div className="button-container" data-text="Colors">
                                {
                                    this.state.colors.map(c => {
                                        return (
                                            <button className={"neon-reflective-button xs " + c + " " + this.state.borderSpeed}>
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
                <CodeWindow html={this.state.html} update={this.state.update} ref="CodeWindow"/>
            </div>          
        );
    }
}