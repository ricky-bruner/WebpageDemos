import React, { Component } from 'react';
import ScrollbarDemoHeader from './ScrollbarDemoHeader';
import './scrollbars.css';

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