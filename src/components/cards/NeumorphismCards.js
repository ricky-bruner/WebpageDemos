import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faObjectGroup, faCode, faRocket } from '@fortawesome/free-solid-svg-icons';

export default class NeumorphismCards extends Component {
    state = {
    };

    render(){
        return (
            <div id="neumorphism-card-demo" className={"neumorphism-cards " + this.props.settings.theme}>
                {
                    !this.props.settings.showAllColors &&
                    <div className="container">
                        <div className={"card " + this.props.settings.color + " " + this.props.settings.border}>
                            <div className="imgBx">
                                <FontAwesomeIcon icon={faObjectGroup} />
                            </div>
                            <div className="contentBx">
                                <h2>Design</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <a href="neumorphism-card-demo"><span>Read More</span></a>
                            </div>
                        </div>
                        <div className={"card " + this.props.settings.color + " " + this.props.settings.border}>
                            <div className="imgBx">
                                <FontAwesomeIcon icon={faCode} />
                            </div>
                            <div className="contentBx">
                                <h2>Code</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <a href="neumorphism-card-demo"><span>Read More</span></a>
                            </div>
                        </div>
                        <div className={"card " + this.props.settings.color + " " + this.props.settings.border}>
                            <div className="imgBx">
                                <FontAwesomeIcon icon={faRocket} />
                            </div>
                            <div className="contentBx">
                                <h2>Launch</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <a href="neumorphism-card-demo"><span>Read More</span></a>
                            </div>
                        </div>
                    </div>
                }
                {
                    this.props.settings.showAllColors &&
                    <div className="container">
                        {
                            this.props.settings.colors.map(c => {
                                return (
                                    <div className={"card " + c + " " + this.props.settings.border}>
                                        <div className="imgBx">
                                            <FontAwesomeIcon icon={faObjectGroup} />
                                        </div>
                                        <div className="contentBx">
                                            <h2>Design</h2>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                            <a href="neumorphism-card-demo"><span>Read More</span></a>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        );
    }
}