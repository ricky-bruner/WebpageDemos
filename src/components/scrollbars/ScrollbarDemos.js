import React, { Component } from 'react';
import './scrollbars.css';
import ScrollbarProgress from './ScrollbarProgress';
import ScrollbarDemoHeader from './ScrollbarDemoHeader';

export default class ScrollbarDemos extends Component {
    state = {};

    render() {
        return (
            <div className="scrollbar-demos-body">
                <ScrollbarDemoHeader />
                {
                    (this.props.selectedDemo === "Scrollbar Progress" || this.props.selectedDemo === "All") &&
                    <div>
                        {/* <ScrollbarProgress /> */}
                    </div>
                }
                {/* <ScrollbarProgress /> */}
            </div> 
        );
    }
}