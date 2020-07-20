import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faObjectGroup, faCode, faRocket } from '@fortawesome/free-solid-svg-icons';
import './circleGrowthIconCards.css';

export default class CircleGrowthIconCards extends Component {
    state = {
    };

    render(){
        return (
            <div className="circle-growth-icon-cards">
                <div className="container">
                    <div className="card">
                        <div className="imgBx">
                            <div>
                                <FontAwesomeIcon icon={faObjectGroup} color="white" />
                                <h2>Design</h2>
                            </div>
                        </div>
                        <div className="overlay"></div>
                        <div className="content">
                            <h2>Design</h2>
                            <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                            <div>
                                <FontAwesomeIcon icon={faCode} color="white" />
                                <h2>Code</h2>
                            </div>
                        </div>
                        <div className="overlay"></div>
                        <div className="content">
                            <h2>Code</h2>
                            <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                            <div>
                                <FontAwesomeIcon icon={faRocket} color="white" />
                                <h2>Launch</h2>
                            </div>
                        </div>
                        <div className="overlay"></div>
                        <div className="content">
                            <h2>Launch</h2>
                            <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}