import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlusG, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './animatedSnakeSocialMediaIcons.css';

export default class AnimatedSnakeSocialMediaIcons extends Component {
    state = {};

    render() {
        return (
            <div className={"animated-snake-social-media-icons " + this.props.settings.theme}>
                {
                    !this.props.settings.showAllColors &&
                    !this.props.settings.showAllSizes &&
                    !this.props.settings.showAllBorders &&
                    <div className="icon-container" data-text={this.props.settings.size}>
                        <a href="#home" className={"animated-snake-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + this.props.settings.border}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="#home" className={"animated-snake-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + this.props.settings.border}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="#home" className={"animated-snake-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + this.props.settings.border}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <FontAwesomeIcon icon={faGooglePlusG} />
                        </a>
                        <a href="#home" className={"animated-snake-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + this.props.settings.border}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="#home" className={"animated-snake-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + this.props.settings.border}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                }
                {
                    this.props.settings.showAllColors &&
                    !this.props.settings.showAllSizes &&
                    !this.props.settings.showAllBorders &&
                    this.props.settings.colors.map(c => {
                        return (
                            <div className="icon-container" data-text={c}>
                                <a href="#home" className={"animated-snake-social-media-icon " + c + " " + this.props.settings.size + " " + this.props.settings.border}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href="#home" className={"animated-snake-social-media-icon " + c + " " + this.props.settings.size + " " + this.props.settings.border}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="#home" className={"animated-snake-social-media-icon " + c + " " + this.props.settings.size + " " + this.props.settings.border}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon icon={faGooglePlusG} />
                                </a>
                                <a href="#home" className={"animated-snake-social-media-icon " + c + " " + this.props.settings.size + " " + this.props.settings.border}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                                <a href="#home" className={"animated-snake-social-media-icon " + c + " " + this.props.settings.size + " " + this.props.settings.border}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </div>
                        );
                    })
                }
                {
                    !this.props.settings.showAllColors &&
                    this.props.settings.showAllSizes &&
                    !this.props.settings.showAllBorders &&
                    this.props.settings.sizes.map(s => {
                        return (
                            <div className="icon-container" data-text={s}>
                                <a href="#home" className={"animated-snake-social-media-icon " + this.props.settings.color + " " + s + " " + this.props.settings.border}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href="#home" className={"animated-snake-social-media-icon " + this.props.settings.color + " " + s + " " + this.props.settings.border}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="#home" className={"animated-snake-social-media-icon " + this.props.settings.color + " " + s + " " + this.props.settings.border}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon icon={faGooglePlusG} />
                                </a>
                                <a href="#home" className={"animated-snake-social-media-icon " + this.props.settings.color + " " + s + " " + this.props.settings.border}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                                <a href="#home" className={"animated-snake-social-media-icon " + this.props.settings.color + " " + s + " " + this.props.settings.border}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </div>
                        );
                    })   
                }
                {
                    !this.props.settings.showAllColors &&
                    !this.props.settings.showAllSizes &&
                    this.props.settings.showAllBorders &&
                    this.props.settings.borders.map(b => {
                        return (
                            <div className="icon-container" data-text={b}>
                                <a href="#home" className={"animated-snake-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + b}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href="#home" className={"animated-snake-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + b}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="#home" className={"animated-snake-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + b}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon icon={faGooglePlusG} />
                                </a>
                                <a href="#home" className={"animated-snake-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + b}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                                <a href="#home" className={"animated-snake-social-media-icon " + this.props.settings.color + " " + this.props.settings.size + " " + b}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </div>
                        );
                    })   
                }
            </div>
        );
    }
}