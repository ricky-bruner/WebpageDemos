import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DemoFetcher from '../../../modules/helpers/DemoFetcher';

export default class NavbarSection extends Component {
    state = {};

    render() {
        return (
            <li className="navbar-section">
                <div className="navbar-section-header" onClick={() => this.props.showOptions(this.props.demoType)}><span><FontAwesomeIcon icon={this.props.sectionIcon} /></span> {this.props.demoType}</div>
                {
                    !this.props.showOptionsType &&
                    <div className="navbar-section-underline"></div>
                }
                {
                    this.props.showOptionsType &&
                    <ul className="navbar-section-list">
                        {
                            DemoFetcher(this.props.demoType).map(d => <li><button onClick={() => this.props.selectDemo(this.props.demoType, d.demoName)}>{d.friendlyName}</button></li>)
                        }
                        <li><button onClick={() => this.props.selectDemo(this.props.demoType, "All")}>All {this.props.demoType}</button></li>
                    </ul>
                }
                {
                    this.props.showOptionsType &&
                    <div className="navbar-section-underline"></div>
                }
            </li>
        );
    }
}