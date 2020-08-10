import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DemoFetcher from '../../../modules/helpers/DemoFetcher';
import { Link } from 'react-router-dom';

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
                            DemoFetcher(this.props.demoType).map(d => <li><Link to={"/WebpageDemos/" + this.props.demoType + "/" + d.demoName}>{d.friendlyName}</Link></li>)
                        }
                        <li><Link to={"/WebpageDemos/" + this.props.demoType + "/All"}>All {this.props.demoType}</Link></li>
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