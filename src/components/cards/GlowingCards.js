import React, { Component } from 'react';

export default class GlowingCards extends Component {
    state = {
    };

    render(){
        return (
            <div className={"glowing-cards " + this.props.settings.theme}>
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
        );
    }
}