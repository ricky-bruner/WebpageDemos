import React, { Component } from 'react';
import RemoteNavbarDemo from './RemoteNavbarDemo';
import SwingingBorderNavbarDemo from './SwingingBorderNavbarDemo';
import './navbars.css';
import RovingBorderNavbarDemo from './RovingBorderNavbarDemo';
import TargetedHoverNavbarDemo from './TergetedHoverNavbarDemo';
import NavbarDemoHeader from './NavbarDemoHeader';

export default class NavbarDemos extends Component {

    render(){
        return (
            <div className="navbar-demos-body">
                <NavbarDemoHeader />
                {
                    (this.props.selectedDemo === "Targeted Hover" || this.props.selectedDemo === "All") &&
                    <TargetedHoverNavbarDemo />
                }
                {
                    (this.props.selectedDemo === "Roving Border" || this.props.selectedDemo === "All") &&
                    <RovingBorderNavbarDemo />
                }
                {
                    (this.props.selectedDemo === "Swinging Border" || this.props.selectedDemo === "All") &&
                    <SwingingBorderNavbarDemo />
                }
                {
                    (this.props.selectedDemo === "Remote" || this.props.selectedDemo === "All") &&
                    <RemoteNavbarDemo />
                }
            </div>
        );
    }
}