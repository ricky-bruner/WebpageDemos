import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faIcons, faMapMarkedAlt, faAddressCard, faScroll, faHandPointer, faUsers } from '@fortawesome/free-solid-svg-icons';
import DemoTypes from '../../../modules/helpers/DemoTypes';

export default class CollapsedMainNavbar extends Component {
    state = {};

    render() {
        return (
            <ul className="collapsed-main-navbar">
                <li className="collapsed-icon" id="home" onClick={() => this.props.selectDemo(DemoTypes.Home, "")}><FontAwesomeIcon icon={faHome} /></li>
                <li><div className="navbar-section-underline"></div></li>
                <li className="collapsed-icon" onClick={() => this.props.showOptions(DemoTypes.Navbars, true)}><FontAwesomeIcon icon={faMapMarkedAlt} /></li>
                <li><div className="navbar-section-underline"></div></li>
                <li className="collapsed-icon" onClick={() => this.props.showOptions(DemoTypes.Icons, true)}><FontAwesomeIcon icon={faIcons} /></li>
                <li><div className="navbar-section-underline"></div></li>
                <li className="collapsed-icon" onClick={() => this.props.showOptions(DemoTypes.Cards, true)}><FontAwesomeIcon icon={faAddressCard} /></li>
                <li><div className="navbar-section-underline"></div></li>
                <li className="collapsed-icon" onClick={() => this.props.showOptions(DemoTypes.Testimonials, true)}><FontAwesomeIcon icon={faUsers} /></li>
                <li><div className="navbar-section-underline"></div></li>
                <li className="collapsed-icon" onClick={() => this.props.showOptions(DemoTypes.Scrollbars, true)}><FontAwesomeIcon icon={faScroll} /></li>
                <li><div className="navbar-section-underline"></div></li>
                <li className="collapsed-icon" onClick={() => this.props.showOptions(DemoTypes.Buttons, true)}><FontAwesomeIcon icon={faHandPointer} /></li>
                <li><div className="navbar-section-underline"></div></li>
            </ul>
        );
    }
}