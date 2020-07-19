import React, { Component } from 'react';

export default class SkewedBorderCards extends Component {
    state = {
    };

    render(){
        return (
            <div id="skewed-border-link" className={"skewed-border-cards " + this.props.settings.theme}>
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
        );
    }
}