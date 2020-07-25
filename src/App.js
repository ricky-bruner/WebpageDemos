import React, { Component } from 'react';
import MainNavbar from './components/app/navbar/MainNavbar';
import MainContent from './components/app/content/MainContent';
import DemoTypes from './modules/helpers/DemoTypes';
import './modules/helpers/StringConverters';

export default class App extends Component {
    state = {
        selectedDemo: "",
        selectedDemoType: DemoTypes.Home,
        expanded: true
    }

    selectDemo = (type, demoName) => {
        let stateToChange = this.state;

        stateToChange["selectedDemoType"] = type;
        stateToChange["selectedDemo"] = demoName;
        this.setState(stateToChange);
    }

    toggleNavbar = () => {
        this.setState({expanded: !this.state.expanded});
    }

    render(){
        return (
            <div className="app-view">
                <MainNavbar showOptions={this.showOptions} 
                            renderDemos={this.renderDemos} 
                            selectDemo={this.selectDemo} 
                            expanded={this.state.expanded} 
                            toggleNavbar={this.toggleNavbar} />
                <MainContent expanded={this.state.expanded} 
                            selectedDemoType={this.state.selectedDemoType}
                            selectedDemo={this.state.selectedDemo} />
            </div>
        );
    }
}