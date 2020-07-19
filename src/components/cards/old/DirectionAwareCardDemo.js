import React, { Component } from 'react';
import CodeWindow from '../../codewindows/CodeWindow';

export default class DirectionAwareCardDemo extends Component {
    state = {
        html: ".direction-aware-card-demo"
    };

    render(){
        return (
            <div className="demo-section">
                <div className="direction-aware-card-demo">
                    <div className="container">
                        <div className="card">
                            <h2>1</h2>
                        </div>
                        <div className="card">
                            <h2>2</h2>
                        </div>
                        <div className="card">
                            <h2>3</h2>
                        </div>
                        <div className="card">
                            <h2>4</h2>
                        </div>
                        <div className="card">
                            <h2>5</h2>
                        </div>
                    </div>
                </div>
                <CodeWindow html={this.state.html} ref="CodeWindow" />
            </div>
        );
    }
}