import React, { Component } from 'react';
import MainNavbar from './components/app/navbar/MainNavbar';
import AppRoutes from './components/app/routes/AppRoutes';

export default class AppView extends Component {
    state = {
        expanded: true
    };

    toggleNavbar = () => {
        this.setState({expanded: !this.state.expanded});
    }

    render(){
        return (
            <div className="app-view">
                <MainNavbar expanded={this.state.expanded} toggleNavbar={this.toggleNavbar} />
                <AppRoutes expanded={this.state.expanded} />
            </div>
        );
    }
}