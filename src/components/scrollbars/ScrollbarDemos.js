import React, { Component } from 'react';
import './scrollbars.css';
import ScrollbarProgress from './ScrollbarProgress';

export default class ScrollbarDemos extends Component {
    state = {};

    render() {
        return (
            <div className="scrollbar-demos-body">
                <ScrollbarProgress />
            </div> 
        );
    }
}