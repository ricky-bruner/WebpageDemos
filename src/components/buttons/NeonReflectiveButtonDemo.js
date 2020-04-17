import React, { Component } from 'react';
import CodeWindow from '../codewindows/CodeWindow';

export default class NeonReflectiveButtonDemo extends Component {
    state = {
        color: "blue",
        showAllColors: false,
        html: ".neon-reflective-button-demo",
        borderSpeed: "bd-nm"
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
                    <div className="container">
                        {
                            !this.state.showAllColors &&
                            <div className="button-container" data-text="X-Large">
                                <button className={"neon-reflective-button xlg " + this.state.color + " " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button xlg " + this.state.color + " " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button xlg " + this.state.color + " " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                            </div>
                        }
                        {
                            !this.state.showAllColors &&
                            <div className="button-container" data-text="Large">
                                <button className={"neon-reflective-button lg " + this.state.color + " " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button lg " + this.state.color + " " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button lg " + this.state.color + " " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                            </div>
                        }
                        {
                            !this.state.showAllColors &&
                            <div className="button-container" data-text="Medium">
                                <button className={"neon-reflective-button md " + this.state.color + " " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button md " + this.state.color + " " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button md " + this.state.color + " " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                            </div>
                        }
                        {
                            !this.state.showAllColors &&
                            <div className="button-container" data-text="Small">
                                <button className={"neon-reflective-button sm " + this.state.color + " " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button sm " + this.state.color + " " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button sm " + this.state.color + " " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button sm " + this.state.color + " " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                            </div>
                        }
                        {
                            !this.state.showAllColors &&
                            <div className="button-container" data-text="X-Small">
                                <button className={"neon-reflective-button xs " + this.state.color + " " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button xs " + this.state.color + " " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button xs " + this.state.color + " " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button xs " + this.state.color + " " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button xs " + this.state.color + " " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                            </div>
                        }
                        {
                            this.state.showAllColors &&
                            <div className="button-container" data-text="Colors">
                                <button className={"neon-reflective-button xs green " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button xs mint " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button xs cyan " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button xs blue " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button xs purple " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button xs magenta " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button xs pink " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button xs hotpink " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button xs red " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button xs orange " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button xs yellow " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                                <button className={"neon-reflective-button xs white " + this.state.borderSpeed}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Button
                                </button>
                            </div>
                        }
                    </div>
                </div>
                <CodeWindow html={this.state.html} update={this.state.update} ref="CodeWindow"/>
            </div>          
        );
    }
}