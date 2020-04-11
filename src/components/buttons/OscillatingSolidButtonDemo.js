import React, { Component } from 'react';

export default class OscillatingSolidButtonDemo extends Component {
    state = {};

    render(){
        return (
            <div id="oscillating-solid-button-demo" className="oscillating-solid-button-demo">
                <h2>Oscillating Solid Buttons</h2>
                <div className="container">
                    <div className="button-container" data-text="X-Large">
                        <a href="oscillating-solid-button-demo" className="oscillating-solid-button xlg">Button</a>
                        <a href="oscillating-solid-button-demo" className="oscillating-solid-button xlg">Button</a>
                        <a href="oscillating-solid-button-demo" className="oscillating-solid-button xlg">Button</a>
                    </div>
                    <div className="button-container" data-text="Large">
                        <a href="oscillating-solid-button-demo" className="oscillating-solid-button lg">Button</a>
                        <a href="oscillating-solid-button-demo" className="oscillating-solid-button lg">Button</a>
                        <a href="oscillating-solid-button-demo" className="oscillating-solid-button lg">Button</a>
                    </div>
                    <div className="button-container" data-text="Medium">
                        <a href="oscillating-solid-button-demo" className="oscillating-solid-button md">Button</a>
                        <a href="oscillating-solid-button-demo" className="oscillating-solid-button md">Button</a>
                        <a href="oscillating-solid-button-demo" className="oscillating-solid-button md">Button</a>
                    </div>
                    <div className="button-container" data-text="Small">
                        <a href="oscillating-solid-button-demo" className="oscillating-solid-button sm">Button</a>
                        <a href="oscillating-solid-button-demo" className="oscillating-solid-button sm">Button</a>
                        <a href="oscillating-solid-button-demo" className="oscillating-solid-button sm">Button</a>
                        <a href="oscillating-solid-button-demo" className="oscillating-solid-button sm">Button</a>
                    </div>
                    <div className="button-container" data-text="X-Small">
                        <a href="oscillating-solid-button-demo" className="oscillating-solid-button xs">Button</a>
                        <a href="oscillating-solid-button-demo" className="oscillating-solid-button xs">Button</a>
                        <a href="oscillating-solid-button-demo" className="oscillating-solid-button xs">Button</a>
                        <a href="oscillating-solid-button-demo" className="oscillating-solid-button xs">Button</a>
                        <a href="oscillating-solid-button-demo" className="oscillating-solid-button xs">Button</a>
                    </div>
                </div>
            </div>
        );
    }
}