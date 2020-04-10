import React, { Component } from 'react';

export default class DepthOfFieldCardDemo extends Component {
    state = {};

    render(){
        return (
            <div id="depth-of-field-card-demo" className="depth-of-field-card-demo">
                <div className="container">
                    <div className="card">
                        <div className="content">
                            <h2>1</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <a href="depth-of-field-card-demo">Read More</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <h2>2</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <a href="depth-of-field-card-demo">Read More</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <h2>3</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <a href="depth-of-field-card-demo">Read More</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <h2>4</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            <a href="depth-of-field-card-demo">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}