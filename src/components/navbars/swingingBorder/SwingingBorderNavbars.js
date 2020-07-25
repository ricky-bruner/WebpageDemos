import React, { Component } from 'react';
import './swingingBorderNavbars.css';

export default class SwingingBorderNavbars extends Component {
    state = {
    };

    render(){
        return (
                <div id="home" className={"swinging-border-navbars " + this.props.settings.theme}>
                    
                        <div className={"navbar-container " + this.props.settings.theme} data-text="Navbar">
                            {
                                !this.props.settings.showAllColors &&
                                !this.props.settings.showAllBorders &&
                                <ul className={"swinging-border-navbar " + this.props.settings.theme + " " + this.props.settings.color + " " + this.props.settings.border}>
                                    <li><a href="home">Home</a></li>
                                    <li><a href="home">About</a></li>
                                    <li><a href="home">Services</a></li>
                                    <li><a href="home">Portfolio</a></li>
                                    <li><a href="home">Contact</a></li>
                                </ul>
                            }
                            {
                                this.props.settings.showAllColors &&
                                !this.props.settings.showAllBorders &&
                                this.props.settings.colors.map(c => {
                                    return (
                                        <ul className={"swinging-border-navbar " + this.props.settings.theme + " " + c + " " + this.props.settings.border}>
                                            <li><a href="home">Home</a></li>
                                            <li><a href="home">About</a></li>
                                            <li><a href="home">Services</a></li>
                                            <li><a href="home">Portfolio</a></li>
                                            <li><a href="home">Contact</a></li>
                                        </ul>
                                    );
                                })
                            }
                            {
                                !this.props.settings.showAllColors &&
                                this.props.settings.showAllBorders &&
                                this.props.settings.borders.map(b => {
                                    return (
                                        <ul className={"swinging-border-navbar " + this.props.settings.theme + " " + this.props.settings.color + " " + b}>
                                            <li><a href="home">Home</a></li>
                                            <li><a href="home">About</a></li>
                                            <li><a href="home">Services</a></li>
                                            <li><a href="home">Portfolio</a></li>
                                            <li><a href="home">Contact</a></li>
                                        </ul>
                                    );
                                })
                            }
                        </div>
                </div>
        );
    }
}