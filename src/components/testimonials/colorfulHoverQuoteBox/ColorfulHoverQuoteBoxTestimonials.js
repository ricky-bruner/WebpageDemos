import React, { Component } from 'react';
import './colorfulHoverQuoteBoxTestimonials.css';

export default class ColorfulHoverQuoteBoxTestimonials extends Component {
    state = {
    };

    render(){
        return (
            <div className={"colorful-hover-quote-box-testimonials " + this.props.settings.theme}>
                <div className="quotes">
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
        );
    }
}