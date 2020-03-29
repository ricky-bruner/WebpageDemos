import React, { Component } from 'react';
import RemoteNavbar from './RemoteNavbar';
import './navbars.css';
import CodeWindow from '../codewindows/CodeWindow';

export default class NavbarDemos extends Component {

    render(){
        return (
            <div className="navbar-demos">
                <RemoteNavbar />
                <CodeWindow html=".remote-navbar-demo" />
            </div>
        );
    }
}