import React, { Component } from 'react';
import { render } from '@testing-library/react';

export default class ThreeDimensionalButtonDemo extends Component {
    state = {};

    render(){
        return (
            <div id="three-dimensional-button-demo" className="three-dimensional-button-demo">
                <h2>3D Buttons</h2>
                <div className="container">
                <div className="button-container" data-text="X-Large">
                        <a href="three-dimensional-button-demo" className="three-dimensional-button xlg">Button</a>
                        <a href="three-dimensional-button-demo" className="three-dimensional-button xlg">Button</a>
                        <a href="three-dimensional-button-demo" className="three-dimensional-button xlg">Button</a>
                    </div>
                    <div className="button-container" data-text="Large">
                        <a href="three-dimensional-button-demo" className="three-dimensional-button lg">Button</a>
                        <a href="three-dimensional-button-demo" className="three-dimensional-button lg">Button</a>
                        <a href="three-dimensional-button-demo" className="three-dimensional-button lg">Button</a>
                    </div>
                    <div className="button-container" data-text="Medium">
                        <a href="three-dimensional-button-demo" className="three-dimensional-button md">Button</a>
                        <a href="three-dimensional-button-demo" className="three-dimensional-button md">Button</a>
                        <a href="three-dimensional-button-demo" className="three-dimensional-button md">Button</a>
                    </div>
                    <div className="button-container" data-text="Small">
                        <a href="three-dimensional-button-demo" className="three-dimensional-button sm">Button</a>
                        <a href="three-dimensional-button-demo" className="three-dimensional-button sm">Button</a>
                        <a href="three-dimensional-button-demo" className="three-dimensional-button sm">Button</a>
                        <a href="three-dimensional-button-demo" className="three-dimensional-button sm">Button</a>
                    </div>
                    <div className="button-container" data-text="X-Small">
                        <a href="three-dimensional-button-demo" className="three-dimensional-button xs">Button</a>
                        <a href="three-dimensional-button-demo" className="three-dimensional-button xs">Button</a>
                        <a href="three-dimensional-button-demo" className="three-dimensional-button xs">Button</a>
                        <a href="three-dimensional-button-demo" className="three-dimensional-button xs">Button</a>
                        <a href="three-dimensional-button-demo" className="three-dimensional-button xs">Button</a>
                    </div>
                </div>
            </div>
        );
    }
}