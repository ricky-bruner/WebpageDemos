import React, { Component } from 'react';
import HomePage from '../../../components/homepage/HomePage';
import GenericDemosBody from '../demos/GenericDemosBody';
import DemoTypes from '../../../modules/helpers/DemoTypes';
import './maincontent.css';

export default class MainContent extends Component {
    render() {
        return (
            <div className={this.props.expanded ? "content-container expanded" : "content-container"}>
                {
                    this.props.selectedDemoType === DemoTypes.Home &&
                    <HomePage /> 
                }
                {
                    this.props.selectedDemoType !== DemoTypes.Home &&
                    <GenericDemosBody demoType={this.props.selectedDemoType} selectedDemo={this.props.selectedDemo} />
                }
            </div>
        );
    }
}