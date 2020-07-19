import React, { Component } from 'react';
import CodeWindow from '../codewindows/CodeWindow';

export default class CircleReductionServiceCard extends Component {
    state = {
        html: ".circle-reduction-service-card-demo"
    };

    render(){
        return (
            <div className="demo-section">
                <div id="circle-reduction-service-card-demo" className="circle-reduction-service-card-demo">
                    <div className="container">
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <h2>Service One</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <a href="circle-reduction-service-card-demo">Read More</a>
                                </div>
                            </div>
                            <div className="face face2">
                                <h2>01</h2>
                            </div>
                        </div>
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <h2>Service Two</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <a href="circle-reduction-service-card-demo">Read More</a>
                                </div>
                            </div>
                            <div className="face face2">
                                <h2>02</h2>
                            </div>
                        </div>
                        <div className="card">
                            <div className="face face1">
                                <div className="content">
                                    <h2>Service Three</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                    <a href="circle-reduction-service-card-demo">Read More</a>
                                </div>
                            </div>
                            <div className="face face2">
                                <h2>03</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <CodeWindow html={this.state.html} ref="CodeWindow" />
            </div>
        );
    }
}