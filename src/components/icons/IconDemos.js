import React, { Component } from 'react';
import IconAnimationDemo from './IconAnimationDemo';
import './icons.css';
import CodeWindow from '../codewindows/CodeWindow';

export default class IconDemos extends Component {
    state = {};

    render(){
        return (
            <div className="icon-demos-body">
                <IconAnimationDemo />
                <CodeWindow html=".icon-animation-body" />
            </div>
        );
    }
}