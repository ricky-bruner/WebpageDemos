import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faJsSquare, faReact, faAngular } from '@fortawesome/free-brands-svg-icons';

export default class GameStyleCardsDemo extends Component {
    state = {};

    render(){
        return (
            <div className="game-style-cards-demo">
                <div className="box">
                    <div className="card">
                        <div className="imgBx">
                            <div>
                                <FontAwesomeIcon icon={faHtml5} color="white" />
                                <h2>HTML</h2>
                            </div>
                        </div>
                        <div className="overlay"></div>
                        <div className="content">
                            <h2>HTML</h2>
                            <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                            <div>
                                <FontAwesomeIcon icon={faCss3Alt} color="white" />
                                <h2>CSS</h2>
                            </div>
                        </div>
                        <div className="overlay"></div>
                        <div className="content">
                            <h2>CSS</h2>
                            <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                            <div>
                                <FontAwesomeIcon icon={faJsSquare} color="white" />
                                <h2>JavaScript</h2>
                            </div>
                        </div>
                        <div className="overlay"></div>
                        <div className="content">
                            <h2>JavaScript</h2>
                            <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                            <div>
                                <FontAwesomeIcon icon={faReact} color="white" />
                                <h2>React</h2>
                            </div>
                        </div>
                        <div className="overlay"></div>
                        <div className="content">
                            <h2>React</h2>
                            <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                            <div>
                                <FontAwesomeIcon icon={faAngular} color="white" />
                                <h2>Angular</h2>
                            </div>
                        </div>
                        <div className="overlay"></div>
                        <div className="content">
                            <h2>Angular</h2>
                            <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                            <div>
                                <FontAwesomeIcon icon={faDatabase} color="white" />
                                <h2>SQL</h2>
                            </div>
                        </div>
                        <div className="overlay"></div>
                        <div className="content">
                            <h2>SQL</h2>
                            <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="imgBx">
                            <div>
                                <FontAwesomeIcon icon={faLeaf} color="white" />
                                <h2>MongoDB</h2>
                            </div>
                        </div>
                        <div className="overlay"></div>
                        <div className="content">
                            <h2>MongoDB</h2>
                            <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}