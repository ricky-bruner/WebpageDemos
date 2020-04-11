import React, { Component } from 'react';

export default class MiddleOutButtonDemo extends Component {
    state = {};

    render(){
        return (
            <div id="middle-out-button-demo" className="middle-out-button-demo">
                <h2>Middle Out Buttons</h2>
                <div className="container">
                    <div className="button-container" data-text="X-Large">
                        <a href="middle-out-button-demo" className="middle-out-button xlg">Button</a>
                        <a href="middle-out-button-demo" className="middle-out-button xlg">Button</a>
                        <a href="middle-out-button-demo" className="middle-out-button xlg">Button</a>    
                    </div>
                    <div className="button-container" data-text="Large">
                        <a href="middle-out-button-demo" className="middle-out-button lg">Button</a>
                        <a href="middle-out-button-demo" className="middle-out-button lg">Button</a>
                        <a href="middle-out-button-demo" className="middle-out-button lg">Button</a>    
                    </div>
                    <div className="button-container" data-text="Medium">
                        <a href="middle-out-button-demo" className="middle-out-button md">Button</a>
                        <a href="middle-out-button-demo" className="middle-out-button md">Button</a>
                        <a href="middle-out-button-demo" className="middle-out-button md">Button</a>
                    </div>
                    <div className="button-container" data-text="Small">
                        <a href="middle-out-button-demo" className="middle-out-button sm">Button</a>
                        <a href="middle-out-button-demo" className="middle-out-button sm">Button</a>
                        <a href="middle-out-button-demo" className="middle-out-button sm">Button</a>
                        <a href="middle-out-button-demo" className="middle-out-button sm">Button</a>
                    </div>
                    <div className="button-container" data-text="X-Small">
                        <a href="middle-out-button-demo" className="middle-out-button xs">Button</a>
                        <a href="middle-out-button-demo" className="middle-out-button xs">Button</a>
                        <a href="middle-out-button-demo" className="middle-out-button xs">Button</a>
                        <a href="middle-out-button-demo" className="middle-out-button xs">Button</a>
                        <a href="middle-out-button-demo" className="middle-out-button xs">Button</a>
                    </div>
                </div>
            </div>
        );
    }
}