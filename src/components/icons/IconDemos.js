import React, { Component } from 'react';
import IconAnimationDemo from './IconAnimationDemo';
import './icons.css';
import CodeWindow from '../codewindows/CodeWindow';

export default class IconDemos extends Component {
    state = {};

    render(){
        return (
            <div className="icon-demos-body">
                {
                    (this.props.selectedDemo === "Icon Animation" || this.props.selectedDemo === "All") &&
                    <div>
                        <IconAnimationDemo />
                        <CodeWindow html=".icon-animation-body" />
                    </div>
                }
                {/* <IconAnimationDemo />
                <CodeWindow html=".icon-animation-body" /> */}
            </div>
        );
    }
}