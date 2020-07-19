import React, { Component } from 'react';
import CodeWindow from '../codewindows/CodeWindow';

export default class SkewedBorderDemo extends Component {
    state = {
        html: ".skewed-border-demo"
    };

    render(){
        return (
            <div className="demo-section">
                <div id="skewed-border-link" className="skewed-border-demo">
                    <div className="container">
                        <div className="box">
                            <div className="content">
                                <h2>01</h2>
                                <h3>Service One</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <a href="skewed-border-link">Read More</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content">
                                <h2>02</h2>
                                <h3>Service Two</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                <a href="skewed-border-link">Read More</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content">
                                <h2>03</h2>
                                <h3>Service Three</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <a href="skewed-border-link">Read More</a>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content">
                                <h2>04</h2>
                                <h3>Service Four</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                                <a href="skewed-border-link">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <CodeWindow html={this.state.html} ref="CodeWindow" />
            </div>
        );
    }
}