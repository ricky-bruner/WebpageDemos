import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram, faLinkedinIn, faFacebookF, faWhatsapp, faGooglePlusG, faFacebookMessenger, faSkype, faYoutube, faPinterest, faRedditAlien, faSnapchatGhost } from "@fortawesome/free-brands-svg-icons";
import './isometricSocialMediaIcons.css';

export default class IsometricSocialMediaIcons extends Component {
    state = {};

    render() {
        return (
            <div id="home" className={"isometric-social-media-icons " + this.props.settings.theme}>
                {
                    !this.props.settings.showAllColors &&
                    !this.props.settings.showAllSizes &&
                    !this.props.settings.overflowing &&
                    <div className="icon-container" data-text={this.props.settings.size}>
                        <div className="isometric-social-media-icon-row">
                            <div className={"isometric-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <a href="#home">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                            </div>
                            <div className={"isometric-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <a href="#home">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </div>
                            <div className={"isometric-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <a href="#home">
                                    <FontAwesomeIcon icon={faGooglePlusG} />
                                </a>
                            </div>
                            <div className={"isometric-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <a href="#home">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </div>
                            <div className={"isometric-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <a href="#home">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </div>
                            <div className={"isometric-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <a href="#home">
                                    <FontAwesomeIcon icon={faWhatsapp} />
                                </a>
                            </div>
                            <div className={"isometric-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <a href="#home">
                                    <FontAwesomeIcon icon={faFacebookMessenger} />
                                </a>
                            </div>
                            <div className={"isometric-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <a href="#home">
                                    <FontAwesomeIcon icon={faSkype} />
                                </a>
                            </div>
                            <div className={"isometric-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <a href="#home">
                                    <FontAwesomeIcon icon={faPinterest} />
                                </a>
                            </div>
                            <div className={"isometric-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <a href="#home">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </div>
                            <div className={"isometric-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <a href="#home">
                                    <FontAwesomeIcon icon={faRedditAlien} />
                                </a>
                            </div>
                            <div className={"isometric-social-media-icon " + this.props.settings.color + " " + this.props.settings.size}>
                                <a href="#home">
                                    <FontAwesomeIcon icon={faSnapchatGhost} />
                                </a>
                            </div>
                        </div>
                    </div>
                }
                {
                    !this.props.settings.showAllSizes &&
                    !this.props.settings.overflowing &&
                    this.props.settings.showAllColors &&
                    this.props.settings.colors.map(c => {
                        return (
                            <div className="icon-container" data-text={c}>
                                <div className="isometric-social-media-icon-row">
                                    <div className={"isometric-social-media-icon " + c + " " + this.props.settings.size}>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </a>
                                    </div>
                                    <div className={"isometric-social-media-icon " + c + " " + this.props.settings.size}>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                    </div>
                                    <div className={"isometric-social-media-icon " + c + " " + this.props.settings.size}>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faGooglePlusG} />
                                        </a>
                                    </div>
                                    <div className={"isometric-social-media-icon " + c + " " + this.props.settings.size}>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faLinkedinIn} />
                                        </a>
                                    </div>
                                    <div className={"isometric-social-media-icon " + c + " " + this.props.settings.size}>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                    </div>
                                    <div className={"isometric-social-media-icon " + c + " " + this.props.settings.size}>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faWhatsapp} />
                                        </a>
                                    </div>
                                    <div className={"isometric-social-media-icon " + c + " " + this.props.settings.size}>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faFacebookMessenger} />
                                        </a>
                                    </div>
                                    <div className={"isometric-social-media-icon " + c + " " + this.props.settings.size}>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faSkype} />
                                        </a>
                                    </div>
                                    <div className={"isometric-social-media-icon " + c + " " + this.props.settings.size}>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faPinterest} />
                                        </a>
                                    </div>
                                    <div className={"isometric-social-media-icon " + c + " " + this.props.settings.size}>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faYoutube} />
                                        </a>
                                    </div>
                                    <div className={"isometric-social-media-icon " + c + " " + this.props.settings.size}>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faRedditAlien} />
                                        </a>
                                    </div>
                                    <div className={"isometric-social-media-icon " + c + " " + this.props.settings.size}>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faSnapchatGhost} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
                {
                    !this.props.settings.showAllColors &&
                    !this.props.settings.overflowing &&
                    this.props.settings.showAllSizes &&
                    this.props.settings.sizes.map(s => {
                        return (
                            <div className="icon-container" data-text={s}>
                                <div className="isometric-social-media-icon-row">
                                    <div className={"isometric-social-media-icon " + this.props.settings.color + " " + s}>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </a>
                                    </div>
                                    <div className={"isometric-social-media-icon " + this.props.settings.color + " " + s}>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                    </div>
                                    <div className={"isometric-social-media-icon " + this.props.settings.color + " " + s}>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faGooglePlusG} />
                                        </a>
                                    </div>
                                    <div className={"isometric-social-media-icon " + this.props.settings.color + " " + s}>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faLinkedinIn} />
                                        </a>
                                    </div>
                                    <div className={"isometric-social-media-icon " + this.props.settings.color + " " + s}>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </a>
                                    </div>
                                    <div className={"isometric-social-media-icon " + this.props.settings.color + " " + s}>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faWhatsapp} />
                                        </a>
                                    </div>
                                    <div className={"isometric-social-media-icon " + this.props.settings.color + " " + s}>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faFacebookMessenger} />
                                        </a>
                                    </div>
                                    <div className={"isometric-social-media-icon " + this.props.settings.color + " " + s}>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faSkype} />
                                        </a>
                                    </div>
                                    <div className={"isometric-social-media-icon " + this.props.settings.color + " " + s}>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faPinterest} />
                                        </a>
                                    </div>
                                    <div className={"isometric-social-media-icon " + this.props.settings.color + " " + s}>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faYoutube} />
                                        </a>
                                    </div>
                                    <div className={"isometric-social-media-icon " + this.props.settings.color + " " + s}>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faRedditAlien} />
                                        </a>
                                    </div>
                                    <div className={"isometric-social-media-icon " + this.props.settings.color + " " + s}>
                                        <a href="#home">
                                            <FontAwesomeIcon icon={faSnapchatGhost} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}