import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faObjectGroup, faCode, faRocket } from '@fortawesome/free-solid-svg-icons';
import './isometricHoverCards.css';

export default class IsometricHoverCards extends Component {
    state = {
    };

    render(){
        return (
            <div className={"isometric-hover-cards " + this.props.settings.theme}>
                {
                    !this.props.settings.showAllColors &&
                    <div className="container">
                        <div className={"card " + this.props.settings.color}>
                            <div className="imgBx">
                                <FontAwesomeIcon icon={faObjectGroup}></FontAwesomeIcon>
                                <h3>Design</h3>
                            </div>
                            <div className="content">
                                <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className={"card " + this.props.settings.color}>
                            <div className="imgBx">
                                <FontAwesomeIcon icon={faCode}></FontAwesomeIcon>
                                <h3>Code</h3>
                            </div>
                            <div className="content">
                                <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className={"card " + this.props.settings.color}>
                            <div className="imgBx">
                                <FontAwesomeIcon icon={faRocket}></FontAwesomeIcon>
                                <h3>Launch</h3>
                            </div>
                            <div className="content">
                                <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
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
                                    <div className={"card " + c}>
                                        <div className="imgBx">
                                            <FontAwesomeIcon icon={faObjectGroup}></FontAwesomeIcon>
                                            <h3>Design</h3>
                                        </div>
                                        <div className="content">
                                            <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
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