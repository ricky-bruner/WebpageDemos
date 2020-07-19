import React, { Component } from 'react';
import CodeWindow from '../codewindows/CodeWindow';

export default class GlowingCardDemo extends Component {
    state = {
        html: ".glowing-card-demo"
    };

    render(){
        return (
            <div className="demo-section">
                <div className="glowing-card-demo">
                    <div className="container">
                        <div className="box">
                            <div className="glass"></div>
                            <div className="content">
                                <h2>Glowing Border</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="glass"></div>
                            <div className="content">
                                <h2>Glowing Border</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="glass"></div>
                            <div className="content">
                                <h2>Glowing Border</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <CodeWindow html={this.state.html} ref="CodeWindow" />
            </div>
        );
    }
}