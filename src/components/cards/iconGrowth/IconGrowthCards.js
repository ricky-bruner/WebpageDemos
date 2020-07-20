import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faObjectGroup, faCode, faRocket } from '@fortawesome/free-solid-svg-icons';
import './iconGrowthCards.css';

export default class IconGrowthCards extends Component {
    state = {
    };

    render(){
        return (
            <div id="icon-growth-card-demo" className="icon-growth-cards">
                <div className="container">
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <FontAwesomeIcon icon={faObjectGroup} color="white" />
                                <h3>Design</h3>
                            </div>
                        </div>
                        <div className="face face2">
                        <div className="content">
                                <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                                <a href="icon-growth-card-demo">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <FontAwesomeIcon icon={faCode} color="white" />
                                <h3>Code</h3>
                            </div>
                        </div>
                        <div className="face face2">
                        <div className="content">
                                <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                                <a href="icon-growth-card-demo">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <FontAwesomeIcon icon={faRocket} color="white" />
                                <h3>Launch</h3>
                            </div>
                        </div>
                        <div className="face face2">
                        <div className="content">
                                <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                                <a href="icon-growth-card-demo">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}