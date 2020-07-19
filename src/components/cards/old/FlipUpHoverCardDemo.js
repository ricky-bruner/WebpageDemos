import React, { Component } from 'react';
import DumbleDore from "./../../img/dumbledore-portrait.png";
import Hagrid from "./../../img/hagrid-portrait.png";
import Snape from "./../../img/snape-portrait.png";
import CodeWindow from '../../codewindows/CodeWindow';

export default class FlipUpHoverCardDemo extends Component {
    state = {
        html: ".flip-up-hover-card-demo"
    };

    render(){
        return (
            <div className="demo-section">
                <div className="flip-up-hover-card-demo">
                    <div className="container">
                        <div className="box">
                            <div className="imgBx">
                                <img src={DumbleDore} alt="Dumbledore"></img>
                            </div>
                            <div className="contentBx">
                                <div>
                                    <h2>Post Title</h2>
                                    <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua. Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="imgBx">
                                <img src={Hagrid} alt="Hagrid"></img>
                            </div>
                            <div className="contentBx">
                                <div>
                                    <h2>Post Title</h2>
                                    <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua. Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="imgBx">
                                <img src={Snape} alt="Snape"></img>
                            </div>
                            <div className="contentBx">
                                <div>
                                    <h2>Post Title</h2>
                                    <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua. Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CodeWindow html={this.state.html} ref="CodeWindow" />
            </div>
        );
    }
}