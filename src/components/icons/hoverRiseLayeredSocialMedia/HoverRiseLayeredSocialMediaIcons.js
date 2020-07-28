import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faLinkedinIn, faGooglePlusG, faFacebookF } from "@fortawesome/free-brands-svg-icons";
import './hoverRiseLayeredSocialMediaIcons.css';

export default class HoverRiseLayeredSocialMediaIcons extends Component {
    state = {};

    render() {
        return (
            <div id="home" className={"hover-rise-layered-social-media-icons " + this.props.settings.theme}>
                {
                    !this.props.settings.showAllColors &&
                    !this.props.settings.showAllSizes &&
                    <div className="icon-container" data-text={this.props.settings.size}>
                        <div className={"hover-rise-layered-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                            <a href="#home">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span><FontAwesomeIcon icon={faFacebookF} /></span>
                            </a>
                        </div>
                        <div className={"hover-rise-layered-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                            <a href="#home">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span><FontAwesomeIcon icon={faTwitter} /></span>
                            </a>
                        </div>
                        <div className={"hover-rise-layered-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                            <a href="#home">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span><FontAwesomeIcon icon={faGooglePlusG} /></span>
                            </a>
                        </div>
                        <div className={"hover-rise-layered-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                            <a href="#home">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span><FontAwesomeIcon icon={faLinkedinIn} /></span>
                            </a>
                        </div>
                        <div className={"hover-rise-layered-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                            <a href="#home">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span><FontAwesomeIcon icon={faInstagram} /></span>
                            </a>
                        </div>
                    </div>
                }
                {
                    !this.props.settings.showAllSizes &&
                    this.props.settings.showAllColors &&
                    this.props.settings.colors.map(c => {
                        return (
                            <div className="icon-container" data-text={this.props.settings.size}>
                                <div className={"hover-rise-layered-social-media-icon " + c + " " + this.props.settings.size}>
                                    <a href="#home">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span><FontAwesomeIcon icon={faFacebookF} /></span>
                                    </a>
                                </div>
                                <div className={"hover-rise-layered-social-media-icon " + c + " " + this.props.settings.size}>
                                    <a href="#home">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span><FontAwesomeIcon icon={faTwitter} /></span>
                                    </a>
                                </div>
                                <div className={"hover-rise-layered-social-media-icon " + c + " " + this.props.settings.size}>
                                    <a href="#home">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span><FontAwesomeIcon icon={faGooglePlusG} /></span>
                                    </a>
                                </div>
                                <div className={"hover-rise-layered-social-media-icon " + c + " " + this.props.settings.size}>
                                    <a href="#home">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span><FontAwesomeIcon icon={faLinkedinIn} /></span>
                                    </a>
                                </div>
                                <div className={"hover-rise-layered-social-media-icon " + c + " " + this.props.settings.size}>
                                    <a href="#home">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span><FontAwesomeIcon icon={faInstagram} /></span>
                                    </a>
                                </div>
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
                                <div className={"hover-rise-layered-social-media-icon " + this.props.settings.color + " " + s}>
                                    <a href="#home">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span><FontAwesomeIcon icon={faFacebookF} /></span>
                                    </a>
                                </div>
                                <div className={"hover-rise-layered-social-media-icon " + this.props.settings.color + " " + s}>
                                    <a href="#home">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span><FontAwesomeIcon icon={faTwitter} /></span>
                                    </a>
                                </div>
                                <div className={"hover-rise-layered-social-media-icon " + this.props.settings.color + " " + s}>
                                    <a href="#home">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span><FontAwesomeIcon icon={faGooglePlusG} /></span>
                                    </a>
                                </div>
                                <div className={"hover-rise-layered-social-media-icon " + this.props.settings.color + " " + s}>
                                    <a href="#home">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span><FontAwesomeIcon icon={faLinkedinIn} /></span>
                                    </a>
                                </div>
                                <div className={"hover-rise-layered-social-media-icon " + this.props.settings.color + " " + s}>
                                    <a href="#home">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span><FontAwesomeIcon icon={faInstagram} /></span>
                                    </a>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}