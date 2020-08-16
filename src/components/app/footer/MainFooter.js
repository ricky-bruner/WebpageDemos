import React, { Component } from 'react';

import './mainFooter.css';
import SiteDetailsFooter from './SiteDetailsFooter';
import CitationFooter from './CitationFooter';

export default class MainFooter extends Component {
    state = {};

    render() {
        return (
            <div className="main-footer">
                <SiteDetailsFooter />
                <CitationFooter />
            </div>
        );
    }
}