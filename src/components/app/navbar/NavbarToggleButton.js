import React, { Component } from 'react';
import RightArrow from "../../../img/right-arrow.png";

export default class NavbarToggleButton extends Component {
    state = {};

    render() {
        return (
            <div className={"toggle-navbar-button-container " + this.props.location}>
                <div className="toggle-navbar-button" onClick={() => this.props.toggleNavbar()}>
                    <img src={RightArrow} alt="Right Arrow" onClick={() => this.props.toggleNavbar()}/>
                </div>
            </div>
        );
    }
}