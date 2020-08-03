import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlusG, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './flipCubeSocialMediaIcons.css';

export default class FlipCubeSocialMediaIcons extends Component {
    state = {};

    render() {
        return (
            <div className={"flip-cube-social-media-icons " + this.props.settings.theme}>
                {
                    !this.props.settings.showAllColors &&
                    !this.props.settings.showAllSizes &&
                    <div className="icon-container" data-text={this.props.settings.size}>
                        <a href="#home" className={"flip-cube-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                            <span><FontAwesomeIcon icon={faFacebookF} /></span>
                            <span><FontAwesomeIcon icon={faFacebookF} /></span>
                        </a>
                        <a href="#home" className={"flip-cube-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                            <span><FontAwesomeIcon icon={faTwitter} /></span>
                            <span><FontAwesomeIcon icon={faTwitter} /></span>
                        </a>
                        <a href="#home" className={"flip-cube-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                            <span><FontAwesomeIcon icon={faGooglePlusG} /></span>
                            <span><FontAwesomeIcon icon={faGooglePlusG} /></span>
                        </a>
                        <a href="#home" className={"flip-cube-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                            <span><FontAwesomeIcon icon={faLinkedinIn} /></span>
                            <span><FontAwesomeIcon icon={faLinkedinIn} /></span>
                        </a>
                        <a href="#home" className={"flip-cube-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                            <span><FontAwesomeIcon icon={faInstagram} /></span>
                            <span><FontAwesomeIcon icon={faInstagram} /></span>
                        </a>
                    </div>
                }
                {
                    !this.props.settings.showAllSizes &&
                    this.props.settings.showAllColors &&
                    this.props.settings.colors.map(c => {
                        return (
                            <div className="icon-container" data-text={c}>
                                <a href="#home" className={"flip-cube-social-media-icon " + c + " " + this.props.settings.size}>
                                    <span><FontAwesomeIcon icon={faFacebookF} /></span>
                                    <span><FontAwesomeIcon icon={faFacebookF} /></span>
                                </a>
                                <a href="#home" className={"flip-cube-social-media-icon " + c + " " + this.props.settings.size}>
                                    <span><FontAwesomeIcon icon={faTwitter} /></span>
                                    <span><FontAwesomeIcon icon={faTwitter} /></span>
                                </a>
                                <a href="#home" className={"flip-cube-social-media-icon " + c + " " + this.props.settings.size}>
                                    <span><FontAwesomeIcon icon={faGooglePlusG} /></span>
                                    <span><FontAwesomeIcon icon={faGooglePlusG} /></span>
                                </a>
                                <a href="#home" className={"flip-cube-social-media-icon " + c + " " + this.props.settings.size}>
                                    <span><FontAwesomeIcon icon={faLinkedinIn} /></span>
                                    <span><FontAwesomeIcon icon={faLinkedinIn} /></span>
                                </a>
                                <a href="#home" className={"flip-cube-social-media-icon " + c + " " + this.props.settings.size}>
                                    <span><FontAwesomeIcon icon={faInstagram} /></span>
                                    <span><FontAwesomeIcon icon={faInstagram} /></span>
                                </a>
                            </div>
                        );
                    })
                }
                {
                    !this.props.settings.showAllColors &&
                    this.props.settings.showAllSizes &&
                    this.props.settings.sizes.map(s => {
                        return (
                            <div className="icon-container" data-text={s}>
                                <a href="#home" className={"flip-cube-social-media-icon " + this.props.settings.color + " " + s}>
                                    <span><FontAwesomeIcon icon={faFacebookF} /></span>
                                    <span><FontAwesomeIcon icon={faFacebookF} /></span>
                                </a>
                                <a href="#home" className={"flip-cube-social-media-icon " + this.props.settings.color + " " + s}>
                                    <span><FontAwesomeIcon icon={faTwitter} /></span>
                                    <span><FontAwesomeIcon icon={faTwitter} /></span>
                                </a>
                                <a href="#home" className={"flip-cube-social-media-icon " + this.props.settings.color + " " + s}>
                                    <span><FontAwesomeIcon icon={faGooglePlusG} /></span>
                                    <span><FontAwesomeIcon icon={faGooglePlusG} /></span>
                                </a>
                                <a href="#home" className={"flip-cube-social-media-icon " + this.props.settings.color + " " + s}>
                                    <span><FontAwesomeIcon icon={faLinkedinIn} /></span>
                                    <span><FontAwesomeIcon icon={faLinkedinIn} /></span>
                                </a>
                                <a href="#home" className={"flip-cube-social-media-icon " + this.props.settings.color + " " + s}>
                                    <span><FontAwesomeIcon icon={faInstagram} /></span>
                                    <span><FontAwesomeIcon icon={faInstagram} /></span>
                                </a>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}