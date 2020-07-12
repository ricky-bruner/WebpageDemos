import React, { Component } from 'react';
import CodeWindow from '../codewindows/CodeWindow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faThLarge, faChartBar, faTasks, faBell, faArchive, faComment, faSitemap, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faTumblr } from '@fortawesome/free-brands-svg-icons'

export default class RemoteNavbarDemo extends Component {
    state = {
        html: ".remote-navbar-demo",
        theme: "light",
        color: "redorange",
        colors: [ "blue", "mint", "lightgreen", "green", "purple", "pink", "hotpink", "red", "redorange", "orange", "yellow", "white", "black" ],
        themes: [ "light", "dark" ]
    };

    switchColor = (color) => {
        this.setState({ color: color, showAllColors: false }, () => {
            this.refs.CodeWindow.renderHTML();
        });
    }

    toggleTheme = (theme) => {
        this.setState({ theme: theme }, () => {
            this.refs.CodeWindow.renderHTML()
        });
    }

    toggleAllColors = () => {
        let color = !this.state.showAllColors ? "" : "redorange";
        
        this.setState({ showAllColors: !this.state.showAllColors, color: color }, () => {
            this.refs.CodeWindow.renderHTML()
        });
    } 
    
    render(){
        return (
            <div className="demo-section">
                <div id="home" className="remote-navbar-demo">
                    <h2>Remote Navbar Demo</h2>
                    <div className="options-container">
                        <h3>Options</h3>
                        <div className="options-box">
                            <div className="option-section">
                                <h4>Theme:</h4>
                                <button className={(this.state.theme === "dark") ? "active" : ""} onClick={() => this.toggleTheme("dark")}>Dark</button>
                                <button className={(this.state.theme === "light") ? "active" : ""} onClick={() => this.toggleTheme("light")}>Light</button>
                            </div>
                        </div>
                        <div className="options-box">
                            <div className="option-section">
                                <h4>Colors:</h4>
                                <button className={(this.state.showAllColors === true) ? "active" : ""} onClick={() => this.toggleAllColors()}>Show All</button>
                                {
                                    this.state.colors.map(c => <button className={(this.state.color === c) ? "active" : ""} onClick={() => this.switchColor(c)}>{c.charAt(0).toUpperCase() + c.slice(1)}</button>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className={"demo-container " + this.state.theme}>
                        <div className="navbar-container" data-text="Navbar">
                            {
                                !this.state.showAllColors &&
                                <ul className={"remote-navbar " + this.state.theme + " " + this.state.color}>
                                <li>
                                    <a className='list-item' href="home">
                                        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                                    </a>
                                </li>
                                <li>
                                    <a className='list-item' href="home">
                                        <FontAwesomeIcon icon={faThLarge}></FontAwesomeIcon>
                                    </a>
                                </li>
                                <li>
                                    <a className='list-item' href="home">
                                        <FontAwesomeIcon icon={faChartBar}></FontAwesomeIcon>
                                    </a>
                                </li>
                                <li>
                                    <a className='list-item' href="home">
                                        <FontAwesomeIcon icon={faTasks}></FontAwesomeIcon>
                                    </a>
                                </li>
                                <li>
                                    <a className='list-item' href="home">
                                        <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                                    </a>
                                </li>
                                <li>
                                    <a className='list-item' href="home">
                                        <FontAwesomeIcon icon={faArchive}></FontAwesomeIcon>
                                    </a>
                                </li>
                                <li>
                                    <a className='list-item' href="home">
                                        <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                                    </a>
                                </li>
                                <li>
                                    <a className='list-item' href="home">
                                        <FontAwesomeIcon icon={faSitemap}></FontAwesomeIcon>
                                    </a>
                                </li>
                                <li>
                                    <a className='list-item' href="home">
                                        <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
                                    </a>
                                </li>
                                <li>
                                    <a className='list-item' href="home">
                                        <FontAwesomeIcon icon={faTumblr}></FontAwesomeIcon>
                                    </a>
                                </li>
                            </ul>
                            }
                            {
                                this.state.showAllColors &&
                                this.state.colors.map(c => {
                                    return (
                                        <ul className={"remote-navbar " + this.state.theme + " " + c}>
                                            <li>
                                                <a className='list-item' href="home">
                                                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                            <li>
                                                <a className='list-item' href="home">
                                                    <FontAwesomeIcon icon={faThLarge}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                            <li>
                                                <a className='list-item' href="home">
                                                    <FontAwesomeIcon icon={faChartBar}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                            <li>
                                                <a className='list-item' href="home">
                                                    <FontAwesomeIcon icon={faTasks}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                            <li>
                                                <a className='list-item' href="home">
                                                    <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                            <li>
                                                <a className='list-item' href="home">
                                                    <FontAwesomeIcon icon={faArchive}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                            <li>
                                                <a className='list-item' href="home">
                                                    <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                            <li>
                                                <a className='list-item' href="home">
                                                    <FontAwesomeIcon icon={faSitemap}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                            <li>
                                                <a className='list-item' href="home">
                                                    <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                            <li>
                                                <a className='list-item' href="home">
                                                    <FontAwesomeIcon icon={faTumblr}></FontAwesomeIcon>
                                                </a>
                                            </li>
                                        </ul>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
                <CodeWindow html={this.state.html} ref="CodeWindow" />
            </div>
        );
    }
}