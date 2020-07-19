import React, { Component } from 'react';
import CodeWindow from '../codewindows/CodeWindow';

export default class ColorfulHoverQuoteBoxDemo extends Component {
    state = {
        html: ".colorful-hover-quote-box-demo"
    };

    render(){
        return (
            <div className="demo-section">
                <div className="colorful-hover-quote-box-demo">
                    <div className="quote">
                        <div>
                            <div className="box box1">
                                <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                                <h2>Someone Famous</h2>
                            </div>
                            <div className="bg"></div>
                        </div>
                        <div>
                            <div className="box box2">
                                <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                                <h2>Someone Famous</h2>
                            </div>
                            <div className="bg"></div>
                        </div>
                        <div>
                            <div className="box box3">
                                <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                                <h2>Someone Famous</h2>
                            </div>
                            <div className="bg"></div>
                        </div>
                    </div>
                </div>
                <CodeWindow html={this.state.html} ref="CodeWindow"/>
            </div>
        );
    }
}