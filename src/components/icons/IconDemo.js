import React, { Component } from 'react';
import IconAnimationDemo from './IconAnimationDemo';
import './icons.css';

export default class IconDemo extends Component {
    state = {};

    render(){
        return (
            <div className="icon-demos-body">
                <IconAnimationDemo />
            </div>
        );
    }
}