import React, { Component } from 'react';
import RemoteNavbar from './RemoteNavbar';
import './navbars.css';

export default class NavbarDemos extends Component {

    render(){
        return (
            <div className="navbar-demos">
                <RemoteNavbar />
            </div>
        );
    }
}