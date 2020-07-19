import React, { Component } from 'react';
import ProjectLogo1 from "../../img/ProjectLogo1.png";
import ProjectLogo2 from "../../img/ProjectLogo2.png";
import ProjectLogo3 from "../../img/ProjectLogo3.png";
import CodeWindow from '../codewindows/CodeWindow';

export default class HoverSwitchCardDemo extends Component {
    state = {
        html: ".hover-switch-card-demo"
    };

    render(){
        return (
            <div className="demo-section">
                <div className="hover-switch-card-demo">
                    <div className="container">
                        <div className="card">
                            <div className="face face1">
                                <img src={ProjectLogo1} alt=""></img>
                            </div>
                            <div className="face face2">
                                <div className="content">
                                    <h2>Project Title</h2>
                                    <p>Project Description lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua. dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="face face1">
                                <img src={ProjectLogo2} alt=""></img>
                            </div>
                            <div className="face face2">
                                <div className="content">
                                    <h2>Project Title</h2>
                                    <p>Project Description lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua. dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="face face1">
                                <img src={ProjectLogo3} alt=""></img>
                            </div>
                            <div className="face face2">
                                <div className="content">
                                    <h2>Project Title</h2>
                                    <p>Project Description lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua. dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
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