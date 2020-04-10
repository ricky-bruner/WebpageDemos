import React, { Component } from 'react';
import MiddleOutButtonDemo from './MiddleOutButtonDemo';
import CodeWindow from '../codewindows/CodeWindow';
import "./buttons.css";
import ShootingBorderButtonDemo from './ShootingBorderButtonDemo';

export default class ButtonDemos extends Component {
    state = {}
    
    render(){
        return (
            <div className="button-demos-body">
                <ShootingBorderButtonDemo />
                <CodeWindow html=".shooting-border-button-demo" />
                <MiddleOutButtonDemo />
                <CodeWindow html=".middle-out-button-demo" />
            </div>
        )
    }
}