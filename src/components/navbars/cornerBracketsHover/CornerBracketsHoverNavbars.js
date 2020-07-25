import React, { Component } from 'react';
import './cornerBracketsHoverNavbars.css';

export default class CornerBracketsHoverNavbars extends Component {
    state = {
        html: ".corner-bracket-hover-navbar-demo",
        theme: "dark",
        themes: [ "light", "dark" ],
        color: "black",
        colors: [ "blue", "mint", "lightgreen", "green", "purple", "pink", "hotpink", "red", "redorange", "orange", "yellow", "white", "black" ],
        border: "bd-nm",
        borders: [ "bd-thin", "bd-nm", "bd-thicc" ],
        showAllColors: false
    };

    render(){
        return (
            <div id="home" className={"corner-brackets-hover-navbars " + this.props.settings.theme}>
                <div className={"navbar-container " + this.props.settings.theme} data-text="Navbar">
                    {
                        !this.props.settings.showAllColors &&
                        !this.props.settings.showAllBorders &&
                        <ul className={"corner-brackets-hover-navbar " + this.props.settings.theme + " " + this.props.settings.color + " " + this.props.settings.border}>
                            <li><a href="home">Home<span></span><span></span></a></li>
                            <li><a href="home">About<span></span><span></span></a></li>
                            <li><a href="home">Services<span></span><span></span></a></li>
                            <li><a href="home">Portfolio<span></span><span></span></a></li>
                            <li><a href="home">Contact<span></span><span></span></a></li>
                        </ul>
                    }
                    {
                        this.props.settings.showAllColors &&
                        !this.props.settings.showAllBorders &&
                        this.props.settings.colors.map(c => {
                            return (
                                <ul className={"corner-brackets-hover-navbar " + this.props.settings.theme + " " + c + " " + this.props.settings.border}>
                                    <li><a href="home">Home<span></span><span></span></a></li>
                                    <li><a href="home">About<span></span><span></span></a></li>
                                    <li><a href="home">Services<span></span><span></span></a></li>
                                    <li><a href="home">Portfolio<span></span><span></span></a></li>
                                    <li><a href="home">Contact<span></span><span></span></a></li>
                                </ul>
                            );
                        })
                    }
                    {
                        !this.props.settings.showAllColors &&
                        this.props.settings.showAllBorders &&
                        this.props.settings.borders.map(b => {
                            return (
                                <ul className={"corner-brackets-hover-navbar " + this.props.settings.theme + " " + this.props.settings.color + " " + b}>
                                    <li><a href="home">Home<span></span><span></span></a></li>
                                    <li><a href="home">About<span></span><span></span></a></li>
                                    <li><a href="home">Services<span></span><span></span></a></li>
                                    <li><a href="home">Portfolio<span></span><span></span></a></li>
                                    <li><a href="home">Contact<span></span><span></span></a></li>
                                </ul>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}