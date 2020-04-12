import React, { Component } from 'react';

export default class NeonReflectiveButtonDemo extends Component {
    state = {
        color: "blue"
    };

    switchColor = (color) => {
        this.setState({ color: color});
    }

    render(){
        return (
            <div id="neon-reflective-button-demo" className="neon-reflective-button-demo">
                <h2>Neon Reflective Buttons</h2>
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
                </div>
                <div className="container">
                    <div className="button-container" data-text="X-Large">
                        <a href="neon-reflective-button-demo" className={"neon-reflective-button xlg " + this.state.color}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Button
                        </a>
                        <a href="neon-reflective-button-demo" className={"neon-reflective-button xlg " + this.state.color}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Button
                        </a>
                        <a href="neon-reflective-button-demo" className={"neon-reflective-button xlg " + this.state.color}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Button
                        </a>
                    </div>
                    <div className="button-container" data-text="Large">
                        <a href="neon-reflective-button-demo" className={"neon-reflective-button lg " + this.state.color}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Button
                        </a>
                        <a href="neon-reflective-button-demo" className={"neon-reflective-button lg " + this.state.color}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Button
                        </a>
                        <a href="neon-reflective-button-demo" className={"neon-reflective-button lg " + this.state.color}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Button
                        </a>
                    </div>
                    <div className="button-container" data-text="Medium">
                        <a href="neon-reflective-button-demo" className={"neon-reflective-button md " + this.state.color}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Button
                        </a>
                        <a href="neon-reflective-button-demo" className={"neon-reflective-button md " + this.state.color}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Button
                        </a>
                        <a href="neon-reflective-button-demo" className={"neon-reflective-button md " + this.state.color}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Button
                        </a>
                    </div>
                    <div className="button-container" data-text="Small">
                        <a href="neon-reflective-button-demo" className={"neon-reflective-button sm " + this.state.color}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Button
                        </a>
                        <a href="neon-reflective-button-demo" className={"neon-reflective-button sm " + this.state.color}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Button
                        </a>
                        <a href="neon-reflective-button-demo" className={"neon-reflective-button sm " + this.state.color}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Button
                        </a>
                        <a href="neon-reflective-button-demo" className={"neon-reflective-button sm " + this.state.color}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Button
                        </a>
                    </div>
                    <div className="button-container" data-text="X-Small">
                        <a href="neon-reflective-button-demo" className={"neon-reflective-button xs " + this.state.color}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Button
                        </a>
                        <a href="neon-reflective-button-demo" className={"neon-reflective-button xs " + this.state.color}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Button
                        </a>
                        <a href="neon-reflective-button-demo" className={"neon-reflective-button xs " + this.state.color}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Button
                        </a>
                        <a href="neon-reflective-button-demo" className={"neon-reflective-button xs " + this.state.color}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Button
                        </a>
                        <a href="neon-reflective-button-demo" className={"neon-reflective-button xs " + this.state.color}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Button
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}