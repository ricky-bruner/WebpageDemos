import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faObjectGroup, faCode, faRocket, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import CodeWindow from '../codewindows/CodeWindow';

export default class ImageSlideLeftCardDemo extends Component {
    state = {
        html: ".image-slide-left-card-demo"
    };

    render(){
        return (
            <div className="demo-section">
                <div id="image-slide-left-card-demo" className="image-slide-left-card-demo">
                    <div className="container">
                        <div className="card">
                            <div className="imgBx" data-text="Design">
                                <FontAwesomeIcon icon={faObjectGroup} />
                            </div>
                            <div className="content">
                                <div>
                                    <h3>Design</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <a href="image-slide-left-card-demo">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgBx" data-text="Code">
                                <FontAwesomeIcon icon={faCode} />
                            </div>
                            <div className="content">
                                <div>
                                    <h3>Code</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <a href="image-slide-left-card-demo">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgBx" data-text="Launch">
                                <FontAwesomeIcon icon={faRocket} />
                            </div>
                            <div className="content">
                                <div>
                                    <h3>Launch</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <a href="image-slide-left-card-demo">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgBx" data-text="Earn">
                                <FontAwesomeIcon icon={faHandHoldingUsd} />
                            </div>
                            <div className="content">
                                <div>
                                    <h3>Earn</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <a href="image-slide-left-card-demo">Read More</a>
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