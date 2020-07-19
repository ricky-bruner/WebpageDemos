import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faObjectGroup, faCode, faRocket } from '@fortawesome/free-solid-svg-icons';
import CodeWindow from '../../codewindows/CodeWindow';

export default class IsometricCardHoverDemo extends Component {
    state = {
        html: ".isometric-card-hover-demo"
    };

    render(){
        return (
            <div className="demo-section">
                <div className="isometric-card-hover-demo">
                    <div className="container">
                        <div className="card">
                            <div className="imgBx">
                                <FontAwesomeIcon icon={faObjectGroup}></FontAwesomeIcon>
                                <h3>Design</h3>
                            </div>
                            <div className="content">
                                <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgBx">
                                <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                                <h3>Code</h3>
                            </div>
                            <div className="content">
                                <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgBx">
                                <FontAwesomeIcon icon={faRocket}></FontAwesomeIcon>
                                <h3>Launch</h3>
                            </div>
                            <div className="content">
                                <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <CodeWindow html={this.state.html} ref="CodeWindow" />
            </div>
        );
    }
}