import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faLeaf } from '@fortawesome/free-solid-svg-icons'
import { faHtml5, faCss3Alt, faJsSquare, faReact, faAngular } from '@fortawesome/free-brands-svg-icons';
import CodeWindow from '../../codewindows/CodeWindow';

export default class GameStyleCardsDemo extends Component {
    state = {
        html: ".game-style-cards-demo",
        title: "Game Style Cards",
        theme: "dark",
        themes: [ "light", "dark" ]
    };

    toggleTheme = (theme) => {
        this.setState({ theme: theme }, () => {
            this.refs.CodeWindow.renderHTML()
        });
    }

    render(){
        return (
            <div className="demo-section">
                {/* <div className="card-demo-section-header">
                    
                    <div className="card-demo-section-options-container">
                        <div className="card-demo-section-option">

                        </div>
                    </div>
                </div> */}
                <div className="game-style-cards-demo">
                    <h2 className="card-demo-title">{this.state.title}</h2>
                    <div className="options-container">
                        <h3>Options</h3>
                        <div className="options-box">
                            <div className="option-section">
                                <h4>Theme:</h4>
                                <button className={(this.state.theme === "dark") ? "active" : ""} onClick={() => this.toggleTheme("dark")}>Dark</button>
                                <button className={(this.state.theme === "light") ? "active" : ""} onClick={() => this.toggleTheme("light")}>Light</button>
                            </div>
                        </div>
                    </div>
                    <div className={"demo-container " + this.state.theme}>
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
                </div>
                <CodeWindow html={this.state.html} ref="CodeWindow" />
            </div>
        );
    }
}